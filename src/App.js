import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bundles from "./components/Bundles";
import Cart from "./components/Cart";
import CartModal from "./components/CartModal";

const App = () => {
  const [show, setShow] = useState(false);

  const [cart, setCart] = useState([]);
  const clickHandler = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const changeHandler = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const closeHandler = () => {
    setShow(null);
  };

  // useEffect(() => {
  //   console.log("Cart changed");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} />
      {show && (
        <CartModal
          cart={cart}
          setCart={setCart}
          changeHandler={changeHandler}
          onConfirm={closeHandler}
        />
      )}
      <Bundles clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default App;
