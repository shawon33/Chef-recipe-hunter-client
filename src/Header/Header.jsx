import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGulp, FaUserCircle} from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";


const Header = () => {
   const {user,logOut} =useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error=> console.log(error))
    }
   return (
      <Container className="mt-4">
         
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
               <h1 className="text-success"><FaGulp className="pb-2"></FaGulp>Coo<span className="text-warning">ked</span></h1>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto gap-2 ">

                     <Link to='/' className="py-2 text-decoration-none">Home</Link>

                     <Link to='/healthTips' className="py-2 text-decoration-none ml-2">Good Health & Tips</Link>

                     <Link to='/makingTips' className="py-2 text-decoration-none ml-2">Food Making Tips</Link>

                     <Link to='/blogs' className="py-2 text-decoration-none ml-2">Blogs</Link>

     
                  </Nav>
                  
                  <Nav>
                     {
                        user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                     }

                     {
                        user ?
                           <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :
                           <Link to='/login'><Button variant="secondary">Login</Button></Link>
                     }
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </Container>
   );
};

export default Header;