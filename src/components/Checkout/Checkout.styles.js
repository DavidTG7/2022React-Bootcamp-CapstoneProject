import styled from 'styled-components';
import { Link } from 'react-router-dom'
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: .3rem;
  height: 2.5rem;
  width: 15rem;
  border: none;
  text-decoration: none;
  background: ${bluePrince};
  color: ${white};
  &:hover {
    background: ${yellowMain};
    color: ${bluePrince};
  }
`;