// Titles object to store local titles for different websites
const websiteTitles = {
  MENA_PLAZA: {
    index_page_header_text: 'Your Destination for Comfort',
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
      image: '/public/mena-plaza-hotel/89c79d85-2507-4f88-83fc-a2600c772063.jpg',
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
    index_page_header_text: 'The Comfort of Home<br/>The Ease of a Hotel',
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
        'MENA ApartHotel Albarsha offers a range of facilities designed to provide comfort and convenience, ensuring an exceptional experience for both short and extended stays.',
    },
    food: {
      title: 'A Culinary Journey Awaits',
      hotelname: 'LOKANTA 1928',
      description:
        "The best Turkish Lokanta in Dubai, bringing the dining tradition inherited from 1928 to today's Dubai. The same sincerity, the same craftsmanship only the view has changed.",
      image: '/public/mena-apart-hotel/b4b43dea-dd9a-4ea1-a55b-18e57feb770b.jpeg',
    },
    aboutFood: {
      title: 'Dining and Hotel Amenities',
      text: 'LOKANTA 1928',
      subText:
        "The best Turkish Lokanta in Dubai, bringing the dining tradition inherited from 1928 to today's Dubai. The same sincerity, the same craftsmanship only the view has changed.",
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

  MENA_HALFMOON: {
    index_page_header_text:
      'A Relaxing Stay by the <span style="font-weight:900">Arabian</span> Gulf',
    description: {
      image: '/public/mena-halfmoon/e4f0de8f-0b37-4eb4-89b9-11b29391e7c9.jpg',
      title: 'LIVE THE MENA HOLIDAY BEACH EXPERIENCE',
      subtitle: 'Comfortable accommodation, sea views and time to enjoy the coast.',
      des1: 'Set along the Arabian Gulf at Half Moon Bay, near Al Khobar, our four-star resort brings together a beachfront location and the comforts of a relaxed stay. Choose a Deluxe Room or a villa with one, two or three bedrooms, with accommodation to suit different travel plans.',
      des2: 'Spend time by the outdoor pools, enjoy a meal at Blue Beach Restaurant or pause for refreshments at La Mode Café. Sports facilities, a fitness centre and water activities offer ways to stay active, while our three event venues provide space for meetings and special occasions.',
      des3: 'Whether you are planning a family holiday or a short escape, settle into a welcoming resort with attentive MENA hospitality.',
    },
    aboutdescription: {
      title: 'Welcome to <span style="font-weight:900">MENA Holiday</span> Beach Resort',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city',
      des1: 'MENA Holiday Beach Resort is a four-star beachfront resort at Half Moon Bay, near Al Khobar. Overlooking the Arabian Gulf, our resort welcomes families, leisure travellers and business guests looking for a comfortable place to stay by the coast.',
      des2: 'Our 103 accommodation units include 41 Deluxe Rooms, 11 One-Bedroom Villas, 21 Two-Bedroom Villas and 30 Three-Bedroom Villas. Choose the layout that suits your visit, from a room with a seating area to a villa with separate living space, a balcony and outdoor seating.',
      des3: 'Enjoy buffet meals and à la carte dining at Blue Beach Restaurant, or take a break at La Mode Café beside the swimming pools. Four outdoor pools, a health and fitness centre, sports facilities and recreation activities provide a choice of ways to spend your day.',
      des4: 'For business visits and special occasions, Al Majlis, Al Shabka and Al Marsa offer spaces for meetings, banquets and events. A business centre, mini market, housekeeping, laundry and shuttle service add practical support during your stay.',
      locationText: 'An Ideal Location in Al Barsha',
      image: '/public/mena-halfmoon/e4f0de8f-0b37-4eb4-89b9-11b29391e7c9.jpg',
    },
    room: {
      title: 'Accommodations Designed for Your Comfort',
      subtitle:
        'Make yourself comfortable in a Deluxe Room, or enjoy the extra living space of a one, two or three-bedroom villa. Air conditioning and practical amenities support your stay, with balconies, outdoor seating and sea views in our villas.',
    },
    facilities: {
      title: 'Make More of Your Time Away',
      subtitle:
        'Enjoy a swim in one of our four outdoor pools, keep up your routine at the fitness centre or make time for a game on the sports courts. With a playground, paintball and water activities, there are options to enjoy an active break by the coast.',
    },
    food: {
      title: 'Flavours to Enjoy Throughout Your Stay',
      hotelname: 'La Mode Café',
      description:
        'Take a break at La Mode Café, located by the swimming pools. Enjoy coffee, pastries, juices and sandwiches, or choose ice cream and popcorn for a light treat. The poolside setting offers a relaxed place to pause between a swim and your next resort activity.',
      image: '/public/mena-halfmoon/52355147-7aa7-4fe4-8768-bd7ff5bf1397.jpg',
    },
    aboutFood: {
      title: ' Flavours to Enjoy Throughout Your Stay',
      text: 'La Mode Café',
      subText:
        'Take a break at La Mode Café, located by the swimming pools. Enjoy coffee, pastries, juices and sandwiches, or choose ice cream and popcorn for a light treat. The poolside setting offers a relaxed place to pause between a swim and your next resort activity.',
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
        'At MENA Halfmoon, our values are deeply rooted in <span style="font-weight:900"> traditional Arabian hospitality</span>. Our alcohol-free environment makes us an ideal choice for families and gatherings with friends. Our dedicated team strives to exceed your expectations. We promise an experience that combines comfort, elegance, and world-class service.',
    },
    map: {
      link: 'https://maps.app.goo.gl/46wZWk85Sb7gYpYK7',
    },
  },

  MENA_NASRIYA: {
    index_page_header_text: 'Your Gateway to <span style="font-weight:900">Dubai’s</span> Comfort',
    description: {
      image: '/public/mena-nasriya/56b56c31-e851-4614-a6dd-90a6dbe1f52a.jpg',
      title: 'LIVE THE <span style="font-weight:900">MENA NASRIYA</span> EXPERIENCE',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city.',
      des1: 'Situated in the vibrant city of Dubai, MENA Nasriya is the perfect choice for short or extended stays. A short walk from the Mall of the Emirates, we combine the comforts of home with genuine hospitality, offering outstanding value for families, business travelers, and explorers.',
      des2: '',
      des3: 'Book your stay today and experience the perfect blend of modern living and warm hospitality at MENA Nasriya.',
    },
    aboutdescription: {
      title: 'Welcome to <span style="font-weight:900">MENA Nasriya</span>',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city',
      des1: 'Nestled in the heart of vibrant Mena Nasriya, MENA Nasriya offers an exceptional experience, defined by genuine Arab hospitality and prime convenience. Our enviable location places you just a short walk from the iconic Mall of the Emirates and the Dubai Metro, providing effortless access to the city’s top attractions',
      des2: 'Designed as a refined, alcohol-free retreat, we welcome families, business travelers, and small groups to unwind in modern, spacious accommodations. Savor diverse culinary delights, refresh in our outdoor pool, and recharge in our well-equipped fitness center—all complemented by warm, attentive service dedicated to making your stay seamless and memorable at MENA Nasriya',
      locationText: 'An Ideal Location in Mena Nasriya',
      image: '/public/mena-nasriya/56b56c31-e851-4614-a6dd-90a6dbe1f52a.jpg',
    },
    room: {
      title: 'Accommodations Designed for Your Comfort',
      subtitle:
        'Step into a haven of modern tranquility. Our rooms are thoughtfully designed with a calming palette of light tones and rich accents, creating an atmosphere of refined relaxation from the moment you arrive.',
    },
    facilities: {
      title: 'Facilities That Enhance Your Stay',
      subtitle:
        'MENA Nasriya offers a range of facilities designed to provide comfort and convenience, ensuring an exceptional experience for both short and extended stays.',
    },
    food: {
      title: 'A Culinary Journey Awaits',
      hotelname: 'LOKANTA 1928',
      description:
        "The best Turkish Lokanta in Dubai, bringing the dining tradition inherited from 1928 to today's Dubai. The same sincerity, the same craftsmanship only the view has changed.",
      image: '/public/mena-nasriya/b0bf1293-b03f-4598-9a10-331c2a62c033.jpg',
    },
    aboutFood: {
      title: 'Dining and Hotel Amenities',
      text: 'LOKANTA 1928',
      subText:
        "The best Turkish Lokanta in Dubai, bringing the dining tradition inherited from 1928 to today's Dubai. The same sincerity, the same craftsmanship only the view has changed.",
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
        'At MENA Nasriya, our values are deeply rooted in <span style="font-weight:900"> traditional Arabian hospitality</span>. Our alcohol-free environment makes us an ideal choice for families and gatherings with friends. Our dedicated team strives to exceed your expectations. We promise an experience that combines comfort, elegance, and world-class service.',
    },
    map: {
      link: 'https://maps.app.goo.gl/46wZWk85Sb7gYpYK7',
    },
  },

  MENA_HOTEL_TABUK: {
    index_page_header_text: 'Your Gateway to <span style="font-weight:900">Dubai’s</span> Comfort',
    description: {
      image: '/public/mena-hotel-tabuk/73a55235-978d-4004-8f71-93f1fb8b06af.jpg',
      title: 'LIVE THE <span style="font-weight:900">MENA HOTEL TABUK</span> EXPERIENCE',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city.',
      des1: 'Situated in the vibrant city of Tabuk, MENA Hotel Tabuk is the perfect choice for short or extended stays. A short walk from the Mall of the Emirates, we combine the comforts of home with genuine hospitality, offering outstanding value for families, business travelers, and explorers.',
      des2: '',
      des3: 'Book your stay today and experience the perfect blend of modern living and warm hospitality at MENA Hotel Tabuk.',
    },
    aboutdescription: {
      image: '/public/mena-hotel-tabuk/73a55235-978d-4004-8f71-93f1fb8b06af.jpg',
      title: 'Welcome to <span style="font-weight:900">MENA Hotel Tabuk</span>',
      subtitle:
        'Modern space, exceptional service and everything you need for a seamless stay in the city',
      des1: 'Nestled in the heart of vibrant Tabuk, MENA Hotel Tabuk offers an exceptional experience, defined by genuine Arab hospitality and prime convenience. Our enviable location places you just a short walk from the iconic Mall of the Emirates and the Dubai Metro, providing effortless access to the city’s top attractions',
      des2: 'Designed as a refined, alcohol-free retreat, we welcome families, business travelers, and small groups to unwind in modern, spacious accommodations. Savor diverse culinary delights, refresh in our outdoor pool, and recharge in our well-equipped fitness center—all complemented by warm, attentive service dedicated to making your stay seamless and memorable at MENA Hotel Tabuk',
      locationText: 'An Ideal Location in Tabuk',
    },
    room: {
      title: 'Accommodations Designed for Your Comfort',
      subtitle:
        'Step into a haven of modern tranquility. Our rooms are thoughtfully designed with a calming palette of light tones and rich accents, creating an atmosphere of refined relaxation from the moment you arrive.',
    },
    facilities: {
      title: 'Facilities That Enhance Your Stay',
      subtitle:
        'MENA Hotel Tabuk offers a range of facilities designed to provide comfort and convenience, ensuring an exceptional experience for both short and extended stays.',
    },
    food: {
      title: 'A Culinary Journey Awaits',
      hotelname: 'LOKANTA 1928',
      description:
        "The best Turkish Lokanta in Dubai, bringing the dining tradition inherited from 1928 to today's Dubai. The same sincerity, the same craftsmanship only the view has changed.",
      image: '/public/mena-hotel-tabuk/eeea248b-991c-49ab-b257-93ef27faacfe.jpg',
    },
    aboutFood: {
      title: 'Dining and Hotel Amenities',
      text: 'LOKANTA 1928',
      subText:
        "The best Turkish Lokanta in Dubai, bringing the dining tradition inherited from 1928 to today's Dubai. The same sincerity, the same craftsmanship only the view has changed.",
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
        'At MENA Hotel Tabuk, our values are deeply rooted in <span style="font-weight:900"> traditional Arabian hospitality</span>. Our alcohol-free environment makes us an ideal choice for families and gatherings with friends. Our dedicated team strives to exceed your expectations. We promise an experience that combines comfort, elegance, and world-class service.',
    },
    map: {
      link: 'https://maps.app.goo.gl/46wZWk85Sb7gYpYK7',
    },
  },
};

// Get the current website name from the environment variable
export const currentWebsite = process.env.NEXT_PUBLIC_WEBSITE_NAME || 'default';

// Export the titles for the current website
export const ALLDATA = websiteTitles[currentWebsite] || {};
