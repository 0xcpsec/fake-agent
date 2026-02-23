import { IsString, IsInt, IsOptional, IsBoolean, IsDateString, IsObject } from 'class-validator';

export class BonusDto {
  @IsString()
  CompanyKey: string;

  @IsString()
  Username: string;

  @IsInt()
  Amount: number;

  @IsDateString()
  BonusTime: string;

  @IsOptional()
  @IsBoolean()
  IsGameProviderPromotion?: boolean;

  @IsInt()
  ProductType: number;

  @IsInt()
  GameType: number;

  @IsOptional()
  @IsInt()
  NewGameType?: number;

  @IsString()
  TransferCode: string;

  @IsString()
  TransactionId: string;

  @IsOptional()
  @IsInt()
  GameId?: number;

  @IsOptional()
  @IsInt()
  Gpid?: number;

  @IsOptional()
  @IsObject()
  SeamlessGameExtraInfo?: object;

  @IsOptional()
  @IsString()
  BonusProvider?: string;
}

export class BonusResponseDto {
  AccountName: string;
  Balance: number;
  ErrorCode: number;
  ErrorMessage: string;
}
