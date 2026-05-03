"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

const MenuButton = () => {
  const {data:session, isPending} = authClient.useSession();

    const [isOpen, setOpen] = useState();

    const handleOpenMenu = ()=>{
        setOpen(!isOpen)
    }
  return (
    <>
      <RiMenu3Line onClick={handleOpenMenu} size={30}></RiMenu3Line>
      {isOpen ? 
      <div className="dropShadow fixed left-0 top-0 bg-black/30 w-full h-screen"></div>
      : 
      ""
       }
      <div className={`fixed flex flex-col px-5 py-2 top-0 h-screen ${isOpen ? "right-0": "-right-full"} transition-[right] duration-200 bg-white w-1/2 `}>
        <IoMdClose onClick={handleOpenMenu} size={40} className="absolute left-0 cursor-pointer" />
        <Link
         onClick={handleOpenMenu}
          href={"/"}
          className=" mt-15 text-lg font-semibold px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Home
        </Link>
        <Link onClick={handleOpenMenu} href={"/courses"} className="text-lg font-semibold px-4 py-2 ">
          Courses
        </Link>
        {session ? 
        <>
        <div className="flex items-center justify-center pb-4">
        <FaUserCircle size={30}/>
        </div>
       
        <button type="button" className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer py-2 px-4">logiout</button>
        </>: 
        <>
        <Link href={"/register"} onClick={handleOpenMenu} className="text-lg font-semibold px-4 py-2 ">
          Register
        </Link>
        <Link href={"/login"} onClick={handleOpenMenu} className="text-lg font-semibold px-4 py-2 ">
          login
        </Link>
        
        </>
         }
      </div>
    </>
  );
};

export default MenuButton;
