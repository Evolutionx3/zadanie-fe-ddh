import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bundles from "./components/Bundles";
import CartModal from "./components/CartModal";
import BundlePage from "./components/BundlePage";
import bundles from "./Data";

const App = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState();

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

      <Bundles clickHandler={clickHandler} setActive={setActive} />
      {active === 1 && (
        <BundlePage
          clickHandler={clickHandler}
          bundles={bundles}
          cardIndex={1}
        />
      )}
      {active === 2 && (
        <BundlePage
          clickHandler={clickHandler}
          bundles={bundles}
          cardIndex={2}
        />
      )}
      {active === 3 && (
        <BundlePage
          clickHandler={clickHandler}
          bundles={bundles}
          cardIndex={3}
        />
      )}
      {active === 4 && (
        <BundlePage
          clickHandler={clickHandler}
          bundles={bundles}
          cardIndex={4}
        />
      )}
    </React.Fragment>
  );
};

export default App;
