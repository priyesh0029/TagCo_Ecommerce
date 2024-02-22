import React from 'react'
import { catergory } from '../../Types/catergorySlideTypes'

const CategorySlide = (props : catergory) => {
    return (
        <div className="w-[20em] mx-auto bg-white shadow-md rounded-3xl relative group">
          <div className="relative h-48 overflow-hidden">
            <img
              src={props.img}
              className="w-full h-full rounded-t-3xl object-cover transform transition-transform duration-600 hover:scale-150"
              alt="Product"
            />
          </div>
          <div className="px-4 py-2 flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold text-gray-800 ">
              {props.categoryName}
            </h2>
            <div className=" ">
              <button className="relative sm:py-1  py-1 px-3 text-black rounded-3xl  group-hover:text-lg  group-hover:underline transition-text">
                <span className="transition-text ">Read more</span>
                <span className="absolute top-0 right-0 flex rounded-full transition-all opacity-0 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="4"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </div>
            
          </div>
        </div>
      );
}

export default CategorySlide