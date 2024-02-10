import { useState } from "react";
import './card.css'

function Card({imageUrl, productName, price}) {

  let [count, setCount] = useState(0);

  function handleChange(event) {
    const value = Number(event.target.value);
    setCount(value);
  }
  
  return (
    <div className="card">
      <img src={imageUrl} alt={productName} />
      <h2>{productName}</h2>
      <p>${price}</p>
      <div className="count-control">
        <button className="sell" onClick={() => {setCount(count - 1)}}>Sell</button>
        <input value={count} type="number" onChange={handleChange}/>
        <button className="buy" onClick={() => {setCount(count + 1)}}>Buy</button>
      </div>
    </div>
  );
}

export default Card;
