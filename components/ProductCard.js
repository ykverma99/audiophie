"use client";
import React from "react";
import styles from "./productcard.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ href, img, text }) => {
  return (
    <Link href={href}>
      <div className={styles.productcard}>
        <div className={styles.productcard__image}>
          <Image src={img} alt="headphones" width={180} height={150} />
        </div>
        <div className={styles.productcard__content}>
          <p className={styles.productcard__content___para}>{text}</p>
          <div className={styles.productcard__content___shopbox}>
            <small>SHOP</small>
            <IoIosArrowForward color="#d87d4a" size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
