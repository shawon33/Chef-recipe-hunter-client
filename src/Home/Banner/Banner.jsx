import { Carousel, Col, Container, Row } from "react-bootstrap";

import img4 from '../../photo/carosuel/slider1.jpg'
import img6 from '../../photo/carosuel/slider2.jpg'
import img5 from '../../photo/carosuel/slider3.jpg'






const Banner = () => {
    return (
        <div className="mt-5 mb-5">
            <Container >
                <div className="banner mt-5 ">
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <h1 className="">Welcome to Our Website!</h1>
                                <p className="text-center mt-4 fw-bold fs-1 text-warning  mb-5   ">
                                    I am hun-gry, oh so hun-gry, < br />
                                    Crav-ing fla-vors that de-light.< br />
                                    Siz-zling sounds and aro-mas,< br />
                                    Tempt-ing tast-es, pure de-light.</p>
                            </Col>
                            {/* <Col>
                            <img src={img1} alt="" className=" rounded" style={{ width: '500px', height: '600px' }} />
                        </Col> */}
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Carousel className="text-primary">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img4}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Famous  Item</h3>
                                <h1 className=" ">Vegetable Salad.Our chef make it very spacial with any food .Every one try it with any food </h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img5}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Famous 2rd Item</h3>
                                <h1 className="  ">Frash Vegetable.Our company make it to green house process for customer good health</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img6}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h1 className="">Famous 3rd Item</h1>
                                <h1 className=" ">
                                    Biryani,this item is very popular in our site and it is very healthy for all age a people.
                                </h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </Container>
        </div>
    );
};

export default Banner;