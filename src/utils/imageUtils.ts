export const getImagePath = (imagePath: string) => {
  if (!imagePath) return '/images/puja-default.jpg';
  if (imagePath.startsWith('http')) return imagePath;
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
}; 