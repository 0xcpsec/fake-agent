import { IsString, IsInt, IsOptional } from 'class-validator';

export class GetBetStatusDto {
  @IsString()
  CompanyKey: string;

  @IsString()
  Username: string;

  @IsInt()
  ProductType: number;

  @IsInt()
  GameType: number;

  @IsString()
  TransferCode: string;

  @IsString()
  TransactionId: string;

  @IsOptional()
  @IsInt()
  Gpid?: number;
}

export class GetBetStatusResponseDto {
  TransferCode: string;
  TransactionId: string;
  Status: string;
  WinLoss: number;
  Stake: number;
  ErrorCode: number;
  ErrorMessage: string;
}
