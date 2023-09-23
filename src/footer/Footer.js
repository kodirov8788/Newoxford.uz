import React from 'react'
import instagramwhiteicon from "../images/instagram white icon png.png"
import telegramwhiteicon from "../images/telegram-2-xxl png.png"
import youtubewhiteicon from "../images/whiteyoutubeiconpng.png"
import facebookwhiteicon from "../images/f logo whitepng.png"
import callicon from "../images/call-icon.png"

function Footer() {
    return (
        <>
            <div className="flex w-full h-screen items-end">
                <div className='footer w-full  bg-[#151515] '>
                    <div className="infooter w-full  px-[105px] py-[55px] flex text-white">
                        <div className="flex flex-col  w-[330px]">
                            <h1 className='mb-3 text-[19px] font-[600]'>Kurslar</h1>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">WEB DASTURLASH</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">iNTERNET MARKETING</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">PRO DESIGN</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">3DS MAX & AUTOCAD</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">PYTHON</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">MOTION DESIGN & VIDEOMONTAJ</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">O'YINLARNI YARATISH</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">SCRATCH</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">ANDROID & IOS DASTURLASH </a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">KOMPYUTER YIG'ISH</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">BLENDER</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">MS OFFICE</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">PRO FOTO & MOBILOGRAFIYA</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">ONLAYN O'QISH</a>
                        </div>
                        <div className="flex flex-col  w-[325px]">
                            <h1 className='mb-3 text-[19px] font-[600]'>PROWEB markazi haqida</h1>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Tanishtiruv dars</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Kovorking</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Barcha bonuslar</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Kontaktlar</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Ish bilan yordam 2.0</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Ish beruvchilar uchun</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Amaliyot</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Vakansiyalar</a>
                        </div>
                        <div className="flex flex-col  w-[325px]">
                            <h1 className='mb-3 text-[19px] font-[600]'>Qo'llab-quvvatlash</h1>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Menejerga yozish</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Kovorkingga yozilish</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Konsultatsiya uchun so'rov</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Zoom qo'llanmasi</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Shikoyat va tilaklar</a>
                        </div>
                        <div className="flex flex-col  w-[320px]">
                            <h1 className='mb-3 text-[19px] font-[600]'>Bizning manzillarimiz:</h1>
                            <a className='w-[300px] opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Toshkent sh. Chilonzor tumani, Bunyodkor ko'chasi, 41</a>
                            <a className='w-max opacity-60 hover:opacity-100   mb-[3px] text-lg' href="#">Toshkent sh. Mirobod tumani, Oybek ko'chasi, 16</a>
                            <a className='w-max opacity-60 hover:opacity-100  mb-5  ' href="#">Toshkent sh. Mirobod tumani, Oybek ko'chasi, 12</a>
                            <a
                                className='w-[170px] cursor-pointer flex items-center justify-between tracking-[1px] h-max'>

                                <img className='w-[20px] h-[20px] hover:rotate-[-25deg] ' src={callicon} alt="" />
                                <h1 className='text-[24px] font-[600]'>78 113 01 21</h1>

                            </a>
                        </div>
                    </div>
                    <div className="w-full h-[53px] bg-[#0c0c0c] flex items-center justify-between px-[105px]">
                        <p className='text-white text-[13px] tracking-[0.5px] font-[sans-serif] font-[400]'>© PROWEB 2023</p>
                        <div className="flex w-[270px] h-full items-center justify-around ">
                            <a href="https://t.me/algoritm_edu"><img className='w-6 h-6 opacity-75 hover:opacity-100' src={telegramwhiteicon} alt="" /></a>
                            <a href="https://www.instagram.com/algoritm_edu"><img className='w-6 h-6 opacity-75 hover:opacity-100' src={instagramwhiteicon} alt="" /></a>
                            <a href="#"><img className='w-max h-6 opacity-75 hover:opacity-100' src={youtubewhiteicon} alt="" /></a>
                            <a href="#"><img className='w-max h-6 opacity-75 hover:opacity-100' src={facebookwhiteicon} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer