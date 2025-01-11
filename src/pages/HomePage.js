import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import WhatsAppChatBox from '../components/WhatsAppChatBox';

const HomePage = () => {
  const [pujas, setPujas] = useState([]);

  useEffect(() => {
    const fetchPujas = async () => {
      const response = await axios.get('http://localhost:5000/pujas');
      setPujas(response.data);
    };

    fetchPujas();
  }, []);

  return (
    <div>
      <img 
        src="/path/to/your/image.jpg" 
        alt="Header Image" 
        className="w-full h-64 object-cover mb-8"
      />
      <h1 className="text-3xl font-bold text-center mb-8">Featured Pujas</h1>
      <ul className="list-disc list-inside">
        {pujas.map(puja => (
          <li key={puja.id} className="mb-2">{puja.name}</li>
        ))}
      </ul>
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppChatBox />
    </div>
  );
};

export default HomePage; 