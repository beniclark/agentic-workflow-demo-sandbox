# Sample API (docs intentionally drifted)

> ⚠️ This README is out of date on purpose. The Documentation Sync agent
> should detect the drift and open a PR that rewrites the `createUser`
> section to match the current signature in `src/api.js`.

## Installation

```bash
npm install @example/demo-api
```

## Quick start

### Create a user

```js
const { createUser } = require("@example/demo-api");

const user = await createUser({ name: "Ada Lovelace", email: "ada@example.com" });
console.log(user.id, user.email);
```

`createUser(payload)` accepts a `{ name, email, role? }` object and returns a
`{ id, name, email, role, createdAt }` object.

### Look up a user

```js
const { getUser } = require("@example/demo-api");

const user = await getUser("abc123");
```

## API reference

| Function | Signature | Returns |
|----------|-----------|---------|
| `createUser` | `createUser(payload)` | `{ id, name, email, role, createdAt }` |
| `getUser`    | `getUser(id)`             | `user \| null` |

## Changelog

- **v0.9** — initial release with `createUser(name, email)`.
- _(docs end here; v1.0 shipped a new payload-based signature but the
  README was never updated — that's what the agent will fix)._
