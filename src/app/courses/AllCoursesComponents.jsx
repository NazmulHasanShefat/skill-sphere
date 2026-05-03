"use client"
import { SearchField } from "@heroui/react";
import React, { Suspense, useState } from "react";
import AllCourseCard from "./AllCourseCard";
import CardSkeleton from "@/components/homepage/cardSkaliton";

const AllCoursesComponents = ({ AllCoursePromise }) => {
  const [searchFilterValue, setSearchFilterValue] = useState(null);
  const handleSearch = (e) => {
    setSearchFilterValue(e.target.value);
  };
  return (
    <>
      <div className="md:flex justify-between mt-5 items-center">
        <SearchField name="search">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              className="w-[280px]"
              onChange={handleSearch}
              placeholder="Search..."
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-10">
          <AllCourseCard
            AllCoursePromise={AllCoursePromise}
            searchFilterValue={searchFilterValue}
          />
        </div>
      </Suspense>
    </>
  );
};

export default AllCoursesComponents;
