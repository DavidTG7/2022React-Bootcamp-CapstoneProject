import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { ReactComponent as BinButton } from '../../images/bin.svg';
import { CheckoutBox } from './CheckoutBox/CheckoutBox';
import { Prices } from './Prices/Prices';
import { handleAddAmount, handleSubstractAmount } from './ShoppingCart.helper';
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

  const handleDelete = (id) => {
    console.log('Got clicked', id);
    const filtered = shoppingCart.filter(item => item.id !== id);
    setShoppingCart(filtered)
  }
      
  const substractAmount = handleSubstractAmount(shoppingCart, setShoppingCart)

  const addAmount = handleAddAmount(shoppingCart, setShoppingCart)
  
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
          <AmountControllerButton
            onClick={() => addAmount(id, amount)}
          >+</AmountControllerButton>
        </AmountWrapper>
        <BinButtonWrapper>
          <BinButton onClick={() => handleDelete(id)}/>
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
     <CheckoutBox total={total}/>
    </MainWrapper>
  );
}

