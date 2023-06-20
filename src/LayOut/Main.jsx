import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;