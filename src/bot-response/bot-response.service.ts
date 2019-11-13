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
  async deleteResponse(code) {
    console.log('code', code);
    const result = await this.delResponse(code);
    return result;
  }

  delResponse = async (code: string) => {
    try {
      return await Axios({
        method: 'put',
        url: `https://conapi.devtest.bookmebob.com/bot-responses/${code}/delete`,
        data: {
          GroupId: '73574010-2f33-4b41-8b8a-09d18b025a56',
          Language: 'en-US',
          Channel: 'WebsiteDirectLine',
          PropertyId: 'e655dab2-987b-4683-ad9b-599814b414b6',
        },
        auth: {
          username: 'bot',
          password: 'bac99f72-8ee9-4308-a68a-59ecd0b677c9',
        },
      });
    } catch (error) {
      console.error(error);
      return 'error';
    }
  };

  async getAboutPropertyResponse() {
    return buildFormatedTestResponse(propertyInformation);
  }

  async getPropertyFacilitiesResponse() {
    return buildFormatedTestResponse(propertyAmenities);
  }

  async getRoomAmenitiesResponse() {
    return buildFormatedTestResponse(RoomAmenities);
  }

  async getTestResponse() {
    return buildFormatedTestResponse(testExample);
  }

  /* Messages */
  async updateMessages(responseDto: ResponseDto): Promise<any> {
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
        url: `https://conapi.devtest.bookmebob.com/bot-responses/messages/${Code}`,
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
          password: 'bac99f72-8ee9-4308-a68a-59ecd0b677c9',
        },
      }).then(() => {
        return `Update Messages ${Code} successfully!`;
      });
    } catch (error) {
      console.error(error);
      throw Error('Bff get some problems.');
    }
  }

  /* Link */
  async updateLink(responseDto: ResponseDto): Promise<any> {
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
        url: `https://conapi.devtest.bookmebob.com/bot-responses/messages-link/${Code}`,
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
          password: 'bac99f72-8ee9-4308-a68a-59ecd0b677c9',
        },
      }).then(() => {
        return `Update Link ${Code} successfully!`;
      });
    } catch (error) {
      console.error(error);
      throw Error('Bff get some problems.');
    }
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
        url: `https://conapi.devtest.bookmebob.com/bot-responses/messages`,
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
          password: 'bac99f72-8ee9-4308-a68a-59ecd0b677c9',
        },
      }).then(() => {
        return `Create Messages ${Code} successfully!`;
      });
    } catch (error) {
      console.error(error);
      throw Error('Bff get some problems.');
    }
  }
}
