import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
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

// Error codes
enum ErrorCode {
  Success = 0,
  UserNotFound = 1,
  InsufficientBalance = 2,
  InvalidRequest = 3,
  TransactionNotFound = 4,
  DuplicateTransaction = 5,
  SystemError = 99,
}

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async onModuleInit() {
    await this.seedInitialUser();
  }

  private async seedInitialUser() {
    const existingUser = await this.userModel.findOne({ Username: 'player1' });
    
    if (!existingUser) {
      const newUser = new this.userModel({
        Username: 'player1',
        password: 'password1',
        AccountName: 'Account1',
        Balance: this.toDecimal128(1000000),
      });
      await newUser.save();
      console.log('Initial user created: player1');
    } else {
      console.log('Initial user already exists: player1');
    }
  }

  private getBalanceAsNumber(balance: mongoose.Types.Decimal128): number {
    return parseFloat(balance.toString());
  }

  private toDecimal128(value: number): mongoose.Types.Decimal128 {
    return mongoose.Types.Decimal128.fromString(value.toString());
  }

  async getBalance(dto: GetBalanceDto): Promise<GetBalanceResponseDto> {
    try {
      const user = await this.userModel.findOne({ Username: dto.Username });

      if (!user) {
        return {
          AccountName: '',
          Balance: 0,
          ErrorCode: ErrorCode.UserNotFound,
          ErrorMessage: 'User not found',
        };
      }

      return {
        AccountName: user.AccountName,
        Balance: this.getBalanceAsNumber(user.Balance),
        ErrorCode: ErrorCode.Success,
        ErrorMessage: 'Success',
      };
    } catch (error) {
      return {
        AccountName: '',
        Balance: 0,
        ErrorCode: ErrorCode.SystemError,
        ErrorMessage: error.message || 'System error',
      };
    }
  }

  async deduct(dto: DeductDto): Promise<DeductResponseDto> {
    try {
      const user = await this.userModel.findOne({ Username: dto.Username });

      if (!user) {
        return {
          AccountName: '',
          Balance: 0,
          ErrorCode: ErrorCode.UserNotFound,
          ErrorMessage: 'User not found',
          BetAmount: 0,
        };
      }

      const currentBalance = this.getBalanceAsNumber(user.Balance);
      
      if (currentBalance < dto.Amount) {
        return {
          AccountName: user.AccountName,
          Balance: currentBalance,
          ErrorCode: ErrorCode.InsufficientBalance,
          ErrorMessage: 'Insufficient balance',
          BetAmount: 0,
        };
      }

      const newBalance = currentBalance - dto.Amount;
      user.Balance = this.toDecimal128(newBalance);
      await user.save();

      return {
        AccountName: user.AccountName,
        Balance: newBalance,
        ErrorCode: ErrorCode.Success,
        ErrorMessage: 'Success',
        BetAmount: dto.Amount,
      };
    } catch (error) {
      return {
        AccountName: '',
        Balance: 0,
        ErrorCode: ErrorCode.SystemError,
        ErrorMessage: error.message || 'System error',
        BetAmount: 0,
      };
    }
  }

  async settle(dto: SettleDto): Promise<SettleResponseDto> {
    try {
      const user = await this.userModel.findOne({ Username: dto.Username });

      if (!user) {
        return {
          AccountName: '',
          Balance: 0,
          ErrorCode: ErrorCode.UserNotFound,
          ErrorMessage: 'User not found',
        };
      }

      const currentBalance = this.getBalanceAsNumber(user.Balance);
      // WinLoss can be positive (win) or negative (loss)
      const newBalance = currentBalance + dto.WinLoss;
      user.Balance = this.toDecimal128(newBalance);
      await user.save();

      return {
        AccountName: user.AccountName,
        Balance: newBalance,
        ErrorCode: ErrorCode.Success,
        ErrorMessage: 'Success',
      };
    } catch (error) {
      return {
        AccountName: '',
        Balance: 0,
        ErrorCode: ErrorCode.SystemError,
        ErrorMessage: error.message || 'System error',
      };
    }
  }

  async rollback(dto: RollbackDto): Promise<RollbackResponseDto> {
    try {
      const user = await this.userModel.findOne({ Username: dto.Username });

      if (!user) {
        return {
          AccountName: '',
          Balance: 0,
          ErrorCode: ErrorCode.UserNotFound,
          ErrorMessage: 'User not found',
        };
      }

      // In a real implementation, you would look up the original transaction
      // and reverse it. For this fake agent, we just return current balance.
      return {
        AccountName: user.AccountName,
        Balance: this.getBalanceAsNumber(user.Balance),
        ErrorCode: ErrorCode.Success,
        ErrorMessage: 'Success',
      };
    } catch (error) {
      return {
        AccountName: '',
        Balance: 0,
        ErrorCode: ErrorCode.SystemError,
        ErrorMessage: error.message || 'System error',
      };
    }
  }

  async cancel(dto: CancelDto): Promise<CancelResponseDto> {
    try {
      const user = await this.userModel.findOne({ Username: dto.Username });

      if (!user) {
        return {
          AccountName: '',
          Balance: 0,
          ErrorCode: ErrorCode.UserNotFound,
          ErrorMessage: 'User not found',
        };
      }

      // In a real implementation, you would look up the transaction
      // and cancel/refund it. For this fake agent, we just return current balance.
      return {
        AccountName: user.AccountName,
        Balance: this.getBalanceAsNumber(user.Balance),
        ErrorCode: ErrorCode.Success,
        ErrorMessage: 'Success',
      };
    } catch (error) {
      return {
        AccountName: '',
        Balance: 0,
        ErrorCode: ErrorCode.SystemError,
        ErrorMessage: error.message || 'System error',
      };
    }
  }

  async bonus(dto: BonusDto): Promise<BonusResponseDto> {
    try {
      const user = await this.userModel.findOne({ Username: dto.Username });

      if (!user) {
        return {
          AccountName: '',
          Balance: 0,
          ErrorCode: ErrorCode.UserNotFound,
          ErrorMessage: 'User not found',
        };
      }

      const currentBalance = this.getBalanceAsNumber(user.Balance);
      const newBalance = currentBalance + dto.Amount;
      user.Balance = this.toDecimal128(newBalance);
      await user.save();

      return {
        AccountName: user.AccountName,
        Balance: newBalance,
        ErrorCode: ErrorCode.Success,
        ErrorMessage: 'Success',
      };
    } catch (error) {
      return {
        AccountName: '',
        Balance: 0,
        ErrorCode: ErrorCode.SystemError,
        ErrorMessage: error.message || 'System error',
      };
    }
  }

  async getBetStatus(dto: GetBetStatusDto): Promise<GetBetStatusResponseDto> {
    try {
      const user = await this.userModel.findOne({ Username: dto.Username });

      if (!user) {
        return {
          TransferCode: dto.TransferCode,
          TransactionId: dto.TransactionId,
          Status: 'Unknown',
          WinLoss: 0,
          Stake: 0,
          ErrorCode: ErrorCode.UserNotFound,
          ErrorMessage: 'User not found',
        };
      }

      // In a real implementation, you would look up the bet status
      // from a transactions collection. For this fake agent, we return a mock response.
      return {
        TransferCode: dto.TransferCode,
        TransactionId: dto.TransactionId,
        Status: 'Settled',
        WinLoss: 0,
        Stake: 0,
        ErrorCode: ErrorCode.Success,
        ErrorMessage: 'Success',
      };
    } catch (error) {
      return {
        TransferCode: dto.TransferCode,
        TransactionId: dto.TransactionId,
        Status: 'Error',
        WinLoss: 0,
        Stake: 0,
        ErrorCode: ErrorCode.SystemError,
        ErrorMessage: error.message || 'System error',
      };
    }
  }
}
