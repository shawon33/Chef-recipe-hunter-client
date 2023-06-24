import { Card, CardGroup, Container } from "react-bootstrap";
import { GiBirdClaw, GiConcentrationOrb, GiFactory } from "react-icons/gi";




const ExtraSection = () => {
    return (
        <Container >
            <h1 className="text-success text-center mt-5 mb-5 bg-info-subtle ">Customer Safety</h1>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title><h1 className="text-success"><GiBirdClaw /></h1></Card.Title>
                        <Card.Text>
                            <h3 className="text-success">Food Law Certified</h3>
                            <p>You Have Come the Right Place</p>
                            <button className="rounded bg-success-subtle ">No Risk</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title><h1 className="text-success"><GiConcentrationOrb></GiConcentrationOrb></h1></Card.Title>
                        <Card.Text>
                            <h1 className="text-success">100% Concentration</h1>
                            <p>You Have Come the Right Place</p>
                            <button className="rounded bg-success-subtle ">No Risk</button>
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title><h1 className="text-success6"><GiFactory /></h1></Card.Title>
                        <Card.Text>
                            <h1 className="text-success">100% Safe Making Process</h1>
                            <p>You Have Come the Right Place</p>
                            <button className="rounded bg-success-subtle ">No Risk</button>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default ExtraSection;