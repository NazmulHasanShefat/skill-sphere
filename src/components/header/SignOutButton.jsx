"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const SignOutButton = ({ className, children }) => {
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
    <div
      className={`cursor-pointer list-none ${className}`}
      onClick={handleSignOut}
    >
      {" "}
      {children ? children : <FaSignOutAlt size={20} />}
    </div>
  );
};

export default SignOutButton;
