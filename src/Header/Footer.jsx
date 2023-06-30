import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
    return (
        <Container>
            <footer className="bg-secondary text-center py-3 rounded-3 mt-5 text-light   ">
                <Container>
                    <Row>
                        <Col sm={6} md={3}>
                            <h5>About</h5>
                      <h1 className="text-">welcome To Our website !</h1>
                        </Col>

                        <Col sm={6} md={3}>
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </Col>

                        <Col sm={12} md={6}>
                            <h5>Contact</h5>
                            <p>Email: Shawon@example.com</p>
                            <p>Phone: +88 01794236591</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container>
    );
};

export default Footer;