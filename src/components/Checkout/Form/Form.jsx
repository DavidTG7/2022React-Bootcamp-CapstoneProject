import React from 'react';
import { FormMain, Input, Label, TextArea } from './Form.styles';

export const Form = () => {
  return(
    <FormMain>
      <Label>Name and Last Name:</Label>
      <Input type='text' />
      <Label>Email:</Label>
      <Input type='email' required />
      <Label>Post/Zip code:</Label>
      <Input type='text' />
      <TextArea rows='5'>Notes about your purchasing...</TextArea>
    </FormMain>
  );
}