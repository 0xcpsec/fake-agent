import { IsString, IsInt, IsOptional, IsNumber, IsDateString, IsObject } from 'class-validator';

export class DeductDto {
  @IsNumber()
  Amount: number;

  @IsString()
  TransferCode: string;

  @IsString()
  TransactionId: string;

  @IsDateString()
  BetTime: string;

  @IsOptional()
  @IsString()
  GameRoundId?: string;

  @IsOptional()
  @IsString()
  GamePeriodId?: string;

  @IsOptional()
  @IsString()
  OrderDetail?: string;

  @IsOptional()
  @IsString()
  PlayerIp?: string;

  @IsOptional()
  @IsString()
  GameTypeName?: string;

  @IsString()
  CompanyKey: string;

  @IsString()
  Username: string;

  @IsInt()
  ProductType: number;

  @IsInt()
  GameType: number;

  @IsOptional()
  @IsInt()
  NewGameType?: number;

  @IsOptional()
  @IsInt()
  GameId?: number;

  @IsOptional()
  @IsInt()
  Gpid?: number;

  @IsOptional()
  @IsObject()
  ExtraInfo?: object;

  @IsOptional()
  @IsObject()
  SeamlessGameExtraInfo?: object;
}

export class DeductResponseDto {
  AccountName: string;
  Balance: number;
  ErrorCode: number;
  ErrorMessage: string;
  BetAmount: number;
}
