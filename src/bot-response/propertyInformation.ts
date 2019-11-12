const data = [
  {
    responseCode: 'checkin_checkout_timing',
    category: 'Important Details',
    'hint-question':
      'Tell a guest the checkin/checkout times and any relevant info.',
    'detailed-explanation': '-',
    example:
      'Check in is anytime after x and check out must be before y. We offer later checkouts with xyz package,',
  },
  {
    responseCode: 'property_contact_info',
    category: 'Important Details',
    'hint-question': 'Explain contact details for your hotel',
    'detailed-explanation':
      'Please put here details such as number, opening hours, reception access, etc that a guest would need to contact the hotel. Just as you would to a potential customer.',
    example:
      'Reception is available 24/7 at phone number 00 000. Email address is reservations@yourhotel.com and address is 1 Queen Street, Auckland 1010',
  },
  {
    responseCode: 'gm_contact_info',
    category: 'Important Details',
    'hint-question': 'Give GM contact details to a guest',
    'detailed-explanation':
      "It's important to offer a human contact for your hotel.",
    example: 'Our GM is x who can be reached at z.',
  },
  {
    responseCode: 'about_property',
    category: 'About',
    'hint-question': 'Describe your hotel to a guest.',
    'detailed-explanation': '-',
    example:
      'The hotel has been operating for x years with y beautiful rooms, a pool and spa.',
  },
  {
    responseCode: 'amenity_swimming_pool',
    category: 'amenity',
    'hint-question': 'Do you have a swimming pool?',
    'detailed-explanation': '-',
    example:
      'The hotel has been operating for x years with y beautiful rooms, a pool and spa.',
  },
  {
    responseCode: 'restaurant_menu',
    category: 'restaurant',
    'hint-question': 'Do you have a restaurant_menu?',
    'detailed-explanation': '-',
    example: 'Here is our restaurant menu',
  },
];

export default data;
