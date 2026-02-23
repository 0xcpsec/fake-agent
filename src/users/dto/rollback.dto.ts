import { IsString, IsInt, IsOptional, IsObject } from 'class-validator';

export class RollbackDto {
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

  @IsOptional()
  @IsInt()
  Gpid?: number;

  @IsOptional()
  @IsObject()
  ExtraInfo?: object;
}

export class RollbackResponseDto {
  AccountName: string;
  Balance: number;
  ErrorCode: number;
  ErrorMessage: string;
}
