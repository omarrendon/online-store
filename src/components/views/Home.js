import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

export const Home = () => {
  const [cantidad, setCantidad] = useState(0);
  const dispatch = useDispatch();
  const { item } = useSelector( item => item.cart);
  
  
  const handleAddCart = () => {
    setCantidad(cantidad + 1)
    console.log('Cantidad', cantidad);
    dispatch( addToCart(cantidad));
  };
  
  const handleRemoveCart = () => {
    setCantidad(cantidad - 1);
    console.log("Cantidad", cantidad);
    dispatch( removeFromCart(cantidad));
  };

  return (
    <div>
      ESTÁS EN EL COMPONENTE HOME
      <div className="">
        cantidad : {cantidad}
        <button onClick={handleAddCart}>+</button>
        <button onClick={handleRemoveCart}>-</button>
      </div>
      <div className="">estado de redux : {item}</div>
    </div>
  );
}
