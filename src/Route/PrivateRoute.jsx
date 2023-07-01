import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <Container><Spinner animation="border" variant="success" /></Container>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
       
   
};

export default PrivateRoute;