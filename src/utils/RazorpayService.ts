declare global {
  interface Window {
    Razorpay: any;
  }
}

export class RazorpayService {
  private static instance: RazorpayService;
  private razorpayScriptLoaded = false;

  private constructor() {}

  static getInstance(): RazorpayService {
    if (!RazorpayService.instance) {
      RazorpayService.instance = new RazorpayService();
    }
    return RazorpayService.instance;
  }

  async createOrder(amount: number, bookingId: string) {
    const response = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, bookingId })
    });
    return response.json();
  }

  loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.razorpayScriptLoaded) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        this.razorpayScriptLoaded = true;
        resolve(true);
      };
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  initializePayment(options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const rzp = new window.Razorpay({
        ...options,
        handler: (response: any) => resolve(response),
        modal: {
          ondismiss: () => reject('Payment cancelled')
        }
      });
      rzp.open();
    });
  }
} 