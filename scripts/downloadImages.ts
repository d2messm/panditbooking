import axios from 'axios';
import fs from 'fs';
import path from 'path';

const imageUrls = {
  'shanti-pujas': {
    'category-cover': 'https://example.com/shanti-puja.jpg',
    'graha-shanti': 'https://example.com/graha-shanti.jpg',
    // Add more URLs for each puja
  },
  // Add more categories
};

// Create directories and download images
const main = async () => {
  for (const [category, images] of Object.entries(imageUrls)) {
    const dir = path.join('public', 'images', 'services', category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    for (const [name, url] of Object.entries(images)) {
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
      });

      const filepath = path.join(dir, `${name}.jpg`);
      response.data.pipe(fs.createWriteStream(filepath));
    }
  }
};

main().catch(console.error); 