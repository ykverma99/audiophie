import React from "react";
import CardSection from "../../components/CardSection";
import AboutSection from "../../components/AboutSection";
import Product from "../../components/Product";
import styles from "./product.module.scss";
// import { data } from "../../pages/api/data";

const fetchData = async (query) => {
  const res = await fetch(
    `http://localhost:3000/api/product?category=${query}`
  );

  if (!res.ok) {
    console.log("error");
  }

  return res.json();
};

const page = async ({ searchParams }) => {
  const query = searchParams.category;
  const { data } = await fetchData(query);
  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>{query.toUpperCase()}</div>
      {data?.map((item, index) => {
        return (
          <Product
            key={item._id}
            src={item.mainImg}
            isEven={index % 2 !== 0 ? true : false}
            para={item.desc}
            heading={item.name}
            newProduct={item.newProduct}
            href={`product/${query}/${item._id}`}
            idImg={item._id}
          />
        );
      })}
      <div className={styles.container__cardsection}>
        <CardSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default page;
