// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  return arrays.flat();
}

function validateUser(user) {
  if (user == null) return false;
  if (user.email == null || !user.email.length) return false;
  return user.email.includes("@");
}

function hasNonEmptyField(obj, field) {
  return obj != null && obj[field] != null && obj[field].length > 0;
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
