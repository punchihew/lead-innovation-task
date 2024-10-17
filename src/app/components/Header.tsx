"use client"; 


import { headers } from 'next/headers';
import React from 'react'
import { useEffect, useState } from "react";
import Image from 'next/image';




export default function Header() {


    useEffect(() => {
      // Query all elements with the class 'slide-image'
      const slides = document.querySelectorAll<HTMLImageElement>(".slide-image");
  
      let slideIndex = 0;
  
      const changeSlide = () => {
        slides.forEach((slide) => {
          // Setting style properties using TypeScript's type-safe way
          slide.style.opacity = '0';
          slide.style.zIndex = '0';
          slide.style.animation = '';
        });
  
        // Show the current slide with appropriate animation
        const currentSlide = slides[slideIndex];
        if (currentSlide) {
          currentSlide.style.opacity = '1';
          currentSlide.style.zIndex = '1';
          currentSlide.style.animation =
            slideIndex % 2 === 0
              ? "slideRightToLeft 3s"
              : slideIndex % 4 === 1
              ? "slideLeftToRight 3s"
              : slideIndex % 4 === 2
              ? "slideUpToDown 3s"
              : "slideDownToUp 3s";;
        }
  
        // Update the slideIndex
        slideIndex = (slideIndex + 1) % slides.length;
      };
  
      // Set an interval to change the slide every 5 seconds
      const interval = setInterval(changeSlide, 2000);
  
      // Run changeSlide immediately to show the first slide
      changeSlide();
  
      // Cleanup the interval when the component is unmounted
      return () => clearInterval(interval);
    }, []);
 

  return (
    <div>
      <div
        style={{ marginTop: 40, borderRadius: 16 }}
        className=" mx-auto flex items-center justify-center min-h-screen   w-11/12   bg-[url('/Frame_33.png')] bg-cover bg-center "
      >
        <div className="lg:w-2/3 space-y-8 mr-[40px] lg:mb-0">
          <h2
            style={{ color: "white", marginLeft: 99, marginTop: -160 }}
            className="text-3xl lg:text-4xl font-bold text-center t mb-8"
          >
            Transform Your Dining Experience with <br></br> Our Innovative
            Digital Menu{" "}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" text-white  rounded-lg border  border-white p-4 h-[140px]">
              <h3
                style={{ color: "white" }}
                className="text-xl font-semibold mb-4"
              >
                Step 01
              </h3>
              <p style={{ color: "white" }}>
                Scan the QR Code and embark on a culinary journey by scanning
                the QR code on your table using your smartphone.
              </p>
              {/* 
              <div className="h-2 w-2 bg-white rounded-full ml-[202px] mt-[3px]"></div> */}
            </div>

            <div className=" text-white rounded-lg border  border-white p-4 h-[140px]">
              <h3 className="text-xl font-semibold mb-4">Step 02</h3>
              <p style={{ color: "white" }}>
                Explore and Personalize. Discover our diverse digital menu and
                tailor your dining experience to your unique tastes.
              </p>
              <div className="h-2 w-2 bg-white rounded-full ml-[-17px] mt-[2px]"></div>
            </div>

            <img
              style={{ marginTop: -34, marginLeft: 220, height: "36px" }}
              src="/Vector_2.png"
            />

            <div className=" text-white  rounded-lg border  border-white p-4 h-[140px] ">
              <h3 className="text-xl font-semibold mb-4">Step 03</h3>
              <p style={{ color: "white" }}>
                Effortless Ordering. Witness your selections seamlessly reach
                our cashier and kitchen, ensuring swift fulfillment.
              </p>
              <img
                style={{ marginTop: -143, marginLeft: 220, height: "36px" }}
                src="/Vector_2.png"
              />
            </div>

            <div
              style={{ marginTop: -172 }}
              className="step text-white  rounded-lg  border  border-white p-4  h-[140px]"
            >
              {/* <div className="h-2 w-2 bg-white rounded-full ml-[202px] mt-[-23px]"></div> */}
              <h3 className="text-xl font-semibold mb-4 ">Step 04</h3>

              <p style={{ color: "white" }}>
                Savour Every Moment. Relish in the pleasure of timely and
                delicious dishes delivered right to your table.
              </p>

              <div className="h-2 w-2 bg-white rounded-full ml-[425px] mt-[-110px]"></div>
              <div
                style={{ transform: "rotate(45deg)" }}
                className="line  h-12 w-0.5 bg-white  ml-[445px] mt-[-44px] "
              ></div>
            </div>
          </div>
        </div>

        {/*             
      <div style={{ width:160 , marginLeft:80  , borderRadius:20 , marginTop:-70 , height:320 }} className="relative w-full  overflow-hidden "> */}

        <div className="flex justify-center items-center h-screen">
          {/* Phone frame */}
          <div
            style={{ marginBottom: 1 }}
            className="relative w-[360px] h-[400px] bg-no-repeat bg-center "
          >
            {/* Image Slider inside the phone */}
            <div
              style={{ borderRadius: 10 }}
              className="absolute top-[-12px] left-[6%] w-[88%] h-[75%] slider-wrapper ml-[-56px]  "
            >
              <Image
                src="/burger2.png"
                alt="Slide 1"
                layout="fill"
                objectFit="cover"
                className="slide-image"
              />
              <Image
                src="/burger1.png"
                alt="Slide 2"
                layout="fill"
                objectFit="cover"
                className="slide-image"
              />
              <Image
                src="/burger.png"
                alt="Slide 3"
                layout="fill"
                objectFit="cover"
                className="slide-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
