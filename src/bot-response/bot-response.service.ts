import { Injectable, Res } from '@nestjs/common';
import Axios from 'axios';
import { buildFormatedTestResponse } from './buildFormatedResponse';
import { ResponseDto } from './dto/create-response.dto';
import propertyInformation from './data/propertyInformation';
import propertyAmenities from './data/propertyAmenities';
import RoomAmenities from './data/roomAmenities';
import testExample from './data/testExample';
import { Request, Response } from 'express';

@Injectable()
export class BotResponseService {
  async deleteResponse(code, propertyId, groupId) {
    console.log('code', code);
    console.log('propertyId', propertyId);
    console.log('groupId', groupId);
    const result = await this.delResponse(code, propertyId, groupId);
    return result;
  }

  delResponse = async (code: string, propertyId: string, groupId: string) => {
    try {
      return await Axios({
        method: 'put',
        url: `https://conapi.bookmebob.com/bot-responses/${code}/delete`,
        data: {
          GroupId: groupId,
          Language: 'en-US',
          Channel: 'WebsiteDirectLine',
          PropertyId: propertyId,
        },
        auth: {
          username: 'bot',
          password: '331098F1-D73B-41B0-9810-62EDFDEE853A',
        },
      });
    } catch (error) {
      console.error(error);
      return 'error';
    }
  };

  async getAboutPropertyResponse(propertyId, groupId) {
    return buildFormatedTestResponse(propertyInformation, propertyId, groupId);
  }

  async getPropertyFacilitiesResponse(propertyId, groupId) {
    return buildFormatedTestResponse(propertyAmenities, propertyId, groupId);
  }

  async getRoomAmenitiesResponse(propertyId, groupId) {
    return buildFormatedTestResponse(RoomAmenities, propertyId, groupId);
  }

  async getTestResponse(propertyId, groupId) {
    return buildFormatedTestResponse(testExample, propertyId, groupId);
  }

  async createMessages(responseDto: ResponseDto): Promise<any> {
    const {
      Code,
      GroupId,
      Language,
      Channel,
      PropertyId,
      Default,
      Overrides,
    } = responseDto;

    try {
      return await Axios({
        method: 'post',
        url: `https://conapi.bookmebob.com/bot-responses/messages`,
        data: {
          GroupId,
          Code,
          Language,
          Channel,
          PropertyId,
          Default,
          Overrides,
        },
        auth: {
          username: 'bot',
          password: '331098F1-D73B-41B0-9810-62EDFDEE853A',
        },
      }).then(() => {
        return `Create Messages ${Code} successfully!`;
      });
    } catch (error) {
      console.error(error);
      throw Error('Bff get some problems.');
    }
  }

  async updateResponse(responseDto: ResponseDto): Promise<any> {
    const {
      Code,
      GroupId,
      Language,
      Channel,
      PropertyId,
      Default,
      Overrides,
    } = responseDto;
    try {
      return await Axios({
        method: 'put',
        url: `https://conapi.bookmebob.com/bot-responses/${Code}`,
        data: {
          GroupId,
          Language,
          Channel,
          PropertyId,
          Default,
          Overrides,
        },
        auth: {
          username: 'bot',
          password: '331098F1-D73B-41B0-9810-62EDFDEE853A',
        },
      }).then(() => {
        return `Update Link ${Code} successfully!`;
      });
    } catch (error) {
      console.error(error);
      throw Error('Bff get some problems.');
    }
  }
}
