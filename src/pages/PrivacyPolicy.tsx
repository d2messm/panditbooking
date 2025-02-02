const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-orange-900 mb-6">Your Sacred Digital Space</h1>
          <p className="text-orange-800 mb-8 text-base">Last Updated: 01-01-2025 | Your Trust, Our Spiritual Commitment</p>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">📜 Information We Collect</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base">
              We gather only essential details to enable your spiritual journey - name, contact information, and payment details, all protected with Vedic-level encryption.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">🕉️ Sacred Usage</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base">
              Your information fuels personalized puja experiences, seamless payment processing, and divine communication - never for commercial exploitation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">🤝 Dharma Sharing</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base">
              We share only with trusted priests and ritual partners, maintaining strict confidentiality. Your data never leaves the sacred circle of service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">🔐 Divine Rights</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base">
              Exercise full control through our <span className="text-orange-600 font-semibold">Purity Portal</span> - access, modify, or erase your digital footprint anytime.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-orange-900 mb-4 border-b-2 border-orange-200 pb-2">📮 Connect with Keepers</h2>
            <div className="bg-orange-50 p-6 rounded-xl">
              <p className="text-gray-700 text-sm">
                For spiritual data inquiries:<br/>
                <span className="text-orange-600 font-medium">📧 <a href="mailto:privacy@divinepurohit.in" className="hover:text-orange-800 transition-colors">privacy@divinepurohit.in</a></span><br/>
                <span className="text-orange-600 font-medium">📱 +91 96506 87457 (Data Protection Priests)</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;