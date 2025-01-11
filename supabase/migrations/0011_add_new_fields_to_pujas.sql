-- Add new fields to pujas table
ALTER TABLE pujas
ADD COLUMN IF NOT EXISTS duration_in_days integer,
ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS created_by uuid REFERENCES profiles(id) ON DELETE SET NULL; 