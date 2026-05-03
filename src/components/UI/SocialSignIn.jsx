"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner9 } from "react-icons/im";

const SocialSignIn = () => {
  const [socialIsPending, setSocialPending] = useState(false);
  const [githubLoginIsPending, setGithubLoginPending] = useState(false);
  const handleGoogleLogin = async () => {
    setSocialPending(true);
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      if (error) {
        console.log("faild to login or signUp", error);
        return;
      }
      if (data) {
        console.log("login successfull", data);
      }
    } catch (error) {
      console.log("somethis wrong !");
    } finally {
      setSocialPending(false);
    }
  };

  const handleGitHubLogin = async () => {
    setGithubLoginPending(true);
    try {
        const { data, error } = await authClient.signIn.social({
          provider: "github",
          callbackURL: "/",
        });
        if (error) {
          console.log("faild to login or signUp", error);
          return;
        }
        if (data) {
          console.log("login successfull", data);
        }
    } catch (error) {
        console.log("somethig went wrong !")
    }finally{
        setGithubLoginPending(false)
    }
  };

  return (
    <>
      <button
        onClick={handleGoogleLogin}
        className="border flex min-w-[220px] justify-center items-center gap-3 cursor-pointer border-gray-300 rounded-lg py-2 px-4 mt-7"
      >
        {socialIsPending ? (
          <ImSpinner9 size={25} className="animate-spin" />
        ) : (
          <>
            <FcGoogle size={25} />
            Continue with google
          </>
        )}
      </button>
      <button
        onClick={handleGitHubLogin}
        className="border flex items-center gap-3 cursor-pointer border-gray-300 rounded-lg py-2 px-4 mt-3"
      >
        {githubLoginIsPending ? (
          <ImSpinner9 size={25} className="animate-spin" />
        ) : (
          <>
            <FaGithub size={25} />
            Continue with Github
          </>
        )}
      </button>
    </>
  );
};

export default SocialSignIn;
