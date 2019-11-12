const data = [
  // {
  //   responseCode: 'test_101',
  //   category: 'About',
  //   'hint-question': 'Describe your hotel to a guest.',
  //   'detailed-explanation': '-',
  //   example:
  //     'The hotel has been operating for x years with y beautiful rooms, a pool and spa.',
  // },
  // {
  //   responseCode: 'test_102',
  //   category: 'Important Details',
  //   'hint-question': 'Explain contact details for your hotel',
  //   'detailed-explanation':
  //     'Please put here details such as number, opening hours, reception access, etc that a guest would need to contact the hotel. Just as you would to a potential customer.',
  //   example:
  //     'Reception is available 24/7 at phone number 00 000. Email address is reservations@yourhotel.com and address is 1 Queen Street, Auckland 1010',
  // },
  // {
  //   responseCode: 'test_103',
  //   category: 'Important Details',
  //   'hint-question': 'Explain contact details for your hotel',
  //   'detailed-explanation':
  //     'Please put here details such as number, opening hours, reception access, etc that a guest would need to contact the hotel. Just as you would to a potential customer.',
  //   example:
  //     'Reception is available 24/7 at phone number 00 000. Email address is reservations@yourhotel.com and address is 1 Queen Street, Auckland 1010',
  // },
  // {
  //   responseCode: 'test_104',
  //   category: 'Important Details',
  //   'hint-question': 'Explain contact details for your hotel',
  //   'detailed-explanation':
  //     'Please put here details such as number, opening hours, reception access, etc that a guest would need to contact the hotel. Just as you would to a potential customer.',
  //   example:
  //     'Reception is available 24/7 at phone number 00 000. Email address is reservations@yourhotel.com and address is 1 Queen Street, Auckland 1010',
  // },
  // {
  //   responseCode: 'test_105',
  //   category: 'Important Details',
  //   'hint-question': 'Explain contact details for your hotel',
  //   'detailed-explanation':
  //     'Please put here details such as number, opening hours, reception access, etc that a guest would need to contact the hotel. Just as you would to a potential customer.',
  //   example:
  //     'Reception is available 24/7 at phone number 00 000. Email address is reservations@yourhotel.com and address is 1 Queen Street, Auckland 1010',
  // },
  {
    responseCode: 'about_property',
    category: 'About',
    'hint-question': 'Describe your hotel to a guest.',
    'detailed-explanation': '-',
    example:
      'The hotel has been operating for x years with y beautiful rooms, a pool and spa.',
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
    responseCode: 'tripadvisor_rating',
    category: 'Important Details',
    'hint-question': 'Tripadvisor rating',
    'detailed-explanation': '',
    example:
      'The Hotelhas an excellent rating of 4.5 from more than 450 reviews on trip advisor.',
  },
  {
    responseCode: 'early_check_in_late_check_out',
    category: 'Frontdesk Services',
    'hint-question': 'Tell a guest the early checkin/ late checkout policies',
    'detailed-explanation': '-',
    example:
      'Check-in is at 2pm and check-out is at 10am. However, we have a 24-hour front desk and you can make a request to them to check in later if you require. Early check-in and late check-out may be subject to an extra charge and availability of rooms at the property.',
  },
  {
    responseCode: 'languages_spoken',
    category: 'Frontdesk Services',
    'hint-question': 'Languages spoken?',
    'detailed-explanation': '-',
    example:
      "Our concierge service is second to none, and we have staff members who can serve you in English, Tagalog, Hindi, Spanish and Portuguese. Whatever you need, we're here to help!",
  },
  {
    responseCode: 'gm_contact_info',
    category: 'Frontdesk Services',
    'hint-question': 'Give GM contact details to a guest',
    'detailed-explanation':
      "It's important to offer a human contact for your hotel.",
    example: 'Our GM is x who can be reached at z.',
  },
  {
    responseCode: 'distance_airport',
    category: 'Nearby',
    'hint-question': 'Distance from the airport and transfer options',
    'detailed-explanation': '',
    example:
      'The Hotel is 22kms from the Auckland International Airport with taxis, ride share cars and Skybus available 24/7. These transportation options will cost between $18 and $80 depending on your choice and the time of the day.',
  },
  {
    responseCode: 'whats_nearby',
    category: 'Nearby',
    'hint-question': 'Distance from key milestones and location',
    'detailed-explanation': '',
    example:
      'In the centre of Auckland city, the Hotel is surrounded by gorgeous sights and sounds. With buskers performing live music on every corner, there are many restaurants and shops to explore across the CBD. Supermarkets surround the hotel at less than 200 metres away, while the property is also within walking distance of these great exhibits: the Waterfront (500 metres away), the Sky Tower (750 metres), and Auckland Museum (2.4km).',
  },
  {
    responseCode: 'amenity_shops',
    category: 'Nearby',
    'hint-question': 'Closeby shopping',
    'detailed-explanation': '',
    example:
      'There are several great shops on the Street, just outside the Hotel.',
  },
  {
    responseCode: 'alcohol_smoking_drugs_consumption',
    category: 'Smoking',
    'hint-question': 'Smoking allowed',
    'detailed-explanation': '',
    example:
      'This is a smoke-free property. We apologise for any inconvenience this may cause.',
  },
  {
    responseCode: 'room_view',
    category: 'Views',
    'hint-question': 'View from the property and rooms',
    'detailed-explanation': '',
    example: 'Most of our rooms have a view of the city.',
  },
  {
    responseCode: 'pets_allowed',
    category: 'Pets',
    'hint-question': 'Pets allowed',
    'detailed-explanation': '',
    example:
      'At this time, we are not accepting pets at the Hotel Grand Windsor. Our apologies for any inconvenience this may cause.',
  },
  {
    responseCode: 'booking_cancellation',
    category: 'Booking',
    'hint-question': 'Cancellation policy',
    'detailed-explanation': '-',
    example:
      'For flexible fares, the guest can cancel free of charge until 3 days before arrival. The guest will be charged the total price if they cancel in the 3 days before arrival. For non-refundable bookings, the guest will be charged the total price if they cancel at any time.',
  },
  {
    responseCode: 'children_and_extra_bed',
    category: 'Booking',
    'hint-question': 'Children and extra bed pricing',
    'detailed-explanation': '-',
    example:
      'Children upto and including 5 years old can stay for free. Children between 6 and 12 years and extra adults stay for NZ$55.00 per person per night when using and available extra rollaway beds. We do not charge for cribs for babies',
  },
  {
    responseCode: 'group_booking',
    category: 'Booking',
    'hint-question': 'Group booking',
    'detailed-explanation': '-',
    example:
      'We are always happy to accept group bookings. Please note that large bookings may be subject to availability due to the number of rooms required.',
  },
  {
    responseCode: 'winz_quote',
    category: 'Booking',
    'hint-question': 'Winz quotes',
    'detailed-explanation': '-',
    example:
      "Our hotels are dedicated to a culture of inclusivity. It's important that all of our guests feel comfortable and have a positive experience with us.",
  },
  {
    responseCode: 'event_bookings',
    category: 'Booking',
    'hint-question': 'Event bookings',
    'detailed-explanation': '-',
    example:
      'We are always happy to accept books for special occasions. Please note that this may be subject to availability.',
  },
  {
    responseCode: 'christmas_newyear_event',
    category: 'Booking',
    'hint-question': 'Christmas and new year special event',
    'detailed-explanation': '-',
    example:
      'We have a special Christmas menu available on Christmas Day. You may also book reservations for dinner at the restaurant any time during Christmas week from our regular a-la-carte menu.',
  },
  {
    responseCode: 'payment_options',
    category: 'Booking',
    'hint-question': 'Payment methods accepted',
    'detailed-explanation': '',
    example:
      'We accept payment in cash, EFTPOS and all major credit card providers when paying at the property. You can reserve or pay online using all major credit cards. ',
  },
];

export default data;
