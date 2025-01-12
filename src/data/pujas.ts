export const pujas = [
  {
    id: '1',
    name: 'Engagement Puja',
    description: 'Traditional puja ceremony for engagement celebrations',
    duration: '2-3 hours',
    price: 5100,
    image: 'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 45,
    benefits: [
      'Brings harmony',
      'Blesses the couple',
      'Ensures successful marriage'
    ],
    items: [
      'Flowers',
      'Fruits',
      'Sweets'
    ],
    process: [
      'Initial prayers',
      'Main ceremony',
      'Blessings'
    ]
  },
  {
    id: '2',
    name: 'Vivah Puja',
    description: 'Complete wedding ceremony with all traditional rituals',
    duration: '4-5 hours',
    price: 11000,
    image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Satyanarayan Puja',
    description: 'Auspicious puja for prosperity and well-being',
    duration: '2-3 hours',
    price: 3100,
    image: 'https://poojaimages.s3.ap-south-1.amazonaws.com/satyanarayan.png'
  }
];

export const getPujaById = (id: string) => {
  return pujas.find(puja => puja.id === id);
};