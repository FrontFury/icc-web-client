import Banner from "../Banner/Banner";
import EsteemedLeaders from "../EsteemedLeaders/EsteemedLeaders";
import FAQ from "../FAQ/FAQ";
import Mission from "../Mission/Mission";
import UnlockFuture from "../UnlockFuture/UnlockFuture";

const Home = () => {
    return (
        <div className="bg-[#D0E3FF]">
            <Banner></Banner>
            <Mission></Mission>
            <UnlockFuture></UnlockFuture>
            <EsteemedLeaders></EsteemedLeaders>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;