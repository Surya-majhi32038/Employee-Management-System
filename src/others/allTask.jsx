import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = ({ NameUpdate }) => {
  const Data = useContext(AuthContext);
  console.log(NameUpdate);

  return (
    <div className="bg-[#1c1c1c] ph:px-3 ph:mx-3 rounded-md px-4 py-3 mx-7 my-5">
      <div className=" flex ph:text-sm ph:text-center ph:gap-2 text-lg ph:font-sans font-semibold w-full justify-between rounded-lg mb-2 bg-green-800 bg-transparent ph:px-1  px-4 py-2">
        <p >Employee Name</p>
        <p >Active Task</p>
        <p >New Task</p>
        <p >Complete Task</p>
        <p >Failed Task </p>
      </div>
      <div className=" rounded-md ph:my-1  py-3 my-5">
        {Data.employees.map((ele, ind) => {
          console.log('also re-rendaring',NameUpdate);
          return (
            <div
              key={ind}
              className="flex justify-between w-full rounded-lg mb-2 border-2 border-green-800 bg-transparent  px-4 py-2"
            >
              <h2 className="text-lg  font-semibold">{ele.firstName} </h2>
              <h3 className="text-lg  font-semibold">
                {ele.taskNumber.active}
              </h3>
              <h3 className="text-lg font-semibold">
                {ele.firstName == NameUpdate
                  ? ele.taskNumber.new + 1
                  : ele.taskNumber.new}
              </h3>
              <h3 className="text-lg  font-semibold">
                {ele.taskNumber.completed}
              </h3>
              <h3 className="text-lg  font-semibold">
                {ele.taskNumber.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
