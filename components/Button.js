"use client";
import React from "react";
import Link from "next/link";
import styles from "../app/page.module.scss";
import { motion } from "framer-motion";

const Button = ({ onClick, type, href, children, black, main }) => {
  return (
    <>
      <Link href={href} className={styles.btn}>
        <motion.button
          type={type ? "submit" : "button"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onClick}
          className={
            main
              ? styles.button__main
              : black
              ? styles.button__black
              : styles.button__transparent
          }
        >
          {children}
        </motion.button>
      </Link>
    </>
  );
};

export default Button;
