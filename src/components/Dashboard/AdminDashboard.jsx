import React, { useState } from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/allTask";

const AdminDashboard = () => {
  // Use useState to manage the state of ChangeNew
  const [ChangeNew, setChangeNew] = useState(null);

  // Update function to set ChangeNew state
  const updateNew = (Name) => {
    setChangeNew(Name);
  };

  return (
    <div>
      <Header /> 
      <CreateTask updateNew={updateNew} />
      <AllTask NameUpdate={ChangeNew} />
    </div>
  );
};

export default AdminDashboard;
