// Intentionally messy so the Code Simplifier agent has clear wins.
// Do NOT clean this up by hand — that's the demo.

function flatten(arrays) {
  var result = [];
  for (var i = 0; i < arrays.length; i++) {
    for (var j = 0; j < arrays[i].length; j++) {
      result.push(arrays[i][j]);
    }
  }
  return result;
}

function validateUser(user) {
  if (user !== null && user !== undefined) {
    if (user.email !== null && user.email !== undefined) {
      if (user.email.length > 0) {
        if (user.email.indexOf("@") !== -1) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function validateProduct(product) {
  if (product !== null && product !== undefined) {
    if (product.sku !== null && product.sku !== undefined) {
      if (product.sku.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function validateOrder(order) {
  if (order !== null && order !== undefined) {
    if (order.id !== null && order.id !== undefined) {
      if (order.id.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function processAll(users, products, orders) {
  var valid = [];
  for (var i = 0; i < users.length; i++) {
    if (validateUser(users[i]) == true) {
      valid.push(users[i]);
    }
  }
  for (var i = 0; i < products.length; i++) {
    if (validateProduct(products[i]) == true) {
      valid.push(products[i]);
    }
  }
  for (var i = 0; i < orders.length; i++) {
    if (validateOrder(orders[i]) == true) {
      valid.push(orders[i]);
    }
  }
  return valid;
}

module.exports = {
  flatten,
  validateUser,
  validateProduct,
  validateOrder,
  processAll,
};
