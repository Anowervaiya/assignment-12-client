import React from 'react'

function LoadingContainer({loading}) {
  return (
    <div className='flex justify-center items-center min-h-screen'>
{loading}
    </div>
  )
}

export default LoadingContainer