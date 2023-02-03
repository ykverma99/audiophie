"use client";
import React from "react";
import styles from "../app/page.module.scss";
import Button from "../components/Button";
import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <div className={styles.main__bgpic}>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // transition={{  duration }}
        className={styles.main__bgpic___heading}
      >
        NEW PRODUCT
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={styles.main__bgpic___name}
      >
        XX99 MARK II HEADPHONES
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.main__bgpic___para}
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </motion.p>
      <Button href={"/product/headphones/63d0e7f227fde07ebfe9c53f"} main={true}>
        SEE PRODUCT
      </Button>
    </div>
  );
};

export default MainSection;
