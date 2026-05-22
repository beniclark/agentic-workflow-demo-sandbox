// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  return arrays.flat();
}

function hasNonEmptyString(obj, key) {
  return obj != null && typeof obj[key] === "string" && obj[key].length > 0;
}

function validateUser(user) {
  return hasNonEmptyString(user, "email") && user.email.indexOf("@") !== -1;
}

function validateProduct(product) {
  return hasNonEmptyString(product, "sku");
}

function validateOrder(order) {
  return hasNonEmptyString(order, "id");
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
