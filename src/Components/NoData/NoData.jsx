import React from 'react'
import downloadImg from '../../assets/download.png'

function NoData() {
  return (
    <div className="my-4 flex flex-col min-h-48 border-2 rounded-lg border-gray-200  py-4 justify-center items-center">
      <h1 className="text-3xl font-bold text-center ">Ooops!</h1>
      <img src={downloadImg} className='w-1/3' alt="img not available" />
      <p className='font-semibold'>There is no data availabe</p>
    </div>
  );
}

export default NoData