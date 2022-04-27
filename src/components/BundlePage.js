import React from "react";
import Bundle from "./Bundle";
import classes from "./BundlePage.module.css";

const BundlePage = ({ bundles, cardIndex, clickHandler, setActive }) => {
  return (
    <div className={classes["wrapper"]}>
      <p className={classes["back__to"]} onClick={() => setActive(null)}>
        <i className="fa-solid fa-arrow-left-long"></i> Powrót do listy pakietów
      </p>
      <div className={classes["content"]}>
        {bundles.map((bundle) => {
          return (
            cardIndex === bundle.id && (
              <Bundle
                key={Math.random()}
                item={bundle}
                clickHandler={clickHandler}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default BundlePage;
