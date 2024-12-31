

const PaymentInfoPage = () => {
  const product = "Man Chaaha Var Prapti Pooja";
  const astrologer = "Basant";
  const amount = 649.00;
  const gst = amount * 0.18;
  const totalPayable = amount + gst;

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_jZ32qSyReR6ZWE', // Replace with your Razorpay key ID
      amount: totalPayable * 100, // Amount in paise
      currency: 'INR',
      name: 'Astromall Purchase',
      description: 'Test Transaction',
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Your Name',
        email: 'email@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Information</h1>
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">PRODUCT</span>
          <span>{product}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">ASTROLOGER</span>
          <span>{astrologer}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">AMOUNT</span>
          <span>₹ {amount.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span className="font-medium">Total Amount</span>
          <span>₹ {amount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">GST @18%</span>
          <span>₹ {gst.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total Payable Amount</span>
          <span>₹ {totalPayable.toFixed(2)}</span>
        </div>
        <hr />
        <div className="space-y-2">
          <button
            onClick={handlePayment}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Credit/Debit Card
          </button>
          <button
          onClick={handlePayment}
           className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            
            Net Banking
          </button>
          <button
          onClick={handlePayment}
           className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            UPI
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoPage; 