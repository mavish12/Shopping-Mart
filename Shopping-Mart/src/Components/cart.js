import './style.css';
function Cart(props) {
    let { cartData } = props
    let { prize } = props
    let { deleteFn } = props
    let { add } = props
    let { subt } = props
    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '60% 35%', justifyContent: 'space-evenly', backgroundColor: 'rgba(234, 243, 243, 0.97)', paddingTop: '50px' }}>
                <div>
                    {cartData.length === 0
                        ? <div className="cart-empty">
                            <h3 className="cart-empty-heading">{"No item are add in Cart"}</h3>
                        </div>
                        : cartData.map((item, index) => (
                            <div className='cart-price-mainParent' key={index}>
                                <span>
                                    <img src={item.product.imgUrl} style={{ width: '100%', height: '150px' }} alt="img" />
                                </span>
                                <div>
                                    <h5 style={{ textAlign: 'end', marginBottom: '0%', cursor: 'pointer' }} onClick={() => deleteFn(item.product.id)}>{'X'}</h5>
                                    <h2 className='Cart-itemName'>{item.product.productName}</h2>
                                    <div className='cart-price-parent'>
                                        <div className='cart-price-secondParent' style={{ }}>
                                            <div>
                                                <p style={{ marginBottom: '0%' }}>{` $${item.product.price}.00 *  ${item.quantity}`}</p>
                                            </div>
                                            <div style={{ textAlign: 'end' }}>
                                                <h5 style={{ marginBottom: '0%' }}>{item.product.price * item.quantity}</h5>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div>
                                                <button style={{ border: '1px solid lightgray', padding: '0px 8px 3px', marginRight: '5px', fontSize: '30px', backgroundColor: 'white' }} onClick={() => add(item.product.id)}>+</button>
                                            </div>
                                            <div>
                                                <button style={{ border: '1px solid rgba(234, 243, 243, 0.97)', padding: '0px 11px 3px', fontSize: '30px', backgroundColor: 'rgba(234, 243, 243, 0.97)' }} onClick={() => subt(item.product.id)}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='cart-empty' style={{ marginBottom: '50px' }}>
                    <h3 className='cart-empty-heading' style={{ marginBottom: '50px' }}>Cart Summary</h3>
                    <h6>Total Price :</h6>
                    <h5>{`$${prize}.00`}</h5>
                </div>
            </div >
        </>
    );
}
export default Cart;