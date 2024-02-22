import { useState } from "react";
import { product } from "../../Types/productTypes";

const FeaturedProducts = (props: product) => {
  const [like, setlike] = useState(false);
  const handleWishList = () => {
    setlike(() => !like);
  };
  return (
    <div className="w-[20em] mx-auto bg-white shadow-md rounded-3xl relative">
      <div className="relative h-48 overflow-hidden group">
        <img
          src={props.img}
          className="w-full h-full rounded-t-3xl object-cover  transition-transform duration-300 hover:scale-150"
          alt="Product"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Now
        </button>
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors group-hover:block hidden">
          {like ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
              onClick={handleWishList}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
              onClick={handleWishList}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {props.proName}
        </h2>
        <p className="text-sm text-gray-600 mb-4">{props.desc}</p>
        <div className="flex items-center mb-4 justify-center">
          {/* View Now Button */}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {[...Array(props.rating)].map((_, index) => (
              <span key={index} className="text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </span>
            ))}
            <span className="text-gray-600 ml-2">
              {props.rating} (120 reviews)
            </span>
          </div>
        </div>
        <div className=" flex gap-4">
          <p className="text-xl font-bold text-gray-400 line-through">
            ₹{props.oldPrice}
          </p>
          <p className="text-xl font-bold text-gray-900">₹{props.newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
