import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row, } from 'react-bootstrap';
import Recipe from './Recipe';
import { CiStar } from "react-icons/ci";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const RecipeInfo = ({ res }) => {
    console.log(res);
    const { recipe_name, recipe_img, rating, ingredients, cooking_method } = res;

    const handleFavorite = ()=>{
        console.log("i am coming");
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your success message goes here',
          });
    }
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card className='text-center' style={{ width: '24rem' }}>
                        <Card.Img variant="top" src={recipe_img} />
                        <Card.Body>
                            <Card.Title><span className='text-success-emphasis'>Recipe : <h1 className='text-primary fw-bolder '>{recipe_name}</h1></span></Card.Title>
                            <Card.Text>
                                <p className='text-body fw-bold '><span className='text-warning'>Ingredients:</span>{ingredients}</p>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><p className='text-warning-emphasis fw-bold'><span className='text-warning'>cooking_method:</span>{cooking_method}</p></ListGroup.Item>
                            <ListGroup.Item><CiStar className='text-warning fw-bolded'></CiStar>{rating}</ListGroup.Item>
                        </ListGroup>
                        <Button onClick={handleFavorite}>Favorite </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeInfo;