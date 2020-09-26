import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { addUser } from '../actions/userActions';
import { Usuarios } from './Usuarios';

export const Home = () => {
  const [cantidad, setCantidad] = useState(0);
  const [userInfo, setUserInfo] = useState({
    id: 1,
    name: 'Omar',
    age: 24,
    mail: 'omarcr.96@gmail.com'
  });
  const [stateUser, setStateUser] = useState(false);

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

  const handleAddUser = () => {
    console.log('Add userInfo');
    setStateUser(true)
    dispatch( addUser(userInfo));
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
      
      <Usuarios stateUser={stateUser}/>

      <div className="">
        <div className="card">
          <p>id : {userInfo.id}</p>
          <p>name : {userInfo.name}</p>
          <p>age : {userInfo.age}</p>
          <p>mail : {userInfo.mail}</p>
          <button onClick={handleAddUser}>Agregar</button>
        </div>
      </div>
    </div>
  );
}
