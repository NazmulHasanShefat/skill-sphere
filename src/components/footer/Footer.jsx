import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-12 shadow-lg w-full max-w-7xl mx-auto p-5 mt-20 mb-8 rounded-xl ">
      <div className="md:col-span-3 col-span-12">
        <h1 className="text-3xl font-bold leading-15">
          Skill <span className="text-blue-500">Sphere</span>
        </h1>
        <p>
          Explore expert-led courses in Web Development, Design, Marketing and
          more. Watch lessons at your own pace
        </p>
      </div>
      <div className="md:col-span-9 col-span-12 px-5 flex flex-col md:flex-row md:justify-end mt-5 md:gap-20">
        <ul className="text-center md:text-start">
          <li>
            <h1 className="font-bold text-3xl">Company</h1>
          </li>
          <li>
            <Link className="hover:underline hover:text-blue-500" href={"/"}>
              About us
            </Link>
          </li>
          <li>
            <Link className="hover:underline hover:text-blue-500" href={"/"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:underline hover:text-blue-500" href={"/"}>
              Courses
            </Link>
          </li>
        </ul>
        <ul className="text-center md:text-start mt-5 md:mt-0">
          <li>
            <h1 className="font-bold text-3xl">Social links</h1>
          </li>
          <div className="link_icons flex justify-center items-center gap-3 py-3">
            <Link href={"/"}>
              {" "}
              <FaFacebook size={23} />{" "}
            </Link>
            <Link href={"/"}>
              {" "}
              <BsTwitterX size={23} />{" "}
            </Link>
            <Link href={"/"}>
              {" "}
              <FaLinkedin size={23} />{" "}
            </Link>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
