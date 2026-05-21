// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  return arrays.flat();
}

function validateUser(user) {
  if (user == null) return false;
  if (user.email == null || user.email.length === 0) return false;
  return user.email.indexOf("@") !== -1;
}

function validateProduct(product) {
  if (product == null) return false;
  return product.sku != null && product.sku.length > 0;
}

function validateOrder(order) {
  if (order == null) return false;
  return order.id != null && order.id.length > 0;
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
