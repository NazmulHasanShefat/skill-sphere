"use client"
import React, { Suspense, useState } from "react";
import AllCourseCard from "./AllCourseCard";
import { baseURL } from "@/components/baseURL";
import CardSkeleton from "@/components/homepage/cardSkaliton";
import { SearchField } from "@heroui/react";

const CoursesPage = () => {
  const [searchFilterValue, setSearchFilterValue] = useState(null);
  const AllCoursePromise = fetch(baseURL, { cache: "no-store" }).then((res) =>
    res.json(),
  );
  const handleSearch = (e)=>{
    setSearchFilterValue(e.target.value);
  }
  return (
    <section className="w-full max-w-7xl mx-auto px-5">
      <div className="md:flex justify-between items-center">
        <h1 className="text-2xl md:text-5xl font-bold">
          All <span className="text-blue-500">Courses</span>
        </h1>
        <SearchField name="search">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[280px]" onChange={handleSearch} placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
          <AllCourseCard AllCoursePromise={AllCoursePromise} searchFilterValue={searchFilterValue}/>
        </div>
      </Suspense>
    </section>
  );
};

export default CoursesPage;
