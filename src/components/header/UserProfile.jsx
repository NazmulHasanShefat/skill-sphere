"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import SignOutButton from "./SignOutButton";

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}


const UserProfile = ({ data }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
   const isvalid = isValidUrl(data?.user?.image);
  const openUserProfile = () => {
    setShowProfileModal(!showProfileModal);
  };
  const handleUpdateUser = () => {
    setShowProfileModal(false);
  };

  return (
    <>
      <div
        onClick={openUserProfile}
        className="text-white bg-black flex justify-center items-center w-6.5 cursor-pointer h-6.5 rounded-full"
      >
        {data?.user?.name[0].toUpperCase()}
      </div>

      {showProfileModal && (
        <>
          <div className="backdrop z-10 bg-black/30 fixed left-0 top-0 w-full h-screen"></div>
          <div className="profile_modal z-20 fixed top-1/2 left-1/2 -translate-x-1/2 rounded-lg p-5 -translate-y-1/2 bg-white w-[86%] lg:w-[50%] min-h-[300px]">
            <h1 className="text-2xl">User profile</h1>
            <button
              className="absolute right-5 top-5 cursor-pointer"
              onClick={openUserProfile}
            >
              {" "}
              <IoCloseSharp size={25} />{" "}
            </button>
            <div className="flex flex-col items-center text-center justify-start mt-5 gap-5">
              <Image
                src={isvalid ? data?.user?.image : "/placeholderImage.jpg"}
                width={100}
                height={100}
                alt={data?.user?.name || "user avater"}
                className="w-[80px] h-[80px] rounded-full mt-5 object-cover"
                onError={(e) => {
                  e.target.src = "/placeholderImage.jpg";
                }}
              />
              <div className="details">
                <p className="text-base">
                  Name: <span> {data?.user?.name} </span>
                </p>
                <p className="text-base">
                  email: <span> {data?.user?.email} </span>
                </p>
                <div className="buttons flex justify-between items-center gap-2 mt-3">
                  <Link
                    onClick={handleUpdateUser}
                    href={`/user-update?name=${data?.user?.name}&image=${data?.user?.image}`}
                  >
                    <span className="bg-blue-500 text-white px-2 py-1 cursor-pointer text-xs">
                      Update profile
                    </span>
                  </Link>
                  <SignOutButton />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserProfile;
