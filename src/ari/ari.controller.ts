import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AriService } from './ari.service';

@Controller('api/ari')
export class AriController {
  constructor(private readonly ariServive: AriService) {}
  @Get('rooms')
  getAllRooms() {
    return this.ariServive.getAllRooms();
  }

  /**
   *
   * @param rate_id
   * @param room_id
   * @param date
   */
  @Get('room')
  getRoomByDate(
    @Query('rate_id') rate_id: string,
    @Query('room_id') room_id: string,
    @Query('date') date: string,
  ) {
    return this.ariServive.getRoomByDate({ rate_id, room_id, date });
  }

  @Post('reservations')
  createReservations(@Body() body) {
    return this.ariServive.createReservations(body);
  }
}
