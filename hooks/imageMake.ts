const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('data:')) return imagePath;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  const baseUrl = BACKEND_URL?.replace(/\/api\/?$/, '');
  return `${baseUrl}${imagePath}`;
};
