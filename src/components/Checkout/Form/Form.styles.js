import styled from 'styled-components';
import { bluePrince } from '../../../utils/constant.styles';

export const FormMain = styled.form`
  display: flex;
  flex-flow: column;
  width: 50%;
  font-size: 1rem;
`;

export const Label = styled.label`
`;

export const Input = styled.input`
  margin-bottom: .5rem;
  width: 100%;
  border: none;
  border-radius: .3rem;
  height: 1.5rem;
  &:focus{
  height: 1.5rem;

    outline: unset;
    border: 1px solid ${bluePrince};
  }
`;

export const TextArea = styled.textarea`
  margin-top: 1rem;
  width: 100%;
  border: none;
  border-radius: .3rem;
  color: ${bluePrince};
  &:focus{
     outline: unset;
    border: 1px solid ${bluePrince};
  }
`;