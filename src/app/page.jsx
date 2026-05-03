import Hero from "@/components/homepage/Hero";
import LearningTipsSection from "@/components/homepage/LearningTipsSection";
import TopCourse from "@/components/homepage/TopCourse";
import TopInstructors from "@/components/homepage/TopInstructors";

export default function Home() {
  return (
   <>
   <div className="w-full max-w-[1280px] mx-auto px-5">
   <Hero />
   </div>
   <TopCourse/>
   <LearningTipsSection />
   <TopInstructors />
   </>
  );
}
