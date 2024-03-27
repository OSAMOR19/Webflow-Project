import React from "react";
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import imgpattern from "../Images/properimg.png";
import imgpattern2 from "../Images/properimg2.png";
import imgpattern3 from "../Images/clients.png";
import avatar2 from "../Images/serviceimage.png";

import defaultDemo from "../Images/swip1.png";
import saasDemo from "../Images/swip2.png";
import materialDemo from "../Images/swip3.png";
import minimalDemo from "../Images/swip4.png";
import creativeDemo from "../Images/swip5.png";
import modernDemo from "../Images/swip6.png";
import interactiveDemo from "../Images/swip4.png";

const Home = () => {
  const gradientBackgroundStyle = {
    background: "linear-gradient(90deg, #0E0D13 0%, #1D2339 100%)",
    // Add any other styles you want
  };
  return (
    <React.Fragment>
      <section
        className="section pb-0 hero-section"
        id="hero"
        style={gradientBackgroundStyle}
      >
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} sm={10}>
              <div className="text-center text-light mt-lg-5  pt-5">
                <h1 className="display-6 fw-bold mb-3 lh-base">
                  Transform Your Digital Presence with our expert in{" "}
                  <span className="text-primary">WebFlow </span>
                </h1>
                <p className="lead  lh-base">
                  Crafting Experiences, Building Brands - Explore the Artistry
                  of Webflow with Us. we create stunning and functional
                  websites.
                </p>

                <div className="d-flex gap-2 justify-content-center mt-4">
                  <Button
                    to="/register"
                    className="btn btn-primary"
                    style={{ background: "#265AE8" }}
                  >
                    Schedule Demo{" "}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Button>
                  <Button
                    to="/pages-pricing"
                    className="btn btn-light text-primary"
                  >
                    Pricing <i className="ri-eye-line align-middle ms-1"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="mt-2 mt-sm-5 pt-sm-5 mb-sm-n5">
          <div className="demo-img-patten-top d-none d-sm-block">
            <img src={imgpattern} className="d-block img-fluid" alt="..." />
            <img src={imgpattern2} className="d-block img-fluid" alt="..." />
          </div>
        </div>

        <div className=" text-center mt-5 pt-5  text-light mt-lg-5  pt-2">
          <h1 className="display-6 fw-normal mb-3 lh-base">
            CLIENT'S WE'VE WORKED WITH
          </h1>
          <img src={imgpattern3} className="d-block img-fluid" alt="..." />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
