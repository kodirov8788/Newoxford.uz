import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full bg-[#6382ff] text-[black]">
      <div className="w-[88%] flex flex-col items-center m-auto lg:h-fit lg:justify-center  lg:items-center">
        <div className="mt-10 mb-5">
            <h1 className="font-mono text-2xl text-white font-semibold">Bizga Obuna Bo'ling</h1>
        </div>
        <div className="list-none w-[65%] my-[15px] flex justify-between sm:w-[40%] lg:w-[23%] mb-10">
          <li>
            <a
              className="text-[40px] duration-100 text-[#C1C1C1] hover:text-white lg:text-[30px]"
              href="https://t.me/newOXFORDuz"
              target="_blank"
            >
              {" "}
              <i>
                <FaTelegram />
              </i>{" "}
            </a>
          </li>
          <li>
            <a
              className="text-[40px] duration-100 text-[#C1C1C1] hover:text-white lg:text-[30px]"
              href="https://www.instagram.com/newoxforduz/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              target="_blank"
            >
              {" "}
              <i>
                <FaInstagram />
              </i>
            </a>
          </li>
          <li>
            <a
              className="text-[40px] duration-100 text-[#C1C1C1] hover:text-white lg:text-[30px]"
              href="https://www.youtube.com/@newOXFORDuz"
              target="_blank"
            >
              <i>
                <FaYoutube />
              </i>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
