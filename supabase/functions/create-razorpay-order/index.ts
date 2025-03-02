import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import Razorpay from 'https://esm.sh/razorpay@2.8.6';

const razorpay = new Razorpay({
  key_id: Deno.env.get('RAZORPAY_KEY_ID') || '',
  key_secret: Deno.env.get('RAZORPAY_KEY_SECRET') || '',
  // keyid: rzp_test_e3shCqGWPE459i,
  // key_secret: Beft9D42IXCQyHtMgWEmpmrc,
});

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
        'Access-Control-Max-Age': '86400',
      }
    });
  }

  try {
    const { amount, currency, receipt, notes } = await req.json();

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt,
      notes,
    });

    return new Response(JSON.stringify(order), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey'
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey'
      },
      status: 400,
    });
  }
});