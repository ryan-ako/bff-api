const data = [
  {
    responseCode: 'amenity_swimming_pool',
    category: 'Wellness',
    'hint-question': 'Swimming Pool & Spa',
    'detailed-explanation':
      'Tell guests about your swimming pool, spa and sauna facilities.',
    example:
      'The hotel has been operating for x years with y beautiful rooms, a pool and spa.',
  },
  {
    responseCode: 'amenity_gym',
    category: 'Wellness',
    'hint-question': 'Fitness Centre',
    'detailed-explanation': 'Do you have a gym?',
    example:
      'The Hotel is glad to offer a free Fitness Centre to all guests from 6:00AM to 10:00PM.',
  },
  {
    responseCode: 'amenity_restaurant',
    category: 'Food & Drinks',
    'hint-question': 'Restaurant',
    'detailed-explanation': 'Tell guest about restaurant(s).',
    example:
      'At the Hotel we have the gorgeous XXX restaurant and bar. The large a la carte menu features a keen focus on nourishing wholefoods, sure to satisfy any appetite - while the traditional, family-friendly atmosphere welcomes all. For vegetarian, vegan or dairy-free alternatives, please provide the chefs with 24-hours notice.',
  },
  {
    responseCode: 'amenity_breakfast',
    category: 'Food & Drinks',
    'hint-question': 'Breakfast',
    'detailed-explanation': 'Tell guest about your breakfast.',
    example:
      'Our breakfast service is provided a la carte, in-room or as a buffet, with a range of different culinary options to chose from, including: continental, full English and gluten free.',
  },
  {
    responseCode: 'amenity_food_delivery',
    category: 'Food & Drinks',
    'hint-question': 'Food/ Grocery Deliveries',
    'detailed-explanation': 'Do you organise food deliveries?',
    example:
      'We do not organise grocery deliveries or packed lunches. Apologies for any inconvenience. You can welcome to order Uber Eats or takeaways.',
  },
  {
    responseCode: 'amenity_room_service',
    category: 'Food & Drinks',
    'hint-question': 'Room Service',
    'detailed-explanation':
      'Tell guests if you provide room service and timings.',
    example: 'We do provide room service between 7am and 11pm.',
  },
  {
    responseCode: 'amenity_parking',
    category: 'Transportation',
    'hint-question': 'Parking',
    'detailed-explanation':
      'Tell guests about on-site parking, charges and any restrictions.',
    example:
      'We have secure valet parking at the property, available for our guests to use for $50 a night. No prebooking required. Paid street parking is available around the property, if you prefer to use that. ',
  },
  {
    responseCode: 'airport_transfers',
    category: 'Transportation',
    'hint-question': 'Shuttle Service',
    'detailed-explanation': 'Do you provide shuttle service?',
    example:
      "We do not provide in-house shuttle services. However, we're more than happy to call for transport on your behalf when you are at the property and need a ride. ",
  },
  {
    responseCode: 'amenity_bike_rental',
    category: 'Transportation',
    'hint-question': 'Bike Rental',
    'detailed-explanation':
      'Do you provide bikes on rent, exlain charges and booking procedure?',
    example: 'The Hotel does not currently have a bike or car rental service.',
  },
  {
    responseCode: 'amenity_car_rental',
    category: 'Transportation',
    'hint-question': 'Car Rental Service',
    'detailed-explanation':
      'Do you help guests book rental cars, tell how, or any alternates your guests can use?',
    example: 'The Hotel does not currently have a bike or car rental service.',
  },
  {
    responseCode: 'amenity_electric_car_charging',
    category: 'Transportation',
    'hint-question': 'Electric Car Charging',
    'detailed-explanation':
      'Do you have electric chargng station on site or around your property?',
    example:
      'There is no electric vehicle charging station on the premises, but there are several in the area surrounding us.',
  },
  {
    responseCode: 'public_transportation',
    category: 'Transportation',
    'hint-question': 'Public Transportion',
    'detailed-explanation':
      'Tell about buses and trains and how far they are from the property.',
    example:
      'Britomart - a central hub for trains and buses to travel around Auckland - is XXX metres from the hotel.',
  },
  {
    responseCode: 'cruise',
    category: 'Transportation',
    'hint-question': 'Cruise Terminal',
    'detailed-explanation': 'Are you close to port for cruise ships?',
    example: 'The port is a few minutes walk from the hotel.',
  },
  {
    responseCode: 'amenity_private_entrance',
    category: 'Rooms Configuration',
    'hint-question': 'Private Entrance to Rooms',
    'detailed-explanation': 'Can you organise private entrance for any rooms?',
    example:
      'Due to the layout of the hotel, our rooms do not have private entrances. We apologise for any inconvenience.',
  },
  {
    responseCode: 'amenity_interconnected_room',
    category: 'Rooms Configuration',
    'hint-question': 'Interconnected Rooms',
    'detailed-explanation': 'Can any of rooms be connected together?',
    example:
      'Interconnected rooms are on offer for our XX, XXX and XXXX rooms. Please request when booking the rooms',
  },
  {
    responseCode: 'common_area_facilities',
    category: 'Common Area',
    'hint-question': 'Common Area',
    'detailed-explanation':
      'Tell about the common areas like lobby, outdoor area, and bbq area.',
    example:
      'Aside from the lobby, there are no common areas in the Hotel. We take pride in our relaxing and comfortable atmosphere, made possible through our private rooms and friendly staff.',
  },
  {
    responseCode: 'amenity_vending_machine',
    category: 'Common Area',
    'hint-question': 'Vending Machine',
    'detailed-explanation': 'Tell where vending machines are in your property.',
    example:
      'There are no vending machines at the Hotel Grand Windsor - but we are happy to recommend our own great restaurant or other local eating options.',
  },
  {
    responseCode: 'amenity_entertainment',
    category: 'Common Area',
    'hint-question': 'Entertainment Facilities',
    'detailed-explanation':
      'Explain about family services and any entertainment like movies, group classes, etc.',
    example:
      "Our hotel does not run any entertainment or family services. If you're looking for fun things to do, our location in the city means there's always something going on or somewhere to go.",
  },
  {
    responseCode: 'amenity_laundry_service',
    category: 'Cleaning Services',
    'hint-question': 'Laundry Facilities',
    'detailed-explanation':
      'Tell about dry cleaning, suit pressing, and associated costs.',
    example:
      'We have dry cleaning, laundry, and suit pressing services available. For costs, please speak to reception. We also have a laundry area available from 7:00 am to 100:00 pm 7 days a week.',
  },
  {
    responseCode: 'amenity_housekeeping',
    category: 'Cleaning Services',
    'hint-question': 'Housekeeping',
    'detailed-explanation': 'Tell about your housekeeping services.',
    example:
      'Housekeeping services are free of charge and run on a daily basis.',
  },
  {
    responseCode: 'business_facilities',
    category: 'Business facilities',
    'hint-question': 'Business Facilities',
    'detailed-explanation':
      'Tell about printing, photocopying and other services you provide to your corporate guests.',
    example:
      'Fax, printing and photocopying facilities are available to all of our corporate guests. Charges apply.',
  },
  {
    responseCode: 'meeting_room',
    category: 'Business facilities',
    'hint-question': 'Meeting Room',
    'detailed-explanation':
      'Do you property has meeting rooms which can be booked by corporate guests?',
    example:
      'We don’t currently have a meeting room at Hotel, however, we do have a meeting space for 10 – 30 people available at a partner facility close by.',
  },
  {
    responseCode: 'amenity_elevator',
    category: 'Miscellaneous',
    'hint-question': 'Elevator',
    'detailed-explanation':
      'Do you have elevators and escalators in your rooms?',
    example: 'The hotel has elevators for your convenience.',
  },
  {
    responseCode: 'amenity_heating',
    category: 'Miscellaneous',
    'hint-question': 'Heating',
    'detailed-explanation': 'Tell if your proeperty and rooms are heated.',
    example: 'The hotel is fully heated for your comfort.',
  },
  {
    responseCode: 'amenity_baggage_locker',
    category: 'Miscellaneous',
    'hint-question': 'Baggage Locker',
    'detailed-explanation':
      'Do your provide storage services and tell restrictions if any?',
    example:
      "We're here to help you with your items; if you need secure storage, we can take your luggage for you. ",
  },
  {
    responseCode: 'amenity_internet',
    category: 'Miscellaneous',
    'hint-question': 'Internet/ Wi-Fi',
    'detailed-explanation':
      'Do you provide internet and tell about charges if any?',
    example:
      'WiFi is unlimited and free for guests at the hotel. You may use WiFi on any number of devices.',
  },
  {
    responseCode: 'amenity_kids',
    category: 'Kids Facilities',
    'hint-question': 'Kids Club & Babysitting Services',
    'detailed-explanation': 'Tell about kids facilities you provide.',
    example:
      "Childrens' facilities are not provided at the Hotel, but we are happy to provide a babysitting service through our great partners. Please speak to reception to learn more.",
  },
  {
    responseCode: 'amenity_highchair',
    category: 'Kids Facilities',
    'hint-question': 'Highchairs',
    'detailed-explanation':
      'Do you provide highchair in rooms and in your restaurant?',
    example: 'High chairs are available on request.',
  },
  {
    responseCode: 'amenity_gaming',
    category: 'Media & Technology',
    'hint-question': 'Gaming Consoles',
    'detailed-explanation':
      'Do you have gaming consoles in common areas or rooms?',
    example: 'We do not have any dedicated setups for gaming at this time.',
  },
  {
    responseCode: 'amenity_key_access',
    category: 'Security/Safety',
    'hint-question': 'Key Access',
    'detailed-explanation': 'How the rooms are accessed and tell about keys?',
    example: 'Every room is accessible via modern, secure key cards.',
  },
  {
    responseCode: 'property_safety_security',
    category: 'Security/Safety',
    'hint-question': 'Safety & Security',
    'detailed-explanation':
      'How do you keep the property secure, so that guests feel safe?',
    example:
      'Your safety is our number one priority. To this end, we have 24-hour security, along with alarms and CCTV inside and outside the property. Fire extinguishers are also on hand in case of emergencies.',
  },
  {
    responseCode: 'amenity_fire_Safety',
    category: 'Security/Safety',
    'hint-question': 'Fire Safety',
    'detailed-explanation':
      'What fire safety measures you take, so that your guests feel safe?',
    example:
      'The hotel is fully equipped with a top-of-the-line smoke detection system.',
  },
  {
    responseCode: 'room_accessbility_options',
    category: 'Security/Safety',
    'hint-question': 'Accessibility',
    'detailed-explanation':
      'Tell accessibility options you provide to your guests like access and toilets.',
    example:
      'Your comfort while staying with us is the top priority. For this reason, all of our rooms - except for the XXX - are accessible via elevator, while our Classic Double is completely wheelchair accessible with several features to suit your needs.',
  },
  {
    responseCode: 'room_child_safety',
    category: 'Security/Safety',
    'hint-question': 'Room Safety for Children',
    'detailed-explanation':
      'Tell guests if you have child safe property and rooms.',
    example: 'Rooms are child safe',
  },
];

export default data;
