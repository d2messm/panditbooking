const testimonials = [
  {
    name: 'John Doe',
    feedback: 'The puja service was excellent and very professional.',
  },
  {
    name: 'Jane Smith',
    feedback: 'A wonderful experience, highly recommend!',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <p className="text-gray-900 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 