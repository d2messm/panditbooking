import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBookingFlowStore } from '../stores/bookingFlowStore';
import { supabase } from '../lib/supabase';

const BookingPuja = () => {
  const { id } = useParams(); // Get service ID from URL
  const navigate = useNavigate();
  const { setPuja, bookingDetails } = useBookingFlowStore();

  useEffect(() => {
    const initializePuja = async () => {
      if (!id) {
        console.error('No service ID provided');
        navigate('/services');
        return;
      }

      try {
        // First, fetch the UUID from the pujas table based on the service ID
        const { data: puja, error } = await supabase
          .from('pujas')
          .select('id')
          .eq('service_id', id) // Assuming you have a service_id column
          .single();

        if (error || !puja) {
          console.error('Puja not found:', error);
          navigate('/services');
          return;
        }

        // Set the UUID in the store
        setPuja(puja.id);
        navigate('/book');
      } catch (error) {
        console.error('Error initializing puja:', error);
        navigate('/services');
      }
    };

    initializePuja();
  }, [id, navigate, setPuja]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>
  );
};

export default BookingPuja; 