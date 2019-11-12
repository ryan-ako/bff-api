import { Controller, Get, Post, Body, Put, Param, Res } from '@nestjs/common';
import { BotResponseService } from './bot-response.service';
import { ResponseDto } from './dto/create-response.dto';
import { Response } from 'express';

@Controller('api/bot-response')
export class BotResponseController {
  constructor(private readonly botResponseService: BotResponseService) {}

  @Put('/:code/delete')
  async deleteResponse(@Res() res: Response, @Param() param) {
    const result = await this.botResponseService.deleteResponse(param.code);
    if (result === 'error') {
      return res.status(404).send(`${param.code} not found!`);
    } else {
      return res.status(202).send(`${param.code} is deleted!`);
    }
  }

  @Get('/property-information-response')
  getPropertyInformationResponse() {
    return this.botResponseService.getPropertyInformationResponse();
  }

  @Get('/property-amenities-response')
  getPropertyAmenitiesResponse() {
    return this.botResponseService.getPropertyAmenitiesResponse();
  }

  @Get('/room-amenities-response')
  getRoomAmenitiesResponse() {
    return this.botResponseService.getRoomAmenitiesResponse();
  }

  @Put('messages/')
  createMessages(@Body() updateMessagesDto: ResponseDto) {
    return this.botResponseService.updateMessages(updateMessagesDto);
  }

  // @Put('link')
  // createLink(@Body() createLinkDto: ResponseDto) {
  //   return this.botResponseService.createLink(createLinkDto);
  // }
}
