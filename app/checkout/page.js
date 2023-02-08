"use client";

import React, { useEffect, useState } from "react";
import styles from "./cart.module.scss";
import Image from "next/image";
import Input from "./Input";
import CartProduct from "../../components/CartProduct";
import Button from "../../components/Button";
import useSWR from "swr";
import TotalCheckout from "./TotalCheckout";

const fetcher = async () => {
  const res = await fetch("http://localhost:3000/api/cart");
  const data = res.json();
  return data;
};

const page = () => {
  const [total, settotal] = useState(0);
  const [shipping, setshipping] = useState(50);
  const [grandTotal, setgrandTotal] = useState(0);

  const { data } = useSWR("cart", fetcher);

  useEffect(() => {
    data?.data.map((item) => {
      return settotal((prev) => prev + parseInt(item.productId.price));
    });
  }, [data]);

  useEffect(() => {
    setgrandTotal(total + shipping);
  }, [total]);

  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const inputValue = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    const inputData = {
      product: data?.data.map((item) => {
        return item._id;
      }),
      name: inputs.name,
      email: inputs.email,
      phoneNumber: inputs.phone,
      address: inputs.address,
      ZIPCode: inputs.zipCode,
      city: inputs.city,
      country: inputs.country,
    };
    const dataInput = JSON.stringify(inputData);
    try {
      const res = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: dataInput,
      });
      if (!res.ok) {
        console.log("error");
      }
      const d = res.json();
      console.log(d);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.cart_container}>
      <form onSubmit={submitOrder} className={styles.cart_form}>
        <div className={styles.cart_form__checkout}>
          <h2 className={styles.cart_form__checkout___heading}>CHECKOUT</h2>
          <section className={styles.cart_form__checkout___section}>
            <p className={styles.para}>BILLING DETAILS</p>
            <div className={styles.cart_form__checkout___section____double}>
              <Input
                label={"Name"}
                onChange={inputValue}
                name={"name"}
                placeholder={"Yogesh Verma"}
                // error={"invalid Value"}
              />
              <Input
                label={"Email Address"}
                onChange={inputValue}
                name={"email"}
                placeholder={"yogesh@mail.com"}
                // error={"invalid"}
              />
            </div>
            <div className={styles.cart_form__checkout___section____single}>
              <Input
                label={"Phone Number"}
                onChange={inputValue}
                name={"phone"}
                placeholder={"+91 202-555-0136"}
                // error={"invalid"}
              />
            </div>
          </section>
          <section className={styles.cart_form__checkout___section}>
            <p className={styles.para}>SHIPPING INFO</p>
            <div>
              <Input
                label={"Your Address"}
                onChange={inputValue}
                name={"address"}
                placeholder={"1137 Williams Avenue"}
                // error={"invalid"}
              />
            </div>
            <div className={styles.cart_form__checkout___section____double}>
              <Input
                label={"ZIP Code"}
                onChange={inputValue}
                name={"zipCode"}
                placeholder={"10001"}
                // error={"invalid Value"}
              />
              <Input
                label={"City"}
                onChange={inputValue}
                name={"city"}
                placeholder={"Ludhiana"}
                // error={"invalid"}
              />
            </div>
            <div className={styles.cart_form__checkout___section____single}>
              <Input
                label={"Country"}
                onChange={inputValue}
                name={"country"}
                placeholder={"India"}
                // error={"invalid"}
              />
            </div>
          </section>
          <section className={styles.cart_form__checkout___section}>
            <p className={styles.para}>PAYMENT METHOD</p>
            <div className={styles.cart_form__checkout___section}>
              <div className={styles.input_radio}>
                <input type="radio" id="cash" name="cash" />
                <label htmlFor="cash" className={styles.input_radio__label}>
                  Cash On Delivery
                </label>
              </div>
            </div>
            <div className={styles.cash}>
              <Image
                src={"/images/checkout/icon-cash-on-delivery.svg"}
                width={50}
                height={50}
                alt={"cahsOnDelivery"}
              />
              <p>
                {
                  "The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled"
                }
              </p>
            </div>
          </section>
        </div>
        <div className={styles.cart_form__summary}>
          {data?.data.map((item) => {
            let split = item?.productId?.name.split(" ");
            let length = split.length - 1;
            let productName = split.slice(0, length).join(" ");
            return (
              <CartProduct
                btn={true}
                key={item?._id}
                src={item?.productId?.mainImg}
                productName={productName}
                price={item?.productId?.price}
                stock={item?.quantity}
                id={item?._id}
              />
            );
          })}

          <div className={styles.cart_form__summary___pricebox}>
            <TotalCheckout name={"TOTAL"} price={total} />
            <TotalCheckout name={"SHIPPING"} price={shipping} />
            <TotalCheckout name={"GRAND TOTAL"} price={grandTotal} />
          </div>
          <button type="submit" className={styles.btn}>
            CONTINUE & PAY
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
