/*
  # Create Pujas and Bookings Schema

  1. New Tables
    - `pujas`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `duration` (text)
      - `price` (integer)
      - `image` (text)
      - `created_at` (timestamp)
    
    - `bookings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `puja_id` (uuid, references pujas)
      - `booking_date` (date)
      - `booking_time` (time)
      - `status` (enum)
      - `language` (text)
      - `special_requirements` (text)
      - `address` (text)
      - `city` (text)
      - `state` (text)
      - `pincode` (text)
      - `amount` (integer)
      - `payment_type` (text)
      - `payment_id` (text)
      - `payment_status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create pujas table
CREATE TABLE IF NOT EXISTS pujas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  duration text NOT NULL,
  price integer NOT NULL,
  image text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create booking status enum
DO $$ BEGIN
  CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  puja_id uuid REFERENCES pujas(id) ON DELETE CASCADE NOT NULL,
  booking_date date NOT NULL,
  booking_time time NOT NULL,
  status booking_status NOT NULL DEFAULT 'pending',
  language text NOT NULL,
  special_requirements text,
  address text,
  city text,
  state text,
  pincode text,
  amount integer,
  payment_type text,
  payment_id text,
  payment_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE pujas ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Pujas policies
CREATE POLICY "Anyone can view pujas"
  ON pujas
  FOR SELECT
  TO authenticated
  USING (true);

-- Bookings policies
CREATE POLICY "Users can create their own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Insert sample pujas
INSERT INTO pujas (name, description, duration, price, image) VALUES
  (
    'Satyanarayan Puja',
    'Auspicious puja for prosperity and well-being',
    '2-3 hours',
    3100,
    'https://images.unsplash.com/photo-1623656607289-720b258e7daa?auto=format&fit=crop&q=80&w=800'
  ),
  (
    'Griha Pravesh Puja',
    'Traditional housewarming ceremony',
    '3-4 hours',
    5100,
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800'
  ),
  (
    'Ganesh Puja',
    'Worship of Lord Ganesha for new beginnings',
    '2-3 hours',
    2100,
    'https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?auto=format&fit=crop&q=80&w=800'
  );