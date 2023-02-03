import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.about_section}>
      <section className={styles.about_container}>
        <div className={styles.about_container__content}>
          <h2 className={styles.about_container__content___heading}>
            BRINGING YOU THE{" "}
            <span className={styles.about_container__content___heading_color}>
              BEST
            </span>{" "}
            AUDIO GEAR
          </h2>
          <p className={styles.about_container__content___para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            perferendis commodi, delectus voluptate reprehenderit dolore ex
            totam blanditiis asperiores! Perspiciatis odio, maiores aut nam
            possimus provident velit labore cumque fuga itaque ullam tempora ut,
            voluptatem error impedit maxime! Illum velit modi assumenda labore
            vitae eos! Ex quis ratione omnis accusamus.
          </p>
        </div>
        <div className={styles.about_container__image}>
          <Image
            src={"/images/shared/image-best-gear.jpg"}
            fill={true}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            alt={"best-gear"}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
