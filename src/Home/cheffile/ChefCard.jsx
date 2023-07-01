import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";



const ChefCard = ({ Chef }) => {


    const { _id, chef_Picture, short_bio, chef_Name, experience, number_of_recipes, likes } = Chef;
    return (
        <div className="grid-row-3  mt-5 mb-3">
            <Container>

                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={chef_Picture} />
                    <Card.Body>
                        <Card.Title>
                            <h1 className="fw-bold fst-italic bg-body-secondary "><span className="text-info">Name</span> :{chef_Name}</h1></Card.Title>
                        <Card.Text>
                            <p className="text-warning-emphasis fw-bold fst-italic bg-body-secondary "> {short_bio}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Link to={`/chef/${_id}`}> <Button variant="secondary">View recipes</Button>{' '} </Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ChefCard;