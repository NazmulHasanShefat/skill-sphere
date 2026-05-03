import Hero from "@/components/homepage/Hero";
import HeroBannerMobile from "@/components/homepage/HeroBannerMobile";
import LearningTipsSection from "@/components/homepage/LearningTipsSection";
import TopCourse from "@/components/homepage/TopCourse";
import TopInstructors from "@/components/homepage/TopInstructors";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
   <>
   <div className="w-full max-w-[1280px] mx-auto px-5">
   <Hero />
   </div>
   <TopCourse/>
   <LearningTipsSection />
   <TopInstructors />
   <ToastContainer />
   </>
  );
}
