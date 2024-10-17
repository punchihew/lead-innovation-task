import React from 'react'

export default function Contact() {
  return (
    <div
      style={{ marginTop: "50px", height: 300 }}
      className="max-w-md mx-auto  bg-white rounded-lg shadow-lg border-2 border-red-200 text-gray-700 text-4xl transition duration-500 ease-in-out transform hover:text-red-500 hover:scale-105 "
    >
      <h2
        style={{ marginTop: 20 }}
        className="text-2xl font-bold text-center text-red-900 mb-4"
      >
        Contact Us
      </h2>

      <div className="flex justify-center items-center space-x-4 mb-6">
        <div className="flex flex-col items-center">
          <div
            style={{ backgroundColor: "#64B161", marginTop: 10 }}
            className=" rounded-full p-3"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="w-8 h-8 transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
            />
          </div>
          <p className=" mt-2 text-lg font-bold">071 234 5678</p>
        </div>

        <span className="text-gray-400">|</span>

        <div className="flex flex-col items-center">
          <div style={{ marginTop: 10 }} className="bg-black rounded-full p-3">
            <img
              src="/call.png"
              alt="Phone"
              className="w-8 h-8 transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
            />
          </div>
          <p className="mt-2 text-lg font-bold">071 234 5678</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <a
          href="#"
          aria-label="Facebook"
          className="transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
        >
          <img src="/Facebook.svg" alt="Facebook" className="w-8 h-10 " />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            className="w-10 h-10 transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
          />
        </a>
        <a href="#" aria-label="Instagram">
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-10 h-10 transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
          />
        </a>
        <a href="#" aria-label="TikTok">
          <img
            src="/tiktok.png"
            alt="TikTok"
            className="w-10 h-10 transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
          />
        </a>
      </div>
    </div>
  );
}
