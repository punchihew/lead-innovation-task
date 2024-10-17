import { url } from "inspector";
import React from "react";

export default function Plans() {
  return (
    <div style={{ marginTop: 10 }}>
      <h1
        style={{ marginTop: 40, color: "#500000" }}
        className="text-4xl font-bold text-center  font-bold"
      >
        {" "}
        Our Pricing Plans{" "}
      </h1>

      <div className="flex justify-center space-x-8 p-8">
        {/* Basic Plan */}
        <div className="w-[22rem] overflow-hidden bg-white border-2 shadow-lg relative h-[550px] rounded-[3rem] group">
          <div className="flex flex-col items-center mt-1">
            <img
              src="/qr_2.png"
              alt="QR Icon with Crown"
              className="w-[5rem] h-[5rem] mt-10 transition-transform duration-1000 ease-in-out group-hover:w-[3rem] group-hover:h-[3rem]"
            />
            {/* Plan Type */}
            <span className=" font-semibold text-black font-sui text-[4rem] m-0 transition-transform duration-1000 ease-in-out group-hover:text-[2.9rem]">
              Basic
            </span>
            <span className="text-sm text-gray-500 m-0 text-[1.2rem] relative bottom-4 transition-transform duration-1000 ease-in-out group-hover:text-[0.9rem]">
              Subscription Plan
            </span>
            <div
              id="event_hover"
              style={{
                backgroundImage: "url('/rectangle_11.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className=" w-[24rem] h-[550px] overflow-hidden transition-transform duration-1000 ease-in-out transform translate-y-0 group-hover:translate-y-[-30px]"
            >
              <div className="flex-col flex items-center flex-1 space-y-28 transition-transform duration-1000 ease-in-out transform translate-y-0 group-hover:translate-y-[-160px]">
                <span className=" mt-[7rem] text-[#980000] text-[3.5rem] font-semibold transition-transform duration-1000 ease-in-out group-hover:text-[2rem]">
                  Rs.9.900
                </span>
                <div className="flex flex-col w-10/12 space-y-2 ">
                  <div className="flex align-middle">
                    <img src="/correct_2.png" className="w-5 h-5 mt-1" />
                    <div>
                      <span className="font-bold text-lg text-[#4F0000]">
                        Glowing Customer Testimonials
                      </span>
                      <p className="text-[0.6rem] text-[#4F0000] text-pretty">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quisquam sunt ad iure cum natus odio harum
                        doloremque, nam eum, ab ratione, dolorum asperiores.
                        Consequuntur perspiciatis excepturi quisquam officiis.
                        Veritatis, a.
                      </p>
                    </div>
                  </div>
                  <div className="flex align-middle">
                    <img src="/correct_2.png" className="w-5 h-5 mt-1" />
                    <div>
                      <span className="font-bold text-lg text-[#4F0000]">
                        Glowing Customer Testimonials
                      </span>
                      <p className="text-[0.6rem] text-[#4F0000] text-pretty">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quisquam sunt ad iure cum natus odio harum
                        doloremque, nam eum, ab ratione, dolorum asperiores.
                        Consequuntur perspiciatis excepturi quisquam officiis.
                        Veritatis, a.
                      </p>
                    </div>
                  </div>
                  <div className="flex align-middle">
                    <img src="/correct_2.png" className="w-5 h-5 mt-1" />
                    <div>
                      <span className="font-bold text-lg text-[#4F0000]">
                        Glowing Customer Testimonials
                      </span>
                      <p className="text-[0.6rem] text-[#4F0000] text-pretty">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quisquam sunt ad iure cum natus odio harum
                        doloremque, nam eum, ab ratione, dolorum asperiores.
                        Consequuntur perspiciatis excepturi quisquam officiis.
                        Veritatis, a.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[22rem] overflow-hidden bg-white border-2 shadow-lg relative h-[550px] rounded-[3rem] group">
          {/* QR Icon with Crown */}
          <div className="flex flex-col items-center mt-1">
            <img
              src="/queen.png"
              alt="QR Icon"
              className=" w-10 h-10 relative top-3 transition-transform duration-1000 ease-in-out group-hover:w-6 group-hover:h-6 group-hover:top-1 "
            />
            <img
              src="/qr_2.png"
              alt="QR Icon with Crown"
              className="w-[5rem] h-[5rem] transition-transform duration-1000 ease-in-out group-hover:w-[3rem] group-hover:h-[3rem]"
            />
            {/* Plan Type */}
            <span className=" font-semibold text-black font-sui text-[4rem] m-0 transition-transform duration-1000 ease-in-out group-hover:text-[2.9rem]">
              Premium
            </span>
            <span className="text-sm text-gray-500 m-0 text-[1.2rem] relative bottom-4 transition-transform duration-1000 ease-in-out group-hover:text-[0.9rem]">
              Subscription Plan
            </span>
            <div
              id="event_hover"
              style={{
                backgroundImage: "url('/Rectangle_10.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className=" w-[24rem] h-[550px] overflow-hidden transition-transform duration-1000 ease-in-out transform translate-y-0 group-hover:translate-y-[-30px]"
            >
              <div className="flex-col flex items-center flex-1 space-y-28 transition-transform duration-1000 ease-in-out transform translate-y-0 group-hover:translate-y-[-160px]">
                <span className=" mt-[7rem] text-white text-[3.5rem] font-semibold transition-transform duration-1000 ease-in-out group-hover:text-[2rem]">
                  Rs.29.000
                </span>
                <div className="flex flex-col w-10/12 space-y-2">
                  <div className="flex align-middle">
                    <img src="/correct.png" className="w-5 h-5 mt-1" />
                    <div>
                      <span className="font-bold text-lg text-white">
                        Glowing Customer Testimonials
                      </span>
                      <p className="text-[0.6rem] text-white text-pretty">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quisquam sunt ad iure cum natus odio harum
                        doloremque, nam eum, ab ratione, dolorum asperiores.
                        Consequuntur perspiciatis excepturi quisquam officiis.
                        Veritatis, a.
                      </p>
                    </div>
                  </div>
                  <div className="flex align-middle">
                    <img src="/correct.png" className="w-5 h-5 mt-1" />
                    <div>
                      <span className="font-bold text-lg text-white">
                        Glowing Customer Testimonials
                      </span>
                      <p className="text-[0.6rem] text-white text-pretty">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quisquam sunt ad iure cum natus odio harum
                        doloremque, nam eum, ab ratione, dolorum asperiores.
                        Consequuntur perspiciatis excepturi quisquam officiis.
                        Veritatis, a.
                      </p>
                    </div>
                  </div>
                  <div className="flex align-middle">
                    <img src="/correct.png" className="w-5 h-5 mt-1" />
                    <div>
                      <span className="font-bold text-lg text-white">
                        Glowing Customer Testimonials
                      </span>
                      <p className="text-[0.6rem] text-white text-pretty">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quisquam sunt ad iure cum natus odio harum
                        doloremque, nam eum, ab ratione, dolorum asperiores.
                        Consequuntur perspiciatis excepturi quisquam officiis.
                        Veritatis, a.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
