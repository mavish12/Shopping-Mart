import { useState } from "react";
import { FaStar, FaUser, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { products } from "./constant";
import './style.css';

function SingleProductInfo(props) {
    const { addDataFn } = props

    let location = useLocation();
    const [data, setData] = useState(location.state)
    const [isdescriptionVisible, setDescriptionVisibility] = useState(true);
    const [itemQuantity, setItemQuantity] = useState(1);

    const singleProduct = (item) => {
        setData(item)
    }

    const clickFn = (item) => {
        addDataFn(item, itemQuantity)
        console.log(item);
    }

    let stars = Array.from({ length: (Math.ceil(data.avgRating)) }, (_, index) => index + 1)

    const relatedData = products.filter((items) => {
        return items.category === data.category
    })

    const itemQuantityOnChangeListener = (e) => {
        let value = e.target.value
        if (value <= 0) {
            value = 1
        }
        setItemQuantity(value)
    }
    return (
        <>
            <div style={{ position: 'relative' }}>
                <h1 className="single-product-img-title" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2', color: 'white' }}>{data.productName}</h1>
                <div>
                    <img className="singleproduct-img" src="/images/table.jpg" alt="backgroundImg" />
                </div>
            </div>
            <div className="single-product-mainitem">
                <div>
                    <img src={"/" + data.imgUrl} alt="emptyImg" width={'100%'} />
                </div>
                <div>
                    <h1>{data.productName}</h1>
                    <span style={{ marginBottom: '20px' }}>
                        <span> {stars.map((_, index) => (
                            <FaStar key={index} size={23} style={{ color: 'yellow', margin: '20px 3px' }} />
                        ))}</span>
                        <span style={{ marginLeft: '12%' }}>{data.avgRating}Rating</span>
                    </span>
                    <div style={{ marginBottom: '20px', display: 'flex' }}>
                        <h2>${data.price}</h2>
                        <span style={{ marginLeft: '18%', display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginBottom: '0%' }}>Category:{data.category}</p>
                        </span>
                    </div>
                    <p>{data.shortDesc}</p>
                    <input type="number" style={{ width: '100px' }} value={itemQuantity} onChange={(e) => itemQuantityOnChangeListener(e)} /><br /><br />
                    <button style={{ backgroundColor: '#020249', padding: '9px 16px', color: 'white', fontSize: '16px', borderRadius: '9px' }} onClick={() => clickFn(data)}>Add To Cart</button>
                </div>
            </div>
            <div style={{ display: "flex", padding: '5px 20px' }}>
                <div onClick={() => setDescriptionVisibility(true)} style={{ color: isdescriptionVisible ? 'black' : 'lightgray', cursor: 'pointer' }}>
                    <h3>Description</h3>
                </div>
                <div onClick={() => setDescriptionVisibility(false)} style={{ color: isdescriptionVisible ? 'lightgray' : 'black', cursor: 'pointer' }}>
                    <h3>&nbsp;&nbsp;Reviews({data.reviews.length})</h3>
                </div>
            </div>
            {isdescriptionVisible ? <p style={{ padding: '5px 20px' }}>{data.description}</p>
                : data.reviews.map((item, index) => (
                    <div className="helo" key={index} style={{ marginLeft: '20px' }}>
                        <div style={{ display: 'flex' }}>
                            <p>
                                <FaUser size={60} style={{ border: '1px solid black', padding: '10px', borderRadius: '50%', backgroundColor: 'yellow' }} />
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>{Array.from({
                                length: Math.ceil(item.rating)
                            }).map((_, index) => (
                                <FaStar key={index} size={20} color="yellow" />
                            ))
                            }
                            </p>
                        </div>
                        <p>{item.text}</p>
                    </div>
                ))
            }
            <h6 className="Extra-item-heading">You might also like</h6>
            <div className="Extra-item">
                {relatedData.map((item, index) => (
                    <span
                        key={index}
                        className="border p-3 my-3"
                        style={{ backgroundColor: 'white', borderRadius: '8px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                style={{ cursor: 'pointer' }}
                                src={"/" + item.imgUrl} alt="img"
                                width={"/" + item.imgUrl.includes(".png") ? "95%" : "90%"}
                                height={"/" + item.imgUrl.includes(".png") ? "250px" : "250px"}
                                onClick={() => singleProduct(item, { replace: true })}
                            />
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
                            <div style={{ display: 'grid', alignItems: 'end' }}>
                                <h1>{"$" + item.price}</h1>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaPlus size={51} className="hoverpart" style={{ border: '1px solid darkgray', padding: '10px', borderRadius: '100%', cursor: 'pointer' }} onClick={() => clickFn(item)} />
                            </div>
                        </div>
                    </span >
                ))}
            </div>
        </>
    );
}
export default SingleProductInfo