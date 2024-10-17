import React from 'react'

export default function Footer() {
  return (
    <footer
      style={{ marginTop: 120, backgroundColor: "#D9D9D9" }}
      className="bg-gray-200 text-black py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div style={{ marginLeft: 70 }} className="flex items-center">
          <div>
            <img src="/Logo.png" alt="X" className="w-12 h-16" />
          </div>
          <div className="ml-2">
            <h1 className="font-semibold">LEAD INNOVATIONZ PTY LTD</h1>
            <p>All rights reserved © 2024 : ACN 669 812 471</p>
            <div className="text-sm mt-2">
              <a href="#" className="text-gray-600 hover:underline ">
                Privacy Policy
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="text-gray-600 hover:underline">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginRight: 20 }} className="flex space-x-4 ">
          
          <div style={{ marginTop: -30, marginRight: -200 }}>
            <a
              href="mailto:contact@leadinnovationz.com"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline mt-3"
            >
              contact@leadinnovationz.com
            </a>
          </div>

          <a
            href="https://x.com"
            className=" text-gray-700 text-4xl transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
          >
            <img src="/twitterx-.png" alt="X" className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com"
            className=" text-gray-700 text-4xl transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
          >
            <img src="/linkedinB.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-700 text-4xl transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
          >
            <img src="/instagramB.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a
            href="https://facebook.com"
            className="text-gray-700 text-4xl transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-125"
          >
            <img src="/fb.png" alt="Facebook" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
