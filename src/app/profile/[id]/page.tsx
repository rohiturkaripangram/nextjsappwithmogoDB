import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div className='flex justfiy-center align-center'>
        <p className='text-4xl'>Profile page
        <span className='p-2  rounded bg-orange-500'> {params.id}</span>
        </p>
        
    </div>
  )
}

export default UserProfile