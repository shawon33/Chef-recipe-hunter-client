import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useContext } from "react";


const Login = () => {
    const {signIn}= useContext(AuthContext);
   

    const handelLogin = event =>{

        event.preventDefault(); 
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const loggedUser =result.user;
            console.log(loggedUser);
     
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <Container className='w-50 mx-auto'>

            <h3>Please Login</h3>

            <Form onSubmit={handelLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Text className="text-success">
                    Do Not Have an Account ? <Link to='/register'>Register</Link>
                </Form.Text>

                <Form.Text className="text-success">

                </Form.Text>

                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;