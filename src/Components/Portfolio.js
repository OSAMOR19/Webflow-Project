import React from "react";
import {
  Container,
  Card,
  Col,
  Row,
  CardBody,
  CardHeader,
  Button,
} from "react-bootstrap";

import img6 from "../Images/portfolioimg1.png";
import img7 from "../Images/portfolioimg2.png";
import img8 from "../Images/portfolioimg3.png";
import img10 from "../Images/portfolioimg4.png";
import img11 from "../Images/portfolioimg1.png";

const Portfolio = () => {
  return (
    <React.Fragment>
      <section style={{ background: "#0F0F0Ffreshed up" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} sm={10}>
              <div className="text-center text-light mt-lg-5  pt-5">
                <h5 className="mb-3 fw-semibold">OUR PORTFOLIO</h5>
                <h1 className="display-6 fw-bold mb-3 lh-base">
                  Explore Some of our recent
                  <span className="text-primary"> WORKS</span>
                </h1>
                <div className="d-flex gap-2 justify-content-center mt-4">
                  <Button
                    to="/register"
                    className="btn mb-4 btn-primary"
                    style={{ background: "#265AE8" }}
                  >
                    View All Projects
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row >
            <Col lg={6} xxl={4}>
              <Card className="text-light" style={{background:'#0F0F0F'}}>
                <img
                  className="card-img-top img-fluid"
                  src={img6}
                  alt="Card cap"
                />
                <CardBody>
                  <h4 className="card-title mb-2">
                    E commerce web development
                  </h4>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6} xxl={4}>
              <Card className="text-light">
                <CardBody style={{background:'#0F0F0F'}}>
                  <h4 className="card-title mb-2">Web flow/seo integration</h4>
                  <p className="card-text ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </CardBody>
                <img
                  className="card-img-bottom img-fluid"
                  src={img7}
                  alt="Card cap"
                />
              </Card>
            </Col>

            <Col lg={6} xxl={4}>
              <Card className="text-light" style={{background:'#0F0F0F'}}>
                <CardBody>
                  <h4 className="card-title mb-2">
                    A day in the of a professional fashion designer
                  </h4>
                  <p className="card-text">
                    {" "}
                    Exercitation +1 labore velit, blog sartorial PBR leggings
                    next level wes anderson artisan four loko farm-to-table
                    craft beer twee.
                  </p>
                </CardBody>
                <img
                  className="card-img rounded-0 img-fluid"
                  src={img8}
                  alt="Card cap"
                />
                <div className="card-footer">
                  <p className="card-text mb-0">Last updated 3 mins ago</p>
                </div>
              </Card>
            </Col>

            <Col lg={6} xxl={4}>
              <Card className="text-light" style={{background:'#0F0F0F'}}>
                <CardHeader>
                  <h4 className="card-title mb-0">
                    A day in the of a professional fashion designer
                  </h4>
                </CardHeader>
                <CardBody>
                  <p className="card-text">
                    {" "}
                    Exercitation +1 labore velit, blog sartorial PBR leggings
                    next level wes anderson artisan four loko farm-to-table
                    craft beer twee.
                  </p>
                </CardBody>
                <img
                  className="card-img rounded-0 img-fluid"
                  src={img10}
                  alt="Card cap"
                />
                <div className="card-footer">
                  <p className="card-text mb-0">Last updated 3 mins ago</p>
                </div>
              </Card>
            </Col>

            <Col lg={6} xxl={4}>
              <Card className="text-light" style={{background:'#0F0F0F'}}>
                <img
                  className="card-img-top img-fluid"
                  src={img11}
                  alt="Card cap"
                />
                <CardHeader>
                  <h4 className="card-title mb-0">
                    A day in the of a professional fashion designer
                  </h4>
                </CardHeader>
                <CardBody>
                  <p className="card-text">
                    {" "}
                    Exercitation +1 labore velit, blog sartorial PBR leggings
                    next level wes anderson artisan four loko farm-to-table
                    craft beer twee.
                  </p>
                </CardBody>
                <div className="card-footer">
                  <p className="card-text mb-0">Last updated 3 mins ago</p>
                </div>
              </Card>
            </Col>

            <Col lg={6} xxl={4}>
              <Card className="text-light" style={{background:'#0F0F0F'}}>
                <CardHeader>
                  <h4 className="card-title mb-0">
                    A day in the of a professional fashion designer
                  </h4>
                </CardHeader>
                <CardBody>
                  <p className="card-text">
                    Exercitation +1 labore velit, blog sartorial PBR leggings
                    next level wes anderson artisan four loko farm-to-table
                    craft beer twee. ommodo enim craft beer mlkshk aliquip jean
                    shorts ullamco.
                  </p>
                  <p className="card-text mb-0">Last updated 3 mins ago</p>
                </CardBody>
                <img
                  className="card-img-bottom img-fluid"
                  src={img11}
                  alt="Card cap"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
