import React from 'react';
import {
  Price,
  PriceTitle,
  PriceWrapper } from './Prices.styles';

export const Prices = ({ unitPrice, totalPrice }) => {

  return(
    <>
      <PriceWrapper>
        <PriceTitle>UNIT PRICE</PriceTitle>
        <Price>{unitPrice}</Price>
      </PriceWrapper>
      <PriceWrapper>
        <PriceTitle>SUBTOTAL</PriceTitle>
        <Price>{totalPrice}</Price>
      </PriceWrapper>
    </>
  )
}
