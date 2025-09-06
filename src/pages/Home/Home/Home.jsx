import Banner from "../Banner/Banner";
import CampusCulture from "../CampusCulture/CampusCulture";
import EsteemedLeaders from "../EsteemedLeaders/EsteemedLeaders";
import FAQ from "../FAQ/FAQ";
import Mission from "../Mission/Mission";
import UnlockFuture from "../UnlockFuture/UnlockFuture";

const Home = () => {
    return (
        <div className="bg-[#d0e3ffd7]">
            <Banner></Banner>
            <Mission></Mission>
            <UnlockFuture></UnlockFuture>
            <EsteemedLeaders></EsteemedLeaders>
            <CampusCulture></CampusCulture>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;