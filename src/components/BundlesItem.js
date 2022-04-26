import classes from "./BundlesItem.module.css";

const BundlesItem = ({ props }) => {
  const { id, title, shortDesc, img, price } = props;
  return (
    <div className={classes["bundles"]}>
      <div className={classes["img__box"]}>
        <img src={img} alt=""></img>
      </div>
      <div className={classes["details"]}>
        <p className={classes["title"]}>{title}</p>
        <p className={classes["desc"]}>{shortDesc}</p>
        <p className={classes["link"]}>Zobacz więcej</p>
      </div>
      <div className={classes["button__box"]}>
        <p>{price} ZŁ</p>
        <button>Do koszyka</button>
      </div>
    </div>
  );
};

export default BundlesItem;