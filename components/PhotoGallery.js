import Image from "next/image";
import React from "react";
import styles from "./photoGallery.module.scss";

const PhotoGallery = ({ first, third, second }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__small}>
        <div className={styles.container__small___1}>
          <Image
            src={first}
            alt={"first"}
            fill={true}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className={styles.container__small___2}>
          <Image
            src={second}
            alt={"second"}
            fill={true}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className={styles.container__big}>
        <Image
          src={third}
          alt={"third"}
          fill={true}
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
