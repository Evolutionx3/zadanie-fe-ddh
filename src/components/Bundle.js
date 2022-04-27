import React from "react";
import classes from "./Bundle.module.css";

export const Bundle = ({ item, clickHandler }) => {
  const { title, desc, img, price } = item;
  return (
    <React.Fragment>
      <div className={classes["content"]}>
        <div className={classes["column"]}>
          <div className={classes["bundle__box"]}>
            <img src={img} alt=""></img>
            <div className={classes["details"]}>
              <h4>{title}</h4>
            </div>
          </div>
        </div>
        <div className={classes["column"]}>
          <div className={classes["price__box"]}>
            <p>{price} ZŁ</p>
            <button onClick={() => clickHandler(item)}>Do koszyka</button>
          </div>
        </div>
      </div>
      <div className={classes["desc__box"]}>
        <p className={classes["title"]}>Opis pakietu</p>
        <div className={classes["desc"]}>
          <p>{desc}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bundle;
