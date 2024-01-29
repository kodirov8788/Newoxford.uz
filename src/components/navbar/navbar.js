import React, { useState } from "react";
import { HiMenu, HiChevronDown } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import img1 from "./flag.png";
import { Link } from "react-scroll";
import Logo from "../../images/logo1 (2).2.2.png"

function navbar({ open, setOpen }) {
  return (
    <div className=" w-full h-[60px] bg-[#2048e5] z-40 text-white fixed top-[0px]  ">
      <div className="w-[85%] xl:w-[88%] h-full  m-auto flex justify-between items-center ">
        {/* logo */}
        <div className="w-[40%] sm:w-[10%]">
          <img src={Logo} alt="" />
        </div>

        {/* tarjima */}

        <div className=" sm:w-[27%] text-3xl flex justify-between items-center font-sans md:w-[30%] md:text-4xl  xl:w-[85%] ">
          <ul className="hidden xl:flex  xl:w-[50%] mx-auto gap-5 justify-center cursor-pointer items-center list-none h-[60px] text-xl">
            <li>
              <Link to="bizHaqimizda" smooth duration={700}>
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link to="kurslarimiz" smooth duration={700}>
                Kurslarimiz
              </Link>
            </li>
            <li>
              <Link to="karyera" smooth duration={700}>
                Karyera
              </Link>
            </li>
            <li>
              <Link to="fikrlar" smooth duration={700}>
                Fikrlar
              </Link>
            </li>
            <li>
              <Link to="manzil" smooth duration={700}>
                Manzil
              </Link>
            </li>
          </ul>

          <div className="sm:w-[59%] flex justify-between md:w-[52%] lg:w-[38%] xl:w-[10%] xl:text-lg">
            <div className="text-[#646464] mr-[10px]  xl:hidden ">RU</div>
            <div className=" flex items-center ">
              <p>UZ</p>
              <img
                className="w-[38px] ml-[4px] hidden lg:hidden  xl:flex"
                src={img1}
                alt=""
              />
            </div>
          </div>
          {/* menu button */}
          <div className="w-[30%] xl:hidden ">
            <button
              onClick={() => setOpen(true)}
              style={open ? { display: "none" } : { display: "flex" }}
              className="text-[40px] w-full  flex justify-center "
            >
              <i>
                {" "}
                <HiMenu />
              </i>
            </button>
            <button
              onClick={() => setOpen(false)}
              style={open ? { display: "flex" } : { display: "none" }}
              className="text-[40px] w-full  flex justify-center "
            >
              <i>
                <HiXMark />
              </i>
            </button>
          </div>
        </div>
      </div>
      {/* sidebar  */}

      <div
        style={
          open
            ? { transform: "translateX(-0px)" }
            : { transform: "translateX(100%)" }
        }
        className=" w-full h-screen sm:h-[650px] md:h-[600px] pb-[40px] sm:overflow-y-scroll  duration-1000 sm:w-[100%]  absolute  bg-[#151515] top-[60px] lg:w-[45%] lg:right-0  lg:h-screen "
      >
        <div className=" list-none transform-y-[50px] py-[20px] uppercase ">
          <li className="group w-full   py-[15px] mt-[10px]  pl-[70px] uppercase md:text-2xl font-semibold">
            <Link to="bizHaqimizda" smooth duration={200}>
              Biz Haqimizda
            </Link>
          </li>
          {/* kurslar menu si */}

          <div className="pl-[70px] md:text-2xl font-semibold">
            <li className="">
              <Link to="kurslarimiz" smooth duration={200}>
                Kurslarimiz
              </Link>
            </li>
            <li className="mt-5">
              <Link to="karyera" smooth duration={200}>
                Karyera
              </Link>
            </li>
            <li className="mt-5">
              <Link to="manzil" smooth duration={200}>
                Manzil
              </Link>
            </li>
            <li className="mt-5">
              <Link to="fikrlar" smooth duration={200}>
                Fikrlar
              </Link>
            </li>
          </div>
        </div>
      </div>

      {/* drop down menu  */}
    </div>
  );
}

export default navbar;
