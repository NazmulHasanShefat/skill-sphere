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
    <div className="cursor-pointer list-none" onClick={handleSignOut}>
      {" "}
      <FaSignOutAlt size={20} />
    </div>
  );
};

export default SignOutButton;
