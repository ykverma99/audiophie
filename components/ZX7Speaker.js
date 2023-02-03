"use client";
import React, { useEffect } from "react";
import Button from "./Button";
import styles from "./productsImage.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ZX7Speaker = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} animate={animation} className={styles.speakerZX7}>
      <p className={styles.speakerZX7__para}>ZX7 SPEAKER</p>
      <Button href={"/product/speakers/63d0f86b27fde07ebfe9c5dd"}>
        SEE PRODUCT
      </Button>
    </motion.div>
  );
};

export default ZX7Speaker;
