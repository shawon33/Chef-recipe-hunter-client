import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ChefCard from "./ChefCard";
import './css/style.css';


const CookedChef = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('https://chef-info-server-shawon33.vercel.app/chef')
            .then(res => res.json())
            .then(data => {
                setChef(data);
            })

    }, [])
    return (
        <Container>
            <h1 className="text-info text-bg-light text-center mt-4  ">Our Best Chef</h1>
            <p className="text-center bg-light-subtle text-info mb-4">they are vey care full to make food</p>
            <div className="grid-container ">
                {
                    chef.map(Chef => <ChefCard
                        key={Chef._id}
                        Chef={Chef}
                    ></ChefCard>)
                }
            </div>
        </Container>
    );
};

export default CookedChef;