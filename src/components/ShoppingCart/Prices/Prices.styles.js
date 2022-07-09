import styled from 'styled-components';
import { grey } from '../../../utils/constant.styles';

export const PriceWrapper = styled.div`
text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 15%;
`;

export const PriceTitle = styled.label`
  font-size: 1rem;
`;

export const Price = styled.label`
  color: ${grey};
  font-weight: 600;
`;