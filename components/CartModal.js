"use client";

import React from "react";
import styles from "./CartModal.module.scss";
import CartProduct from "./CartProduct";
import Button from "./Button";

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
      <div className={styles.cart__price}>
        <p className={styles.cart__price___total}>TOTAL</p>
        <p className={styles.cart__price___money}>$2500</p>
      </div>
      <button className={styles.cart__btn}>CHECKOUT</button>
    </div>
  );
};

export default CartModal;
