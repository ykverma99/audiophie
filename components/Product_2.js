"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./product_2.module.scss";
import Button from "./Button";
import { motion } from "framer-motion";

const Product_2 = ({
  src,
  para,
  newProduct,
  heading,
  children,
  about,
  price,
}) => {
  const [count, setcount] = useState(1);
  function add() {
    setcount((prev) => prev + 1);
  }
  function sub() {
    if (count <= 1) {
      setcount(1);
    } else {
      setcount((prev) => prev - 1);
    }
  }
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.6, delay: 0.4 }}
        className={styles.container}
      >
        <div className={styles.container__image}>
          <Image
            src={src}
            fill={true}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            alt={"image-product"}
          />
        </div>
        <div className={styles.container__content}>
          {newProduct && (
            <p className={styles.container__content___title}>NEW PRODUCT</p>
          )}
          <h2 className={styles.container__content___heading}>{heading}</h2>
          <p className={styles.container__content___para}>{para}</p>
          <p className={styles.container__content___price}>${price}</p>
          <div className={styles.container__content___buttons}>
            <div className={styles.cart}>
              <button onClick={sub} className={styles.cart__btn}>
                -
              </button>
              <span className={styles.cart__value}>{count}</span>
              <button onClick={add} className={styles.cart__btn}>
                +
              </button>
            </div>
            <Button main={true} href={"/headphones"}>
              ADD CART
            </Button>
          </div>
        </div>
      </motion.div>
      {/* Features section */}
      <section className={styles.desc}>
        <div className={styles.desc__features}>
          <h2 className={styles.desc__heading}>FEATURES</h2>
          <p className={styles.desc__features___para}>{about}</p>
        </div>
        <div className={styles.desc__box}>
          <h2
            className={`${styles.desc__box__heading} ${styles.desc__heading}`}
          >
            IN THE BOX
          </h2>
          <div className={styles.desc__box___lists}>{children}</div>
        </div>
      </section>
    </div>
  );
};

export default Product_2;
