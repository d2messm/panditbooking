import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createHmac } from "https://deno.land/std@0.177.0/crypto/mod.ts"

serve(async (req) => {
  try {
    const { 
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = await req.json();

    const secret = Deno.env.get('GmbrlVMpSy5A47rwQDDrrZZ1') || '';
    
    const hmac = createHmac("sha256", secret);
    const data = `${razorpay_order_id}|${razorpay_payment_id}`;
    const generated_signature = hmac.update(data).digest("hex");

    if (generated_signature !== razorpay_signature) {
      throw new Error('Invalid signature');
    }

    return new Response(JSON.stringify({ verified: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
}); 