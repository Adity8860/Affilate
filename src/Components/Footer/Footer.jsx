import React from "react";
import "../Footer/Footer.css";
import img1 from "../Assets/Nav_img.png";

const Footer = () => {
  return (
    <section id="contact">
      <div className="footer">
        <footer>
          <div className="footer_area" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img className="img01" src={img1} alt="" />
                  <p className="mt-3 text-white text-small">
                    Apni Khud Ki Dukan, we're passionate about connecting you
                    with the hottest deals and must-have products from top-notch
                    brands. As your go-to affiliate marketing partner, we strive
                    to bring you value-packed promotions, discounts, and insider
                    access to the latest trends.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="ms-2">
                    <h4 className="text-white">Connect With Us </h4>
                    <div className="social-link">
                      <ul className="mt-3 d-flex">
                        <li>
                          <a href="/">
                            <i className="fab fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-telegram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_sec py-3">
            <div className="container">
              <div className="row">
                <div className="text-left text-white">
                  apnikhudkidukan 2024. All rights reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
