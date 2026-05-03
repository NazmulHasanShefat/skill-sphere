import Image from "next/image";
import React, { use } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const DetailsContainer = ({ courseDetailsPromise, detailsId }) => {
  const courseDetail = use(courseDetailsPromise);

  // console.log(courseDetail)
  const currentDetail = courseDetail.find(
    (c_detail) => Number(c_detail.id) === Number(detailsId),
  );
  console.log(currentDetail);
  return (
    <div className="w-full border grid-cols-1 md:grid-cols-2 grid gap-10 p-5">
      <Image
        src={currentDetail?.image}
        width={500}
        height={1200}
        alt={currentDetail?.title}
        className="w-full rounded-xl"
      />
      <div className="secend_row">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          {currentDetail?.title}
        </h1>
        <div className="px-3 py-3 flex items-center justify-between">
          <span className="py-1 text-xs px-2 border border-gray-200">
            {currentDetail?.category}
          </span>
          
           <div className="rattings flex justify-center items-center gap-2">
                           {Number(currentDetail.rating) <= 1.9 ? (
                             <>
                               <FaStar size={20} color="orange" />
                               <FaRegStar size={20} />
                               <FaRegStar size={20} />
                               <FaRegStar size={20} />
                               <FaRegStar size={20} />
                             </>
                           ) : Number(currentDetail.rating) <= 2.9 ? (
                             <>
                               <FaStar size={20} color="orange" />
                               <FaStar size={20} color="orange" />
                               <FaRegStar size={20} />
                               <FaRegStar size={20} />
                               <FaRegStar size={20} />
                             </>
                           ) : Number(currentDetail.rating) <= 3.9 ? (
                             <>
                               <FaStar size={20} color="orange" />
                               <FaStar size={20} color="orange" />
                               <FaStar size={20} color="orange" />
                               <FaRegStar size={20} />
                               <FaRegStar size={20} />
                             </>
                           ) : Number(currentDetail.rating) <= 4.9 ? (
                             <>
                               <FaStar size={20} color="orange" />
                               <FaStar size={20} color="orange" />
                               <FaStar size={20} color="orange" />
                               <FaStar size={20} color="orange" />
                               <FaRegStar size={20} />
                             </>
                           ) : Number(currentDetail.rating) <= 5 ? (
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
        <div className="font-light pb-4 flex  items-center justify-between gap-2 px-3 py-3">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={currentDetail?.instructorImage || "/placeholderImage.jpg"}
                width={30}
                height={30}
                alt="avater"
                className="rounded-full"
              />
            </div>{" "}
            <h3> {currentDetail?.instructor} </h3>
          </div>
          <h2 className="font-bold"> {currentDetail?.rating.toFixed(1)} </h2>
        </div>
        <div className="flex font-semibold text-lg items-center justify-between px-3">
          <p>duration</p>
          <p>{currentDetail?.duration}</p>
        </div>
        <div className="flex font-semibold text-lg items-center justify-between px-3">
          <p> Lavel </p>
          <p>{currentDetail?.level}</p>
        </div>
        <div className="flex font-semibold text-lg items-center justify-between px-3">
          <p> Category </p>
          <p>{currentDetail?.category}</p>
        </div>
        <div className="flex font-semibold text-lg items-center justify-between px-3">
          <p> Students </p>
          <p>{currentDetail?.students}</p>
        </div>
        <div className="flex flex-col mb-5 font-semibold text-lg items-center justify-between px-3">
          <p> About instructor </p>
          <p>{currentDetail?.about_instructor}</p>
        </div>

        <p className="px-3 pb-2">{currentDetail?.description}</p>
        <div className="px-3 pb-5 pricing flex items-center justify-between">
          <p>Course price:</p>
          <p className="">
            {" "}
            <span className="text-lg font-bold line-through text-gray-400">
              {" "}
              ${currentDetail?.originalPrice}
            </span>{" "}
            <span className="text-lg font-bold text-gray-900">
              {" "}
              ${currentDetail?.discountPrice}{" "}
            </span>{" "}
          </p>
        </div>
        <button className="border-transparent border-2 w-full bg-blue-500 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 cursor-pointer transition-colors duration-200">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DetailsContainer;
