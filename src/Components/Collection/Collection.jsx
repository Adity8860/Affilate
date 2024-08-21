import React from "react";
import "../Collection/Collection.css";
// import img from "../Assets/Nav_img.png";
import Slider from "../Slider/Slider.jsx";

const Collection = () => {
  return (
    <section id="">
      <div className="mt-5 collection">
        <div className="title py-4 text-center">
          <h2>Top Collection</h2>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default Collection;
