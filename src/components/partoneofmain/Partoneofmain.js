import React from 'react'
// import bgvideo from '../../videos/bgvideo.MOV'




function Partoneofmain() {
    return (
        <>
            <div className="  w-full  h-screen md:h-[75vh]   flex flex-col  items-center justify-center ">

                <div className="w-full h-full  md:h-[75vh] absolute z-[-1] ">
                    {/* backgrounddagi video */}
                    {/* <video
                        className='w-full h-full absolute object-cover '
                        autoPlay muted loop src={bgvideo}></video> */}

                    {/*  background qora effect div*/}
                    <div className=" bg-[#00000095] w-full h-full absolute "></div>
                </div>
                <div className=" flex flex-col items-center justify-center w-full h-full  z-10 text-[white]">
                    <h1 className='w-max h-auto  font-[700] text-[55px] leading-[55px] sm:text-[70px] sm:leading-[70px] md:text-[100px] md:leading-[90px] lg:text-[110px] lg:leading-[100px]  p-0 tracking-[0.7px]'>ALGORITM</h1>
                    <p className='w-max h-auto  font-[400] text-[27px] leading-[27px] sm:text-[32px] sm:leading-[32px] md:text-[45px] md:leading-[35px] lg:text-[50px] lg:leading-[45px]  p-0 sm:tracking-[1px] md:tracking-[2px] mb-[35px] sm:mb-[45px] md:mb-12 lg:mb-12'>web dasturlash kurslari</p>

                    <button className='w-[270px] h-[40px] sm:w-[300px] sm:h-[50px] md:w-[45%] md:h-[50px] lg:w-[330px] lg:h-[55px] border-[white] border-[2px] bg-transparent text-[14px] sm:text-[18px] lg:text-[20px] tracking-[1px] hover:bg-white hover:text-black font-[600] sm:font-[500] md:font-[500] lg:font-[600]'>KURSGA YOZILISH</button>
                </div>


            </div>

        </>
    )
}

export default Partoneofmain