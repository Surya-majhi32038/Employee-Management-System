import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  const handleComplete = ()=>{
    
    
  }
  const handleFailed = ()=>{

  }

  return (
    <div className='bg-red-300 p-5 flex-shrink-0 h-full w-[300px] rounded-lg' >
          <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 px-2 py-1 rounded-md'>{data.taskCategory}</h4>
            <p className='font-semibold text-lg'>{data.taskDate}</p>
          </div>

          <div className='mt-5'>
            <p className='text-2xl font-semibold'>{data.taskTitle} </p>
            <p className='text-base mt-2'>{data.taskDescription}</p>
          </div>

          <div className='flex gap-3   justify-evenly mt-6 text-[14px]'>
            <p onClick={handleComplete} className='bg-green-500 py-1  cursor-pointer rounded px-2'>Mark as Completed</p>
            <p onClick={handleFailed} className='bg-red-500 py-1 cursor-pointer rounded px-2'>Mark as Failed</p>
          </div>
        </div>
  )
}

export default AcceptTask