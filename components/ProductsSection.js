import React from "react";
import styles from "./productsImage.module.scss";

import SectionSpeaker from "./SectionSpeaker";
import YX1Earphones from "./YX1Earphones";
import ZX7Speaker from "./ZX7Speaker";

const ProductsSection = () => {
  return (
    <section className={styles.imagesContainer}>
      <SectionSpeaker />
      <ZX7Speaker />
      <YX1Earphones />
    </section>
  );
};

export default ProductsSection;
