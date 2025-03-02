import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts';

const smtp = new SmtpClient();

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

serve(async (req) => {
  try {
    const {
      puja_details,
      selected_offerings,
      payment_details,
      customer_email
    } = await req.json();

    await smtp.connectTLS({
      hostname: Deno.env.get('SMTP_HOSTNAME') || '',
      port: 587,
      username: Deno.env.get('SMTP_USERNAME') || '',
      password: Deno.env.get('SMTP_PASSWORD') || '',
    });

    // Create email content
    const offeringsList = selected_offerings
      .map((offering: any) => `
        <tr>
          <td style="padding: 10px;">${offering.name}</td>
          <td style="padding: 10px;">${formatCurrency(offering.price)}</td>
        </tr>
      `)
      .join('');

    const emailContent = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2>Booking Confirmation</h2>
            <p>Thank you for booking your puja with Divine Purohit. Here are your booking details:</p>
            
            <h3>Puja Details</h3>
            <p>
              <strong>Puja Name:</strong> ${puja_details.name}<br>
              <strong>Date:</strong> ${new Date(puja_details.date).toLocaleString('en-IN')}<br>
              <strong>Tithi:</strong> ${puja_details.tithi}
            </p>

            <h3>Selected Offerings</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 10px; text-align: left;">Offering</th>
                <th style="padding: 10px; text-align: left;">Amount</th>
              </tr>
              ${offeringsList}
              <tr style="font-weight: bold;">
                <td style="padding: 10px;">Total Amount</td>
                <td style="padding: 10px;">${formatCurrency(puja_details.total_amount)}</td>
              </tr>
            </table>

            <h3>Payment Details</h3>
            <p>
              <strong>Payment ID:</strong> ${payment_details.payment_id}<br>
              <strong>Order ID:</strong> ${payment_details.order_id}
            </p>

            <p style="margin-top: 30px;">
              We will send you updates about your puja, including videos and prasad details, via WhatsApp.
              If you have any questions, please don't hesitate to contact us.
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>Best Regards,<br>Divine Purohit Team</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await smtp.send({
      from: Deno.env.get('SMTP_FROM') || 'no-reply@divinepurohit.com',
      to: customer_email,
      subject: `Booking Confirmation - ${puja_details.name}`,
      content: emailContent,
      html: emailContent,
    });

    await smtp.close();

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
}); 