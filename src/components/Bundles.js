import React from "react";

import bundles from "../Data";

import classes from "./Bundles.module.css";

import BundlesItem from "./BundlesItem";

const Bundles = ({ clickHandler, setActive }) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["header"]}>Lista pakietów</div>
      {bundles.map((bundle) => (
        <BundlesItem
          key={bundle.id}
          item={bundle}
          clickHandler={clickHandler}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default Bundles;
