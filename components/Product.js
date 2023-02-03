"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./product.module.scss";
import Button from "./Button";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const Product = ({ idImg, href, isEven, src, para, newProduct, heading }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          bounce: 0.3,
          delay: 0.3,
        },
      });
    }
    if (!inView) {
      if (isEven) {
        animation.start({
          x: "70vw",
          scale: 0.7,
          opacity: 0,
        });
      } else {
        animation.start({
          x: "-70vw",
          scale: 0.7,
          opacity: 0,
        });
      }
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className={isEven ? styles.container_reverse : styles.container}
    >
      <div
        className={
          isEven ? styles.container_reverse__image : styles.container__image
        }
      >
        <Image
          src={src}
          fill={true}
          priority={true}
          style={{ objectFit: "cover", borderRadius: "10px" }}
          alt={"image-product/" + idImg + "id"}
        />
      </div>
      <div
        className={
          isEven ? styles.container_reverse__content : styles.container__content
        }
      >
        {newProduct && (
          <p
            className={
              isEven
                ? styles.container_reverse__content___title
                : styles.container__content___title
            }
          >
            NEW PRODUCT
          </p>
        )}
        <h2
          className={
            isEven
              ? styles.container_reverse__content___heading
              : styles.container__content___heading
          }
        >
          {heading}
        </h2>
        <p
          className={
            isEven
              ? styles.container_reverse__content___para
              : styles.container__content___para
          }
        >
          {para}
        </p>
        <Button main={true} href={href}>
          SEE PRODUCT
        </Button>
      </div>
    </motion.div>
  );
};

export default Product;
