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

  /**
   * Create a new Massage type response
   * @param responseDto
   */
  @Post('/messages')
  createMessages(@Body() responseDto: ResponseDto) {
    return this.botResponseService.createMessages(responseDto);
  }

  /**
   * Update a Massage type response
   * @param responseDto
   */
  @Put('/messages')
  updateMessages(@Body() responseDto: ResponseDto) {
    return this.botResponseService.updateMessages(responseDto);
  }

  /**
   * Update a Massage-link type response
   * @param responseDto
   */
  @Put('/messages-link')
  updateLink(@Body() responseDto: ResponseDto) {
    return this.botResponseService.updateLink(responseDto);
  }

  /**
   * Update a Massage-Image-Carousel type response
   * @param responseDto
   */
  @Put('/messages-image-Carousel')
  updateImageCarousel(@Body() responseDto: ResponseDto) {
    return this.botResponseService.updateImageCarousel(responseDto);
  }

  // @Put('link')
  // createLink(@Body() createLinkDto: ResponseDto) {
  //   return this.botResponseService.createLink(createLinkDto);
  // }
}
