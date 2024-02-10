import React from "react";
import products from "../../public/products.json";
import Card from "../card/Card";
import "./content.css";

function Content() {
  return (
    <div className="container">
      {products.map(({ id, imageUrl, productName, price }) => (
        <Card
          key={id}
          imageUrl={`/product-images/${imageUrl}`}
          productName={productName}
          price={price}
        />
      ))}
    </div>
  );
}

export default Content;
