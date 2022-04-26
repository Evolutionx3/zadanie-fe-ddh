import React from "react";
import Bundle from "./Bundle";
import classes from "./BundlePage.module.css";

const BundlePage = ({ bundles, cardIndex, clickHandler }) => {
  return (
    <div className={classes["wrapper"]}>
      {bundles.map((bundle) => {
        return (
          cardIndex === bundle.id && (
            <Bundle
              key={Math.random()}
              item={bundle}
              clickHandler={clickHandler}
            ></Bundle>
          )
        );
      })}
    </div>
  );
};

export default BundlePage;
