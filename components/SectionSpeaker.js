"use client";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React, { useEffect } from "react";
import Button from "./Button";
import styles from "./productsImage.module.scss";

const SectionSpeaker = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
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
    <motion.div animate={animation} ref={ref} className={styles.sectionSpeaker}>
      <div className={styles.sectionSpeaker__img}>
        <Image
          src={"/images/home/image-speaker-zx9.png"}
          alt="speaker-zx9"
          //   width={}
          fill={true}
          style={{ objectFit: "contain" }}
          //   height={150}
          className={styles.sectionSpeaker__img___image}
        />
      </div>

      <div className={styles.sectionSpeaker__content}>
        <h1 className={styles.sectionSpeaker__content___title}>
          ZX9 <br /> SPEAKER
        </h1>
        <p className={styles.sectionSpeaker__content___para}>
          Upgrade to premium speaker that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          href={"/product/speakers/63d0f5cc27fde07ebfe9c5a6"}
          black={true}
        >
          SEE PRODUCT
        </Button>
      </div>
    </motion.div>
  );
};

export default SectionSpeaker;
