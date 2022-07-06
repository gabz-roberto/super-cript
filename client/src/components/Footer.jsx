import React from 'react';


const Footer = () => {
  return (
    <div className=' flex flex-col md:justify-center justify-between items-center w-full p-4 gradient-bg-footer'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <h1 className='logo w-32'>Super Krypt</h1>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Mercado</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Câmbio</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Tutorial</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Carteiras</p>
        </div>
      </div>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-700 mt-5'/>
    </div>
  )
};

export default Footer;