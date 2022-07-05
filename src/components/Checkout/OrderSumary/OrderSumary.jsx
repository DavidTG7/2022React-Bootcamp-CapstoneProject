import React, { useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import {
  Items,
  OrderSumaryMain,
  OrderSumaryRow,
  ProductName,
  Subtotal } from './OrderSumary.styles';

export const OrderSumary = () => {
  const { shoppingCart } = useContext(AppContext);

  const allProducts = shoppingCart.map(product => {
    const { name, amount, price } = product;
    const subtotal = price * amount;
    return(
      <OrderSumaryRow>
        <ProductName>{name}</ProductName>
        <Items>{amount}</Items>
        <Subtotal>{subtotal}</Subtotal>
      </OrderSumaryRow>
    );
  })

  return(
    <OrderSumaryMain>
      <OrderSumaryRow headerRow>
        <ProductName>PRODUCT NAME</ProductName>
        <Items>QUANTITY</Items>
        <Subtotal>SUBTOTAL</Subtotal>
      </OrderSumaryRow>
      {allProducts}
    </OrderSumaryMain>
  );
}
