"use client";
import React from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import CourseSection from "./CourseSection";
import FeaturedContent from "./FeaturedContent";
import TrendingCoursesList from "./TrendingCoursesList";
import CategorySection from "./CategorySection";
import InstructorSection from "./InstructorSection";
import ExploreMoreSection from "./ExploreMoreSection";
import NewsletterSignup from "./NewsletterSignup";
import Footer from "./Footer";

function WLight() {
  return (
    <main className="flex flex-col items-start pr-20 bg-white pb-[859px] max-md:pr-5 max-md:pb-24">
      <div className="max-w-full w-[1920px]">
        <Header />
      </div>

      <section className="flex flex-col items-end pt-10 max-w-full bg-stone-100 pb-[2474px] w-[1920px] max-md:pb-24">
        <div className="flex flex-col items-end max-w-full w-[1572px]">
          <div className="flex flex-col self-start max-w-full w-[1224px]">
            <HeroBanner />

            <div className="flex gap-5 justify-between self-center mt-9 max-w-full w-[104px]">
              <div className="flex shrink-0 w-2 h-2 rounded bg-stone-500" />
              <div className="flex shrink-0 w-2 h-2 bg-red-200 rounded" />
              <div className="flex shrink-0 w-2 h-2 bg-red-200 rounded" />
              <div className="flex shrink-0 w-2 h-2 bg-red-200 rounded" />
            </div>
          </div>

          {/* Placeholder elements for layout */}
          <div className="flex overflow-hidden flex-col justify-center p-px mt-40 mr-24 max-w-full rounded-3xl min-h-[453px] w-[276px] max-md:mt-10 max-md:mr-2.5">
            <div className="flex w-full min-h-[451px]" />
          </div>
          <div className="flex overflow-hidden z-10 flex-col justify-center items-start py-px pl-px mt-0 rounded-3xl min-h-[453px] w-[76px] max-md:mt-0">
            <div className="flex w-full min-h-[451px]" />
          </div>
          <div className="overflow-hidden relative px-px pt-60 pb-px mt-56 mr-24 max-w-full rounded-3xl min-h-[425px] w-[276px] max-md:pt-24 max-md:mt-10 max-md:mr-2.5">
            <div className="flex absolute inset-px z-0 w-full min-h-[423px]" />
            <div className="z-0 flex-1 px-4 pt-4 pb-16 w-full bg-white">
              <div className="flex w-full min-h-5" />
              <div className="flex mt-1 w-full min-h-14" />
              <div className="flex mt-1 w-full min-h-6" />
            </div>
          </div>
          <div className="overflow-hidden relative z-10 pt-60 pb-px pl-px mt-0 rounded-3xl min-h-[425px] w-[76px] max-md:pt-24 max-md:mt-0">
            <div className="flex absolute inset-y-px left-px z-0 w-full min-h-[423px] right-[-199px]" />
            <div className="z-0 flex-1 px-4 pt-4 pb-16 w-full bg-white">
              <div className="flex w-full min-h-5" />
              <div className="flex mt-1 w-full min-h-14" />
              <div className="flex mt-1 w-full min-h-6" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center self-stretch mt-0 min-h-px max-md:mt-0 max-md:max-w-full">
          <CourseSection title="Most Popular Courses" type="popular" />

          <CourseSection title="New Releases" type="new" />

          <FeaturedContent />

          <CourseSection title="Featured Courses" type="featured" />

          <CourseSection title="Trending Courses" type="trending" />

          <CategorySection />

          <InstructorSection />

          <ExploreMoreSection />

          <NewsletterSignup />
        </div>

        <div className="flex z-10 flex-col mt-0 mb-0 max-w-full w-[368px] max-md:mt-0 max-md:mb-2.5">
          <div className="flex overflow-hidden flex-col justify-center p-px max-w-full rounded-3xl min-h-[397px] w-[276px]">
            <div className="flex w-full min-h-[395px]" />
          </div>
          <div className="flex overflow-hidden z-10 flex-col justify-center items-start self-end py-px pl-px mt-0 rounded-3xl min-h-[397px] w-[76px] max-md:mt-0">
            <div className="flex w-full min-h-[395px]" />
          </div>
          <div className="flex overflow-hidden flex-col justify-center p-px mt-56 max-w-full rounded-3xl min-h-[425px] w-[276px] max-md:mt-10">
            <div className="flex w-full min-h-[423px]" />
          </div>
          <div className="flex overflow-hidden z-10 flex-col justify-center items-start self-end py-px pl-px mt-0 rounded-3xl min-h-[425px] w-[76px] max-md:mt-0">
            <div className="flex w-full min-h-[423px]" />
          </div>
        </div>
      </section>

      <Footer />

      <div className="flex shrink-0 max-w-full h-px bg-white w-[1920px]" />
    </main>
  );
}

export default WLight;
