import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = ({data}) => {
  console.log(data)
  // 2:22:30 new data not created
  
  return (
    <div className='bg-[#1c1c1c] ph:bg-black h-screen'>
        <Header data={data}/>
        <TaskListNumber data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard