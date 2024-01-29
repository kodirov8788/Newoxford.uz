import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Karyera() {
  return (
    <div name="karyera">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center font-mono font-semibold mt-3">
          Bizning Karyeraga qushiling
        </h1>
      </div>
      <div className="flex justify-center gap-10 flex-wrap">
        <div>
          <div className="w-80 bg-[#5770d5] h-32 flex justify-between px-5 py-5 mt-10 rounded-b-3xl">
            <h1 className="text-xl">Vakansiyalar</h1>
            <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center mt-12">
              <FaArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-80 bg-[#5770d5] h-32 flex justify-between px-5 py-5 mt-10 rounded-b-3xl">
            <h1 className="text-xl">Sotuv menejeri</h1>
            <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center mt-12">
              <FaArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-80 bg-[#5770d5] h-32 flex justify-between px-5 py-5 mt-10 rounded-b-3xl">
            <h1 className="text-xl">Administrator</h1>
            <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center mt-12">
              <FaArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-80 bg-[#5770d5] h-32 px-5 py-5 mt-10 rounded-b-3xl">
            <h1 className="text-xl">HR menejer</h1>
            <div className="mx-auto">
              <button className="w-32 h-8 bg-white rounded-lg mt-5 mx-auto">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Karyera;
