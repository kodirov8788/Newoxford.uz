import React from 'react'
import { useState } from 'react';
import Select from 'react-select';
// import vid_natija from "../video/natija.MP4"
import { ishjoyi_data } from '../static_data';

const options = [
    { value: 'WEB DASTURLASH', label: 'WEB DASTURLASH' },
    { value: 'INTERNET MARKETING', label: 'INTERNET MARKETING' },
    { value: 'PRO DESIGN', label: 'PRO DESIGN' },
    { value: '3DS MAX & AUTOCAD', label: '3DS MAX & AUTOCAD' },
    { value: 'PYTHON', label: 'PYTHON' },
    { value: 'MOTION DESIGN & VIDEOMONTAJ', label: 'MOTION DESIGN & VIDEOMONTAJ' },
    { value: 'SCRATCH', label: 'SCRATCH' },
    { value: 'ANDROIND & iOS DASTURLASH', label: 'ANDROIND & iOS DASTURLASH' },
    { value: 'KOMPUTER YIG`ISH', label: 'KOMPUTER YIG`ISH' },
    { value: 'BLENDER', label: 'BLENDER' },
    { value: 'MS OFFICE', label: 'SCRATCH' },
    { value: 'PRO FOTO & MOBILOGRAFIYA', label: 'PRO FOTO & MOBILOGRAFIYA' },
];



function I_box() {


    const [selectedOption, setSelectedOption] = useState(null);


    return (
        <div>




            {/* Tanishtiruv dars */}
            <div className="w-full h-ful">

                {/* Tanishtiruv dars === h1 */}
                <div className=" w-full h-1/2 bg-[#000000eb]  py-5 ">
                    <h1 className=' text-center text-2xl font-simebold text-yellow-400 mb-5 md:text-6xl md:font-bold '>
                        TANISHTIRUV DARS
                    </h1>
                    <p className='w-[80%] m-auto  text-center text-gray-200 md:text-[21px]  '>Har bir kurs boshlanishidan oldin tanishtiruv dars bo’lib o’tadi. Unda siz kurs bo’yicha barcha ma’lumotlarga ega bo’lasiz, o’qituvchi bilan tanishib olasiz va kursga yozilishingiz mumkin
                    </p>


                </div>

                {/* kurslar ro'yxati === SELECT === */}
                <div className=" bg-[#000000eb] flex flex-col items-center py-7">

                    <div className=" w-[100%] h-[100%] sm:w-[80%] md:w-[50%] lg:w-[30%] cursor-pointer">
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            placeholder={'Kerakli kursni tanlang'}
                            clearable={false}
                        />
                    </div>


                </div>

                {/* ro'yxatdan o'tish */}
                <div className="w-full h-[80vh]  bg-black">


                    {/* swiper  royxat */}

                    <div className=" w-full h-full flex items-center justify-evenly px-10">
                        <div className="w-[25%] h-[90%] flex flex-col justify-between">
                            <h1 className=' text-[18px] text-yellow-500'>1. Tanishtiruv dars sanasini tanlang 🠗</h1>
                            <div className=" w-full h-[90%] p-2 bg-[#212121a4]">
                                <p className='text-yellow-300 text-[14px] lg:text-[16px]'>Afsuski, ushbu yo'nalish bo'yicha guruhlarning tanishtiruv dars hali rejalashtirilmagan.</p>
                            </div>
                        </div>


                        <div className="w-[30%] h-[90%] flex flex-col justify-between">
                            <h1 className=' text-[18px] text-yellow-500'>2. Tanishtiruv dars vaqtini tanlang</h1>
                            <div className="w-full h-[90%] p-10 bg-[#0c0c0c]">

                            </div>
                        </div>


                        <div className=" w-[30%] h-[90%] flex flex-col ">
                            <h1 className=' text-[18px] text-yellow-500'>3. Ro'yxatdan o'tish uchun formasini to'ldiring</h1>

                            <input className='  border-b-white border-b-2 bg-transparent py-1 mt-8 text-gray-400' type="text" placeholder='Ism familiya' />
                            <input className=' border-b-white border-b-2 bg-transparent py-1 mt-8 text-gray-400' type="number" placeholder='Telefon' />
                            <button className=' w-full bg-gray-600 py-2 mt-10 text-white font-semibold text-xl'>RO’YXATDAN O’TISH</button>



                        </div>
                    </div>



                </div>



                {/* Natijalar 2023 */}
                <div className="bg-red w-full h-full">
                    <h1 className=' text-2xl text-center font-semibold mt-10 md:text-3xl lg:text-5xl'>2023 YIL NATIJALARI</h1>
                    <div className=" w-full h-[60vh] p-10 sm:h-[70vh] sm:px-20 sm:py-10 md:px-20 md:py-10 md:h-[90vh] lg:h-[95vh]">
                        {/* <video className='w-full z-10 h-full' autoPlay controls src={vid_natija}></video> */}
                    </div>
                </div>


                {/* bizning talabalarimiz qayerda ishlashadi */}

                <div className="w-full h-full">
                    <h1 className=' text-2xl font-semibold text-center sm:text-2xl md:text-4xl lg:text-5xl'>BIZNING TALABALARIMIZ QAYERDA ISHLASHADI</h1>

                    <div className="w-full flex flex-wrap items-center justify-evenly m-auto  mt-10 sm:justify-between md:mt-0 md:p-5 md:w-[80%]">
                        {ishjoyi_data.map(ish => (
                            <div key={ish.id} className=" w-[150px] mt-5 md:mt-20 flex items-center justify-center sm:w-[250px]">
                                <img className='w-[60%] h-[60%] object-cover' src={ish.image} alt="" />
                            </div>
                        ))}
                    </div>

                </div>


            </div>



        </div>
    )
}

export default I_box