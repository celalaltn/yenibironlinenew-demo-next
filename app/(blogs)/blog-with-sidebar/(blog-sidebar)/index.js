"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";

import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import Banner from "@/components/Common/Banner";
import BlogSidebar from "@/components/Blogs/BlogSidebar";

const BlogWithSidebarPage = ({ getAllBlogs }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
         
         

          <Banner col="col-lg-12" text="All Courses" blogdata={getAllBlogs} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogSidebar isPagination={true} blogdata={getAllBlogs} />
            </div>
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default BlogWithSidebarPage;
