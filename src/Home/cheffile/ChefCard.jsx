import { Card, Container, ListGroup } from "react-bootstrap";



const ChefCard = ({ Chef }) => {


    const { _id, chef_Picture, short_bio, chef_Name, experience, number_of_recipes, likes } = Chef;
    return (
        <div className="grid-row-3">
            <Container>
                {/* <Card style={{ width: '30rem' }}>
                    <img src={chef_Picture} alt="" />
                    <Card.Body>
                        <Card.Title>{chef_Name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={chef_Picture} />
                    <Card.Body>
                        <Card.Title>Chef Name :{chef_Name}</Card.Title>
                        <Card.Text>
                           {short_bio}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Experience :<span className="text-primary font-weight-bold">{experience}</span></ListGroup.Item>
                        <ListGroup.Item>Number of Recipes :<span className="text-primary " >{number_of_recipes}</span></ListGroup.Item>
                        <ListGroup.Item>Likes :<span className="text-primary">{likes}</span></ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ChefCard;