import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { bluePrince,
  white,
  whiteApple,
  yellowMain } from '../../../utils/constant.styles';

export const CheckoutMain = styled.div`
gap: 3rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  
  border-radius: .5rem;
  background: ${whiteApple};
`;

export const TotalPriceTitle = styled.label`
  font-size: 1.5rem;
`;

export const Total = styled.label`
  font-weight: 700;
  font-size: 1.6rem;
`;

export const CheckoutLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white};
  font-weight: 600;
  margin: .5rem;
  text-decoration: none;
  width: 12rem;
  height: 3rem;
  font-size: 1.5rem;
  background: ${bluePrince};
  border-radius: .5rem;

&:hover {
  background: ${yellowMain};
  color: ${bluePrince};
}
`;
