import styled from 'styled-components';
import {
  bluePrince,
  white,
  whiteApple,
  yellowMain } from '../../utils/constant.styles';

export const CheckoutMain = styled.main`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  gap: 2rem;
  margin: 50px auto 0;
  width: 135em;
  color: ${bluePrince};
  
  @media screen and (max-width: 1400px){
    width: 90%;
  }
`;

