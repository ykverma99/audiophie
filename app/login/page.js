import React from "react";
import Image from "next/image";
import styles from "./login.module.scss";
import FormSection from "./FormSection";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <Image
          src={"/images/form/image_2.svg"}
          alt={""}
          fill={true}
          style={{ objectFit: "contain", padding: "15px" }}
        />
      </div>
      <FormSection />
    </div>
  );
};

export default page;
