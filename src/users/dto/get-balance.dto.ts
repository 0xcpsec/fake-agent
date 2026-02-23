import { IsString, IsInt, IsOptional } from 'class-validator';

export class GetBalanceDto {
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
}

export class GetBalanceResponseDto {
  AccountName: string;
  Balance: number;
  ErrorCode: number;
  ErrorMessage: string;
}
