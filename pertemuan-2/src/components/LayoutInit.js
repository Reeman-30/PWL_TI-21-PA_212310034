import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function LayoutInit({ children }) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Header />

          <section className="">
            <div className="">{children}</div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
