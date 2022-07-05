import styled from 'styled-components';
import {
  bluePrince,
  white,
  whiteApple,
  yellowMain } from '../../utils/constant.styles';

export const CheckoutMain = styled.main`
  margin: 50px auto 0;
  width: 135em;
  color: ${bluePrince};
  
  @media screen and (max-width: 1400px){
    width: 90%;
  }
`;

