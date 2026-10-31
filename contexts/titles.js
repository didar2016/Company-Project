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
      points: [],
    },
    ourStory: {
      title: 'Unmatched Hospitality',
      subTitle:
        'At MENA Halfmoon, our values are deeply rooted in <span style="font-weight:900"> traditional Arabian hospitality</span>. Our alcohol-free environment makes us an ideal choice for families and gatherings with friends. Our dedicated team strives to exceed your expectations. We promise an experience that combines comfort, elegance, and world-class service.',
    },
    map: {
      link: 'https://maps.app.goo.gl/ZKJai2b315tSRUc66',
      embed:
        'https://www.google.com/maps?q=MENA%20Holiday%20Beach%20Resort%2C%20Half%20Moon%20Bay%2C%20Al%20Khobar%2C%20Saudi%20Arabia&output=embed',
    },
  },

  MENA_NASRIYA: {
    index_page_header_text:
      'Your Comfortable Stay in the <span style="font-weight:900">Heart of Riyadh</span>',
    description: {
      image: '/public/mena-nasriya/56b56c31-e851-4614-a6dd-90a6dbe1f52a.jpg',
      title: 'LIVE THE <span style="font-weight:900">MENA NASIRIAH</span> EXPERIENCE',
      subtitle:
        'Comfortable accommodation and thoughtful service for work, leisure and longer stays.',
      des1: 'Located on King Saud Road in Al Nasiriah, MENA Hotel Nasiriah brings comfort and convenience together in the Saudi capital. With access to ministries, embassies, banks and shopping destinations, our hotel is well placed for business travellers, families and guests discovering Riyadh.',
      des2: 'Settle into one of our 189 rooms and suites, enjoy international and local flavours at Diamond Restaurant or pause for coffee at Costa Café. Make time for a workout, a swim or a visit to the spa, with our team on hand to assist throughout your stay.',
      des3: 'For a short visit or a longer stay, discover a comfortable setting supported by attentive MENA hospitality.',
    },
    aboutdescription: {
      title: 'Welcome to <span style="font-weight:900">MENA Hotel Nasiriah</span>',
      subtitle: 'A Welcoming Base for Your Time in Riyadh',
      des1: 'MENA Hotel Nasiriah offers comfortable accommodation and a range of facilities in Riyadh’s Al Nasiriah district. Located on King Saud Road, our hotel is conveniently placed for guests visiting embassies, ministries and banks, with shopping destinations within reach. Our 189 rooms and suites combine classically styled interiors with practical amenities for your stay. Choose a Standard Room, Deluxe Room or Junior Suite, and enjoy air conditioning, Wi-Fi, a mini fridge and tea and coffee making facilities.',
      des2: 'Discover local and international cuisine at Diamond Restaurant, or stop for coffee at Costa Café in the lobby. For time away from a busy schedule, our fitness centre, indoor swimming pool and spa provide options to stay active and relax. Three meeting rooms and one banquet hall offer spaces for business gatherings, weddings and private celebrations. With a business centre, on-site parking and attentive hotel services, MENA Hotel Nasiriah welcomes business travellers, families and guests staying for longer visits.',
      locationText: 'A Convenient Location in Al Nasiriah',
      image: '/public/mena-nasriya/56b56c31-e851-4614-a6dd-90a6dbe1f52a.jpg',
    },
    room: {
      title: 'Accommodations Designed for Your Comfort',
      subtitle:
        'Choose from Standard Rooms, Deluxe Rooms and Junior Suites, with practical amenities and space to settle in. Enjoy air conditioning, Wi-Fi, tea and coffee making facilities and a desk or seating area to help you balance rest with your plans for the day.',
    },
    facilities: {
      title: 'Facilities That Enhance Your Stay',
      subtitle:
        'Keep up your routine at the fitness centre, relax by the indoor swimming pool or take time out at the spa, sauna and steam room. A business centre, concierge assistance and on-site parking add convenience to your visit.',
    },
    food: {
      title: 'Flavours to Enjoy Throughout Your Stay',
      hotelname: 'Diamond Restaurant',
      description:
        'Start the day with breakfast or enjoy a meal at lunch and dinner at Diamond Restaurant. Choose from buffet dining across all three meal periods, with an à la carte menu also available. Our halal menu includes international and local dishes, with vegetarian options to suit different preferences.',
      image: '/public/mena-nasriya/b0bf1293-b03f-4598-9a10-331c2a62c033.jpg',
    },
    aboutFood: {
      title: 'Dining and Hotel Amenities',
      text: 'Dining to Suit Your Day',
      subText:
        'Enjoy a meal or a relaxed coffee break at MENA Hotel Nasiriah. Diamond Restaurant offers international and local cuisine, while Costa Café provides a place to pause in the lobby. When you prefer to stay in, our in-room dining menu brings a choice of dishes to your room or suite.',
      points: [
        'Fitness Centre: Keep your routine going, open 8:00 AM to 11:00 PM daily.',
        'Indoor Swimming Pool: A temperature-controlled pool to relax in.',
        'H-Care Spa and Health Club: Spa, sauna and steam room at lobby level.',
        'Business Centre: A practical facility to support work during your stay.',
        'On-Site Parking and Concierge: Convenience and assistance for your visit.',
      ],
    },
    ourStory: {
      title: 'Warm Saudi Hospitality',
      subTitle:
        'At MENA Hotel Nasiriah, a <span style="font-weight:900">welcoming stay</span> begins with attentive service. Our team focuses on understanding your needs and responding with care, whether you are travelling for business, enjoying time with family or making Riyadh your base for a longer visit.',
    },
    map: {
      link: 'https://maps.app.goo.gl/46wZWk85Sb7gYpYK7',
      embed:
        'https://www.google.com/maps?q=MENA%20Hotel%20Nasiriah%2C%20King%20Saud%20Road%2C%20Al%20Nasiriah%2C%20Riyadh%2012732%2C%20Saudi%20Arabia&output=embed',
    },
    meta: {
      title: 'MENA Hotel Nasiriah Riyadh | Rooms Dining and Wellness',
      description:
        'Stay at MENA Hotel Nasiriah in Riyadh. Discover 189 rooms and suites, Diamond Restaurant, Costa Café, wellness facilities and meeting venues.',
    },
  },

  MENA_HOTEL_TABUK: {
    index_page_header_text:
      'Your Comfort in the <span style="font-weight:900">Heart of Tabuk</span>',
    description: {
      image: '/public/mena-hotel-tabuk/73a55235-978d-4004-8f71-93f1fb8b06af.jpg',
      title: ' LIVE THE <span style="font-weight:900">MENA TABUK</span> EXPERIENCE',
      subtitle: 'Comfortable rooms, thoughtful amenities and attentive service for every visit.',
      des1: 'Located in Al Aziziyah Al Jadidah, MENA Tabuk Hotel brings comfort and convenience together for business travellers, families and guests exploring Tabuk. Our location on Abu Jafar Al Mansur Street provides access to government offices, commercial areas and shopping destinations.',
      des2: 'Unwind in one of our 83 rooms and suites, keep up your routine at the fitness centre or enjoy local and international flavours at our restaurant. Whether you are visiting for a short break or a longer stay, our team is here to help you feel welcome.',
      des3: 'Book your stay and enjoy the warmth of MENA hospitality in the heart of Tabuk.',
    },
    aboutdescription: {
      image: '/public/mena-hotel-tabuk/73a55235-978d-4004-8f71-93f1fb8b06af.jpg',
      title: 'Welcome to <span style="font-weight:900">MENA Tabuk Hotel</span>',
      subtitle: 'A Comfortable Stay with a Warm Welcome',
      des1: 'MENA Tabuk Hotel offers a modern and welcoming stay in Tabuk, Saudi Arabia. Located on Abu Jafar Al Mansur Street in Al Aziziyah Al Jadidah, our hotel is well placed for guests visiting government offices, commercial districts and the city’s shopping destinations. Our 83 rooms and suites are designed with comfort and practicality in mind. Choose the accommodation that suits your visit and enjoy amenities such as complimentary Wi-Fi, tea and coffee making facilities and in-room ironing facilities.',
      des2: 'Make time for a workout at the fitness centre or enjoy local and international cuisine at our restaurant. La Mode Café offers a relaxed stop for coffee and light bites, while in-room dining adds convenience when you prefer to stay in. For business meetings and special occasions, our meeting and banqueting venues combine flexible layouts with audiovisual facilities and attentive support. Throughout your visit, our team is dedicated to making you feel welcome and well looked after.',
      locationText: 'An Ideal Location in Tabuk',
    },
    room: {
      title: 'Accommodations Designed for Your Comfort',
      subtitle:
        'Find a room or suite that suits your visit. Choose from Premium King Rooms, Twin Rooms, Executive Rooms, Junior Suites and Executive Suites, with thoughtful everyday amenities to help you rest, recharge and stay connected.',
    },
    facilities: {
      title: 'Facilities That Enhance Your Stay',
      subtitle:
        'Stay active at our fitness centre, connect with complimentary Wi-Fi and enjoy the convenience of in-room dining. With a front desk available around the clock, assistance is close at hand throughout your stay.',
    },
    food: {
      title: 'Flavours to Enjoy Throughout Your Stay',
      hotelname: 'La Mode Café',
      description:
        'Enjoy a relaxed break at La Mode Café, with coffee, sandwiches and light bites to fit around your day. Settle in for a quick breakfast or snack, or pick up a takeaway coffee before heading out into Tabuk.',
      image: '/public/mena-hotel-tabuk/eeea248b-991c-49ab-b257-93ef27faacfe.jpg',
    },
    aboutFood: {
      title: 'Dining and Hotel Amenities',
      text: 'Dining to Suit Your Day',
      subText:
        'Enjoy a welcoming dining experience at MENA Tabuk Hotel, with local and international cuisine served for breakfast, lunch and dinner. Whether you are starting the day before a meeting or sitting down to a relaxed evening meal, our restaurant offers flavours to suit different tastes.',
      points: [
        'Fitness Centre: Maintain your routine and make time for a workout during your stay.',
        'Complimentary Wi-Fi: Stay connected with complimentary high-speed Wi-Fi.',
        'Restaurant and La Mode Café: Enjoy local and international meals, coffee and light bites.',
        'In-Room Dining: Enjoy a meal in your room or suite when you prefer to relax.',
        '24-Hour Front Desk: Assistance around the clock for your stay and everyday enquiries.',
      ],
    },
    ourStory: {
      title: 'Warm Arabian Hospitality',
      subTitle:
        'At MENA Tabuk Hotel, we believe a comfortable stay begins with a <span style="font-weight:900">warm welcome</span>. Our professional and friendly team is here to assist with your everyday needs, whether you are travelling for work, spending time with family or discovering the city.',
    },
    map: {
      link: 'https://maps.app.goo.gl/46wZWk85Sb7gYpYK7',
      embed:
        'https://www.google.com/maps?q=MENA%20Tabuk%20Hotel%2C%20Abu%20Jafar%20Al%20Mansur%20Street%2C%20Al%20Aziziyah%20Al%20Jadidah%2C%20Tabuk%2047911%2C%20Saudi%20Arabia&output=embed',
    },
    meta: {
      title: 'MENA Tabuk Hotel | Rooms Suites Dining and Events',
      description:
        'Stay at MENA Tabuk Hotel in Saudi Arabia. Explore 83 rooms and suites, La Mode Café, a fitness centre and venues for meetings and celebrations.',
    },
  },
};

// Get the current website name from the environment variable
export const currentWebsite = process.env.NEXT_PUBLIC_WEBSITE_NAME || 'default';

// Export the titles for the current website
export const ALLDATA = websiteTitles[currentWebsite] || {};
