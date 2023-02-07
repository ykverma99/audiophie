"use client";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({
  data: {},
  setdata() {},
  quantity: 1,
  setquantity() {},
});

export const GlobalContextProvider = ({ children }) => {
  const [data, setdata] = useState({});
  const [quantity, setquantity] = useState(1);
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <GlobalContext.Provider value={{ data, setdata, setquantity, quantity }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
