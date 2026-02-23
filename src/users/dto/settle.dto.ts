import { IsString, IsInt, IsOptional, IsNumber, IsDateString, IsBoolean, IsObject } from 'class-validator';

export class SettleDto {
  @IsString()
  TransferCode: string;

  @IsNumber()
  WinLoss: number;

  @IsInt()
  ResultType: number;

  @IsDateString()
  ResultTime: string;

  @IsNumber()
  CommissionStake: number;

  @IsString()
  GameResult: string;

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
  Gpid?: number;

  @IsBoolean()
  IsCashOut: boolean;

  @IsOptional()
  @IsObject()
  ExtraInfo?: object;

  @IsOptional()
  @IsObject()
  SeamlessGameExtraInfo?: object;
}

export class SettleResponseDto {
  AccountName: string;
  Balance: number;
  ErrorCode: number;
  ErrorMessage: string;
}
