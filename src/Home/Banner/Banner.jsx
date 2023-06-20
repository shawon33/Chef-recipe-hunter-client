import { Col, Container, Row } from "react-bootstrap";
import img1 from '../../photo/photo-1.jpg'



const Banner = () => {
    return (
        <Container>
            <div className="banner mt-5 ">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1 className="">Welcome to Our Website!</h1>
                            <p className="text-center mt-4 fw-bold fs-1 text-warning  ">I'm hun-gry, oh so hun-gry, < br />
                                Crav-ing fla-vors that de-light.< br />
                                Siz-zling sounds and aro-mas,< br />
                                Tempt-ing tast-es, pure de-light.</p>
                        </Col>
                        <Col>
                            <img src={img1} alt="" className=" rounded" style={{ width: '500px', height: '600px' }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};

export default Banner;