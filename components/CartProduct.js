import Image from "next/image";
import React from "react";
import styles from "./cartProduct.module.scss";

const CartProduct = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart_product}>
        <div className={styles.cart_product__image}>
          <Image
            src={"/images/product-xx59-headphones/image-product.jpg"}
            alt={"product-cart"}
            fill={true}
            style={{ objectFit: "cover", borderRadius: "6px" }}
          />
        </div>
        <div className={styles.cart_product__info}>
          <p className={styles.cart_product__info___name}>XX99 MK II</p>
          <p>$2,999</p>
        </div>
      </div>
      <div className={styles.cart_stock}>
        {/* <p>X1</p> */}
        <div className={styles.btn}>
          <button className={styles.btn__btn}>-</button>
          <span className={styles.btn__value}>{1}</span>
          <button className={styles.btn__btn}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
