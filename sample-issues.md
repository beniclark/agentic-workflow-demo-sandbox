# Sample issue bodies for the triage demo

Paste one of these into a new GitHub issue in the sandbox repo to trigger
the triage workflow. The chosen labels and comment are shown for each —
use them to set audience expectations before the agent runs.

---

## 1. Clear bug report (expect: `bug`, `area/api`)

**Title:** `createUser returns 500 when email contains a plus sign`

**Body:**

```
### Steps to reproduce
1. POST /api/users with body `{"email":"a+b@example.com","name":"A"}`
2. Observe 500 response

### Expected
201 Created, user persisted.

### Actual
500 Internal Server Error, stack trace points at `validateEmail()`.

### Environment
- server v1.4.2
- node 20.11
```

---

## 2. Feature request (expect: `enhancement`, `area/ui`)

**Title:** `Dark mode for the settings page`

**Body:**

```
The rest of the app supports a dark theme but the `/settings` page is
still hard-coded to the light palette. Would love to see it respect the
same `prefers-color-scheme` switch.
```

---

## 3. Missing info (expect: `needs-info`, maybe `bug`)

**Title:** `It doesnt work`

**Body:**

```
hi, the thing isnt working when i click the button. pls fix
```

---

## 4. Docs issue (expect: `documentation`, `area/docs`)

**Title:** `README still shows the pre-v1 createUser signature`

**Body:**

```
The quick-start in the README uses `createUser(name, email)` but the
exported function is `createUser(payload)` as of v1.0. Mismatched docs
trip up every new integrator.
```
