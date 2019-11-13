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

  @Get('/about-property-response')
  getAboutPropertyResponse() {
    return this.botResponseService.getAboutPropertyResponse();
  }

  @Get('/property-facilities-response')
  getPropertyFacilitiesResponse() {
    return this.botResponseService.getPropertyFacilitiesResponse();
  }

  @Get('/room-amenities-response')
  getRoomAmenitiesResponse() {
    return this.botResponseService.getRoomAmenitiesResponse();
  }

  @Get('/test-response')
  getTestResponse() {
    return this.botResponseService.getTestResponse();
  }

  @Post('/messages')
  createMessages(@Body() updateMessagesDto: ResponseDto) {
    return this.botResponseService.createMessages(updateMessagesDto);
  }

  @Put('/messages')
  updateMessages(@Body() updateMessagesDto: ResponseDto) {
    return this.botResponseService.updateMessages(updateMessagesDto);
  }

  @Put('/messages-link')
  updateLink(@Body() updateMessagesDto: ResponseDto) {
    return this.botResponseService.updateLink(updateMessagesDto);
  }

  // @Put('link')
  // createLink(@Body() createLinkDto: ResponseDto) {
  //   return this.botResponseService.createLink(createLinkDto);
  // }
}
