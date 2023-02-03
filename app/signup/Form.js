"use client";
import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import styles from "./form.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Form = () => {
  const [userInput, setuserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordShow, setpasswordShow] = useState(false);
  const [cPasswordShow, setcPasswordShow] = useState(false);
  const [errors, seterrors] = useState({});
  const [user, setuser] = useState({});
  const router = useRouter();
  const handleUserInput = (e) => {
    setuserInput({ ...userInput, [e.target.name]: e.target.value });
    seterrors({});
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user, setuser]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = {
      firstName: userInput.firstName,
      lastName: userInput.lastName,
      email: userInput.email,
      mobileNumber: userInput.mobileNumber,
      password: userInput.password,
      confirmPassword: userInput.confirmPassword,
    };
    const JSONdata = JSON.stringify(inputs);
    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    });
    const data = await res.json();
    if (res.status === 201) {
      setuser(data.data);
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
        <h2 className={styles.form_container__form___heading}>Register</h2>
        <div className={styles.form_container__form___box}>
          <Input
            id={"First Name"}
            type="text"
            placeholder={"Your First Name"}
            name={"firstName"}
            // value={userInput.firstName}
            // small="wrong"
            onChange={handleUserInput}
          />
          <Input
            id={"Last Name"}
            type="text"
            placeholder={"Your Last Name"}
            name={"lastName"}
            // value={userInput.lastName}
            // small="wrong"
            onChange={handleUserInput}
          />
        </div>
        <div className={styles.form_container__form___box}>
          <Input
            id={"Email"}
            type="email"
            placeholder={"Your Email Address"}
            name={"email"}
            // value={userInput.email}
            // small="wrong"
            onChange={handleUserInput}
          />
          {/* <input type="tel" name="" id="" /> */}
          <Input
            id={"Phone Number"}
            type="tel"
            placeholder={"Your Phone Number"}
            name={"mobileNumber"}
            // value={userInput.mobileNumber}
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
          <div>
            <Input
              id={"Confirm Password"}
              type={cPasswordShow ? "text" : "password"}
              placeholder={"Enter Confirm Password"}
              name={"confirmPassword"}
              // value={userInput.confirmPassword}
              // small="wrong"
              onChange={handleUserInput}
              onShow={() => setcPasswordShow(true)}
              onHide={() => setcPasswordShow(false)}
              showPasswords={cPasswordShow}
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
          <p>Alerady have an account?</p>
          <Link style={{ color: "blue" }} href={"/login"}>
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
