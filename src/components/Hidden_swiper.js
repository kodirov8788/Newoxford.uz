import React from 'react'
import Swiper_format from "../components/swiper/Swiper_format";
import { swiper_data } from "../static_data";

function Hidden_swiper() {
  const getScreenSize = () => {
    return window.screen.width > 768
  }
  return (
    <div className=' relative z-0 py-10'>
      {!getScreenSize() ? <Swiper_format /> :
        <div className=" w-full h-[100%] pt-10 pb-10">
          <h1 className=" text-5xl font-bold text-center text-black">QULAY O'QUV FORMATLARI</h1>
          < div className="" style={{ width: "90%", margin: "auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "50px" }}>

            {swiper_data.map(data => (
              <div className=" mt-20">
                <img key={data.id} style={{ width: "90%", height: "30vh" }} src={data.image} alt="" />
                <h1 className=" text-black font-bold text-xl mt-5">{data.text_h1}</h1>
                <p className=" textblack mt-2">{data.text_p}</p>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default Hidden_swiper