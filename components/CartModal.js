"use client";

import React from "react";
import styles from "./CartModal.module.scss";
import CartProduct from "./CartProduct";

const CartModal = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__heading}>
        <h2>{`CART (${1})`}</h2>
        <p>Remove All</p>
      </div>
      <div>
        <CartProduct />
      </div>
    </div>
  );
};

export default CartModal;
