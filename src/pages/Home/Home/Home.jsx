import Banner from "../Banner/Banner";
import EsteemedLeaders from "../EsteemedLeaders/EsteemedLeaders";
import Mission from "../Mission/Mission";
import UnlockFuture from "../UnlockFuture/UnlockFuture";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>
            <Mission></Mission>
            <UnlockFuture></UnlockFuture>
            <EsteemedLeaders></EsteemedLeaders>
        </div>
    );
};

export default Home;