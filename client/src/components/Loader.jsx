import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center py-3'>
      <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500'/>
    </div>
  )
}

export default Loader