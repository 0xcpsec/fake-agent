### Database

Mongoose is used as the database ORM.

- **Database name:** `fake-agent`
- **Collection name:** `users`

Each document in the `users` collection follows this schema:

```ts
{
    @Prop({ required: true, unique: true, index: true })
    Username: string;

    @Prop({ required: true, select: false })
    password: string;

    @Prop({ required: true, unique: true })
    AccountName: string;

    @Prop({ required: true })
    Balance: decimal;
}
```

### Initial User

On application startup, the following user is automatically created if it doesn't exist:

```json
{
    "Username": "User_1",
    "password": "password_1",
    "AccountName": "Account_1",
    "Balance": 1000000
}
```