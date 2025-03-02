import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createHmac } from 'https://deno.land/std@0.168.0/crypto/mod.ts';

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
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = await req.json();

    // Verify signature
    const secret = Deno.env.get('RAZORPAY_KEY_SECRET') || '';
    const generated_signature = createHmac('sha256', secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
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

    return new Response(JSON.stringify({ verified: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Expose-Headers': 'Content-Length, Content-MD5'
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      status: 400,
    });
  }
});