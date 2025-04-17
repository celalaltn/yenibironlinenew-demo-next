import BackToTop from "@/app/backToTop";
import BlogGridPage from "./(blog)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const BlogGridLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogGridPage getAllBlogs={blog} />

     
    </>
  );
};

export default BlogGridLayout;
