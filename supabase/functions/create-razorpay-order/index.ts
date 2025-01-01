import { serve } from "https://deno.land/std@0.177.0/http/server.ts"
import Razorpay from "https://esm.sh/razorpay@2.8.6"

const razorpay = new Razorpay({
  key_id: 'rzp_test_GmbrlVMpSy5A47r',
  key_secret: 'wQDDrrZZ1',
});

serve(async (req: Request) => {
  try {
    const { 
      address,
      amount,
      cartId,
      extraDetailsByUser,
      paymentType 
    } = await req.json();
    
    console.log('Creating order with details:', {
      address,
      amount,
      cartId,
      paymentType
    });
    
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: cartId,
      notes: {
        address,
        paymentType,
        extraDetails: extraDetailsByUser
      },
      payment_capture: 1
    });

    return new Response(JSON.stringify(order), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      status: 200,
    });
  } catch (error) {
    console.error('Order creation failed:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      status: 400,
    });
  }
}); 