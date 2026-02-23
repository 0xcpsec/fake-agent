# Fake Agent - NestJS Seamless Wallet API

A NestJS server that implements a Seamless wallet API with MongoDB/Mongoose.

## Prerequisites

- Node.js (v18+)
- MongoDB running locally or a MongoDB connection string

## Installation

```bash
npm install
```

## Configuration

Set the `MONGODB_URI` environment variable to your MongoDB connection string, or the app will default to:
```
mongodb://localhost:27017/fake-agent
```

## Running the App

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The server runs on port 3000 by default (configurable via `PORT` environment variable).

## API Endpoints

All endpoints use **POST** method with `Content-Type: application/json; charset=UTF-8`.

| Endpoint | Description |
|----------|-------------|
| `/GetBalance` | Get user balance |
| `/Deduct` | Deduct amount from user balance |
| `/Settle` | Settle a bet with win/loss |
| `/Rollback` | Rollback a transaction |
| `/Cancel` | Cancel a transaction |
| `/Bonus` | Add bonus to user balance |
| `/GetBetStatus` | Get status of a bet |

## Database Schema

The `users` collection stores:

```typescript
{
  Username: string;      // unique, indexed
  password: string;      // not returned in queries
  AccountName: string;   // unique
  Balance: Decimal128;   // user balance
}
```

## Example Request

```bash
curl -X POST http://localhost:4000/GetBalance \
  -H "Content-Type: application/json; charset=UTF-8" \
  -d '{
    "CompanyKey": "test",
    "Username": "testuser",
    "ProductType": 1,
    "GameType": 1
  }'
```
