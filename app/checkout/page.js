import React from "react";
import styles from "./cart.module.scss";
import Image from "next/image";
import Input from "./Input";
import CartProduct from "../../components/CartProduct";
import Button from "../../components/Button";

const page = () => {
  let data = [
    { name: "TOTAL", price: 2999 },
    { name: "SHIPPING", price: 50 },
    { name: "VAT(INCLUDED)", price: 599 },
    { name: "GRAND TOTAL", price: 4500 },
  ];

  return (
    <div className={styles.cart_container}>
      <form className={styles.cart_form}>
        <div className={styles.cart_form__checkout}>
          <h2 className={styles.cart_form__checkout___heading}>CHECKOUT</h2>
          <section className={styles.cart_form__checkout___section}>
            <p className={styles.para}>BILLING DETAILS</p>
            <div className={styles.cart_form__checkout___section____double}>
              <Input
                label={"Name"}
                name={"name"}
                placeholder={"Yogesh Verma"}
                // error={"invalid Value"}
              />
              <Input
                label={"Email Address"}
                name={"email"}
                placeholder={"yogesh@mail.com"}
                // error={"invalid"}
              />
            </div>
            <div className={styles.cart_form__checkout___section____single}>
              <Input
                label={"Phone Number"}
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
                name={"address"}
                placeholder={"1137 Williams Avenue"}
                // error={"invalid"}
              />
            </div>
            <div className={styles.cart_form__checkout___section____double}>
              <Input
                label={"ZIP Code"}
                name={"zipCode"}
                placeholder={"10001"}
                // error={"invalid Value"}
              />
              <Input
                label={"City"}
                name={"city"}
                placeholder={"Ludhiana"}
                // error={"invalid"}
              />
            </div>
            <div className={styles.cart_form__checkout___section____single}>
              <Input
                label={"Country"}
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
          <CartProduct />
          {/* <CartProduct /> */}
          {/* <CartProduct /> */}

          <div className={styles.cart_form__summary___pricebox}>
            {data.map((item) => {
              return (
                <div
                  className={styles.cart_form__summary___pricebox_list}
                  key={item.name}
                >
                  <p>{item.name}</p>
                  <h3>${item.price}</h3>
                </div>
              );
            })}
          </div>
          <Button main={true} href={"/cart"}>
            CONTINUE & PAY
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
