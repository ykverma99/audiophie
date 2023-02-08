"use client";

import React, { useEffect, useState } from "react";
import styles from "./CartModal.module.scss";
import CartProduct from "./CartProduct";
import useSWR from "swr";
import Link from "next/link";

const fetcher = async () => {
  const res = await fetch("http://localhost:3000/api/cart", { method: "GET" });
  const data = await res.json();
  return data;
};

const CartModal = () => {
  const [total, settotal] = useState(0);
  const { data } = useSWR("cart", fetcher);

  useEffect(() => {
    data?.data.map((item) => {
      return settotal((prev) => prev + parseInt(item.productId.price));
    });
  }, [data]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__heading}>
        <h2>{`CART (${data?.data.length})`}</h2>
        <p>Remove All</p>
      </div>
      <div>
        {data?.data.map((item) => {
          let split = item?.productId?.name.split(" ");
          let length = split.length - 1;
          let productName = split.slice(0, length).join(" ");
          return (
            <CartProduct
              key={item?._id}
              src={item?.productId?.mainImg}
              productName={productName}
              price={item?.productId?.price}
              stock={item?.quantity}
              id={item?._id}
            />
          );
        })}
      </div>
      <div className={styles.cart__price}>
        <p className={styles.cart__price___total}>TOTAL</p>
        <p className={styles.cart__price___money}>$ {total}</p>
      </div>
      <button className={styles.cart__btn}>
        <Link href={"/checkout"}>CHECKOUT</Link>
      </button>
    </div>
  );
};

export default CartModal;
