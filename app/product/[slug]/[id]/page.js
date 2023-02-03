import React from "react";
import Product_2 from "../../../../components/Product_2";
import styles from "./id.module.scss";
import PhotoGallery from "../../../../components/PhotoGallery";
import CardSection from "../../../../components/CardSection";
import AboutSection from "../../../../components/AboutSection";
import LikeCard from "../../../../components/LikeCard";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  if (!res.ok) {
    throw new Error("Something is wrong");
  }

  return res.json();
};

const page = async ({ params }) => {
  const id = params.id;
  const { data } = await getData(id);

  return (
    <div className={styles.container}>
      <Product_2
        src={data.mainImg}
        heading={data.name}
        para={data.desc}
        price={data.price}
        about={data.about}
      >
        {data.inBox.map((data) => {
          return (
            <div key={data._id} className={styles.listbox}>
              <span className={styles.listbox__quantity}>{data.quantity}X</span>
              <p className={styles.listbox__item}>{data.name}</p>
            </div>
          );
        })}
      </Product_2>
      <PhotoGallery
        first={data.images[0]}
        second={data.images[1]}
        third={data.images[2]}
      />
      {/* <div className={styles.like}>
        <h2 className={styles.like__heading}>YOU MAY ALSO LIKE</h2>
        <div className={styles.like__likeCard}>
          <LikeCard />
          <LikeCard />
          <LikeCard />
        </div>
      </div> */}
      <CardSection />
      <AboutSection />
    </div>
  );
};

export default page;
