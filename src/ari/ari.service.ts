import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import roomsData from './mock-data/roomsData';

@Injectable()
export class AriService {
  private readonly roomsData: any;

  constructor() {
    this.roomsData = roomsData;
  }

  getAllRooms(): any {
    return this.roomsData;
  }

  //   async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
  async getRoomByDate({ room_id, rate_id, date }): Promise<any> {
    if (!room_id) {
      throw new BadRequestException(`Please set room_id parameter`);
    }
    if (!rate_id) {
      throw new BadRequestException(`Please set rate_id parameter`);
    }
    if (!date) {
      throw new BadRequestException(`Please set date parameter`);
    }

    const filteredDataByRateAndRoom = this.roomsData.find(
      elem => elem.room_id === room_id && elem.rate_id === rate_id,
    );

    if (!filteredDataByRateAndRoom) {
      throw new NotFoundException(
        `room with room id: ${room_id}, rate id: ${rate_id} not found!`,
      );
    }

    const filteredDatabyDate = filteredDataByRateAndRoom.data.find(
      elem => elem.date === date,
    );
    if (!filteredDatabyDate) {
      throw new NotFoundException(
        `The room with Room id: ${room_id}, Rate id: ${rate_id} at Date: ${date} not found!`,
      );
    }
    return filteredDatabyDate;
  }

  async createReservations(body): Promise<any> {
    return body;
  }
}
