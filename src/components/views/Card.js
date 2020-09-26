import React from 'react';

import { products } from '../data';

export const Card = () => {
  return (
    <div>
      { products.map ( (product) => (
        <li>{product.id}</li>
      ))}
    </div>
  )
}
