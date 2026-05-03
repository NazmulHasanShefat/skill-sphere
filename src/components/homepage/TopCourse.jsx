import React, { Suspense } from "react";
import CourseCard from "./CourseCard";
import { baseURL } from "../baseURL";
import CardSkeleton from "./cardSkaliton";

const TopCourse = async () => {
  const populerCoursePromise = fetch(baseURL, { cache: "no-store" }).then(
    (res) => res.json(),
  );
  return (
    <section className="w-full max-w-7xl mx-auto px-5 mt-10">
      <h1 className="text-2xl md:text-5xl font-bold">
        Most Popular <span className="text-blue-500">Courses</span>
      </h1>
      <Suspense fallback={<CardSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
          <CourseCard populerCoursePromise={populerCoursePromise} />
        </div> 
      </Suspense>
    </section>
  );
};

export default TopCourse;
