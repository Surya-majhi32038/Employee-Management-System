import React, { useState } from "react";

const CreateTask = () => {
  // create useState for every field
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // create a new state which hold the array
 // const [newTask, setNewTask] = useState({});
  // submite fucntion
  const handleSubmite = (e) => {
    e.preventDefault();
    const newTask = {
      taskCategory,
      taskTitle,
      asignTo,
      taskDescription,
      taskDate,
      action: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const DATA = JSON.parse(localStorage.getItem("employees")) || [];

    DATA.forEach((e) => {
      if (e.firstName == asignTo) {
      //  console.log(newTask)
        e.tasks.push(newTask);
        e.taskNumber.new += 1;
        
      }
    });
    localStorage.setItem('employees',JSON.stringify(DATA));
        setAsignTo('')
        //setNewTask({})
        setTaskCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmite(e);
      }}
      className="flex mx-7 rounded-md justify-between text-whi py-5 px-10 items-center bg-[#1C1C1C]"
    >
      {/* left part of page  */}
      <div>
        {/* Task title part  */}
        <div className="mb-5">
          <p className="text-[17px] ml-5 text-[#51B885] mb-1">Task Title </p>
          <input
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            type="text"
            className="h-9 w-[60vh] bg-transparent border-2 focus:outline-none border-[#656565] px-3 rounded-full"
            placeholder="Make a UI design "
          />
        </div>

        {/* Date */}
        <div className="mb-5">
          <p className="text-[17px] ml-5 mb-1 text-[#51B885]">Date</p>
          <input
            value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value);
            }}
            className="h-9 w-[60vh] bg-transparent border-2 focus:outline-none border-[#656565] px-3 rounded-full"
            placeholder="dd/mm/yyyy"
            type="date"
          />
        </div>

        {/* Asign to part  */}
        <div className="mb-5">
          <p className="text-[17px] ml-5 mb-1 text-[#51B885]">Asign to</p>
          <input
            value={asignTo}
            onChange={(e) => {
              setAsignTo(e.target.value);
            }}
            className="h-9 w-[60vh] bg-transparent border-2 focus:outline-none border-[#656565] px-3 rounded-full"
            type="text"
            placeholder="employee name "
          />
        </div>

        {/* Catagory  */}
        <div className="mb-5">
          <p className="text-[17px] text-[#51B885] ml-5 mb-1">Category </p>
          <input
            value={taskCategory}
            onChange={(e) => {
              setTaskCategory(e.target.value);
            }}
            className="h-9 w-[60vh] bg-transparent border-2 focus:outline-none border-[#656565] px-3 rounded-full"
            type="text"
            placeholder="design, dev, etc.."
          />
        </div>
      </div>

      {/* right part of page  */}
      <div>
        {/* Description part  */}
        <div>
          <p className="mb-2 text-xl">Description</p>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            name="Description aobut the task "
            className="bg-transparent focus:outline-none border-2 border-[#656565] rounded-md"
            id=""
            cols="60"
            rows="8"
          ></textarea>
        </div>
        {/* Submitted button */}
        <button className="w-full mt-2 py-2 rounded-md bg-[#51B885]">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
