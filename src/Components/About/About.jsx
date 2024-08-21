import React from "react";
import "../About/About.css";

const About = () => {
  return (
    <section id="about">
      <section className="mission mt-md-5 py-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>Welcome to Apni Khud Ki Dukan Affiliate Hub!</h2>
              </div>
              <p className="mt-5">
                At Apni Khud Ki Dukan, we're passionate about connecting you
                with the hottest deals and must-have products from top-notch
                brands.  As your go-to affiliate marketing partner, we strive
                to bring you value-packed promotions, discounts, and insider
                access to the latest trends.
              </p>
              <h5>Why Choose Apni Khud Ki Dukan</h5>
              <ul>
                <li>
                 <span role="img" aria-label="gift" >🎁</span>  Exclusive Deals: Enjoy access to limited-time offers and
                  exclusive discounts you won't find anywhere else.
                </li>
                <li>
                  <span role="img" aria-label="gift"  >🎁</span> Trendsetting Products: We curate a selection of products
                  that are not just trendy but also deliver exceptional quality.
                </li>
                <li>
                  <span role="img" aria-label="hand-shake"  >🤝</span> Trusted Partnerships: We collaborate with reputable brands,
                  ensuring you get reliable and top-notch products.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
