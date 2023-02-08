"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./cartProduct.module.scss";

const CartProduct = ({ id, stock, btn, productName, price, src }) => {
  const [quant, setquant] = useState(stock);

  const addStock = async () => {
    setquant((prev) => prev + 1);
    const input = {
      quantity: quant + 1,
    };
    let jsonData = JSON.stringify(input);
    try {
      const res = await fetch(`http://localhost:3000/api/cart/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });
      if (!res.ok) {
        console.log("error");
      }
      const data = res.json();
    } catch (error) {
      console.log(error);
    }
  };
  const subStock = async () => {
    setquant((prev) => prev - 1);
    const input = {
      quantity: quant - 1,
    };
    let jsonData = JSON.stringify(input);
    try {
      const res = await fetch(`http://localhost:3000/api/cart/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });
      if (!res.ok) {
        console.log("error");
      }
      const data = res.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.cart}>
      <div className={styles.cart_product}>
        <div className={styles.cart_product__image}>
          <Image
            src={src}
            alt={"product-cart"}
            fill={true}
            style={{ objectFit: "cover", borderRadius: "6px" }}
          />
        </div>
        <div className={styles.cart_product__info}>
          <p className={styles.cart_product__info___name}>{productName}</p>
          <p>$ {price}</p>
        </div>
      </div>
      <div className={styles.cart_stock}>
        {btn ? (
          <p>X{stock}</p>
        ) : (
          <div className={styles.btn}>
            <button onClick={subStock} className={styles.btn__btn}>
              -
            </button>
            <span className={styles.btn__value}>{quant}</span>
            <button onClick={addStock} className={styles.btn__btn}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProduct;
