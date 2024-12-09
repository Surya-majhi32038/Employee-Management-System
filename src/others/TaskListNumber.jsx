import React from 'react'

const TaskListNumber = ({data}) => {
    console.log(data);

  return (
    <div className='flex mx-7'>
        <div className='bg-red-500 w-[45%] px-6 py-6 m-3 rounded-md'>
            <p className='text-4xl font-bold'>{data.taskNumber.new}</p>
            <p className='text-xl font-medium'>NEW TASK</p>
        </div>
        <div className='bg-yellow-500 w-[45%] px-6 py-6 m-3 rounded-md'>
            <p className='text-4xl font-bold'>{data.taskNumber.active}</p>
            <p className='text-xl font-medium'>ACTIVE TASK</p>
        </div>
        <div className='bg-blue-500 w-[45%] px-6 py-6 m-3 rounded-md'>
            <p className='text-4xl font-bold'>{data.taskNumber.completed}</p>
            <p className='text-xl font-medium'>COMPLETED TASK</p>
        </div>
        <div className='bg-green-500 w-[45%] px-6 py-6 m-3 rounded-md'>
            <p className='text-4xl font-bold'>{data.taskNumber.failed}</p>
            <p className='text-xl font-medium'>FAILED TASK</p>
        </div>
    </div>
  )
}

export default TaskListNumber