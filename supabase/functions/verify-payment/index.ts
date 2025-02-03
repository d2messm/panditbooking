import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { serve } from 'https://deno.land/std@0.131.0/http/server.ts';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default serve(async (req) => {
  // Handle preflight requests first
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
        'Access-Control-Max-Age': '86400',
      },
      status: 200  // Explicit success status
    });
  }

  try {
    const body = await req.json();
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;

    // Verify the signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      throw new Error('Invalid payment signature');
    }

    // Update the payment status in Supabase
    const { data, error } = await supabase
      .from('payment')
      .update({ razorpay_payment_id, razorpay_signature, status: 'successful' })
      .eq('razorpay_order_id', razorpay_order_id);

    if (error) throw error;

    // Update booking status
    await supabase
      .from('booking')
      .update({ payment_status: 'completed' })
      .eq('id', data[0]?.booking_id);

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Expose-Headers': 'Content-Length, Content-MD5'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
});