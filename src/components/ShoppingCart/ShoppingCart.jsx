import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import { ReactComponent as BinButton } from '../../images/bin.svg';
import { Prices } from './Prices/Prices';
import {
  RowItem,
  Image,
  Name,
  MainWrapper,
  Amount, 
  BinButtonWrapper,
  AmountControllerButton,
  AmountWrapper } from './ShoppingCart.styles';

export const ShoppingCart = () => {

  const { shoppingCart, setShoppingCart } = useContext(AppContext);
  // const [totalAmount, setTotalAmount] = useState(0)
   

  const handleClick = (id) => {
    console.log('Got clicked', id);
    const filtered = shoppingCart.filter(item => item.id !== id);
    setShoppingCart(filtered)
  }
  
      
  const substractAmount = (id, amount) => {
    console.log(shoppingCart, id, amount);
    const mapped = shoppingCart.map(element => {
      if (element.id === id && amount > 1) {
        element.amount -= 1;
      }
      return element;
    });

    setShoppingCart(mapped);
  }
  
  
  const allElements = shoppingCart.map((item, i) => {
    const {
      id,
      name,
      alt,
      url,
      price,
      amount,    
    } = item;
    
    const subtotal = price * amount;
    

    return(
      <RowItem key={`row-${i}`}>
        <Image src={url} alt={alt} />
        <Name>{name}</Name>
        <Prices unitPrice={price} totalPrice={subtotal} />
        <AmountWrapper>
          <AmountControllerButton 
            onClick={() => substractAmount(id, amount)}>-</AmountControllerButton>
          <Amount>{amount}</Amount>
          <AmountControllerButton>+</AmountControllerButton>
        </AmountWrapper>
        <BinButtonWrapper>
          <BinButton onClick={() => handleClick(id)}/>
        </BinButtonWrapper>
      </RowItem>
    );
  })

  let total = 0;
   allElements.forEach(element => {
    const value = element.props.children[2].props.totalPrice;
    return total += value;
  })
  
  console.log({total, shoppingCart, allElements});
  
  return(
    <MainWrapper>
     { allElements}
    </MainWrapper>
  );
}