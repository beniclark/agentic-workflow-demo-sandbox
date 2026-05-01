// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  return arrays.flat();
}

function validateUser(user) {
  return user != null && user.email != null && user.email.length > 0 && user.email.indexOf("@") !== -1;
}

function hasNonEmpty(obj, key) {
  return obj != null && obj[key] != null && obj[key].length > 0;
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
