import React, { Suspense } from "react";
import { baseURL } from "../baseURL";
import InstructorCard from "./InstructorCard";

const TopInstructors =  () => {
    const instructorsPromise = fetch(baseURL, { cache: "no-store" }).then((res)=> res.json());


  return (
    <section className="w-full max-w-7xl mx-auto px-5 mt-20">
      <h1 className="text-2xl md:text-5xl font-bold">
        Top Rated <span className="text-blue-500">Instructors</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
       <Suspense fallback={<h1>loding...</h1>}>
          <InstructorCard instructorsPromise={instructorsPromise} />
       </Suspense>
      </div>
    </section>
  );
};

export default TopInstructors;
