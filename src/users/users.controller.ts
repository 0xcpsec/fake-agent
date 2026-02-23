import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  GetBalanceDto,
  GetBalanceResponseDto,
  DeductDto,
  DeductResponseDto,
  SettleDto,
  SettleResponseDto,
  RollbackDto,
  RollbackResponseDto,
  CancelDto,
  CancelResponseDto,
  BonusDto,
  BonusResponseDto,
  GetBetStatusDto,
  GetBetStatusResponseDto,
} from './dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('GetBalance')
  @HttpCode(HttpStatus.OK)
  async getBalance(@Body() dto: GetBalanceDto): Promise<GetBalanceResponseDto> {
    return this.usersService.getBalance(dto);
  }

  @Post('Deduct')
  @HttpCode(HttpStatus.OK)
  async deduct(@Body() dto: DeductDto): Promise<DeductResponseDto> {
    return this.usersService.deduct(dto);
  }

  @Post('Settle')
  @HttpCode(HttpStatus.OK)
  async settle(@Body() dto: SettleDto): Promise<SettleResponseDto> {
    return this.usersService.settle(dto);
  }

  @Post('Rollback')
  @HttpCode(HttpStatus.OK)
  async rollback(@Body() dto: RollbackDto): Promise<RollbackResponseDto> {
    return this.usersService.rollback(dto);
  }

  @Post('Cancel')
  @HttpCode(HttpStatus.OK)
  async cancel(@Body() dto: CancelDto): Promise<CancelResponseDto> {
    return this.usersService.cancel(dto);
  }

  @Post('Bonus')
  @HttpCode(HttpStatus.OK)
  async bonus(@Body() dto: BonusDto): Promise<BonusResponseDto> {
    return this.usersService.bonus(dto);
  }

  @Post('GetBetStatus')
  @HttpCode(HttpStatus.OK)
  async getBetStatus(@Body() dto: GetBetStatusDto): Promise<GetBetStatusResponseDto> {
    return this.usersService.getBetStatus(dto);
  }
}
