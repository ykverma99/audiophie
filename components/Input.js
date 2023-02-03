"use client";
import React, { useState } from "react";
import styles from "./input.module.scss";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const Input = ({
  id,
  placeholder,
  type,
  value,
  name,
  onChange,
  onHide,
  onShow,
  icon,
  showPasswords,
}) => {
  return (
    <div className={styles.inputbox}>
      <label className={styles.inputbox__label} htmlFor={id}>
        {id}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.inputbox__input}
      />
      {icon && (
        <div className={styles.inputbox__icon}>
          {!showPasswords ? (
            <ImEye onClick={onShow} />
          ) : (
            <ImEyeBlocked onClick={onHide} />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
