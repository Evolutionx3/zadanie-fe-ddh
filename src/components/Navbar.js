import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={classes["nav__box"]}>
        <span className={classes["title"]}>Zadanie DDH</span>
        <div className={classes["cart__box"]}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Koszyk</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
