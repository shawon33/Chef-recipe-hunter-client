import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <Container className='w-50 mx-auto'>

            <h3>Please Register</h3>

            <Form >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" required placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" required placeholder="Enter Photo URl" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                       
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>
                {/* onClick={handleAccepted} */}
                {/* disabled={!accepted} */}

                <Button variant="primary" type="submit" >
                    Register
                </Button>

                <Form.Text className="text-success ml-2">
                    Already Have an Account <Link to='/login'>Login</Link>
                </Form.Text>

                <Form.Text className="text-success">

                </Form.Text>

                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;