import styled from 'styled-components';
import { bluePrince, white, whiteApple } from '../../../utils/constant.styles';

export const OrderSumaryMain = styled.div`
  width: 50%;
  font-size: 1rem;
`;

export const OrderSumaryRow = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
  background: ${({ headerRow }) => headerRow ? bluePrince : whiteApple};
  color: ${({ headerRow }) => headerRow ? white : bluePrince};
  margin-bottom: .5rem;
`;

export const ProductName = styled.label`
  text-transform: uppercase;
  font-weight: 600;
  width: 60%
`;

export const Items = styled.label`
  text-align: right;
  width: 20%;
`;

export const Subtotal = styled.label`
  text-align: right;
  width: 20%;
`;