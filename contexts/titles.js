// Titles object to store local titles for different websites
const websiteTitles = {
  MENA_PLAZA: {
    index_page_header_text:
      'Where <span style="font-weight:900">Elegance</span> Meets Unmatched <span style="font-weight:900">Hospitality</span>',
    description: {
      title: 'Live the Mena Apart <span style="font-weight:900">Experience</span>',
      subtitle:
        'Modern spaces, exceptional service, and everything you need for a seamless stay in the city',
    },
    aboutdescription: {
      title: 'Welcome to <span style="font-weight:900">MENA ApartHotel Albarsha</span>',
      subtitle: 'Where Comfort Meets Modern Living',
    },
    room: {
      title: 'Accommodations Designed for <span style="font-weight:900">Every Guest</span>',
      subtitle:
        ' Your perfect space in Dubai awaits. Our thoughtfully designed suites and apartments blend comfort with practicality, creating a true home-away-from-home for a two-night getaway or a two-month residence.',
    },
  },

  MENA_APART: {
    headline: 'Explore MENA APART',
    description: 'Your journey begins at MENA APART.',
  },
  MENA_WEBSITE3: {
    headline: 'MENA WEBSITE3 - Your Destination',
    description: 'Experience the unique charm of MENA WEBSITE3.',
  },
  website4: {
    headline: 'Welcome to Website 4',
    description: 'Website 4 offers unparalleled experiences.',
  },
  website5: {
    headline: 'Discover Website 5',
    description: 'Website 5 is your gateway to adventure.',
  },
  website6: {
    headline: 'Website 6 Awaits You',
    description: 'Uncover the wonders of Website 6.',
  },
  website7: {
    headline: 'Welcome to Website 7',
    description: 'Website 7 is where your dreams come true.',
  },
};

// Get the current website name from the environment variable
const currentWebsite = process.env.NEXT_PUBLIC_WEBSITE_NAME || 'default';

// Export the titles for the current website
export const ALLDATA = websiteTitles[currentWebsite] || {};
