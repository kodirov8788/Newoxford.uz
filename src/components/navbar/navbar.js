import React, { useState } from 'react'
import { HiMenu, HiChevronDown } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import img1 from './flag.png'

function navbar({ open, setOpen }) {



    return (
        <div className=' w-full h-[60px] bg-[#151515] text-white fixed top-[0px] '>
            <div className='w-[85%] xl:w-[88%] h-full m-auto flex justify-between items-center '>
                {/* logo */}
                <div className='w-[10%]  sm:text-3xl md:text-4xl font-semibold font-sans xl:text-2xl'>
                    <h1 className='text-white'>PROWEB</h1>
                </div>




                {/* tarjima */}

                <div className=' sm:w-[27%] text-3xl flex justify-between items-center font-sans md:w-[30%] md:text-4xl  xl:w-[85%]  '>

                    <ul className='hidden  xl:flex  xl:w-[88%]     justify-between  items-center list-none h-[60px]'>
                        <li className='group  h-full flex items-center px-[10px]  hover:bg-[rgb(100, 100, 100)]'><a href="#" className='text-[15px]  uppercase font-sans  flex  items-center'>Kurslar <span className='ml-[5px]'><HiChevronDown /></span></a>

                            {/* drop donw menu */}
                            <div className='  absolute hidden  group-hover:flex   top-[60px]  bg-[#212121] text-white w-[77%] right-0 list-none   justify-between py-[20px] px-[20px]'>

                                <div className='w-[32%]'>
                                    <li className='w-full pl-[15px] hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">web dasturlash </a></li>
                                    <li className='w-full pl-[15px] hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">3ds max & autocad</a></li>
                                    <li className='w-full pl-[15px] hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">o'yinlarni yaratish</a></li>
                                    <li className='w-full pl-[15px] hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">kompyuter  yig'ish</a></li>
                                    <li className='w-full pl-[15px] hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">pro foto & Mobilografiya</a></li>

                                </div>

                                <div className='w-[32%]'>
                                    <li className='hover:bg-[rgb(100,100,100)] w-full'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans indent-4 py-[7px] mt-[5px]' href="">internet marketing  </a></li>
                                    <li className='hover:bg-[rgb(100,100,100)] w-full'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans indent-4 py-[7px] mt-[5px]' href="">python </a></li>
                                    <li className='hover:bg-[rgb(100,100,100)] w-full'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans indent-4 py-[7px] mt-[5px]' href="">scratch</a></li>
                                    <li className='hover:bg-[rgb(100,100,100)] w-full'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans indent-4 py-[7px] mt-[5px]' href="">blender</a></li>
                                    <button className='w-full h-[45px] text-start text-[20px] font-sans uppercase bg-white text-black  indent-4'>Onlayn o'qish</button>
                                </div>

                                <div className='w-[33%]'>
                                    <li className='w-full hover:bg-[rgb(100,100,100)] pl-[15px]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">pro design</a></li>
                                    <li className='w-full hover:bg-[rgb(100,100,100)] pl-[15px]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">motion design & videomontaj </a></li>
                                    <li className='w-full hover:bg-[rgb(100,100,100)] pl-[15px]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">android & ios dasturlash</a></li>
                                    <li className='w-full hover:bg-[rgb(100,100,100)] pl-[15px]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans  py-[7px] mt-[5px]' href="">pro foto & Mobilografiya</a></li>

                                </div>

                            </div>
                        </li>
                        <li className='flex items-center h-full px-[10px] hover:bg-[rgb(100,100,100)] '><a href="#" className='text-[15px] uppercase font-sans  flex'>Tanishtiruv Dars</a></li>
                        <li className='flex items-center h-full px-[10px] hover:bg-[rgb(100,100,100)]'><a href="#" className='text-[15px] uppercase font-sans  flex'>Kvorking</a></li>
                        <li className='flex items-center h-full px-[10px] hover:bg-[rgb(100,100,100)]'><a href="#" className='text-[15px] uppercase font-sans  flex'>It-test</a></li>
                        <li className='h-full flex items-center group  px-[10px] hover:bg-[rgb(100,100,100)] '>
                            <a href="#" className='text-[15px] uppercase font-sans  flex items-center'>Karyera <span className='ml-[5px]'><HiChevronDown /></span> </a>
                            <div className='absolute hidden group-hover:block w-[25%] top-[60px] bg-[#212121] px-[10px]'>

                                <div className=' py-[20px]'>
                                    <li className='w-full hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans indent-4 py-[7px] mt-[5px]' href="">amalyot </a></li>
                                    <li className='w-full hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans indent-4 py-[7px] mt-[5px]' href="">ish bilan yordam 2.0 </a></li>
                                    <li className='w-full hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans indent-4 py-[7px] mt-[5px]' href="">ish beruvchilar uchun
                                    </a></li>
                                    <li className='w-full hover:bg-[rgb(100,100,100)]'><a className=' inline-block w-full text-[20px] uppercase font-semibold font-sans indent-4  py-[7px] mt-[5px]' href="">vakansiyalar</a></li>
                                </div>

                            </div>
                        </li>
                        <li className='h-full flex items-center px-[10px] hover:bg-[rgb(100,100,100)]'><a href="#" className='text-[15px] uppercase font-sans flex'>Kontaktlar</a></li>
                        <li className='h-full flex items-center px-[10px] hover:bg-[rgb(100,100,100)]'><a href="#" className='text-[15px] uppercase font-sans flex'>Qo'ng'iroq qilish</a></li>
                    </ul>


                    <div className=' sm:w-[59%]  flex justify-between md:w-[52%] lg:w-[38%] xl:w-[10%] xl:text-xl'>
                        <div className='text-[#646464] hidden'>RU</div>
                        <div className=' flex items-center '>
                            <p>UZ</p>
                            <img className='w-[38px] ml-[4px]' src={img1} alt="" />
                        </div>
                    </div>
                    {/* menu button */}
                    <div className='w-[30%] xl:hidden '>
                        <button onClick={() => setOpen(true)} style={open ? { display: "none" } : { display: "flex" }} className='text-[40px] w-full border border-white flex justify-center '>
                            <i > <HiMenu /></i>

                        </button>
                        <button onClick={() => setOpen(false)} style={open ? { display: "flex" } : { display: "none" }} className='text-[40px] w-full  flex justify-center '>
                            <i ><HiXMark /></i>
                        </button>
                    </div>

                </div>

            </div>
            {/* sidebar  */}



            <div style={open ? { display: "block" } : { display: "none" }} className=' w-full h-screen   sm:w-[100%]  absolute z-40 bg-[#151515] top-[60px] md:w-[45%] md:right-0 '>
                <div className=' list-none transform-y-[50px] py-[20px] uppercase'>
                    <button className=' w-full flex items-center    py-[15px] mt-[10px] text-start pl-[70px] text-4xl font-semibold active:bg-[#ccc] uppercase md:text-2xl '>Kurslar <span><HiChevronDown /></span> </button>
                    {/* kurslar menu si */}
                    <div id='speed' className='w-full  pl-[70px] hidden'>
                        <li className='w-full  '><a className=' inline-block w-full text-3xl font-semibold font-sans  py-[15px] mt-[10px] md:text-2xl' href="">web dasturlash </a></li>
                        <li className='w-full  '><a className='inline-block w-full text-3xl font-semibold font-sans py-[15px] mt-[10px] md:text-2xl' href="">Internet marketing</a></li>
                        <li className='w-full  '><a className='inline-block w-full text-3xl font-semibold font-sans py-[15px] mt-[10px] md:text-2xl' href="">Prodesign</a></li>
                    </div>

                    <div className='w-full  pl-[70px] '>
                        <li className='w-full  '><a className=' inline-block w-full text-4xl font-semibold font-sans  py-[15px] mt-[10px] md:text-2xl' href="">Tanishtiruv Dars</a></li>
                        <li className='w-full  '><a className='inline-block w-full text-4xl font-semibold font-sans py-[15px] mt-[10px] md:text-2xl' href="">Kvorking</a></li>
                        <li className='w-full  '><a className='inline-block w-full text-4xl font-semibold font-sans py-[15px] mt-[10px] md:text-2xl' href="">It-test</a></li>
                    </div>

                    <button className='w-full flex items-center text-start text-4xl font-semibold font-sans pl-[70px] mt-[10px] py-[15px] uppercase md:text-2xl'>Karyera  <span><HiChevronDown /></span> </button>
                    <li className='w-full pl-[70px]'><a className='inline-block w-full text-4xl font-semibold font-sans mt-[10px] py-[15px] md:text-2xl ' href="">Kontaktlar</a></li>
                </div>

            </div>


            {/* drop down menu  */}





        </div>
    )
}

export default navbar