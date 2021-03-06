import React from "react";
import classes from "./Navbar.module.css";

const Navbar = ({ setShow, setActive }) => {
  return (
    <nav>
      <div className={classes["nav__box"]}>
        <span className={classes["title"]} onClick={() => setActive(null)}>
          Zadanie DDH
        </span>
        <div className={classes["cart__box"]} onClick={() => setShow(true)}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Koszyk</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
