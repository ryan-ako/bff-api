import { Controller, Get, Post } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('api/property')
export class PropertyController {
  constructor(private readonly propertyServive: PropertyService) {}

  @Get('/properties')
  getPropertiesList() {
    return this.propertyServive.getPropertiesList();
  }
}
