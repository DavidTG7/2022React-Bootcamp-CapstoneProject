export function handleSubstractAmount(shoppingCart, setShoppingCart) {
  return (id, amount) => {
    const mapped = shoppingCart.map(element => {
      if (element.id === id && amount > 1) {
        element.amount -= 1;
      }
      return element;
    });

    setShoppingCart(mapped);
  };
}

export function handleAddAmount(shoppingCart, setShoppingCart) {
  return (id, amount) => {
    const mapped = shoppingCart.map(element => {
      if (element.id === id && amount >= 1) {
        element.amount += 1;
      }
      return element;
    });

    setShoppingCart(mapped);
  };
}
