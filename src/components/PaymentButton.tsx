const PaymentButton = ({ amount }: { amount: number }) => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_jZ32qSyReR6ZWE', // Replace with your Razorpay key ID
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Your Name',
        email: 'email@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Corporate Office',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment} className="bg-orange-600 text-white py-2 px-4 rounded-md">
      Pay Now
    </button>
  );
};

export default PaymentButton; 