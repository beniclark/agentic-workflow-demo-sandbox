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

function validateProduct(product) {
  if (product == null) return false;
  if (product.sku == null) return false;
  return product.sku.length > 0;
}

function validateOrder(order) {
  if (order == null) return false;
  if (order.id == null) return false;
  return order.id.length > 0;
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
