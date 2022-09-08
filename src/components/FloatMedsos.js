import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function FloatMedsos() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        className={`flex flex-row-reverse fixed right-8 bottom-5 transition-all duration-500 items-center overflow-hidden ${
          isActive ? "-translate-y-36" : ""
        }`}
      >
        <div className={`opacity-0 transition-all duration-500 ${isActive ? "opacity-100" : ""}`}>
          <Image src="/whatsapp.svg" width={100} height={100} alt="whatsapp" />
        </div>
        <div
          className={`relative bottom-2 rounded-xl py-2 px-4 transition-all duration-300 delay-200 bg-white  ${
            isActive ? "translate-x-0" : "-translate-x-40"
          }`}
        >
          <p className="">Hubungi Kami</p>
        </div>
      </div>
      <div
        className={`fixed right-8 bottom-5 flex flex-row-reverse transition-all duration-500 items-center overflow-hidden ${
          isActive ? "translate-y-[-72px] " : ""
        }`}
      >
        <div className={`opacity-0 transition-all duration-500 ${isActive ? "opacity-100" : ""}`}>
          <Image src="/news.svg" width={100} height={100} alt="news" className="" />
        </div>
        <div
          className={`relative bottom-2 rounded-xl py-2 px-4 transition-all duration-300 delay-200 bg-white -z-10 ${
            isActive ? "translate-x-0" : "-translate-x-40"
          }`}
        >
          <p className="items-center bg-white">Berlangganan</p>
        </div>
      </div>
      <div></div>
      <div
        className={`fixed right-8 bottom-5 transition-all duration-300 ${
          isActive ? "" : "opacity-0"
        }`}
      >
        <Image src="/close.svg" width={100} height={100} alt="close" className="" />
      </div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`fixed right-5 bottom-5 transition-all duration-300 ${
          isActive ? "opacity-0" : ""
        }`}
      >
        <Image src="/whatsapp-news.svg" width={130} height={130} alt="whatsapp-news" className="" />
      </div>
    </div>
  );
}
