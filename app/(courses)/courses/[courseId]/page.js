import BackToTop from "@/app/backToTop";
import SingleCoursePage from "./index";

export const metadata = {
  title:
    "Course Filter Two Toggle - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const Page = ({ params }) => {
  return (
    <>
      <SingleCoursePage getParams={params} />

     
    </>
  );
};

export default Page;
