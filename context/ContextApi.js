"use client";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({
  data: {},
  setdata() {},
});

export const GlobalContextProvider = ({ children }) => {
  const [data, setdata] = useState({});
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <GlobalContext.Provider value={{ data, setdata }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
