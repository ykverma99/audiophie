"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  const router = usePathname();
  const links = [
    { name: "HOME", link: "/" },
    { name: "HEADPHONES", link: "/product?category=headphones" },
    { name: "SPEAKERS", link: "/product?category=speakers" },
    { name: "EARPHONES", link: "/product?category=earphones" },
  ];

  return (
    <header className={styles.header}>
      {/* MenuBar to show list of pages in Mobile  */}

      <div className={styles.header__menu}>
        {toggleMenu ? (
          <AiOutlineMenuUnfold onClick={() => settoggleMenu(false)} size={22} />
        ) : (
          <AiOutlineMenuFold onClick={() => settoggleMenu(true)} size={22} />
        )}
      </div>

      {/* header title  */}

      <div className={styles.header__title}>
        <Link href={"/"}>
          <h2 className={styles.header__title___name}>audiophile</h2>
        </Link>
      </div>

      {/* list about all the pages what we have in this app */}

      <ul className={styles.header__links}>
        {links.map((link) => {
          return (
            <li key={link.name} className={styles.header__links___link}>
              <Link
                className={
                  router == link.link ? styles.header__links___active : ""
                }
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.header__cart}>
        <AiOutlineShoppingCart size={22} />
      </div>
      {/* Showing a  */}
      <div className={toggleMenu ? styles.header__lists : styles.header__hide}>
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
      </div>
    </header>
  );
};

export default Navbar;
