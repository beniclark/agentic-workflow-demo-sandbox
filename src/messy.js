// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  return arrays.flat();
}

/** Shared guard: obj is non-null and obj[field] is a non-empty string. */
function hasNonEmptyField(obj, field) {
  return obj != null && obj[field] != null && obj[field].length > 0;
}

function validateUser(user) {
  if (user == null) return false;
  if (user.email == null) return false;
  return user.email.indexOf("@") !== -1;
}

function validateProduct(product) {
  return hasNonEmptyField(product, "sku");
}

function validateOrder(order) {
  return hasNonEmptyField(order, "id");
}

function processAll(users, products, orders) {
  return [
    ...users.filter(validateUser),
    ...products.filter(validateProduct),
    ...orders.filter(validateOrder),
  ];
}

module.exports = {
  flatten,
  validateUser,
  validateProduct,
  validateOrder,
  processAll,
};
