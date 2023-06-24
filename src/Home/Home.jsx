import Banner from "./Banner/Banner";
import ExtraSection from "./ExtraSection/ExtraSection";
import FoodMakingProcess from "./ExtraSection/FoodMakingProcess";


const Home = () => {
    return (
        <div className="my-4">
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <FoodMakingProcess></FoodMakingProcess>
        </div>
    );
};

export default Home;