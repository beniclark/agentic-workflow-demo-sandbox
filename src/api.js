// Current API — signature was refactored in v1.0 to accept a payload object.
// docs/README.md is intentionally out of date: it still shows the
// pre-v1 `createUser(name, email)` form. The docs-sync agent should
// detect this drift and open a PR that updates the docs.

/**
 * Create a new user.
 * @param {{ name: string, email: string, role?: "admin" | "member" }} payload
 * @returns {Promise<{ id: string, name: string, email: string, role: string, createdAt: string }>}
 */
async function createUser(payload) {
  if (!payload || typeof payload !== "object") {
    throw new TypeError("createUser(payload): payload object is required");
  }
  const { name, email, role = "member" } = payload;
  if (!name || !email) {
    throw new TypeError("createUser(payload): name and email are required");
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
