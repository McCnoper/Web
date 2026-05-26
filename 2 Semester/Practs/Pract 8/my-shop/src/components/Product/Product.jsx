import React from "react";

function Product(props) {
    const { title, price, img, onBuy } = props;
  return (
    <div className="product-card">
      <img src={img} alt={title} className="product-img" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">Ціна: {price} грн</p>
      <button className="product-btn" onClick={onBuy}>Купити</button>
    </div>
  );
}

export default Product;