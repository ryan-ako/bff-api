import { PropertyService } from './property.service';
export declare class PropertyController {
    private readonly propertyServive;
    constructor(propertyServive: PropertyService);
    getPropertiesList(): Promise<any>;
}
