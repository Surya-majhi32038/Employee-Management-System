import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getData, setData } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedin");
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        if (userData) {
          setUser(userData.role);
          //console.log(userData.role)
          setLoggedInUserData(userData.data);
          //console.log(userData.data)
        } else {
          console.warn("Invalid user data structure:", userData);
        }
      } catch (error) {
        console.error("Error parsing logged-in user data:", error);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      AuthData &&
      AuthData.admin.find((e) => email == e.email && password == e.password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedin", JSON.stringify({ role: "admin" }));
    } else if (AuthData) {
      const employee = AuthData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setLoggedInUserData(employee);
        setUser("employee");
      }

      localStorage.setItem(
        "loggedin",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      alert("invalid input ");
    }
  };

  // try the context api
 // console.log(loggedInUserData);
  return (
    <>
      {/* first inster Login page */}

      {user ? "" : <Login handleLogin={handleLogin} />}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : (
        ""
      )}
      {/* 
      only for task not it required */}
      {/* <EmployeeDashboard data={loggedInUserData} />  */}
    </>
  );
};

export default App;
