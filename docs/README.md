# Sample API

## Installation

```bash
npm install @example/demo-api
```

## Quick start

### Create a user

```js
const { createUser } = require("@example/demo-api");

const user = await createUser({ name: "Ada Lovelace", email: "ada@example.com" });
console.log(user.id, user.name, user.email, user.role, user.createdAt);
```

`createUser(payload)` accepts a `{ name, email, role? }` object (`role` defaults to `"member"`) and returns a `{ id, name, email, role, createdAt }` object.

### Look up a user

```js
const { getUser } = require("@example/demo-api");

const user = await getUser("abc123");
```

## API reference

| Function | Signature | Returns |
|----------|-----------|---------|
| `createUser` | `createUser({ name, email, role? })` | `{ id, name, email, role, createdAt }` |
| `getUser`    | `getUser(id)`             | `user \| null` |

## Changelog

- **v0.9** — initial release with `createUser(name, email)`.
- **v1.0** — `createUser` now accepts a `{ name, email, role? }` payload object; returns `{ id, name, email, role, createdAt }`.
