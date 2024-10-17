import React from 'react'





export default function Homes() {
  return (
    
    <div style={{marginTop:-160 , borderRadius:16 , zIndex:100}}className=" mx-auto flex items-center justify-center bg-white w-4/5  bg-[url('/photo1.png')] bg-cover bg-center p-10 ">
    <div style ={{borderRadius:14}}className="bg-white p-8 shadow-md rounded-md max-w-md w-4/5">
      <h2 className="text-center text-2xl font-semibold text-red-700 mb-6 ">Submit</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
           
          ></textarea>
        </div>
        <button
          type="submit"
          className=" btn w-full font-semibold hover:bg-red-600  bg-red-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}
