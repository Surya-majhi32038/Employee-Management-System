import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/allTask";

const AdminDashboard = () => {
  return (
    <div>
      <Header  />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
