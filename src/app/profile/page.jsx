"use client";
import SignOutButton from "@/components/header/SignOutButton";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const ProfilePage = () => {
  const { data } = authClient.useSession();
  return (
    <section className="w-full max-w-7xl mx-auto px-5 flex items-center justify-center">
      <div className="profile">
        <h1 className="text-2xl text-center">User profile</h1>

        <div className="flex flex-col items-center text-center justify-start mt-5 gap-5">
          {data?.user?.image ? (
            <Image
              src={data?.user?.image}
              width={100}
              height={100}
              alt={data?.user?.name || "user avater"}
              className="w-[80px] h-[80px] rounded-full mt-5 object-cover"
            />
          ) : (
            <Image
              src={`/placeholderImage.jpg`}
              width={100}
              height={100}
              alt={data?.user?.name || "user avater"}
              className="w-[80px] h-[80px] rounded-full mt-5 object-cover"
            />
          )}
          <div className="details">
            <p className="text-base">
              Name: <span> {data?.user?.name} </span>
            </p>
            <p className="text-base">
              email: <span> {data?.user?.email} </span>
            </p>
            <div className="buttons flex justify-between items-center gap-2 mt-3">
              <Link
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
    </section>
  );
};

export default ProfilePage;
