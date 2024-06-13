import Advantage from "./advantage";
import BestSale from "./bestSale";
import BigDiscount from "./bigDiscount";
import MainCarousal from "./mainCarousal";
import NewArrival from "./newArrival";

function Main(props) {
    const {addDataFn} = props
    return (
        <>   
            <MainCarousal />
            <Advantage />
            <BigDiscount addDataFn={addDataFn} />
            <NewArrival addDataFn={addDataFn} />
            <BestSale addDataFn={addDataFn} />
        </>
    );
}
export default Main;
