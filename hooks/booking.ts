import { currentWebsite } from '@/contexts/titles';

// Booking engine (book-onlinenow) per hotel. Add the other hotels here once their engine URLs are available.
const bookingEngineByWebsite: Record<string, string> = {
  MENA_PLAZA: 'https://menaplazabarsha.book-onlinenow.net/',
  MENA_APART: 'https://menaaparthotel.book-onlinenow.net/',
};

export const bookingEngineUrl: string | undefined = bookingEngineByWebsite[currentWebsite];

// Occupancy limits of the booking engine
export const ADULT_OPTIONS = [1, 2, 3, 4];
export const CHILDREN_OPTIONS = [0, 1, 2];

// The engine expects dd/MM/yyyy
const formatEngineDate = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
};

interface BookingSearch {
  checkIn: Date;
  checkOut: Date;
  adults: number;
  children: number;
}

// Builds the link to the 2nd step (rooms & rates) of the booking engine, or undefined when
// the hotel has no engine yet.
export const buildBookingUrl = ({ checkIn, checkOut, adults, children }: BookingSearch) => {
  if (!bookingEngineUrl) return undefined;

  // Page=19 jumps to the rooms step. One kid category is used: kid1 is the active category.
  const params = new URLSearchParams({
    Page: '19',
    lan_id: 'en-US',
    arrival: formatEngineDate(checkIn),
    departure: formatEngineDate(checkOut),
    rooms: '1',
    adults: String(adults),
    kids: String(children),
    kid1: children > 0 ? '1' : '-1',
    kid2: '-1',
    kid3: '-1',
    selectedroom: '',
  });

  return `${bookingEngineUrl}index.aspx?${params.toString()}`;
};

// Opens the booking engine in a new tab. Returns false when the hotel has no engine yet.
export const openBookingEngine = (search: BookingSearch): boolean => {
  const url = buildBookingUrl(search);
  if (!url) return false;

  window.open(url, '_blank', 'noopener,noreferrer');
  return true;
};
