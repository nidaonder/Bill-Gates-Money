import { useState } from "react";
import React from 'react';

const products = [
  {
    id:1,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:2,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:3,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:4,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:5,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:6,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:7,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:8,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:9,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  },
  {
    id:10,
    imageUrl:"../../public/big-mac.jpg",
    productName:"Big Mac",
    price:2
  }
]

function Card() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {products.map(({id, imageUrl, productName, price}) => (
        <div key={id}>
          <img src="../public/billgates.jpg" alt={productName} />
          <h2>{productName}</h2>
          <p>${price}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
