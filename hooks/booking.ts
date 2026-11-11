import { currentWebsite } from '@/contexts/titles';

// Booking engine (book-onlinenow) per hotel. Add the other hotels here once their engine URLs are available.
const bookingEngineByWebsite: Record<string, string> = {
  MENA_PLAZA: 'https://menaplazabarsha.book-onlinenow.net/',
  MENA_APART: 'https://menaaparthotel.book-onlinenow.net/',
};

export const bookingEngineUrl: string | undefined = bookingEngineByWebsite[currentWebsite];

// The engine expects dd/MM/yyyy
const formatEngineDate = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
};

// Parses the guest dropdown labels, e.g. "2 Adults/1 Children" or "1 Adult"
export const parseGuests = (label: string) => {
  const adults = Number(label.match(/(\d+)\s*Adult/i)?.[1] ?? 1);
  const children = Number(label.match(/(\d+)\s*Child/i)?.[1] ?? 0);
  return { adults, children };
};

interface BookingSearch {
  checkIn: Date;
  checkOut: Date;
  guests: string;
}

// Builds the link to the 2nd step (rooms & rates) of the booking engine, or undefined when
// the hotel has no engine yet.
export const buildBookingUrl = ({ checkIn, checkOut, guests }: BookingSearch) => {
  if (!bookingEngineUrl) return undefined;

  const { adults, children } = parseGuests(guests);
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
