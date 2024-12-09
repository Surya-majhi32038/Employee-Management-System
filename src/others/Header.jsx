import React, { useState } from "react";

const Header = ({ data }) => {

  const userName = data?.firstName || 'Admin';

  const handleLogOut = ()=> {
    localStorage.setItem('loggedin',' ');
    window.location.reload();
  }
  return (
    <div className=" px-10 py-5 flex items-start justify-between">
      <div className="flex flex-col text-3xl ">
        Hello,
        <span className="text-3xl font-bold mt-1"> {userName} </span>
      </div>
      <button onClick={handleLogOut} className="bg-red-500 text-[19px] mt-6  px-4 py-2 rounded-md hover:bg-red-600">
        Log out
      </button>
    </div>
  );
};

export default Header;
