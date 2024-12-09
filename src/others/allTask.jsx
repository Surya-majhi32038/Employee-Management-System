import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const Data = useContext(AuthContext);
 
  return (
    <div className='bg-[#1c1c1c]   rounded-md px-4 py-3 mx-7 my-5'>
      <div className=' flex w-full justify-between rounded-lg mb-2 bg-green-800 bg-transparent  px-4 py-2'>
        <h2 className="text-lg  font-semibold">Employee Name</h2>
        <h3 className="text-lg  font-semibold">Active Task</h3>
        <h3 className="text-lg  font-semibold">New Task</h3>
        <h3 className="text-lg  font-semibold">Complete Task</h3>
        <h3 className="text-lg  font-semibold">Failed Task </h3>
      </div>
      <div className=" rounded-md  py-3 my-5">
        {Data.employees.map((ele, ind) => {
          return (
            <div key={ind} className="flex justify-between w-full rounded-lg mb-2 border-2 border-green-800 bg-transparent  px-4 py-2">
              <h2 className="text-lg  font-semibold">{ele.firstName} </h2>
              <h3 className="text-lg  font-semibold">{ele.taskNumber.active}</h3>
              <h3 className="text-lg  font-semibold">{ele.taskNumber.new}</h3>
              <h3 className="text-lg  font-semibold">{ele.taskNumber.completed}</h3>
              <h3 className="text-lg  font-semibold">{ele.taskNumber.failed}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
