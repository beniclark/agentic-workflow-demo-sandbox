# Sample API

## Installation

```bash
npm install @example/demo-api
```

## Quick start

### Create a user

```js
const { createUser } = require("@example/demo-api");

const user = await createUser({ fullName: "Ada Lovelace", emailAddress: "ada@example.com" });
console.log(user.id, user.emailAddress);
```

`createUser(payload)` accepts a payload object with `fullName`, `emailAddress`, and an optional `role` (`"admin"` or `"member"`, defaulting to `"member"`). It returns a `{ id, fullName, emailAddress, role, createdAt }` object.

### Look up a user

```js
const { getUser } = require("@example/demo-api");

const user = await getUser("abc123");
```

## API reference

| Function | Signature | Returns |
|----------|-----------|---------|
| `createUser` | `createUser({ fullName, emailAddress, role? })` | `{ id, fullName, emailAddress, role, createdAt }` |
| `getUser`    | `getUser(id)`             | `user \| null` |

## Changelog

- **v1.0** — `createUser` refactored to accept a payload object `{ fullName, emailAddress, role? }` instead of positional arguments.
- **v0.9** — initial release with `createUser(name, email)`.
