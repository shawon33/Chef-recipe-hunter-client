import { Card, CardGroup, Container } from "react-bootstrap";

import img from '../../photo/FoodMakingTips/FoodMaking1.jpg'
import img2 from '../../photo/FoodMakingTips/FoodMaking2.jpg'
import img3 from '../../photo/FoodMakingTips/FoodMaking3.jpg'
import img4 from '../../photo/FoodMakingTips/FoodMaking4.jpg'
import img5 from '../../photo/FoodMakingTips/FoodMaking5.jpg'
import img6 from '../../photo/FoodMakingTips/FoodMaking6.jpg'


const FoodMakingProcess = () => {
    return (
        <div className="mt-5">
            <Container>
                <div className="mt-5">
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title>Peanut Butter and Jelly Sandwich:</Card.Title>
                                <Card.Text>
                                    <img src={img4} className="d-block w-100" alt="" />
                                    <p>Spread peanut butter on one slice of bread and jelly on another slice, then press the slices together.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>

                            <Card.Body>
                                <Card.Title>Tuna Salad</Card.Title>
                                <Card.Text>
                                    <img src={img5} className="d-block w-100" alt="" />
                                    <p>Combine canned tuna, mayonnaise, diced onions, and any other desired ingredients in a bowl. Mix well and serve.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Fruit Smoothie</Card.Title>
                                <Card.Text>
                                    <img src={img6} className="d-block w-100" alt="" />
                                    <p>Blend together your favorite fruits, such as berries, banana, and yogurt, with a splash of milk or juice until smooth.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
                <div className="mt-5">
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title>Instant Ramen Noodles:</Card.Title>
                                <Card.Text>
                                    <img src={img} className="d-block w-100" alt="" />
                                    <p> Simply boil water, add the noodles and seasoning packet, and cook for 2 minutes until the noodles are tender.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Enjoy Noodles</small>
                            </Card.Footer>
                        </Card>
                        <Card>

                            <Card.Body>
                                <Card.Title>Microwave Scrambled Eggs:</Card.Title>
                                <Card.Text>
                                    <img src={img2} className="d-block w-100" alt="" />
                                    <p>Beat eggs in a microwave-safe bowl, add salt and pepper, and microwave on high for 1-2 minutes, stirring every 30 seconds, until the eggs are set.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Egg Fry</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                       
                            <Card.Body>
                                <Card.Title>Grilled Cheese Sandwich:</Card.Title>
                                <Card.Text>
                                    <img src={img3} className="d-block w-100" alt="" />
                                    <p>: Place cheese between two slices of bread and cook in a preheated skillet over medium heat for about 1 minute on each side until the bread is toasted and the cheese is melted.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-dark">Make it very Easy</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </Container>
        </div>
    );
};

export default FoodMakingProcess;