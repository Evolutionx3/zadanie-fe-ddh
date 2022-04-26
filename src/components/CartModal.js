import React, { useState, useEffect } from "react";
import classes from "./CartModal.module.css";

const CartModal = ({ cart, setCart, changeHandler, onConfirm }) => {
  const [price, SetPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    SetPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  if (cart.length === 0) {
    return (
      <React.Fragment>
        <div className={classes["backdrop"]} onClick={() => onConfirm()} />
        <div className={classes["modal"]}>
          <div className={classes["row"]}>
            <h4>Koszyk jest pusty</h4>
          </div>
          <div className={classes["row"]}>
            <button className={classes["button"]} onClick={() => onConfirm()}>
              Przejdź do listy pakietów
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className={classes["backdrop"]} onClick={() => onConfirm()} />
      <div className={classes["modal"]}>
        {cart.map((item) => (
          <React.Fragment>
            <div className={classes["row"]}>
              <div className={classes["item__name"]}>
                <p className={classes["title"]}>{item.title}</p>
                <p>Ilość badań: 1</p>
              </div>
              <div className={classes["amount"]}>
                {item.amount > 1 ? (
                  <button onClick={() => changeHandler(item, -1)}>-</button>
                ) : (
                  <button
                    className={classes["disabled"]}
                    onClick={() => changeHandler(item, -1)}
                  >
                    -
                  </button>
                )}
                <button>{item.amount}</button>
                <button onClick={() => changeHandler(item, +1)}>+</button>
              </div>
              <div className={classes["price__and__remove"]}>
                <p>{item.price} ZŁ</p>
                <button
                  className={classes["remove"]}
                  onClick={() => handleRemove(item.id)}
                >
                  Usuń
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
        <div className={classes["row"]}>
          <p>
            Podsumowanie: <span className={classes["price"]}>{price} ZŁ</span>
          </p>
          <button className={classes["button"]}>Przejdź do podsumowania</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartModal;
