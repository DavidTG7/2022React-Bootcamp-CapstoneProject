export const customHandleClick = (
  id,
  shoppingCart,
  setShoppingCart,
  name,
  url,
  alt,
  price
  ) => {

  let inputValue = 1;

    if (inputValue > 0 && !shoppingCart.some(item => item.id === id)) {
      setShoppingCart([...shoppingCart,
        {
          id,
          name,
          url,
          alt,
          price,
          amount: Number(inputValue),
        }])
    } else if (shoppingCart.some(item => item.id === id)) {

      const shoppingCartMapped = shoppingCart.map(elem => {
        if (elem.id === id) {
          elem.amount += Number(inputValue);
        }
        return elem
      })

      setShoppingCart(shoppingCartMapped)
    } else {
        alert('Sorry, item out of stock!')
        return;
      }
}
