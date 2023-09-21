import React from "react";
import "./CSS_folder/Navbar.css";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex  flex-column align-items-start justify-content-center">
              <h1 className="display-5">
                Online Payment Made <br /> Easy For you
              </h1>
              <p className="main-hero-para">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                eum sint laudantium quasi placeat aperiam accusantium culpa,
                ratione nihil autem amet illum necessitatibus. Odio, earum
                culpa? Molestias eaque rem quasi. Quae dolor earum deserunt.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill  w-lg-75  form-control-text me-3 p-2" placeholder="Enter your Email"
                />
                <div className="input-group-text">Get it now!</div>
              </div>


            </div>
            <div className="col-12 header-right-side col-lg-6 d-flex justify-content-around align-content-center main-hero-images ">
              <img src="./img/hero.png" alt="Hero-img" className="img-fluid" />
              <img
                src="./img/hero2.png"
                alt=""
                className="img-fluid main-hero-image-2 "
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;

