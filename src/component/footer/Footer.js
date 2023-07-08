import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="my-5">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#000" }}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "#ff0079" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="" className="text-white me-4">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fa-brands fa-google-play"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h3 className="text-uppercase fw-bold">
                    {" "}
                    <i className="fa-solid fa-apple-whole fa-lg"></i>
                    {` BERRY`}
                  </h3>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    Extend your lifetime with fruits and vegetables when you
                    dine
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" className="text-white">
                      Furits
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Vegetables
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Drinks
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Snacks
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" className="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Help
                    </a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            {"© 2023 Copyright :   "}
            <a className="text-white" id="brand" href="#">
              <i className="fa-solid fa-apple-whole fa-lg"></i>
              {` BERRY`}
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
