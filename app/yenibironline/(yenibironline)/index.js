"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import ClassicLms from "@/components/05-classic-lms/05-ClassicLms";

const ClassicLmsPage = ({ getAllBlogs }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
         
          <ClassicLms blogdata={getAllBlogs} />
         

          <Separator />
        </Context>
      </Provider>
    </>
  );
};

export default ClassicLmsPage;
