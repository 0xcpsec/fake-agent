### API Overview

All API requests are sent via **HTTP POST**.
Each request must include the following header:

```
Content-Type: application/json; charset=UTF-8
```

## 1. `/GetBalance`

### Request Body

```json
{
    "CompanyKey": string,
    "Username": string,
    "ProductType": int,
    "GameType": int,
    "Gpid": int // Optional
}
```

### Response

```json
{
    "AccountName": string,
    "Balance": decimal,
    "ErrorCode": int,
    "ErrorMessage": string
}
```

---

## 2. `/Deduct`

### Request Body

```json
{
    "Amount": decimal,
    "TransferCode": string,
    "TransactionId": string,
    "BetTime": dateTime,
    "GameRoundId": string, // Optional
    "GamePeriodId": string, // Optional
    "OrderDetail": string, // Optional
    "PlayerIp": string, // Optional
    "GameTypeName": string, // Optional
    "CompanyKey": string,
    "Username": string,
    "ProductType": int,
    "GameType": int,
    "NewGameType": int, // Optional
    "GameId": int, // Optional
    "Gpid": int, // Optional
    "ExtraInfo": object, // Optional
    "SeamlessGameExtraInfo": object // Optional
}
```

### Response

```json
{
    "AccountName": string,
    "Balance": decimal,
    "ErrorCode": int,
    "ErrorMessage": string,
    "BetAmount": decimal
}
```

---

## 3. `/Settle`

### Request Body

```json
{
    "TransferCode": string,
    "WinLoss": decimal,
    "ResultType": int,
    "ResultTime": dateTime,
    "CommissionStake": decimal,
    "GameResult": string,
    "CompanyKey": string,
    "Username": string,
    "ProductType": int,
    "GameType": int,
    "Gpid": int, // Optional
    "IsCashOut": bool,
    "ExtraInfo": object, // Optional
    "SeamlessGameExtraInfo": object // Optional
}
```

### Response

```json
{
    "AccountName": string,
    "Balance": decimal,
    "ErrorCode": int,
    "ErrorMessage": string
}
```

---

## 4. `/Rollback`

### Request Body

```json
{
    "CompanyKey": string,
    "Username": string,
    "TransferCode": string,
    "ProductType": int,
    "GameType": int,
    "Gpid": int, // Optional
    "ExtraInfo": object // Optional
}
```

### Response

```json
{
    "AccountName": string,
    "Balance": decimal,
    "ErrorCode": int,
    "ErrorMessage": string
}
```

---

## 5. `/Cancel`

### Request Body

```json
{
    "CompanyKey": string,
    "Username": string,
    "TransferCode": string,
    "ProductType": int,
    "GameType": int,
    "IsCancelAll": bool,
    "TransactionId": string, // Optional
    "Gpid": int, // Optional
    "ExtraInfo": object // Optional
}
```

### Response

```json
{
    "AccountName": string,
    "Balance": decimal,
    "ErrorCode": int,
    "ErrorMessage": string
}
```

---

## 6. `/Bonus`

### Request Body

```json
{
    "CompanyKey": string,
    "Username": string,
    "Amount": int,
    "BonusTime": dateTime,
    "IsGameProviderPromotion": bool, // Optional
    "ProductType": int,
    "GameType": int,
    "NewGameType": int, // Optional
    "TransferCode": string,
    "TransactionId": string,
    "GameId": int, // Optional
    "Gpid": int, // Optional
    "SeamlessGameExtraInfo": object, // Optional
    "BonusProvider": string // Optional
}
```

### Response

```json
{
    "AccountName": string,
    "Balance": decimal,
    "ErrorCode": int,
    "ErrorMessage": string
}
```

---

## 7. `/GetBetStatus`

### Request Body

```json
{
    "CompanyKey": string,
    "Username": string,
    "ProductType": int,
    "GameType": int,
    "TransferCode": string,
    "TransactionId": string,
    "Gpid": int // Optional
}
```

### Response

```json
{
    "TransferCode": string,
    "TransactionId": string,
    "Status": string,
    "WinLoss": decimal,
    "Stake": decimal,
    "ErrorCode": int,
    "ErrorMessage": string
}
```