import React, { useState } from "react";

const Header = ({ data }) => {

  const userName = data?.firstName || 'Admin';

  const handleLogOut = ()=> {
    localStorage.setItem('loggedin',' ');
    window.location.reload();
  }
  return (
    <div className=" px-10 ph:px-4 ph:items-end ph:mb-6 ph:py-3 py-5 flex items-start justify-between">
      <div className="flex flex-col  ph:text-xl  text-3xl ">
        Hello,
        <span className=" font-bold mt-0"> {userName} </span>
      </div>
      <button onClick={handleLogOut} className="bg-red-500 text-[19px] ph:text-sm mt-6 ph:mt-2 ph:ml-3 px-4 py-2 rounded-md hover:bg-red-600">
        Log out
      </button>
    </div>
  );
};

export default Header;
