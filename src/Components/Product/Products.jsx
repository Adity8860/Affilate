import React from "react";
import "../Product/Products.css";

const Products = (props) => {
  return (
   
      <div className="product">
        <img src={props.image} alt="" />

        <p>{props.title}</p>
        <div className="bottom">
          <div className="product-prices">
            <div className="old-prices">&#8377;{props.old_price}</div>
            <div className="new-prices">&#8377;{props.new_price}</div>
          </div>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>{" "}
          </a>
        </div>
      </div>
    
  );
};

export default Products;
