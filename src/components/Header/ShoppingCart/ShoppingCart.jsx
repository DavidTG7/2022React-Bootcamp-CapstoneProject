import React, { useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import { ReactComponent as ShoppingCartIcon } from '../../../images/shopping-cart.svg';
import { ROUTES } from '../../../utils/constants';
import { ButtonCart, CartWrapper, ItemCounter } from './ShoppingCart.styles';

export const  ShoppingCartButton = () => {

const { shoppingCart } = useContext(AppContext);
  let total = shoppingCart.length;
  
  return(
    <CartWrapper>
      <ButtonCart to={ROUTES.shoppingCart}>
        <ShoppingCartIcon />
      </ButtonCart>
      <ItemCounter> {total} </ItemCounter>
    </CartWrapper>
  );
}