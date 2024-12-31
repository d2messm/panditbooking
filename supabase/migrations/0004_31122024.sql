-- Check if table exists and create if it doesn't
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'bookings') THEN
        CREATE TABLE bookings (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL REFERENCES auth.users(id),
            puja_id UUID NOT NULL REFERENCES pujas(id),
            booking_date DATE NOT NULL,
            booking_time TIME NOT NULL,
            language VARCHAR(50) NOT NULL,
            special_requirements TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        -- Add RLS policies
        ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

        -- Users can only see their own bookings
        CREATE POLICY "Users can view own bookings" ON bookings
            FOR SELECT USING (auth.uid() = user_id);

        -- Users can only insert their own bookings
        CREATE POLICY "Users can create own bookings" ON bookings
            FOR INSERT WITH CHECK (auth.uid() = user_id);

        -- Create updated_at trigger
        CREATE TRIGGER set_updated_at
            BEFORE UPDATE ON bookings
            FOR EACH ROW
            EXECUTE FUNCTION trigger_set_updated_at();
    END IF;
END $$;