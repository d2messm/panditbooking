import { useNavigate } from 'react-router-dom';

const PaymentButton = ({ amount }: { amount: number }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    // Navigate to the booking flow with the selected service
    navigate(`/booking/package-selection`, { 
      state: { amount } 
    });
  };

  return (
    <button
      onClick={handleBooking}
      className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
    >
      Book Now
    </button>
  );
};

export default PaymentButton; 