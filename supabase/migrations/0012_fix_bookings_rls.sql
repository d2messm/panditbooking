-- Drop existing policies
DROP POLICY IF EXISTS "Users can create their own bookings" ON bookings;
DROP POLICY IF EXISTS "Users can view their own bookings" ON bookings;
DROP POLICY IF EXISTS "Users can update their own bookings" ON bookings;

-- Recreate policies
CREATE POLICY "Users can create their own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = user_id::text)
  WITH CHECK (auth.uid()::text = user_id::text); 