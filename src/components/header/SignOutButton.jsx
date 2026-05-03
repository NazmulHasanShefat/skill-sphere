"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const SignOutButton = () => {
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.assign("/login");
        },
      },
    });
  };
  return (
    <li className="cursor-pointer" onClick={handleSignOut}>
      {" "}
      <FaSignOutAlt size={20} />
    </li>
  );
};

export default SignOutButton;
