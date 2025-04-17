import BackToTop from "../backToTop";
import ClassicLmsPage from "./(yenibironline)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Yeni Bir Online",
  description: "Yeni Bir Online",
};

const ClassicLmsLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <ClassicLmsPage getAllBlogs={blog} />
     
    </>
  );
};

export default ClassicLmsLayout;
