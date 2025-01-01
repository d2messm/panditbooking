import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBookingFlowStore } from '../stores/bookingFlowStore';
import { supabase } from '../lib/supabase';

const BookingPuja = () => {
  const { id } = useParams(); // Get puja ID from URL
  const navigate = useNavigate();
  const { setPuja, bookingDetails } = useBookingFlowStore();

  useEffect(() => {
    const initializePuja = async () => {
      if (!id) {
        console.error('No puja ID provided');
        navigate('/services');
        return;
      }

      try {
        // Verify puja exists in database
        const { data: puja, error } = await supabase
          .from('pujas')
          .select('id')
          .eq('id', id)
          .single();

        if (error || !puja) {
          console.error('Puja not found:', error);
          navigate('/services');
          return;
        }

        // Set puja ID in store
        setPuja(id);
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