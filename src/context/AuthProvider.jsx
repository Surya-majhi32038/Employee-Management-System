import React, { createContext, useEffect, useState } from "react";
import { getData, setData } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  //localStorage.clear();
  useEffect(() => {
    setData();
    const { employees, admin } = getData();
    
    setUserData({ employees, admin });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
