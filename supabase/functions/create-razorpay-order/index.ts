const handlePayment = async (formData: BookingFormData) => {
  try {
    setLoading(true);

    const res = await loadRazorpay();
    if (!res) {
      setError('Razorpay SDK failed to load. Please refresh the page.');
      return;
    }

    // Create Razorpay order via Supabase function
    const { data: orderData, error: orderError } = await supabase
      .functions.invoke('create-razorpay-order', {
        body: {
          amount: pujaDetails.price , // Convert to paise
          currency: 'INR',
          receipt: `puja_${pujaDetails.id}`,
          notes: {
            puja_id: pujaDetails.id,
            puja_name: pujaDetails.name,
            customer_name: formData.name,
            customer_email: formData.email,
            customer_phone: formData.phone
          }
        }
      });

    // Log the response for debugging
    console.log('Order Data:', orderData);
    console.log('Order Error:', orderError);

    if (orderError) {
      setError(`Order creation failed: ${orderError.message}`);
      return;
    }

    if (!orderData?.id) {
      throw new Error('No order ID received');
    }

    // Proceed with Razorpay payment
    const options = {
      key: 'rzp_test_e3shCqGWPE459i',
      amount: orderData.amount,
      currency: orderData.currency,
      order_id: orderData.id,
      name: 'Pandit Booking',
      description: `Booking for ${pujaDetails.name}`,
      handler: async function (response: any) {
        try {
          const { error: verificationError } = await supabase
            .functions.invoke('verify-payment', {
              body: {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                booking_id: orderData.id
              }
            });

          if (verificationError) throw verificationError;

          const { error: bookingError } = await supabase
            .from('booking')
            .insert([
              {
                user_id: user?.id,
                puja_id: pujaDetails.id,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                pincode: formData.pincode,
                booking_date: formData.booking_date,
                booking_time: formData.booking_time,
                special_requirements: formData.special_requirements,
                amount: pujaDetails.price,
                payment_status: 'completed',
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id
              }
            ])
            .select()
            .single();

          if (bookingError) {
            setError(`Booking failed: ${bookingError.message}`);
            return;
          }

          onClose();
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Payment verification failed');
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: '#ea580c'
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
        }
      }
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An unexpected error occurred');
  } finally {
    setLoading(false);
  }
};