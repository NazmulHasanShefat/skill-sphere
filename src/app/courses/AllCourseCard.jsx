import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const AllCourseCard = ({ AllCoursePromise }) => {
  const courseDetails = use(AllCoursePromise);
  return (
    <>
      {courseDetails.map((course, index) => {
        return (
          <div
            key={index}
            className="course_card border border-gray-200 hover:border-blue-500 p-5 transition-colors duration-200 rounded-lg"
          >
            <Image
              src={course?.image}
              width={600}
              height={400}
              alt="card_image"
            />
            <div className="tags_ratting flex items-center justify-between mt-5">
              <div className="py-1 px-2 text-xs border border-gray-200">
                Mobile development
              </div>
              <div className="rattings flex justify-center items-center gap-2">
                {Number(course.rating) <= 1.9 ? (
                  <>
                    <FaStar size={20} color="orange" />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                  </>
                ) : Number(course.rating) <= 2.9 ? (
                  <>
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                  </>
                ) : Number(course.rating) <= 3.9 ? (
                  <>
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                  </>
                ) : Number(course.rating) <= 4.9 ? (
                  <>
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaRegStar size={20} />
                  </>
                ) : Number(course.rating) <= 5 ? (
                  <>
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <h2 className="text-[20px] font-bold py-2">
              Android App Development Using Java for Beginners
            </h2>
            <div className="font-light pb-4 flex items-center gap-2">
              <div>
                <Image
                 src={course?.instructorImage}
                  width={30}
                  height={30}
                  alt="avater"
                  className="rounded-full"
                />
              </div>{" "}
              <h3>Mechile torer</h3>
            </div>

            <Link href={`/details/${course.id}`}>
              <button className="border-transparent border-2 w-full bg-blue-500 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 cursor-pointer transition-colors duration-200">
                Vew Details
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default AllCourseCard;
