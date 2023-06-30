import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import RecipeInfo from './Recipeinfo';
import './style/style.css'

const Recipe = () => {
    const chefRecipes = useLoaderData();
    const { _id, chef_Picture, short_bio, chef_Name, experience, number_of_recipes, likes, food_recipes } = chefRecipes;


    return (
        <>
            {/* <Container >
                <div className='mb-5'>
                    <Card style={{ width: '24rem' }}>
                        <Card.Img variant="top" src={chef_Picture} />
                        <Card.Body>
                            <Card.Title><h2 className='text-center'>Name:<span className='text-info bg-body-secondary p-1 rounded-1 '>{chef_Name}</span></h2></Card.Title>
                            <Card.Text>
                              <p className='fw-bold'>  {short_bio}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container> */}

            <Container >
                <Row>
                    <Col className="text-center md:bg-body-secondary">
                        <Card style={{ width: '30rem', }}>
                            <img src={chef_Picture} fluid alt="" />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem', height: '30rem' }}>
                            <Card.Body>
                                <Card.Title><h2 className='text-center'>Name:<span className='text-info bg-body-secondary p-1 rounded-1 '>{chef_Name}</span></h2></Card.Title>
                                <Card.Text>
                                    <p className='fw-bold'> Short_bio:<>{short_bio}</>  </p>
                                    <p className='fw-bold'>Likes: <h1 className='text-success'>{likes}</h1></p>
                                    <p className='fw-bold'>Number_of_recipes: <h1 className='text-success'>{number_of_recipes}</h1></p>
                                    <p className='fw-bold'>Experience  <h1 className='text-success'>{experience}</h1></p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h1 className='text-center text-bg-success rounded mt-5'>Chef Recipes & Info</h1>
                <p className='text-center text-bg-info  rounded mb-5'>Good for Health</p>
                <div className='grid-container'>
                    {
                        food_recipes.map(res => <RecipeInfo
                            key={res._id}
                            res={res}
                        ></RecipeInfo>)
                    }
                </div>

            </Container>
        </>
    );
};

export default Recipe;