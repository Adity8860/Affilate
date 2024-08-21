import React from "react";
import Products from "../Product/Products.jsx";
import data from "../Assets/data.js";
import "../ProductDisplay/ProductDisplay.css";
import "../ProductDisplay/ProductDisplay2.css"

const ProductDisplay = (props) => {
  const product = data.find((item) => item.id === 6);
  return (
    <section id="Product">
    <div className="productdisplay">
      <h1>OUR PRODUCTS</h1>

      <div className="product-item">
        {data.map((item, i) => {
          return (
            <Products
              key={i}
              id={item.id}
              link={item.link}
              title={item.title}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <div className="product-details ">
        <div className="product-image">
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            <img src={product.image} alt="" />
          </a>
        </div>
        <div className="product-inf">
          <div className="title">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <h1>
                <span>Dreo Tower </span> Fan for Bedroom
              </h1>
            </a>
          </div>
          <div className="para" >
            <p >
              Dreo Tower Fan for Bedroom, 24ft/s Velocity Quiet Floor Fan, 90°
              Oscillating Fans for Indoors with 4 Speeds, 4 Modes, 8H Timer,
              Standing Fans, Bladeless Fan, Black, Nomad One{" "}
            </p>

            <p>
              Powerful Meets Portable: Dreo's all-in-one airflow system combines
              with a supercharged electric motor, delivering high-speed, brisk
              cool. This 36-inch compact tower fan enlivens every inch of air in
              your living space fast at up to 24ft/s. Cut Out the Noise: Enjoy
              all-day serenity and comfort, enabled by its algorithmic impeller
              design and the magical Conada effect. Along with display auto off,
              auto mute in Sleep mode, 8h timer, and soothing airflow, you can
              always get a restful sleep whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div></section>
  );
};

export default ProductDisplay;
