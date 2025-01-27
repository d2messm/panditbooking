-- Add service_id column to pujas table
ALTER TABLE pujas
ADD COLUMN IF NOT EXISTS service_id text UNIQUE;

-- Update existing pujas with their service_ids
UPDATE pujas SET service_id = 'sunderkand' WHERE name = 'Sunderkand Path';
UPDATE pujas SET service_id = 'satyanarayan' WHERE name = 'Satyanarayan Puja';
UPDATE pujas SET service_id = 'ganesh' WHERE name = 'Ganesh Puja';
UPDATE pujas SET service_id = 'graha-shanti' WHERE name = 'Graha Shanti Puja';
UPDATE pujas SET service_id = 'navagraha-shanti' WHERE name = 'Navagraha Shanti Puja';
-- Add more updates for other pujas as needed 