"use client";
import React, { useState } from "react";
import useSWR from "swr";
import Product_2 from "../../../../components/Product_2";
import styles from "./id.module.scss";
import PhotoGallery from "../../../../components/PhotoGallery";
import CardSection from "../../../../components/CardSection";
import AboutSection from "../../../../components/AboutSection";
import LikeCard from "../../../../components/LikeCard";

// const getData = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/product/${id}`);
//   if (!res.ok) {
//     throw new Error("Something is wrong");
//   }

//   return res.json();
// };

const fetcher = async (id) => {
  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  const data = res.json();
  return data;
};

const page = ({ params }) => {
  const id = params.id;
  const [count, setcount] = useState(1);
  const { data } = useSWR(id, fetcher);

  const getValue = (val) => {
    setcount(val);
  };
  console.log(data?.data.images[0]);

  return (
    <div className={styles.container}>
      <Product_2
        src={data?.data.mainImg}
        heading={data?.data.name}
        para={data?.data.desc}
        price={data?.data.price}
        about={data?.data.about}
        // subBtn={sub}
        value={getValue}
      >
        {data?.data.inBox.map((data) => {
          return (
            <div key={data._id} className={styles.listbox}>
              <span className={styles.listbox__quantity}>{data.quantity}X</span>
              <p className={styles.listbox__item}>{data.name}</p>
            </div>
          );
        })}
      </Product_2>
      <PhotoGallery
        first={data?.data.images[0]}
        second={data?.data.images[1]}
        third={data?.data.images[2]}
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
