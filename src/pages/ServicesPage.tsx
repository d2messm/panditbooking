import { services } from '../data/services'; // Assume you have a services data file
import PaymentButton from '../components/PaymentButton';

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(service => (
          <div key={service.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p>{service.description}</p>
            <button className="mt-2">
              <PaymentButton amount={service.price} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage; 