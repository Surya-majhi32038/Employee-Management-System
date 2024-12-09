import React from 'react'

const FailedTask = ({data}) => {
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
          <div className='mt-6'>
                <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
          </div>
    </div>
  )
}

export default FailedTask