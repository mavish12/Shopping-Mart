import { FaPlus, FaStar, FaHeart } from "react-icons/fa";
import { discoutProducts } from "./constant";
import { useNavigate } from "react-router-dom";
import './style.css';

function BigDiscount(props) {
    const { addDataFn } = props

    const clickFn = (item) => {
        addDataFn(item)
    }
    let navigate = useNavigate()
    const singleProduct = (item) => {
        navigate("singleProductInfo", { state: item })
    }
    return (
        <div className="discount-main-parent">
            <h1 className="discount-title">Big Discount</h1>
            <div className="discount-sec-parent">
                {discoutProducts.map((item, index) => (
                    <span className="discount-item"
                        key={index}
                        onMouseEnter={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'block'}
                        onMouseLeave={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'none'}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ border: '1px solid Navy', backgroundColor: '#020249', color: 'white', padding: '3px 5px', borderRadius: '20px', width: '70px' }}>
                                {item.discount + "% Off"}
                            </p>
                            <p style={{ display: 'none' }} className="heart-icon">
                                <FaHeart />
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                style={{ cursor: 'pointer' }}
                                src={item.imgUrl} alt="img"
                                width={item.imgUrl.includes(".png") ? "95%" : "90%"}
                                height={item.imgUrl.includes(".png") ? "250px" : "250px"}
                                onClick={() => singleProduct(item, { replace: true })} />
                        </div>
                        <div>
                            <h3>{item.productName}</h3>
                        </div>
                        <div>
                            {Array.from({ length: Math.ceil(item.avgRating) }).map((_, index) => (
                                <FaStar key={index} size={23} style={{ color: 'yellow', margin: '20px 3px' }} />
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ display: 'grid', alignItems: 'end' }}>
                                <h1>{"$" + item.price}</h1>
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <FaPlus size={51} className="hoverpart" style={{ border: '1px solid darkgray', padding: '10px', borderRadius: '100%', cursor: 'pointer' }} onClick={() => clickFn(item)} />
                            </span>
                        </div>
                    </span >
                ))}
            </div>
        </div>
    )
}
export default BigDiscount;