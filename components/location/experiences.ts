import burjkhalifa from '../../public/images/burjalkhlifa.png';
import mountain from '../../public/images/desertsafari.png';
import sea from '../../public/images/burjalarab.png';
import locationHero from '../../public/images/locationheroimage.png';
import { currentWebsite } from '@/contexts/titles';

export interface Experience {
  id: number;
  name: string;
  address: string;
  image: any;
}

const defaultExperiences: Experience[] = [
  {
    id: 1,
    name: 'Desert Safari',
    address: 'Visit desert safari for an unforgettable adventure',
    image: mountain,
  },
  {
    id: 2,
    name: 'Burj Khalifa',
    address: 'Visit Burj Khalifa for an unforgettable experience',
    image: burjkhalifa,
  },
  {
    id: 3,
    name: 'Burj Al Arab',
    address: 'Visit Burj Al Arab for an unforgettable experience',
    image: sea,
  },
];

const halfmoonExperiences: Experience[] = [
  {
    id: 1,
    name: 'King Fahd Coastal City',
    address: 'Stroll the scenic waterfront of King Fahd Coastal City',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHtiPL9OASubvZuw32EaQsIYDguQvCANX__h50yH3WA&s=10',
  },
  {
    id: 2,
    name: 'Saudi Aramco Beach',
    address: 'Relax on the sands of Saudi Aramco Beach',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/ARAMCO_Compound-Patio_by_Persian_Gulf.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
  },
  {
    id: 3,
    name: 'Miramar Beach',
    address: 'Enjoy the sea breeze and views at Miramar Beach',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPKiQK8iwR0aB0kqg6fxWQZe0WoA2kE-KFg3EtI3blA&s=10',
  },
  {
    id: 4,
    name: 'Sand Dune Off-Roading',
    address: 'Take on the dunes with an off-road desert adventure',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtnWlXXIQIgYeJGBEMe8i3VIfUsKbrZh0scm25fP_tw&s=10',
  },
  {
    id: 5,
    name: 'Shoreline Horseback Riding',
    address: 'Ride along the shoreline of the Arabian Gulf',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOaCprDVTT2Q2VPaZFZaLRWpR8Gz7vT57yjxqYynwnQ&s=10',
  },
];

// Placeholder artwork until photos of these landmarks are added to public/images
const nasriyaExperiences: Experience[] = [
  {
    id: 1,
    name: 'National Museum of Saudi Arabia',
    address: 'Explore exhibitions presenting Saudi Arabia’s history and heritage',
    image: locationHero,
  },
  {
    id: 2,
    name: 'Al Murabba Historical Palace',
    address: 'Discover a landmark connected to the Kingdom’s early history',
    image: locationHero,
  },
  {
    id: 3,
    name: 'Al Masmak Palace',
    address: 'Visit one of Riyadh’s historic landmarks',
    image: locationHero,
  },
];

const tabukExperiences: Experience[] = [
  {
    id: 1,
    name: 'Tabuk Archaeological Castle',
    address: 'Explore the city’s history through the castle and its museum',
    image: locationHero,
  },
  {
    id: 2,
    name: 'Tabuk Station on the Hejaz Railway',
    address: 'Visit a landmark connected to the region’s railway heritage',
    image: locationHero,
  },
  {
    id: 3,
    name: 'Al Raqi Mall',
    address: 'Include a visit to Al Raqi Mall in your plans for shopping in Tabuk',
    image: locationHero,
  },
];

const experiencesByWebsite: Record<string, Experience[]> = {
  MENA_NASRIYA: nasriyaExperiences,
  MENA_HOTEL_TABUK: tabukExperiences,
  MENA_HALFMOON: halfmoonExperiences,
};

export const experiences: Experience[] = experiencesByWebsite[currentWebsite] ?? defaultExperiences;
