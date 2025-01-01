CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id),
  amount integer NOT NULL,
  currency text DEFAULT 'INR',
  payment_id text,
  payment_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
); 