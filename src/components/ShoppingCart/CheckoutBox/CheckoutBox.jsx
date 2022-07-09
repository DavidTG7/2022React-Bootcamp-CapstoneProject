import React from 'react';
import { ROUTES } from '../../../utils/constants';
import { CheckoutLink, CheckoutMain, Total, TotalPriceTitle } from './CheckoutBox.styles';

export const CheckoutBox = ( { total } ) => {

  return(
    <CheckoutMain>
      <TotalPriceTitle>TOTAL TO PAY:</TotalPriceTitle>
      <Total>$ {total}</Total>
      <CheckoutLink to={ROUTES.checkout}>
        CHECKOUT
      </CheckoutLink>
    </CheckoutMain>
  )
}
