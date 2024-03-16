import React from "react";

const About = () => {
  return (
    <div className="h-screen">
      <div className="pt-[100px] h-screen bg-blurBack">
        <section>
          <h1 className="md:text-5xl text-white flex justify-center font-Montserrat text-3xl text-wrap">
            About Us
          </h1>
          <p className="md:text-xl text-balance text-center font-Montserrat text-white pt-10">
            <h2>Welcome to Our Company</h2>
            <p>
              At [Company Name], we are dedicated to [describe the main goal or
              mission of your company]. Founded in [year], we have been serving
              our customers with [describe the products or services your company
              offers] for [number] years.
            </p>
            <h2>Our Story</h2>
            <p>
              Our journey began when [founder's name] had a vision to [describe
              the inspiration or reason behind starting the company]. With a
              passion for [industry or niche], [he/she/they] set out to create a
              company that [describe how the company aims to make a difference
              or solve a problem].
            </p>
            <h1>What We Do</h1>
            <p>
              At [Company Name], we specialize in [describe your main products
              or services]. Our team of experts is committed to delivering
              [quality/innovative/etc.] solutions that [describe how your
              products/services benefit customers or solve their problems].
            </p>
          </p>

        </section>
      </div>
    </div>
  );
};

export default About;
