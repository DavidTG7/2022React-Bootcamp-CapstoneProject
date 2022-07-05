import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { CheckoutMain } from './Checkout.styles';
import { Form } from './Form/Form';

export const Checkout = () => {
  const { shoppingCart } = useContext(AppContext);


  return(
    <CheckoutMain>
      <h1>Checkout Page</h1>
      <Form />
    </CheckoutMain>
  );
}