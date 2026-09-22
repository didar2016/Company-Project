// Titles object to store local titles for different websites
const websiteTitles = {
  MENA_PLAZA: {
    index_page_header_text:
      'Your Gateway to <span style="font-weight:900">Dubai’s</span> Treasures',
    description: {
      image: '/public/mena-plaza-hotel/2a591547-2074-4a56-823b-5146f0d6f1f7.jpg',
      title: 'LIVE THE <span style="font-weight:900">PLAZA</span> EXPERIENCE',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city.',
      des1: 'Nestled in the heart of vibrant Al Barsha, the MENA Plaza Hotel offers an exceptional 4-star experience, defined by genuine hospitality and prime convenience. Our enviable location places you just a short walk from the iconic Mall of the Emirates and the Dubai Metro, providing effortless access to the city’s top attractions.',
      des2: 'Designed as a refined, alcohol-free retreat, we welcome families, business travelers, and small groups to unwind in modern, spacious accommodations. Savor diverse culinary delights at La Mode Café & Restaurant, refresh in our outdoor pool, and recharge in our well-equipped fitness center—all complemented by warm, attentive service dedicated to making your stay seamless and memorable.',
      des3: 'Book your stay to discover the perfect balance of comfort, value, and authentic Arabian warmth in the center of Dubai.',
    },
    aboutdescription: {
      image: '/public/mena-plaza-hotel/6f7cef60-1916-4e4e-a822-e20a9686dd1f.jpg',
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
      image: '/public/mena-plaza-hotel/2e14ee21-6f83-494c-8565-f68cdc810eab.png',
    },
    aboutFood: {
      title: 'Dining and Hotel Amenities',
      text: 'Culinary Experience at La Mode',
      subText:
        'Indulge in a diverse selection of international cuisine at our on-site restaurant, featuring vegetarian, dairy-free, and halal options. From a generous breakfast buffet to à la carte dinners, every meal is prepared with care to suit a variety of tastes.',
      points: [
        'Outdoor Swimming Pool: A refreshing spot to relax.',
        'Fitness Center: A well-equipped gym to maintain your routine.',
        'Rejuvenating Sauna: For deep relaxation after a day of exploring.',
        'Complimentary High-Speed Wi-Fi: Stay connected throughout the hotel.',
        'Shared Lounge Area: A comfortable space to unwind or socialize.',
      ],
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
    index_page_header_text: 'Your Gateway to <span style="font-weight:900">Dubai’s</span> Comfort',
    description: {
      image: '/public/mena-apart-hotel/d45007a1-e917-461b-8d87-69bec1fdeecf.jpg',
      title: 'LIVE THE <span style="font-weight:900">MENA APART</span> EXPERIENCE',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city.',
      des1: 'Situated in the vibrant city of Dubai, MENA ApartHotel Albarsha is the perfect choice for short or extended stays. A short walk from the Mall of the Emirates, we combine the comforts of home with genuine hospitality, offering outstanding value for families, business travelers, and explorers.',
      des2: '',
      des3: 'Book your stay today and experience the perfect blend of modern living and warm hospitality at MENA ApartHotel Albarsha.',
    },
    aboutdescription: {
      title: 'Welcome to <span style="font-weight:900">MENA ApartHotel Albarsha</span>',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city',
      des1: 'Nestled in the heart of vibrant Al Barsha, MENA ApartHotel offers an exceptional experience, defined by genuine Arab hospitality and prime convenience. Our enviable location places you just a short walk from the iconic Mall of the Emirates and the Dubai Metro, providing effortless access to the city’s top attractions',
      des2: 'Designed as a refined, alcohol-free retreat, we welcome families, business travelers, and small groups to unwind in modern, spacious accommodations. Savor diverse culinary delights, refresh in our outdoor pool, and recharge in our well-equipped fitness center—all complemented by warm, attentive service dedicated to making your stay seamless and memorable',
      locationText: 'An Ideal Location in Al Barsha',
    },
    room: {
      title: 'Accommodations Designed for Your Comfort',
      subtitle:
        'Step into a haven of modern tranquility. Our rooms are thoughtfully designed with a calming palette of light tones and rich accents, creating an atmosphere of refined relaxation from the moment you arrive.',
    },
    facilities: {
      title: 'Facilities That Enhance Your Stay',
      subtitle:
        'MENA ApartHotel Albarsha offers a range of facilities designed to provide comfort and MENA ApartHotel Albarsha offers a range of facilities designed to provide comfort and convenience, ensuring an exceptional experience for both short and extended stays.',
    },
    food: {
      title: 'A Culinary Journey Awaits',
      hotelname: 'MENA ApartHotel Dining',
      description:
        'Savor the best of Mediterranean flavors and Arabic hospitality at MENA ApartHotel Albarsha. Our dining options are designed to suit every palate, ensuring a memorable gastronomic experience',
      image: '/public/mena-apart-hotel/3b5d3488-66ce-484a-b433-93f02dbded84.jpg',
    },
    aboutFood: {
      title: 'Dining and Hotel Amenities',
      text: 'Culinary Experience at MENA ApartHotel',
      subText:
        'Indulge in a diverse selection of international cuisine at our on-site restaurant, featuring vegetarian, dairy-free, and halal options. From a generous breakfast buffet to à la carte dinners, every meal is prepared with care to suit a variety of tastes.',
      points: [
        'Outdoor Swimming Pool: A refreshing spot to relax.',
        'Fitness Center: A well-equipped gym to maintain your routine.',
        'Rejuvenating Sauna: For deep relaxation after a day of exploring.',
        'Complimentary High-Speed Wi-Fi: Stay connected throughout the hotel.',
        'Shared Lounge Area: A comfortable space to unwind or socialize.',
      ],
    },
    ourStory: {
      title: 'Unmatched Hospitality',
      subTitle:
        'At MENA ApartHotel Albarsha, our values are deeply rooted in <span style="font-weight:900"> traditional Arabian hospitality</span>. Our alcohol-free environment makes us an ideal choice for families and gatherings with friends. Our dedicated team strives to exceed your expectations. We promise an experience that combines comfort, elegance, and world-class service.',
    },
    map: {
      link: 'https://maps.app.goo.gl/46wZWk85Sb7gYpYK7',
    },
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
export const currentWebsite = process.env.NEXT_PUBLIC_WEBSITE_NAME || 'default';

// Export the titles for the current website
export const ALLDATA = websiteTitles[currentWebsite] || {};
