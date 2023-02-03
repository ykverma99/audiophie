"use client";
import React, { useEffect } from "react";
import styles from "./cardSection.module.scss";
import ProductCard from "./ProductCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardSection = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      animate={animation}
      className={styles.cardSection}
    >
      <ProductCard
        href={"/product?category=headphones"}
        img={"/images/shared/image-headphones.png"}
        text={"HEADPHONES"}
      />
      <ProductCard
        href={"/product?category=speakers"}
        img={"/images/shared/image-speakers.png"}
        text={"SPEAKERS"}
      />
      <ProductCard
        href={"/product?category=earphones"}
        img={"/images/shared/image-earphones.png"}
        text={"EARPHONES"}
      />
    </motion.section>
  );
};

export default CardSection;
