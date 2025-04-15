import BackToTop from "@/app/backToTop";
import SingleCourse from "../index";

export const metadata = {
  title: "Course Details - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SingleCourseLayoutSix = ({ params }) => {
  return (
    <>
      <SingleCourse getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayoutSix;
