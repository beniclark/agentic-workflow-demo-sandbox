// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  return arrays.flat();
}

function hasNonEmptyField(entity, field) {
  return entity != null && entity[field] != null && entity[field].length > 0;
}

function validateUser(user) {
  return hasNonEmptyField(user, "email") && user.email.includes("@");
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
