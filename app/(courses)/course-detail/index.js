"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import sal from "sal.js";
import CourseData from "../../../data/course-details/courseData.json";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";

import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import CourseDetailsThree from "@/components/Course-Details/CourseDetails-Three";
import RelatedCourse from "@/components/Course-Details/Course-Sections/RelatedCourse";

const SingleCourseThree = ({ getParams }) => {
  const router = useRouter();
  const postId = parseInt(getParams.courseId);
  let getCourse;

  getCourse = JSON.parse(JSON.stringify(CourseData.courseTab));

  const checkMatch = getCourse.find((course) => course.id === postId);

  useEffect(() => {
    if (postId && checkMatch === undefined) {
      router.push("/course-detail");
    }

    sal({
      threshold: 0.01,
      once: true,
    });
  }, [checkMatch, router]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          

          <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3 version-02">
            <CourseHead
              checkMatch={checkMatch !== undefined ? checkMatch : ""}
            />
          </div>

          <div className="rbt-course-details-area ptb--60">
            <div className="container">
              <CourseDetailsThree
                checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
              />
            </div>
          </div>

          <CourseActionBottom
            checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
          />

          <div className="rbt-related-course-area  rbt-section-gapBottom">
            <div className="container">
              <div className="related-course mt--60">
                {checkMatch &&
                  checkMatch.relatedCourse.map((data, index) => (
                    <RelatedCourse
                      {...data}
                      key={index}
                      checkMatchCourses={data}
                      colClass="col-lg-4 col-md-6 col-sm-6 col-12"
                    />
                  ))}
              </div>
            </div>
          </div>

        </Context>
      </Provider>
    </>
  );
};

export default SingleCourseThree;
