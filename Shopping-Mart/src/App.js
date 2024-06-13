import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Components/main";
import Shop from "./Components/shop";
import Cart from "./Components/cart";
import SingleProductInfo from "./Components/singleProductInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [addToCart, setAddToCart] = useState([]);
  const notify = () => {
    // Calling toast method by passing string
    toast.success("Product has added to cart!");
  };
  const deleteFn = (id) => {
    let copyArr = [...addToCart];
    for (let i = 0; i < copyArr.length; i++) {
      if (id === copyArr[i].product.id) {
        copyArr.splice(i, 1);
        setAddToCart(copyArr);
      }
    }
  }
  const add = (id) => {
    for (let i = 0; i < addToCart.length; i++) {
      if (id === addToCart[i].product.id) {
        addToCart[i].quantity++;
        setAddToCart([...addToCart]);
        break;
      }
    }
  }
  const subt = (id) => {
    for (let i = 0; i < addToCart.length; i++) {
      if (id === addToCart[i].product.id) {
        if (addToCart[i].quantity > 1) {
          addToCart[i].quantity--;
          setAddToCart([...addToCart]);
          break;
        }
      }
    }
  }
  const addDataFn = (value, quantity) => {
    let alreadyItemThere = addToCart.find(item => item.product.id === value.id) // return true or undefined = false
    if (alreadyItemThere === undefined) {
      const itemObject = {
        quantity: quantity === undefined ? 1 : quantity,
        product: value
      }
      setAddToCart((prevsValue) => [...prevsValue, itemObject]);
      notify();
    }
  }
  const totalPrice = addToCart.reduce((total, currentItem) => {
    return total + (currentItem.product.price * currentItem.quantity);
  }, 0);
  return (
    <>
      <BrowserRouter>
        <div>
          <ToastContainer />
          <Header addToCart={addToCart} />
          <Routes>
            <Route path="/" element={<Main addDataFn={addDataFn} />} />
            <Route path="singleProductInfo" element={<SingleProductInfo addDataFn={addDataFn} />} />
            <Route path="shop" element={<Shop addDataFn={addDataFn} />} />
            <Route path="cart" element={<Cart cartData={addToCart} deleteFn={deleteFn} prize={totalPrice} add={add} subt={subt} />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
