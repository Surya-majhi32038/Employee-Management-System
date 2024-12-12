import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="taskList"
      className=" flex px-9 ph:px-8 py-5 gap-5 overflow-x-auto items-center justify-start flex-nowrap mt-10 w-full h-[48%]"
    >
      {data.tasks.map((ele,index)=>{
        console.log(ele)

        if(ele.action){
          return  <AcceptTask data={ele} key={index}/>
        }
        if(ele.newTask){
          return  <NewTask data={ele} key={index}/>
        }
        if(ele.completed){
          return  <CompleteTask data={ele} key={index}/>
        }
        if(ele.failed){
          return  <FailedTask data={ele} key={index}/>
        }
        
      })}
        
        
    </div>
  );
};

export default TaskList;
