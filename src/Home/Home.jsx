import Banner from "./Banner/Banner";
import ExtraSection from "./ExtraSection/ExtraSection";
import FoodMakingProcess from "./ExtraSection/FoodMakingProcess";
import CookedChef from "./cheffile/CookedChef";


const Home = () => {
    return (
        <div className="my-4 ">
            <Banner></Banner>
            <CookedChef></CookedChef>
            <ExtraSection></ExtraSection>
            <FoodMakingProcess></FoodMakingProcess>    
        </div>
    );
};

export default Home;