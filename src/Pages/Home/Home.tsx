import NavBar from "../../Components/NavBar";
import LandingPage from "../../Components/Landing_page/LandingPage";
import FeaturedProductsPage from "../../Components/FearuredProducts/FeaturedProductsPage";
import Review from "../../Components/Reviews/Review";
import TopProducts from "../../Components/TopProducts/TopProducts";
import OfferContent from "../../Components/OfferContent/OfferContent";
import Inspiration from "../../Components/InspirationPage/Inspiration";
import OfferTimer from "../../Components/OfferTimer/OfferTimer";
import Connect from "../../Components/OfferTimer/Connect";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <div className="flex flex-col w-full h-full ">

            <NavBar />

            <LandingPage />


            <FeaturedProductsPage />

            <Review/>

            <OfferContent/>
            
            <TopProducts/>

            <Inspiration/>
            
           <OfferTimer/>
           
            <Connect/>
           
            <Footer/>
        </div>
    );
};

export default Home;
