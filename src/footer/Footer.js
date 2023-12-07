import React from 'react'
import { FiPhoneForwarded } from "react-icons/fi";
import { FaInstagram, FaTelegram, FaYoutube, FaFacebookF } from "react-icons/fa6";


function Footer() {
    return (
        <div className='w-full  bg-[#6382ff] text-[black]'>
            <div className='w-[88%]   m-auto lg:flex  lg:justify-between pb-[30px]  '>
                <div className=" sm:w-full list-none py-[20px]   lg:w-[25%]">
                    <h1 className=' text-[20px]  text-white lg:text-[15px]'>Kurslar</h1>
                    <div className=' mt-[10px] lg:mt-0'>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white  font-sans lg:text-[12px]' href="#">WEB DASTURLASH</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white  font-sans lg:text-[12px]' href="#">INTERNET MARKETING</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white  font-sans lg:text-[12px]' href="#">PRO DESIGN</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white  font-sans lg:text-[12px]' href="#">3DS MAX & AUTOCAD</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white  font-sans lg:text-[12px]' href="#">PYTHON</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white  font-sans lg:text-[12px]' href="#">SCRATCH</a></li>

                    </div>

                </div>


                <div className=' sm:w-full list-none  py-[15px] lg:w-[25%]'>
                    <h1 className='text-[20px] mt-[10px] lg:mt-0 text-white lg:text-[15px]'>NEWOXFORD markazi haqida</h1>
                    <div className='mt-[10px] lg:mt-0'>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Tanishtiruv dars</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Kovorking</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Barcha bonuslar</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Kontaktlar</a></li>
                        <li className="my-[10px] xl:my-0" ><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Ish bilan yordam 2.0</a></li>

                    </div>

                </div>

                <div className=' sm:w-full list-none text-[20px]  py-[15px] lg:w-[25%]'>
                    <h1 className='text-[20px] mt-[10px] lg:mt-0 text-white lg:text-[15px]'>Qo'llab-quvvatlash </h1>
                    <div className='mt-[10px] lg:mt-0'>
                        <li className='my-[10px] xl:my-0'><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Menejerga yozish</a></li>
                        <li className='my-[10px] xl:my-0'><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Kovorkingga yozilish</a></li>
                        <li className='my-[10px] xl:my-0'><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Konsultatsiya uchun so'rov</a></li>
                        <li className='my-[10px] xl:my-0'><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Zoom qo'llanmasi</a></li>
                        <li className='my-[10px] xl:my-0'><a className='text-[16px] duration-100 hover:text-white font-sans lg:text-[12px] ' href="#">Shikoyat va tilaklar</a></li>
                    </div>


                </div>


                <div className=' sm:w-full list-none  sm:text-center py-[15px] lg:w-[25%] lg:text-start'>
                    <h1 className='text-[20px] mt-[10px] font-serif text-white lg:mt-0  lg:text-[15px]'>Bizning manzilarimiz:</h1>
                    <div className="w-full mt-[10px] lg:mt-0">
                        <li className='my-[10px] xl:my-0 px-[5px] lg:px-0'><a className='font-serif  text-[16px] duration-100 lg:text-[12px] hover:underline hover:text-white' href="#">Toshkent sh. Chilonzor tumani, Bunyodkor ko'chasi, 41</a></li>
                        <li className="my-[10px] xl:my-0"><a className='font-serif text-[16px] duration lg:text-[12px] hover:underline hover:text-white' href="#">Toshkent sh.  Mirobod tumani,  Oybek ko'chasi,  16</a></li>
                        <li className="my-[10px] xl:my-0"><a className='font-serif text-[16px] duration-100  hover:underline hover:text-white lg:text-[12px]' href="#">
                            Toshkent sh. Mirobod tumani,  Oybek ko'chasi, 12
                        </a>
                        </li>
                    </div>

                    <a className=' group py-[20px] text-4xl flex justify-center items-center sm:h-[100px] font-sans text-black hover:text-white lg:text-xl lg:justify-start lg:mt-[30px] lg:h-[40px]' href=""><i className='mr-[20px] '><FiPhoneForwarded /></i> 78 113 01 21</a>

                </div >




            </div >
            <div className='bg-[#6382ff] w-full  '>
                <div className='w-[88%] flex flex-col items-center  m-auto lg:flex-row lg:h-[60px] lg:justify-between  lg:items-center'>
                    <div className='text-[22px] uppercase py-[10px] xl:text-3xl'>
                        <p>@NEWOXFORD</p>
                    </div>

                    <div className='list-none w-[65%] my-[15px]  flex justify-between sm:w-[40%] lg:w-[23%]'>
                        <li><a className='text-[40px] duration-100 text-[#C1C1C1] hover:text-white lg:text-[30px]' href=""> <i><FaTelegram /></i> </a></li>
                        <li><a className='text-[40px] duration-100 text-[#C1C1C1] hover:text-white lg:text-[30px]' href=""> <i><FaInstagram /></i></a></li>
                        <li><a className='text-[40px] duration-100 text-[#C1C1C1] hover:text-white lg:text-[30px]' href=""><i><FaYoutube /></i></a></li>
                        <li><a className='text-[40px] duration-100 text-[#C1C1C1] hover:text-white lg:text-[30px]' href=""><i><FaFacebookF /></i></a></li>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer