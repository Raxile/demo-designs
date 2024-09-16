import Image from "next/image";
import React from "react";
import foodIndustryImg from "@/assets/images/industry-Food.webp";

const industries = () => {
  return (
    <section className="banner-container">
      <div className="page-container mx-auto  d-flex w-full row">
        <div className="col-xl-6 col-lg-8 col-md-12 banner-left">
          <p className="page-title mb-0">INDUSTRIES</p>
          <h1 className="banner-title">
            Preferred Transformation
            <br />
            Partner of Global Leaders
            <br />
            in <span className="gradient-text">Food</span>
          </h1>
          <button className="btn btn-primary">Consult Our Experts</button>
        </div>
        <div className="col-xl-6 col-lg-4 d-none  d-lg-block banner-right">
          <div className="d-flex justify-content-end w-100  ">
            <div className="banner-image-container w-100 ">
              <Image
                src={foodIndustryImg}
                alt="food industry"
                className="h-100 w-100"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default industries;
