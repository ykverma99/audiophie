import React from "react";
import styles from "./LikeCard.module.scss";
import Button from "./Button";
import Image from "next/image";

const LikeCard = () => {
  return (
    <div className={styles.like_card}>
      <div className={styles.like_card__image}>
        <Image
          src={"/images/shared/image-xx99-mark-one-headphones.jpg"}
          alt={"xx99-mark-one-headphones"}
          fill={true}
          style={{ objectFit: "cover", borderRadius: "8px" }}
          className={styles.like_card__image___img}
        />
      </div>
      <div className={styles.like_card__content}>
        <h2 className={styles.like_card__content___heading}>XX99 MARK I</h2>
        <Button href={"/"} main={true}>
          SEE PRODUCT
        </Button>
      </div>
    </div>
  );
};

export default LikeCard;
