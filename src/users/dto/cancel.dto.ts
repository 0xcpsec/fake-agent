import { IsString, IsInt, IsOptional, IsBoolean, IsObject } from 'class-validator';

export class CancelDto {
  @IsString()
  CompanyKey: string;

  @IsString()
  Username: string;

  @IsString()
  TransferCode: string;

  @IsInt()
  ProductType: number;

  @IsInt()
  GameType: number;

  @IsBoolean()
  IsCancelAll: boolean;

  @IsOptional()
  @IsString()
  TransactionId?: string;

  @IsOptional()
  @IsInt()
  Gpid?: number;

  @IsOptional()
  @IsObject()
  ExtraInfo?: object;
}

export class CancelResponseDto {
  AccountName: string;
  Balance: number;
  ErrorCode: number;
  ErrorMessage: string;
}
