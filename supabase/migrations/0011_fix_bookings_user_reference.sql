-- Drop existing foreign key constraint if it exists
ALTER TABLE bookings DROP CONSTRAINT IF EXISTS bookings_user_id_fkey;

-- Add the correct foreign key constraint
ALTER TABLE bookings
  ADD CONSTRAINT bookings_user_id_fkey 
  FOREIGN KEY (user_id) 
  REFERENCES auth.users(id) 
  ON DELETE CASCADE;

-- Add missing columns if they don't exist
ALTER TABLE bookings
  ADD COLUMN IF NOT EXISTS address text,
  ADD COLUMN IF NOT EXISTS city text,
  ADD COLUMN IF NOT EXISTS state text,
  ADD COLUMN IF NOT EXISTS pincode text,
  ADD COLUMN IF NOT EXISTS amount integer,
  ADD COLUMN IF NOT EXISTS payment_type text,
  ADD COLUMN IF NOT EXISTS payment_id text,
  ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'pending'; 