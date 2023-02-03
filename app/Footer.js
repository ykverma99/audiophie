import Link from "next/link";
import React from "react";
import styles from "./footer.module.scss";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  let list = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "HEADPHONES",
      link: "/headphones",
    },
    {
      name: "SPEAKERS",
      link: "/speakers",
    },
    {
      name: "EARPHONES",
      link: "/earphones",
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__content}>
        <h2 className={styles.footer__content___heading}>audiophile</h2>
        <ul className={styles.footer__content___lists}>
          {list.map((item) => {
            return (
              <li
                className={styles.footer__content___lists_list}
                key={item.name}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.footer__links}>
        <div>
          <p className={styles.footer__links___para}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={styles.footer__links___copy}>
            Copyright 2022. All Rights Reserved
          </p>
        </div>
        <div className={styles.footer__links___icons}>
          <AiFillFacebook color="white" size={25} />
          <AiOutlineTwitter color="white" size={25} />
          <AiOutlineInstagram color="white" size={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
