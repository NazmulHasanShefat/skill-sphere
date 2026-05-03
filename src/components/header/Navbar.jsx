"use client"
import Link from "next/link";
import MenuButton from "./MenuButton";


import SignOutButton from "./SignOutButton";

import UserProfile from "./UserProfile";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

const Navbar = () => {
 const {data, isPending} = authClient.useSession();
 const currentPath = usePathname();
 console.log(currentPath)

  return (
    <nav className="px-5 py-5 flex justify-between items-center w-full max-w-[1280px] mx-auto">
      <div className="logo">
        <Link href={"/"} className="text-3xl font-bold">
          {" "}
          <span className="text-blue-500">Skill</span> Sphere
        </Link>
      </div>
      <ul className="md:flex hidden items-center justify-center gap-4 text-lg font-semibold list-none">
        <li>
          {" "}
          <Link
            className={`hover:text-blue-500 transition-colors duration-200 ${currentPath === "/" ? "text-blue-500": "text-black"}`}
            href={"/"}
          >
            Home
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            className={`hover:text-blue-500 transition-colors duration-200 ${currentPath === "/courses" ? "text-blue-500": "text-black"}`}
            href={"/courses"}
          >
            Courses
          </Link>{" "}
        </li>

        {data ? (
          <>
            <li className={`flex items-center gap-3 ${currentPath === "/profile" ? "text-blue-500": "text-black"}`}>
              {" "}
             <Link href={"/profile"} >Profile</Link>
             <UserProfile data={data} />
            </li>
            <SignOutButton />
          </>
        ) : (
          <>
            <li>
              {" "}
              <Link
                className="hover:text-blue-500 transition-colors duration-200"
                href={"/login"}
              >
                Login
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-500 transition-colors duration-200"
                href={"/register"}
              >
                Register{" "}
              </Link>{" "}
            </li>
          </>
        )}
      </ul>
      <div className="md:hidden flex items-center gap-3">
        {data ? 
        isPending ? "loding...": 
          <UserProfile data={data}/>
         :
        ""        
         }
        <MenuButton />
      </div>
    </nav>
  );
};

export default Navbar;
