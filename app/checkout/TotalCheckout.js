import React from "react";
import styles from "./totalchelout.module.scss";

const TotalCheckout = ({ name, price }) => {
  return (
    <div className={styles.pricebox_list}>
      <p>{name}</p>
      <h3>${price}</h3>
    </div>
  );
};

export default TotalCheckout;
