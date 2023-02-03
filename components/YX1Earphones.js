"use client";
import React, { useEffect } from "react";
import styles from "./productsImage.module.scss";
import { motion, useAnimation } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const YX1Earphones = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "60vw",
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} animate={animation} className={styles.yx1earphones}>
      <div className={styles.yx1earphones__image}>
        <Image
          src={"/images/home/image-earphones-yx1.jpg"}
          alt="earphones YX1"
          //   width={200}
          //   height={200}
          fill={true}
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </div>
      <div className={styles.yx1earphones__content}>
        <p>YX1 Earphones</p>
        <Button href={"/product/earphones/63d0f45727fde07ebfe9c58c"}>
          SEE PRODUCT
        </Button>
      </div>
    </motion.div>
  );
};

export default YX1Earphones;
