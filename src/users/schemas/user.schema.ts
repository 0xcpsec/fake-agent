import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop({ required: true, unique: true, index: true })
  Username: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true, unique: true })
  AccountName: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Decimal128, default: 0 })
  Balance: mongoose.Types.Decimal128;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Helper to convert Decimal128 to number
UserSchema.set('toJSON', {
  transform: (doc, ret: Record<string, any>) => {
    if (ret.Balance) {
      ret.Balance = parseFloat(ret.Balance.toString());
    }
    return ret;
  },
});
