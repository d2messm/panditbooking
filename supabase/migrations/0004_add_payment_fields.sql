ALTER TABLE bookings
ADD COLUMN payment_id text,
ADD COLUMN payment_status text DEFAULT 'pending',
ADD COLUMN amount integer NOT NULL DEFAULT 0,
ADD COLUMN currency text DEFAULT 'INR'; 