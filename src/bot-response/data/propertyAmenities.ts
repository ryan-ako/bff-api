const data = [
  {
    responseCode: 'amenity_frontdesk_services',
    category: 'Frontdesk Services',
    'hint-question': 'Hotel reception desk',
    'detailed-explanation': '-',
    example:
      "The hotel's reception desk is open 24 hours, with our friendly team on standby to assist you with anything from arranging tickets to local shows, to providing newspapers and secure luggage storage.",
  },
  {
    responseCode: 'languages_spoken',
    category: 'Frontdesk Services',
    'hint-question': 'Languages spoken by the staff',
    'detailed-explanation': '-',
    example:
      "Our concierge service is second to none, and we have staff members who can serve you in English, Tagalog, Hindi, Spanish and Portuguese. Whatever you need, we're here to help!",
  },
  {
    responseCode: 'amenity_wakeup_service',
    category: 'Frontdesk Services',
    'hint-question': 'Wake-up service',
    'detailed-explanation': '-',
    example:
      'There are alarm clocks in every room; otherwise, our reception team is always glad to provide you with a friendly wake-up call.',
  },
  {
    responseCode: 'amenity_swimming_pool',
    category: 'Wellness',
    'hint-question': 'Do you have a swimming pool?',
    'detailed-explanation': '-',
    example:
      'The hotel has been operating for x years with y beautiful rooms, a pool and spa.',
  },
  {
    responseCode: 'amenity_gym',
    category: 'Wellness',
    'hint-question': 'Do you have a gym?',
    'detailed-explanation': '-',
    example:
      'The Hotel is glad to offer a free Fitness Centre to all guests from 6:00AM to 10:00PM.',
  },
  {
    responseCode: 'amenity_restaurant',
    category: 'Food & Drinks',
    'hint-question': 'Do you have a restaurant',
    'detailed-explanation': '-',
    example:
      'At the Hotel we have the gorgeous XXX restaurant and bar. The large a la carte menu features a keen focus on nourishing wholefoods, sure to satisfy any appetite - while the traditional, family-friendly atmosphere welcomes all. For vegetarian, vegan or dairy-free alternatives, please provide the chefs with 24-hours notice.',
  },
  {
    responseCode: 'amenity_breakfast',
    category: 'Food & Drinks',
    'hint-question': 'Do you serve breakfast?',
    'detailed-explanation': '-',
    example:
      'Our breakfast service is provided a la carte, in-room or as a buffet, with a range of different culinary options to chose from, including: continental, full English and gluten free.',
  },
  {
    responseCode: 'amenity_food_delivery',
    category: 'Food & Drinks',
    'hint-question': 'Do you organise food deliveries?',
    'detailed-explanation': '-',
    example:
      'We do not organise grocery deliveries or packed lunches. Apologies for any inconvenience. You can welcome to order Uber Eats or takeaways.',
  },
  {
    responseCode: 'amenity_room_service',
    category: 'Food & Drinks',
    'hint-question': 'Do you have room service?',
    'detailed-explanation': '-',
    example: 'We do provide room service between 7am and 11pm.',
  },
  {
    responseCode: 'amenity_parking',
    category: 'Transportation',
    'hint-question': 'Do you have parking?',
    'detailed-explanation': '-',
    example:
      'We have secure valet parking at the property, available for our guests to use for $50 a night. No prebooking required. Paid street parking is available around the property, if you prefer to use that. ',
  },
  {
    responseCode: 'airport_transfers',
    category: 'Transportation',
    'hint-question': 'Do you provide shuttle service?',
    'detailed-explanation': '-',
    example:
      "We do not provide in-house shuttle services. However, we're more than happy to call for transport on your behalf when you are at the property and need a ride. ",
  },
  {
    responseCode: 'amenity_bike_rental',
    category: 'Transportation',
    'hint-question': 'Bike rental',
    'detailed-explanation': '-',
    example: 'The Hotel does not currently have a bike or car rental service.',
  },
  {
    responseCode: 'amenity_car_rental',
    category: 'Transportation',
    'hint-question': 'Car rental service',
    'detailed-explanation': '-',
    example: 'The Hotel does not currently have a bike or car rental service.',
  },
  {
    responseCode: 'amenity_electric_car_charging',
    category: 'Transportation',
    'hint-question': 'Electric car charging',
    'detailed-explanation': '-',
    example:
      'There is no electric vehicle charging station on the premises, but there are several in the area surrounding us.',
  },
  {
    responseCode: 'public transportation',
    category: 'Transportation',
    'hint-question': 'Public transport',
    'detailed-explanation': '-',
    example:
      'Britomart - a central hub for trains and buses to travel around Auckland - is XXX metres from the hotel.',
  },
  {
    responseCode: 'cruise',
    category: 'Transportation',
    'hint-question': 'Cruise terminal',
    'detailed-explanation': '-',
    example: 'The port is a few minutes walk from the hotel.',
  },
  {
    responseCode: 'amenity_private_entrance',
    category: 'Rooms Configuration',
    'hint-question': 'Private entrance to rooms',
    'detailed-explanation': '',
    example:
      'Due to the layout of the hotel, our rooms do not have private entrances. We apologise for any inconvenience.',
  },
  {
    responseCode: 'amenity_interconnected_room',
    category: 'Rooms Configuration',
    'hint-question': 'Interconnected rooms',
    'detailed-explanation': '-',
    example:
      'Interconnected rooms are on offer for our XX, XXX and XXXX rooms. Please request when booking the rooms',
  },
  {
    responseCode: 'common_area_facilities',
    category: 'Common Area',
    'hint-question': 'Facilities in the common area',
    'detailed-explanation': '-',
    example:
      'Aside from the lobby, there are no common areas in the Hotel. We take pride in our relaxing and comfortable atmosphere, made possible through our private rooms and friendly staff.',
  },
  {
    responseCode: 'amenity_vending_machine',
    category: 'Common Area',
    'hint-question': 'Vending machine',
    'detailed-explanation': '-',
    example:
      'There are no vending machines at the Hotel Grand Windsor - but we are happy to recommend our own great restaurant or other local eating options.',
  },
  {
    responseCode: 'amenity_entertainment',
    category: 'Common Area',
    'hint-question': 'Entertainment facilities',
    'detailed-explanation': '-',
    example:
      "The Hotel Grand Windsor does not run any entertainment or family services. If you're looking for fun things to do, our location in the city means there's always something going on or somewhere to go.",
  },
  {
    responseCode: 'amenity_laundry_service',
    category: 'Cleaning Services',
    'hint-question': 'Laundry facilities',
    'detailed-explanation': '-',
    example:
      'We have dry cleaning, laundry and suit pressing services available. For costs, please speak to reception. We also have a laundry area available during 7:00 am to 100:00 pm 7 days a week.',
  },
  {
    responseCode: 'amenity_housekeeping',
    category: 'Cleaning Services',
    'hint-question': 'Housekeeping',
    'detailed-explanation': '-',
    example:
      'Housekeeping services are free of charge and run on a daily basis.',
  },
  {
    responseCode: 'business_facilities',
    category: 'Business facilities',
    'hint-question': 'Business facilities',
    'detailed-explanation': '-',
    example:
      'Fax, printing and photocopying facilities are available to all of our corporate guests. Charges apply.',
  },
  {
    responseCode: 'meeting_room',
    category: 'Business facilities',
    'hint-question': 'Meeting room',
    'detailed-explanation': '-',
    example:
      'We don’t currently have a meeting room at Hotel, however we do have a meeting space for 10 – 30 people available at a partner facility close by.',
  },
  {
    responseCode: 'amenity_elevator',
    category: 'Miscellaneous',
    'hint-question': 'Elevator',
    'detailed-explanation': '-',
    example: 'The hotel has elevators for your convenience.',
  },
  {
    responseCode: 'amenity_heating',
    category: 'Miscellaneous',
    'hint-question': 'Heating',
    'detailed-explanation': '-',
    example: 'The hotel is fully heated for your comfort.',
  },
  {
    responseCode: 'amenity_baggage_locker',
    category: 'Miscellaneous',
    'hint-question': 'Baggage locker',
    'detailed-explanation': '-',
    example:
      "We're here to help you with your items; if you need secure storage, we can take your luggage for you. ",
  },
  {
    responseCode: 'amenity_internet',
    category: 'Miscellaneous',
    'hint-question': 'Internet/Wi-Fi',
    'detailed-explanation': '-',
    example:
      'WiFi is unlimited and free for guests at the hotel. You may use WiFi on any number of devices.',
  },
  {
    responseCode: 'amenity_kids',
    category: 'Kids facilities',
    'hint-question': 'Kids club & Babysitting services',
    'detailed-explanation': '-',
    example:
      "Childrens' facilities are not provided at the Hotel, but we are happy to provide a babysitting service through our great partners. Please speak to reception to learn more.",
  },
  {
    responseCode: 'amenity_highchair',
    category: 'Kids facilities',
    'hint-question': 'Highchairs',
    'detailed-explanation': '-',
    example: 'High chairs are available on request.',
  },
  {
    responseCode: 'amenity_gaming',
    category: 'Media & Technology',
    'hint-question': 'Gaming consoles',
    'detailed-explanation': '-',
    example: 'We do not have any dedicated setups for gaming at this time.',
  },
  {
    responseCode: 'amenity_key_access',
    category: 'Security/Safety',
    'hint-question': 'Key access',
    'detailed-explanation': '-',
    example: 'Every room is accessible via modern, secure key cards.',
  },
  {
    responseCode: 'property_safety_security',
    category: 'Security/Safety',
    'hint-question': 'Safety & Security',
    'detailed-explanation': '',
    example:
      'Your safety is our number one priority. To this end, we have 24-hour security, along with alarms and CCTV inside and outside the property. Fire extinguishers are also on hand in case of emergencies.',
  },
  {
    responseCode: 'amenity_fire_Safety',
    category: 'Security/Safety',
    'hint-question': 'Fire safety',
    'detailed-explanation': '-',
    example:
      'The hotel is fully equipped with a top-of-the-line smoke detection system.',
  },
  {
    responseCode: 'amenity_locker',
    category: 'Security/Safety',
    'hint-question': 'Fire safety',
    'detailed-explanation': '-',
    example: 'There are no lockers at the Hotel Grand Windsor.',
  },
  {
    responseCode: 'room_accessbility_options',
    category: 'Security/Safety',
    'hint-question': 'Fire safety',
    'detailed-explanation': '-',
    example:
      'Your comfort while staying with us is top priority. For this reason, all of our rooms - except for the XXX - are accessible via elevator, while our Classic Double is completely wheelchair accessible with a number of features to suit your needs.',
  },
  {
    responseCode: 'room_child_safety',
    category: 'Security/Safety',
    'hint-question': 'Room safety for children',
    'detailed-explanation': '-',
    example: 'Rooms are child safe',
  },
  {
    responseCode: 'amenity_gaming',
    category: 'Media & Technology',
    'hint-question': 'Gaming consoles',
    'detailed-explanation': '-',
    example: 'We do not have any dedicated setups for gaming at this time.',
  },
];

export default data;
