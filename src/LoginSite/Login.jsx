import { Button, Container, Form, Toast } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";


const Login = () => {
    const { signIn, googleLogin, gitHuLogin } = useContext(AuthContext);


    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        console.log("google is coming");
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your success message goes here',
                  });

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred. Please try again.',
                  });
                console.log(error);
            });

    }

    const handleGitHuLogin = () => {
        console.log("Github is coming");
        gitHuLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your success message goes here',
                  });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred. Please try again.',
                  });
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };


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
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your success message goes here',
                  });
                navigate(from, { replace: true })

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred. Please try again.',
                  });
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
                <div className="mt-4  ">
                    <Button onClick={handleGoogleLogin} variant="outline-dark"><FaGoogle /> Sing in with Google</Button>
                    <Button onClick={handleGitHuLogin} variant="outline-dark"><FaGithub/>Sing in With GitHub</Button>
                </div>
            </Container>
        </Container>
    );
};

export default Login;