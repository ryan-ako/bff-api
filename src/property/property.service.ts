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

  async getPropertiesList() {
    return this.properties;
  }
}
