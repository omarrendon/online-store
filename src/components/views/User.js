import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const User = (props) => {
  const { item } = useSelector(item => item.cart);
  const userInfo = useSelector( userInfo => userInfo.user.id);
  // const [userValidate, setUserValidate] = useState(false);

  // console.log(item);
  console.log(userInfo);
  
  console.log(props.stateUser);
   
  useEffect(() => {
    console.log('LOG ITEM');
  }, [item])
  
  // useEffect(() => {
  //   // setUserValidate(true)
  //   console.log("LOG USER");
  // }, [id]);

  return (
    <div>
      USUARIOS CARRITO DE COMPRAS CANTIDAD : {item}
      {props.stateUser && <p>NOMBREEEE: {userInfo.name}</p> }
      {/* {userValidate ? <p>Hola</p> : <p>No Hola</p>} */}
    </div>
  );
}
