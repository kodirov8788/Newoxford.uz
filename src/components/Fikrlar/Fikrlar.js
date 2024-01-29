import React from "react";
import { GoPerson } from "react-icons/go";

function Fikrlar() {
  return (
    <div name="fikrlar" className="pt-20">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center font-mono font-semibold mt-3">
          Fikrlar
        </h1>
      </div>
      <div className="flex justify-center gap-20 mt-10 flex-wrap">
        <div className="w-96 p-5 bg-[#5770d5] text-white text-lg relative">
          {/* <div className="flex justify-center">
            <GoPerson className="w-10 h-10 absolute -mt-9 bg-[#5770d5] rounded-full" />
          </div> */}
          <div>
            <p className="">
              Men xam oʻz ishini mutaxassisi ustozlar yordamida farzandim bu
              ingliz tilidan oliy bosqichlarni olishiga ishonaman algoritm
              jamoasi zoʻr meni farzandim shu dargoxda taxsil olayotganidan
              gʻururlanaman jamoaga omad tilayman
            </p>
          </div>
        </div>
        <div className="w-96  p-5 bg-[#5770d5] text-white text-lg">
          <p className="">
            Xamma sharoitlari zo'r Ustozlari malakali xozir o'g'lim engliz
            tilida kitob o'qisa nutqini ko'rib juda xursand bo'laman Oydina
            teacherga kattakon raxmat 👏👏👏👏
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fikrlar;
