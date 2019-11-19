import { Controller, Get, Post, Query, Param } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('/api/property')
export class PropertyController {
  constructor(private readonly propertyServive: PropertyService) {}

  @Get('/')
  getPropertiesList(@Query('group_id') groupId) {
    return this.propertyServive.getPropertiesList(groupId);
  }
}
