const data = [
  {
    responseCode: 'about_property',
    category: 'About',
    'hint-question': 'About Hotel',
    'detailed-explanation':
      'Describe your hotel to a guest in a short paragraph.',
    example:
      'The hotel has been operating for x years with y beautiful rooms, a pool and spa.',
  },
  {
    responseCode: 'property_contact_info',
    category: 'About',
    'hint-question': 'Contact Details',
    'detailed-explanation':
      'Please put here details such as number, opening hours, reception access, etc that a guest would need to contact the property.',
    example:
      'Reception is available 24/7 at phone number 00 000. Email address is reservations@yourhotel.com and address is 1 Queen Street, Auckland 1010',
  },
  {
    responseCode: 'greeting',
    category: 'About',
    'hint-question': 'Greetings',
    'detailed-explanation':
      'How your digital assistant replies when guests say Hello!',
    example:
      'Hi, I’m Wallis. I can answer any questions you may have about our property. How can I help you?',
  },
  {
    responseCode: 'why_this_assistant_name',
    category: 'About',
    'hint-question': 'About Digital Assistant',
    'detailed-explanation': 'Introduce guests to your Digital Assistant.',
    example: 'Our Digital Assistant is named Wallis.',
  },
  {
    responseCode: 'room_view',
    category: 'About',
    'hint-question': 'Views',
    'detailed-explanation':
      'Tell guests about views from the property and rooms',
    example: 'Most of our rooms have a view of the city.',
  },
  {
    responseCode: 'amenity_frontdesk_services',
    category: 'Frontdesk Services',
    'hint-question': 'Hotel Reception Desk',
    'detailed-explanation':
      'What are your reception hours and front desk services you offer?',
    example:
      "The hotel's reception desk is open 24 hours, with our friendly team on standby to assist you with anything from arranging tickets to local shows, to providing newspapers and secure luggage storage.",
  },
  {
    responseCode: 'early_check_in_late_check_out',
    category: 'Frontdesk Services',
    'hint-question': 'Early Check-in/ Late Check-out',
    'detailed-explanation':
      'Tell guests about the early checkin/ late checkout policies',
    example:
      'Check-in is at 2pm and check-out is at 10am. However, we have a 24-hour front desk and you can make a request to them to check in later if you require. Early check-in and late check-out may be subject to an extra charge and availability of rooms at the property.',
  },
  {
    responseCode: 'languages_spoken',
    category: 'Frontdesk Services',
    'hint-question': 'Languages',
    'detailed-explanation':
      'What languages can your reception and concierge staff speak?',
    example:
      "Our concierge service is second to none, and we have staff members who can serve you in English, Tagalog, Hindi, Spanish and Portuguese. Whatever you need, we're here to help!",
  },
  {
    responseCode: 'amenity_wakeup_service',
    category: 'Frontdesk Services',
    'hint-question': 'Wake-up Service',
    'detailed-explanation': 'Do you offer wake-up service to your guests?',
    example:
      'There are alarm clocks in every room; otherwise, our reception team is always glad to provide you with a friendly wake-up call.',
  },
  {
    responseCode: 'tripadvisor_rating',
    category: 'About',
    'hint-question': 'TripAdvisor Rating',
    'detailed-explanation': 'Tell guests about yout TripAdvisor rating',
    example:
      'The Hotelhas an excellent rating of 4.5 from more than 450 reviews on trip advisor.',
  },
  {
    responseCode: 'gm_contact_info',
    category: 'Frontdesk Services',
    'hint-question': 'GM Contact',
    'detailed-explanation':
      "Give General Manager contact details to a guest. It's important to offer a human contact for your hotel.",
    example: 'Our GM is x who can be reached at z.',
  },
  {
    responseCode: 'distance_airport',
    category: 'Location',
    'hint-question': 'Distance to Airport',
    'detailed-explanation': 'How far are the airports from your property?',
    example:
      'The Hotel is 22kms from the Auckland International Airport with taxis, rideshare cars and Skybus available 24/7. These transportation options will cost between $18 and $80 depending on your choice and the time of the day.',
  },
  {
    responseCode: 'whats_nearby',
    category: 'Location',
    'hint-question': 'Local Attractions',
    'detailed-explanation':
      'Tell guests about the key milestones and distance from your property.',
    example:
      'In the centre of Auckland city, the Hotel is surrounded by gorgeous sights and sounds. With buskers performing live music on every corner, there are many restaurants and shops to explore across the CBD. Supermarkets surround the hotel at less than 200 meters away, while the property is also within walking distance of these great exhibits: the Waterfront (500 meters away), the Sky Tower (750 meters), and Auckland Museum (2.4km).',
  },
  {
    responseCode: 'amenity_shops',
    category: 'Location',
    'hint-question': 'Shopping Options',
    'detailed-explanation':
      'Tell guests about the shopping options around your property.',
    example:
      'There are several great shops on the Street, just outside the Hotel.',
  },
  {
    responseCode: 'beach_nearby',
    category: 'Location',
    'hint-question': 'Shopping Options',
    'detailed-explanation':
      'Tell guests about the shopping options around your property.',
    example:
      'There are several great shops on the Street, just outside the Hotel.',
  },
  {
    responseCode: 'cruise_ship_distance',
    category: 'Location',
    'hint-question': 'Cruise Terminal',
    'detailed-explanation': 'How far are you from the cruise terminal?',
    example: 'Cruise terminal is walking distance from the hotel.',
  },
  {
    responseCode: 'alcohol_smoking_drugs_consumption',
    category: 'Smoking',
    'hint-question': 'Smoking Allowed',
    'detailed-explanation': 'Can guests smoke in common areas or in any rooms?',
    example:
      'This is a smoke-free property. We apologise for any inconvenience this may cause.',
  },
  {
    responseCode: 'pets_allowed',
    category: 'Pets',
    'hint-question': 'Pets Allowed',
    'detailed-explanation':
      'Can guests bring pets in rooms or any common areas?',
    example:
      'At this time, we are not accepting pets at the Hotel Grand Windsor. Our apologies for any inconvenience this may cause.',
  },
  {
    responseCode: 'booking_cancellation',
    category: 'Booking',
    'hint-question': 'Cancellation Policy',
    'detailed-explanation': 'What is your cancellation policy?',
    example:
      'For flexible fares, the guest can cancel free of charge until 3 days before arrival. The guest will be charged the total price if they cancel in the 3 days before arrival. For non-refundable bookings, the guest will be charged the total price if they cancel at any time.',
  },
  {
    responseCode: 'children_and_extra_bed',
    category: 'Booking',
    'hint-question': 'Children & Extra Beds',
    'detailed-explanation':
      'Do guests pay for children and extra beds, and how much?',
    example:
      'Children up to and including 5 years old can stay for free. Children between 6 and 12 years and extra adults stay for NZ$55.00 per person per night when using and available extra rollaway beds. We do not charge for cribs for babies',
  },
  {
    responseCode: 'group_booking',
    category: 'Booking',
    'hint-question': 'Group Booking',
    'detailed-explanation':
      'What is the best way to contact you for group bookings?',
    example:
      'We are always happy to accept group bookings. Please note that large bookings may be subject to availability due to the number of rooms required.',
  },
  {
    responseCode: 'winz_quote',
    category: 'Booking',
    'hint-question': 'Winz Quotes',
    'detailed-explanation': 'Do you provide Winz quotes (New Zealand only)?',
    example:
      "Our hotels are dedicated to a culture of inclusivity. It's important that all of our guests feel comfortable and have a positive experience with us.",
  },
  {
    responseCode: 'event_bookings',
    category: 'Booking',
    'hint-question': 'Event Bookings',
    'detailed-explanation':
      'DO you offer space for events and special occassions, and how to guests enquire?',
    example:
      'We are always happy to accept books for special occasions. Please note that this may be subject to availability.',
  },
  {
    responseCode: 'christmas_newyear_event',
    category: 'Booking',
    'hint-question': 'Christmas and New Year',
    'detailed-explanation':
      'Do you have any special New Year or Christmas events at the property?',
    example:
      'We have a special Christmas menu available on Christmas Day. You may also book reservations for dinner at the restaurant any time during Christmas week from our regular a-la-carte menu.',
  },
  {
    responseCode: 'payment_options',
    category: 'Booking',
    'hint-question': 'Payment Methods',
    'detailed-explanation':
      'Tell guests all the ways they can pay online or at the property.',
    example:
      'We accept payment in cash, EFTPOS and all major credit card providers when paying at the property. You can reserve or pay online using all major credit cards. ',
  },
  {
    responseCode: 'payment_options_bond',
    category: 'Booking',
    'hint-question': 'Security Deposit',
    'detailed-explanation':
      'Do you take any security deposits either in advance or on arrival?',
    example:
      'When you check in you need to swipe your card for verification. We do not take any deposit.',
  },
  {
    responseCode: 'career_interest',
    category: 'Internal',
    'hint-question': 'Career Interest',
    'detailed-explanation':
      'Tell potential staff how to apply for a job in your property.',
    example:
      'If you are interested in working for our property please send your latest CV to info@bobhotels.com. Someone will be in touch with you soon.',
  },
];

export default data;
