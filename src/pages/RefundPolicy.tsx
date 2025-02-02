import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-orange-900 mb-6">Your Peace of Mind Promise</h1>
          <p className="text-orange-800 mb-8 text-base">Last Updated: 01-01-2025 | Your Satisfaction, Our Sacred Commitment</p>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">🕉️ Our Sacred Promise</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              At DivinePurohit, we don't just process pujas - we curate spiritual experiences. Should any aspect fall short of our gold standard, our <span className="text-orange-600 font-semibold">Dharma First Guarantee</span> ensures complete transparency and immediate resolution.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">🛡️ Complete Protection</h2>
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-300">
                <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2 text-sm md:text-base">🌟 Puja Assurance</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  <li>125% credit if we cancel/reschedule (includes inconvenience compensation)</li>
                  <li>Immediate priest replacement at no cost</li>
                  <li>Sacred materials donation proof provided</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-300">
                <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2 text-sm md:text-base">💸 Instant Resolution</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  <li>Auto-refund within 72 hours for failed payments</li>
                  <li>24/7 transaction dispute resolution</li>
                  <li>Dedicated financial priest for complex cases</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">⏳ Swift Resolutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">⚡ Lightning-Fast Refunds</p>
                <p className="text-gray-700 text-sm md:text-base">3-5 business days for UPI/Wallets | Instant credit for future bookings</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">🔁 Seamless Rebooking</p>
                <p className="text-gray-700 text-sm md:text-base">Priority scheduling + 15% discount on next booking</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">📜 3-Step Simplicity</h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-700 text-sm md:text-base">
              <li className="pl-4">
                <span className="font-semibold">Connect:</span> WhatsApp "REFUND" to +91 96506 87457 or<br/>
                <span className="text-orange-600">support@divinepurohit.in</span>
              </li>
              <li className="pl-4">
                <span className="font-semibold">Relax:</span> Our karma yogis handle everything within 24hrs
              </li>
              <li className="pl-4">
                <span className="font-semibold">Confirm:</span> Track status via SMS/Email dashboard
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">🌍 Understanding Life's Uncertainties</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-800 mb-2 text-sm md:text-base">🙏 Divine Assurance</h3>
                <p className="text-gray-700 text-sm md:text-base">Full refund + free virtual puja during emergencies</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-800 mb-2 text-sm md:text-base">🛠️ TechGuard Promise</h3>
                <p className="text-gray-700 text-sm md:text-base">₹500 credit for any platform-related inconvenience</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">💬 Your Voice Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="font-semibold mb-2 text-sm md:text-base">🕯️ We're Here For You</p>
                <p className="text-orange-700 hover:text-orange-900 transition-colors text-sm">
                  <a href="mailto:support@divinepurohit.in" className="flex items-center gap-2">
                    <Mail size={16} /> support@divinepurohit.in
                  </a>
                </p>
                <p className="text-orange-700 flex items-center gap-2 text-sm">
                  <Phone size={16} /> +91 96506 87457 (Instant WhatsApp Connect)
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="font-semibold mb-2 text-sm md:text-base">📣 Always Listening</p>
                <p className="text-orange-700 hover:text-orange-900 transition-colors text-sm">
                  <a href="mailto:care@divinepurohit.in" className="flex items-center gap-2">
                    <Mail size={16} /> care@divinepurohit.in
                  </a>
                </p>
                <p className="text-orange-700 mt-2 text-xs">Personalized response within 6 working hours</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;