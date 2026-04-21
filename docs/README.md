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

// OLD (pre-v1) signature — the one in src/api.js no longer matches this.
const user = await createUser("Ada Lovelace", "ada@example.com");
console.log(user.id, user.email);
```

`createUser(name, email)` returns a `{ id, email }` pair.

### Look up a user

```js
const { getUser } = require("@example/demo-api");

const user = await getUser("abc123");
```

## API reference

| Function | Signature | Returns |
|----------|-----------|---------|
| `createUser` | `createUser(name, email)` | `{ id, email }` |
| `getUser`    | `getUser(id)`             | `user \| null` |

## Changelog

- **v0.9** — initial release with `createUser(name, email)`.
- _(docs end here; v1.0 shipped a new payload-based signature but the
  README was never updated — that's what the agent will fix)._
