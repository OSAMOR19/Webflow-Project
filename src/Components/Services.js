import React from "react";
import { Col, Container, Row, Button, Card } from "reactstrap";
import avatar1 from "../Images/serviceimage.png";

const Services = () => {
  return (
    <React.Fragment>
      <section className=" " style={{ background: "#101217" }}>
        <Container>
          <Row>
            <Col className="col-12">
              <div className="justify-content-between d-flex align-items-center mt-3 mb-4"></div>

              <Row className="justify-content-center mt-3">
                <Col lg={8}>
                  <div className="text-center pt-5 text-light mb-5">
                    <h5 className="mb-3 fw-semibold">
                      OUR <span className="text-primary">SERVICES</span>
                    </h5>
                    <h1 className="fw-bold">What we do at Agency</h1>
                    <p className="mb-4 ff-secondary">
                      Our mission is to create a supportive environment where
                      individuals with a shared enthusiasm can come..
                    </p>
                  </div>
                </Col>
              </Row>

              <div className=" justify-content-center">
                <Row className="row-cols-xxl-8  row-cols-lg-3 row-cols-1">
                  <Col>
                    <Card
                      className="card-body text-light"
                      style={{ background: "#454545" }}
                    >
                      <div className="d-flex mb-4 align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={avatar1}
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2"></div>
                      </div>
                      <h4 className="mb-1 fw-bold">Save Time</h4>
                      <p className="card-text text-light">
                        Automate repetitive task and focus on growing your
                        business, Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the Lorem Ipsumis simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                      </p>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-body">
                      <div className="d-flex mb-4 align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={avatar1}
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          {/* <h5 className="card-title mb-1">Natasha Carey</h5>
                        <p className="text-muted mb-0">Manager</p> */}
                        </div>
                      </div>
                      <h4 className="mb-1  fw-bold">Easy invoicing</h4>
                      <p className="card-text text-muted">
                        Automate repetitive task and focus on growing your
                        business, Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the Lorem Ipsumis simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                      </p>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-body">
                      <div className="d-flex mb-4 align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={avatar1}
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2"></div>
                      </div>
                      <h4 className="mb-1 fw-bold">Get paid faster</h4>
                      <p className="card-text text-muted">
                        Automate repetitive task and focus on growing your
                        business, Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the Lorem Ipsumis simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Services;
