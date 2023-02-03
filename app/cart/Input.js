import React from "react";
import styles from "./input.module.scss";

const Input = ({ error, label, type, name, placeholder, value, onChange }) => {
  return (
    <div className={styles.input_container}>
      <div className={styles.input_container__info}>
        <label
          className={`${styles.input_container__info___label}`}
          htmlFor={label}
        >
          {label}
        </label>
        <small className={styles.input_container__info___error}>{error}</small>
      </div>

      <input
        className={styles.input_container__input}
        type={type ? type : "text"}
        name={name}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
