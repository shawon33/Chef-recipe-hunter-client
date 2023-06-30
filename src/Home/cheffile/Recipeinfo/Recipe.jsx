import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const chefRecipes = useLoaderData();
    const { _id, chef_Picture, short_bio, chef_Name, experience, number_of_recipes, likes } = chefRecipes;


    return (
        <Container>
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
                    {/* <Link to={{`/chef/${_id}`}}></Link> */}
                    <button><Link to={`/chef/${_id}`}>View recipes </Link></button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Recipe;