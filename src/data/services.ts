const BASE_IMAGE_PATH = 'https://images.unsplash.com';

export const categories = [
  {
    id: 'shanti-pujas',
    name: 'Shanti Pujas',
    image: `${BASE_IMAGE_PATH}/photo-1581337776066-5a0c60c9dc9a`,
    services: [
      {
        id: 'graha-shanti',
        name: 'Graha Shanti Puja',
        price: 2999,
        description: 'Planetary peace puja for harmony and prosperity',
        duration: '2-3 hours',
        rating: 4.9,
        reviews: 50,
        image: `${BASE_IMAGE_PATH}/photo-1583275479278-7b7cd5fee191`
      },
      {
        id: 'navagraha-shanti',
        name: 'Navagraha Shanti Puja',
        price: 3999,
        description: 'Complete nine planets peace puja',
        duration: '3-4 hours',
        rating: 4.8,
        reviews: 45,
        image: `${BASE_IMAGE_PATH}/photo-1583321500900-82807e458f3c`
      },
      {
        id: 'kalsarp-dosh',
        name: 'Kalsarp Dosh Nivaran Puja',
        price: 4999,
        description: 'Remove the effects of Kalsarp yoga',
        duration: '2-3 hours',
        rating: 4.9,
        reviews: 60,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'mangal-dosh',
        name: 'Mangal Dosh Shanti Puja',
        price: 3499,
        description: 'Remedy for Mangal dosha effects',
        duration: '2-3 hours',
        rating: 4.7,
        reviews: 35,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'pitru-dosh',
        name: 'Pitru Dosh Nivaran Puja',
        price: 3999,
        description: 'Peace for ancestral blessings',
        duration: '2-3 hours',
        rating: 4.8,
        reviews: 42,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      }
    ]
  },
  {
    id: 'pitru-puja',
    name: 'Pitru Puja',
    image: `${BASE_IMAGE_PATH}/photo-1583321500900-82807e458f3c`,
    services: [
      {
        id: 'pind-daan',
        name: 'Pind Daan',
        price: 3999,
        description: 'Sacred ritual for ancestors',
        duration: '2-3 hours',
        rating: 4.9,
        reviews: 55,
        image: `${BASE_IMAGE_PATH}/photo-1583275479278-7b7cd5fee191`
      },
      {
        id: 'shraadh',
        name: 'Shraadh Puja',
        price: 2999,
        description: 'Annual ancestral remembrance ceremony',
        duration: '2-3 hours',
        rating: 4.8,
        reviews: 40,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'tarpan',
        name: 'Tarpan',
        price: 1999,
        description: 'Water offering ritual for ancestors',
        duration: '1-2 hours',
        rating: 4.7,
        reviews: 38,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      }
    ]
  },
  {
    id: 'pujas',
    name: 'Pujas',
    image: 'https://images.unsplash.com/photo-1542124292-70177e239a3b',
    services: [
      {
        id: 'satyanarayan',
        name: 'Satyanarayan Puja',
        price: 2499,
        description: 'Worship of Lord Vishnu',
        duration: '2-3 hours',
        rating: 4.9,
        reviews: 75,
        image: 'https://images.unsplash.com/photo-1617926247627-6d2894608e69'
      },
      {
        id: 'ganesh',
        name: 'Ganesh Puja',
        price: 1999,
        description: 'Worship of Lord Ganesha',
        duration: '1-2 hours',
        rating: 4.8,
        reviews: 65,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'lakshmi',
        name: 'Lakshmi Puja',
        price: 2199,
        description: 'Worship for wealth and prosperity',
        duration: '1-2 hours',
        rating: 4.9,
        reviews: 70,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      }
    ]
  },
  {
    id: 'havans',
    name: 'Havans',
    image: 'https://images.unsplash.com/photo-1604608678051-64d46d8d8d8e',
    services: [
      {
        id: 'rudrabhishek',
        name: 'Rudrabhishek',
        price: 4999,
        description: 'Sacred ritual for Lord Shiva',
        duration: '3-4 hours',
        rating: 4.9,
        reviews: 48,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'maha-mrityunjaya',
        name: 'Maha Mrityunjaya Havan',
        price: 3999,
        description: 'For health and longevity',
        duration: '2-3 hours',
        rating: 4.8,
        reviews: 52,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      }
    ]
  },
  {
    id: 'jaaps',
    name: 'Jaaps',
    image: 'https://images.unsplash.com/photo-1618334940835-999944dcdd5e',
    services: [
      {
        id: 'gayatri',
        name: 'Gayatri Mantra Jaap',
        price: 2999,
        description: 'Sacred chanting of Gayatri mantra',
        duration: '2-3 hours',
        rating: 4.7,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1618334940835-999944dcdd5e'
      },
      {
        id: 'mahamrityunjaya',
        name: 'Mahamrityunjaya Jaap',
        price: 3499,
        description: 'For protection and longevity',
        duration: '2-3 hours',
        rating: 4.8,
        reviews: 40,
        image: 'https://images.unsplash.com/photo-1618334940835-999944dcdd5e'
      }
    ]
  },
  {
    id: 'paths',
    name: 'Paths',
    image: 'jannesjacobsnfsb3jpvlcmunsplash.jpg',
    services: [
      {
        id: 'sunderkand',
        name: 'Sunderkand Path',
        price: 2499,
        description: 'Recitation from Ramayana',
        duration: '3-4 hours',
        rating: 4.9,
        reviews: 65,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'hanuman-chalisa',
        name: 'Hanuman Chalisa Path',
        price: 1999,
        description: 'Sacred verses for Lord Hanuman',
        duration: '1-2 hours',
        rating: 4.8,
        reviews: 58,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      }
    ]
  },
  {
    id: 'bhajans-chowki',
    name: 'Bhajans & Chowki',
    image: 'reducedmaatakichowki.JPG',
    services: [
      {
        id: 'mata-ki-chowki',
        name: 'Mata Ki Chowki',
        price: 5999,
        description: 'Divine musical gathering',
        duration: '4-5 hours',
        rating: 4.9,
        reviews: 72,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'bhajan-sandhya',
        name: 'Bhajan Sandhya',
        price: 4999,
        description: 'Evening of devotional songs',
        duration: '3-4 hours',
        rating: 4.8,
        reviews: 65,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      }
    ]
  },
  {
    id: 'festival-pooja',
    name: 'Festival Pooja',
    image: 'reducedganeshapratisstapana.jpg',
    services: [
      {
        id: 'diwali-puja',
        name: 'Diwali Puja',
        price: 2999,
        description: 'Festival of lights celebration',
        duration: '1-2 hours',
        rating: 4.9,
        reviews: 85,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'ganesh-chaturthi',
        name: 'Ganesh Chaturthi Puja',
        price: 3499,
        description: 'Lord Ganesha festival puja',
        duration: '2-3 hours',
        rating: 4.9,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      },
      {
        id: 'navratri-puja',
        name: 'Navratri Puja',
        price: 2999,
        description: 'Nine nights of goddess worship',
        duration: '2-3 hours',
        rating: 4.8,
        reviews: 82,
        image: 'https://images.unsplash.com/photo-1609941767545-c3705e1e6b11'
      }
    ]
  }
];

export const filters = {
  deities: [
    'Ganesh',
    'Shiva',
    'Vishnu',
    'Lakshmi',
    'Durga',
    'Hanuman'
  ],
  priceRanges: [
    { id: '1', label: 'Under ₹1000', range: [0, 1000] },
    { id: '2', label: '₹1000 - ₹3000', range: [1000, 3000] },
    { id: '3', label: '₹3000 - ₹5000', range: [3000, 5000] },
    { id: '4', label: 'Above ₹5000', range: [5000, Infinity] }
  ],
  languages: [
    'Hindi',
    'Sanskrit',
    'English'
  ],
  locations: [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata'
  ]
};

export const getOptimizedImage = (url: string) => `${url}?auto=format&fit=crop&w=800&q=80`;

export const FALLBACK_IMAGE = `${BASE_IMAGE_PATH}/photo-1542124292-70177e239a3b?auto=format&fit=crop&w=800&q=80`; 