import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Hero/hero.css";
import "../Hero/ResHero.css"
import img1 from "../Assets/her0-img1.png";
import img2 from "../Assets/hero-img2.png";
import img3 from "../Assets/hero-img3.png";

const hero = () => {
  return (
    <div className="hero">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a
              href="https://www.amazon.in/s/ref=QANav11CTA_en_IN_2/ref=QANav11Expander_en_IN_4?pf_rd_r=ABX4BNPDHMH1EQKFEKG1&pf_rd_p=0b5a58ad-f3e0-4b01-936e-1f7d032c6bc7&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-13&pf_rd_t=&pf_rd_i=1355016031&pf_rd_r=FGZ665GMBF6T0J3HF0A8&pf_rd_p=d237a6a1-6369-4cc0-9431-5f46f12dbe98&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-8&pf_rd_t=&pf_rd_i=1374407031&i=beauty&bbn=1374414031&rh=n%253A1355016031%252Cn%253A1374407031%252Cn%253A1374414031%252Cn%253A9530421031&_encoding=UTF8&tag=apnikhudkiduk-21&linkCode=ur2&linkId=b8b952796eee2f587018802bd9fe1762&camp=3638&creative=24630"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={img1} className="d-block w-100" alt="..." />
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://www.amazon.in/s?i=beauty&bbn=1374414031&_encoding=UTF8&camp=3638&creative=24630&linkCode=ur2&linkId=b8b952796eee2f587018802bd9fe1762&pf_rd_i=1355016031&pf_rd_i=1374407031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=0b5a58ad-f3e0-4b01-936e-1f7d032c6bc7&pf_rd_p=d237a6a1-6369-4cc0-9431-5f46f12dbe98&pf_rd_r=ABX4BNPDHMH1EQKFEKG1&pf_rd_r=FGZ665GMBF6T0J3HF0A8&pf_rd_s=merchandised-search-13&pf_rd_s=merchandised-search-8&tag=apnikhudkiduk-21&ref=QANav11Expander_en_IN_4" target='_blank' rel="noopener noreferrer">
              <img src={img2} className="d-block w-100" alt="..." />
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://www.amazon.in/s?i=beauty&bbn=1374414031&_encoding=UTF8&camp=3638&creative=24630&linkCode=ur2&linkId=b8b952796eee2f587018802bd9fe1762&pf_rd_i=1355016031&pf_rd_i=1374407031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=0b5a58ad-f3e0-4b01-936e-1f7d032c6bc7&pf_rd_p=d237a6a1-6369-4cc0-9431-5f46f12dbe98&pf_rd_r=ABX4BNPDHMH1EQKFEKG1&pf_rd_r=FGZ665GMBF6T0J3HF0A8&pf_rd_s=merchandised-search-13&pf_rd_s=merchandised-search-8&tag=apnikhudkiduk-21&ref=QANav11Expander_en_IN_4" target='_blank' rel="noopener noreferrer">
              <img src={img3} className="d-block w-100" alt="..." />
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default hero;
