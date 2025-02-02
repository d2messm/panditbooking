import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategorySlider from '../components/CategorySlider';
import FeaturedPujas from '../components/FeaturedPujas';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section id="categories" className="py-12 bg-secondary">
          <h2 className="text-2xl font-bold text-center mb-8">Browse Pooja By Category</h2>
          <CategorySlider />
        </section>
        <section id="featured" className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Poojas</h2>
          <FeaturedPujas />
        </section>
        <Categories />
        <Testimonials />
      </main>
    </div>
  );
};

export default HomePage; 