import React, { Suspense } from "react";
import AllCourseCard from "./AllCourseCard";
import { baseURL } from "@/components/baseURL";
import CardSkeleton from "@/components/homepage/cardSkaliton";

const page = async () => {
  const AllCoursePromise = fetch(baseURL, { cache: "no-store" }).then(
    (res) => res.json(),
  );
  console.log(AllCoursePromise);
  return (
    <section className="w-full max-w-7xl mx-auto px-5">
      <h1 className="text-2xl md:text-5xl font-bold">
        All <span className="text-blue-500">Courses</span>
      </h1>
      <Suspense fallback={<CardSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
          <AllCourseCard AllCoursePromise={AllCoursePromise} />
        </div>
      </Suspense>
    </section>
  );
};

export default page;
