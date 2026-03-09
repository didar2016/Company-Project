// Titles object to store local titles for different websites
const websiteTitles = {
  MENA_PLAZA: {
    index_page_header_text:
      'Your Gateway to <span style="font-weight:900">Dubai’s</span> Treasures',
    description: {
      title: 'LIVE THE <span style="font-weight:900">PLAZA</span> EXPERIENCE',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city.',
      des1: 'Nestled in the heart of vibrant Al Barsha, the MENA Plaza Hotel offers an exceptional 4-star experience, defined by genuine hospitality and prime convenience. Our enviable location places you just a short walk from the iconic Mall of the Emirates and the Dubai Metro, providing effortless access to the city’s top attractions.',
      des2: 'Designed as a refined, alcohol-free retreat, we welcome families, business travelers, and small groups to unwind in modern, spacious accommodations. Savor diverse culinary delights at La Mode Café & Restaurant, refresh in our outdoor pool, and recharge in our well-equipped fitness center—all complemented by warm, attentive service dedicated to making your stay seamless and memorable.',
      des3: 'Book your stay to discover the perfect balance of comfort, value, and authentic Arabian warmth in the center of Dubai.',
    },
    aboutdescription: {
      title: 'Welcome to <span style="font-weight:900">MENA Plaza Hotel Albarsha</span>',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city',
      des1: 'Nestled in the heart of vibrant Al Barsha, the MENA Plaza Hotel offers an exceptional 4-star experience, defined by genuine Arab hospitality and prime convenience. Our enviable location places you just a short walk from the iconic Mall of the Emirates and the Dubai Metro, providing effortless access to the city’s top attractions',
      des2: 'Designed as a refined, alcohol-free retreat, we welcome families, business travelers, and small groups to unwind in modern, spacious accommodations. Savor diverse culinary delights at La Mode Café & Restaurant, refresh in our outdoor pool, and recharge in our well-equipped fitness center—all complemented by warm, attentive service dedicated to making your stay seamless and memorable',
      locationText: 'An Ideal Location in Al Barsha',
    },
    room: {
      title: 'Accommodations Designed for Your Comfort',
      subtitle:
        'Step into a haven of modern tranquility. Our rooms are thoughtfully designed with a calming palette of light tones and rich accents, creating an atmosphere of refined relaxation from the moment you arrive.',
    },
    facilities: {
      title:
        "Unwind and Recharge: <span style='font-weight:900'> Signature Hotel Facilities</span>",
      subtitle:
        'Discover our carefully curated amenities, designed for your relaxation and well-being. From an energizing workout to a refreshing swim, find your perfect balance during your Dubai stay',
    },
    food: {
      title: 'A Culinary Journey Awaits',
      hotelname: 'La Mode Café & Restaurant',
      description:
        'Savor the best of Mediterranean flavors and Arabic hospitality at MENA Plaza Hotel Albarsha. Our dining options are designed to suit every palate, ensuring a memorable gastronomic experience',
      image: '/mena-plaza/048d961d-55c4-4e2c-9557-8a23dd261d28.jpg',
    },
    ourStory: {
      title: 'Unmatched Hospitality',
      subTitle:
        'At MENA Plaza Hotel Albarsha, our values are deeply rooted in <span style="font-weight:900"> traditional Arabian hospitality</span>. Our alcohol-free environment makes us an ideal choice for families and gatherings with friends. Our dedicated team strives to exceed your expectations. We promise an experience that combines comfort, elegance, and world-class service.',
    },
    map: {
      link: 'https://maps.app.goo.gl/46wZWk85Sb7gYpYK7',
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
