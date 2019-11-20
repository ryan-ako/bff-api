import { Injectable } from '@nestjs/common';
import properties from './properties';

@Injectable()
export class PropertyService {
  private readonly info: any;
  private readonly properties: any;
  private readonly corsPrefix: string;
  private readonly params: any;

  constructor() {
    this.properties = properties;
  }

  async getPropertiesList(groupId) {
    console.log('groupId', groupId);
    /** Devtest Env CPG */
    if (groupId === '73574010-2f33-4b41-8b8a-09d18b025a56') {
      return [
        {
          propertyId: '90a4959b-1aff-4b28-a8b9-8bfca448523e',
          hotelName: 'Fat Camel Backpackers',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: 'b7aa850a-8ddf-4d77-9a0a-c7ea647edbe3',
          hotelName: 'President Hotel Auckland',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: '9079894a-6cad-431a-8d91-e2636d520b46',
          hotelName: 'Greenlane Suites',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: 'e655dab2-987b-4683-ad9b-599814b414b6',
          hotelName: 'Hotel Grand Windsor MGallery by Sofitel',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: 'c8a3bb28-329d-4fe0-abcf-a5e41be95ca4',
          hotelName: 'Lake Rotorua Hotel',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: '09064615-0a38-45ff-a2da-4dcc35b4ba73',
          hotelName: 'Willis Wellington Hotel',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: 'bad0616b-1a58-48d5-bfe7-21ae8a4e6676',
          hotelName: 'Picton Yacht Club Hotel',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: '91c3942f-1664-498c-bc72-c3f42b084683',
          hotelName: 'Wains Hotel Dunedin',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: '2264530c-4af4-451e-8855-0f10dc005977',
          hotelName: 'The Station Backpackers',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
        {
          propertyId: '7a58c26d-7500-4b63-8fbd-4ac371391504',
          hotelName: 'Four Canoes Hotel',
          groupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
        },
      ];
    }
    /** Product Env CPG */
    if (groupId === '478cd87e-567d-4330-96f8-538a5e68e682') {
      return [
        {
          propertyId: '434cbdfe-8fa8-4da2-a861-9c0acd2ba2ee',
          hotelName: 'Fat Camel Backpackers',
          groupId,
        },
        {
          propertyId: 'c3e3b824-ff43-4536-93a1-941e0c45c538',
          hotelName: 'President Hotel Auckland',
          groupId,
        },
        {
          propertyId: '0211015e-f529-4f9f-a4d0-a3e3804d0546',
          hotelName: 'Greenlane Suites',
          groupId,
        },
        {
          propertyId: '597014c7-6c11-4c67-b92f-eb20e6c6cd7f',
          hotelName: 'Hotel Grand Windsor MGallery by Sofitel',
          groupId,
        },
        {
          propertyId: '6bad009b-dbc2-4a20-9ecd-c76385cc5fac',
          hotelName: 'Lake Rotorua Hotel',
          groupId,
        },
        {
          propertyId: 'eadd7e4f-caaa-4f49-a3e9-d7568a357af1',
          hotelName: 'Willis Wellington Hotel',
          groupId,
        },
        {
          propertyId: '5cc4eed8-d6df-4943-ae3b-3171864b1a86',
          hotelName: 'Picton Yacht Club Hotel',
          groupId,
        },
        {
          propertyId: 'b7f6877e-eb40-43f6-a270-f3025a4e1626',
          hotelName: 'Wains Hotel Dunedin',
          groupId,
        },
        {
          propertyId: 'f9db8dc6-12cc-49e1-872b-9fed94aa58c7',
          hotelName: 'The Station Backpackers',
          groupId,
        },
        {
          propertyId: '2e765d06-42ce-491a-baa3-38952a31d11e',
          hotelName: 'Four Canoes Hotel',
          groupId,
        },
      ];
    }
    /** Product Env YMCA */
    if (groupId === '3dbd2e6f-7454-4fe9-8ea7-1874119b00ce') {
      return [
        {
          propertyId: '1f6ecd23-795e-4c79-86f0-e786e2f57c81',
          hotelName: 'YMCA Hostel Auckland',
          groupId,
        },
        {
          propertyId: '0971a8f8-d72a-4038-9aa0-e9237392ead1',
          hotelName: 'City Lodge Auckland',
          groupId,
        },
      ];
    }
    return `Group ID ${groupId} Not Found!`;
  }
}
