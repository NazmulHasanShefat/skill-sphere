import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full max-w-[1280px] mx-auto bg-linear-to-r from-blue-950 to-blue-800 md:px-20 py-10 px-5 rounded-xl">
      <div className="hero_cart grid grid-cols-12 md:pt-20">
        <div className="left lg:col-span-8 md:col-span-6 col-span-12 pl-5">
          <h1 className="md:text-5xl text-3xl font-bold py-5 text-white md:leading-15">
            Upgrade Your Skills Today 🚀{" "}
            <span className="text-blue-500"> Learn from Industry Experts</span>
          </h1>
          <p className="text-white pb-3">
            Explore expert-led courses in Web Development, Design, Marketing and
            more. Watch lessons at your own pace
          </p>
          <div className="out-features py-3 flex gap-3">
            
            <span className="flex items-center gap-2 bg-linear-to-r from-blue-950 to-blue-800 ring-1 text-xs text-white font-light ring-blue-500 py-1 px-2 rounded-md" > <div className="w-[10px] h-[10px] bg-white"></div> Marketing</span>
            <span className="flex items-center gap-2 bg-linear-to-r from-blue-950 to-blue-800 ring-1 text-xs text-blue-200 font-light ring-blue-500 py-1 px-2 rounded-md" > <div className="w-[10px] h-[10px] bg-blue-500"></div> Marketing</span>
            <span className="flex items-center gap-2 bg-linear-to-r from-blue-950 to-blue-800 ring-1 text-xs text-yellow-500 font-light ring-blue-500 py-1 px-2 rounded-md" > <div className="w-[10px] h-[10px] bg-yellow-500"></div> Marketing</span>

          </div>
          <div className="bannerButtons mt-5 flex items-center gap-3">
            <button
              type="button"
              className="cursor-pointer hover:translate-x-0.5 transition-translate duration-200 bg-linear-to-r from-blue-700 to-blue-800 text-white shadow-xl px-4 py-2 rounded-xl font-semibold"
            >
              Our cousees
            </button>
            <button
              type="button"
              className="cursor-pointer hover:translate-x-0.5 transition-translate duration-200 bg-white px-4 py-2 rounded-xl font-semibold"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="right lg:col-span-4 md:col-span-6 col-span-12 row-start-1 row-end-2 lg:col-start-9">
          <div className="flex md:justify-end justify-center items-center">
            <Image
              src={"/instructor.jpeg"}
              className="w-full border-4 border-blue-500 rounded-lg md:rotate-5"
              width={316}
              height={387}
              alt="instuctor"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
