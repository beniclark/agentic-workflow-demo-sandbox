// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  return arrays.flat();
}

// Shared guard: returns true when obj is non-null and obj[key] is a non-empty value.
function hasNonEmptyProp(obj, key) {
  return obj != null && obj[key] != null && obj[key].length > 0;
}

function validateUser(user) {
  if (user == null) return false;
  if (user.email == null || !user.email.length) return false;
  return user.email.indexOf("@") !== -1;
}

function validateProduct(product) {
  return hasNonEmptyProp(product, "sku");
}

function validateOrder(order) {
  return hasNonEmptyProp(order, "id");
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
