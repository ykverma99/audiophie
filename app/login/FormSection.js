"use client";
import React, { useState } from "react";
import Input from "../../components/Input";
import styles from "./login.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormSection = () => {
  const [userInput, setuserInput] = useState({
    email: "",
    password: "",
  });
  const [passwordShow, setpasswordShow] = useState(false);
  const [errors, seterrors] = useState({});
  const router = useRouter();
  const handleUserInput = (e) => {
    setuserInput({ ...userInput, [e.target.name]: e.target.value });
    seterrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = {
      email: userInput.email,
      password: userInput.password,
    };
    const JSONdata = JSON.stringify(inputs);
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    });
    const data = await res.json();
    if (res.status === 200) {
      // setdata(data.data);
      router.push("/");
      router.refresh();
    }
    if (res.status === 400) {
      seterrors(data);
    }
  };
  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit} className={styles.form_container__form}>
        <h2 className={styles.form_container__form___heading}>Welcome back</h2>
        <p className={styles.form_container__form___para}>
          Please enter your details.
        </p>
        <div className={styles.form_container__form___box}>
          <Input
            id={"Email"}
            type="text"
            placeholder={"Your Email Address"}
            name={"email"}
            // value={userInput.firstName}
            // small="wrong"
            onChange={handleUserInput}
          />
        </div>
        <div className={styles.form_container__form___box}>
          <div>
            <Input
              id={"Password"}
              type={passwordShow ? "text" : "password"}
              placeholder={"Enter Password"}
              name={"password"}
              // value={userInput.password}
              // small="wrong"
              onChange={handleUserInput}
              onShow={() => setpasswordShow(true)}
              onHide={() => setpasswordShow(false)}
              showPasswords={passwordShow}
              icon={true}
            />
          </div>
        </div>
        <div className={styles.form_container__form___error}>
          {errors && <small>{errors.message}</small>}
        </div>
        <div className={styles.form_container__form___button}>
          <button
            type="submit"
            className={styles.form_container__form___button____btn}
          >
            Create Account
          </button>
        </div>
        <div className={styles.form_container__form___account}>
          <p>Don't have an account?</p>
          <Link style={{ color: "blue" }} href={"/signin"}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
