import { Link } from "react-router-dom";
import img from '../../photo/Error/Error.jpg'
import { Container } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";

const Error = () => {

    return (
        <>
            <Container>
                <div className="text-center ">
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900 text-decoration-none text-danger'
                    >
                       <h1 className=""> <FaBackward />Back to Home</h1>
                    </Link>
                </div>
                <img src={img} className='img-thumbnail' alt="" />
            </Container>
        </>
    );
};

export default Error;