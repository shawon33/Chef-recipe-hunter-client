import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const [success, setSuccess] = useState();

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const handleGoogleLogin = () => {
        console.log("google is comming");
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
               console.log(error);
            });

    }


    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })

            })
            .catch(error => {
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
            </Form>
            <Container>
                <div className="mt-4 d-block ">
                    <Button  onClick={handleGoogleLogin } variant="outline-success"><FaGoogle /> Sing in with Google</Button>{' '}
                    <Button variant="outline-danger">Success</Button>{' '}
                </div>
            </Container>
        </Container>
    );
};

export default Login;