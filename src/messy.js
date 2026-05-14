// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  return arrays.flat();
}

function hasNonEmpty(obj, field) {
  return obj != null && obj[field] != null && obj[field].length > 0;
}

function validateUser(user) {
  return hasNonEmpty(user, "email") && user.email.indexOf("@") !== -1;
}

function validateProduct(product) {
  return hasNonEmpty(product, "sku");
}

function validateOrder(order) {
  return hasNonEmpty(order, "id");
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
