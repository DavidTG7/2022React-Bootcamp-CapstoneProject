import React, { useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import { ROUTES } from '../../../utils/constants';
import { ButtonsWrapper, LinkButton } from '../Checkout.styles';
import {
  Items,
  OrderSumaryMain,
  OrderSumaryRow,
  ProductName,
  Subtotal } from './OrderSumary.styles';

export const OrderSumary = () => {
  const { shoppingCart } = useContext(AppContext);

  const allProducts = shoppingCart.map((product, i) => {
    const { name, amount, price } = product;
    const subtotal = price * amount;
    return(
      <OrderSumaryRow key={`orderRow-${i}`}>
        <ProductName>{name}</ProductName>
        <Items>{amount}</Items>
        <Subtotal>$ {subtotal}</Subtotal>
      </OrderSumaryRow>
    );
  })

  let totalPrice = 0
  
  shoppingCart.forEach(element => {
    const price = element.price * element.amount;
    return totalPrice += price;
  });

  return(
    <OrderSumaryMain>
      <OrderSumaryRow headerRow>
        <ProductName>PRODUCT NAME</ProductName>
        <Items>UNITS</Items>
        <Subtotal>SUBTOTAL</Subtotal>
      </OrderSumaryRow>
      {allProducts}
      <OrderSumaryRow headerRow>
        <ProductName>TOTAL</ProductName>
        <Subtotal>$ {totalPrice}</Subtotal>
      </OrderSumaryRow>
      <ButtonsWrapper>
        <LinkButton to='#'>
          PLACE ORDER
        </LinkButton>
        <LinkButton to={ROUTES.shoppingCart}>
          SHOPPING CART
        </LinkButton>
      </ButtonsWrapper>
    </OrderSumaryMain>
  );
}
