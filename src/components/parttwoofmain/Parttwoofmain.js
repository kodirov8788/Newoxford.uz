import React from 'react'
import { swiper_data } from '../../swiper_static_data'

function Parttwoofmain() {
  return (
    <div className="overflow-hidden w-full h-[426px] flex flex-wrap justify-around text-black">

      {swiper_data.map(data => (
        <div className="bg-center relative overflow-hidden flex justify-center items-center bg-cover w-[25%] group   duration-100  h-[50%] border-[0.5px] border-[#ccc]" key={data.id}>
          <div className='absolute w-full h-full flex  justify-center group-hover:scale-50 duration-400  items-center bg-black opacity-90'>
            <h1 className=' text-white text-md text-center md:text-2xl'>{data.title}</h1>
            {/* <p className='text-white'>{data.text}</p> */}
          </div>
          <img className='w-[400px] h-[400px] group-hover:scale-125 duration-300 ' src={data.image} alt="" />
        </div>
      ))}

    </div>
  )
}

export default Parttwoofmain