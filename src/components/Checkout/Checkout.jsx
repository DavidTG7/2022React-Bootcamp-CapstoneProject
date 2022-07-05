import React from 'react';
import { CheckoutMain } from './Checkout.styles';
import { Form } from './Form/Form';
import { OrderSumary } from './OrderSumary/OrderSumary';

export const Checkout = () => {


  return(
    <CheckoutMain>
      <Form />
      <OrderSumary />
    </CheckoutMain>
  );
}