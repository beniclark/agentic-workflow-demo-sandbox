// Current API — signature was refactored in v1.0 to accept a payload object.
// docs/README.md is intentionally out of date: it still shows the
// pre-v1 `createUser(name, email)` form. The docs-sync agent should
// detect this drift and open a PR that updates the docs.

/**
 * Create a new user.
 * @param {{ fullName: string, emailAddress: string, role?: "admin" | "member" }} payload
 * @returns {Promise<{ id: string, fullName: string, emailAddress: string, role: string, createdAt: string }>}
 */
async function createUser(payload) {
  if (!payload || typeof payload !== "object") {
    throw new TypeError("createUser(payload): payload object is required");
  }
  const { fullName, emailAddress, role = "member" } = payload;
  if (!fullName || !emailAddress) {
    throw new TypeError("createUser(payload): fullName and emailAddress are required");
  }
  return {
    id: cryptoRandomId(),
    name,
    email,
    role,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Look up a user by id.
 * @param {string} id
 * @returns {Promise<object | null>}
 */
async function getUser(id) {
  // elided — demo stub
  return null;
}

function cryptoRandomId() {
  return Math.random().toString(36).slice(2, 10);
}

module.exports = { createUser, getUser };
