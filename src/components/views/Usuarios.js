import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Usuarios = (props) => {
  const { item } = useSelector(item => item.cart);
  const    user   = useSelector( user => user.user.user);
  // const [userValidate, setUserValidate] = useState(false);

  // console.log(item);
  console.log(user);
  
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
    {props.stateUser && <p>NOMBREEEE: {user.id.age}</p> }
      {/* {userValidate ? <p>Hola</p> : <p>No Hola</p>} */}
    </div>
  );
}
