import React from "react";
import bundles from "../Data";
import classes from "./Bundles.module.css";
import BundlesItem from "./BundlesItem";

const Bundles = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["header"]}>Lista pakietów</div>
      {bundles.map((bundle) => (
        <BundlesItem key={bundle.id} props={bundle} />
      ))}
    </div>
  );
};

export default Bundles;
