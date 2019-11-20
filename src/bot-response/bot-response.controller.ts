import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Res,
  Query,
} from '@nestjs/common';
import { BotResponseService } from './bot-response.service';
import { ResponseDto } from './dto/create-response.dto';
import { Response } from 'express';

@Controller('api/bot-response')
export class BotResponseController {
  constructor(private readonly botResponseService: BotResponseService) {}

  @Put('/:code/delete')
  async deleteResponse(
    @Res() res: Response,
    @Param('code') code,
    @Body('PropertyId') propertyId,
    @Body('GroupId') groupId
  ) {
    const result = await this.botResponseService.deleteResponse(
      code,
      propertyId,
      groupId
    );
    if (result === 'error') {
      return res.status(404).send(`${code} not found!`);
    } else {
      return res.status(202).send(`${code} is deleted!`);
    }
  }

  @Get('/about-property-response')
  getAboutPropertyResponse(
    @Query('property_id') propertyId,
    @Query('group_id') groupId
  ) {
    return this.botResponseService.getAboutPropertyResponse(
      propertyId,
      groupId
    );
  }

  @Get('/property-facilities-response')
  getPropertyFacilitiesResponse(
    @Query('property_id') propertyId,
    @Query('group_id') groupId
  ) {
    return this.botResponseService.getPropertyFacilitiesResponse(
      propertyId,
      groupId
    );
  }

  @Get('/room-amenities-response')
  getRoomAmenitiesResponse(
    @Query('property_id') propertyId,
    @Query('group_id') groupId
  ) {
    return this.botResponseService.getRoomAmenitiesResponse(
      propertyId,
      groupId
    );
  }

  @Get('/test-response')
  getTestResponse(
    @Query('property_id') propertyId,
    @Query('group_id') groupId
  ) {
    return this.botResponseService.getTestResponse(propertyId, groupId);
  }

  /**
   * Create a new Massage type response
   * @param responseDto
   */
  @Post('/messages')
  createMessages(@Body() responseDto: ResponseDto) {
    return this.botResponseService.createMessages(responseDto);
  }

  @Put('/update-response')
  updateResponse(@Body() responseDto: ResponseDto) {
    return this.botResponseService.updateResponse(responseDto);
  }

  // @Put('link')
  // createLink(@Body() createLinkDto: ResponseDto) {
  //   return this.botResponseService.createLink(createLinkDto);
  // }
}
