
const OfferContent = () => {
  return (
    <div className="flex flex-col lg:flex-row  lg:h-[40em] flex-wrap">
      {/* First half of the screen on larger screens */}
      <div className="lg:w-1/2 lg:h-full w-full ">
        <img
          src="https://imgs.search.brave.com/Ihtk1_loGKTqIl2x9rh28c9bIXu8ijpjU6uR8MTj_nk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/YnV5LTEtZ2V0LTEt/ZnJlZS1kb3VibGUt/dmFsdWUtZG91Ymxl/LWpveV81NzM3OTAt/MTc1My5qcGc"
          className="w-full h-full object-cover"
          alt="offerimage"
        />
      </div>

      {/* Second half of the screen on larger screens */}
      <div className="lg:w-1/2 flex">
        <div className="flex flex-col">
          <div className="w-full h-fit lg:h-[20em] border border-black">
            <img
              src="https://c8.alamy.com/comp/E8HNP4/blue-gift-packing-tied-by-ribbon-isolated-on-white-with-path-E8HNP4.jpg"
              className="w-full h-full object-cover"
              alt="shirt1img"
            />
          </div>
          <div className="w-full h-fit lg:w-96 lg:h-[20em] border border-black">
            <img
              src="https://c8.alamy.com/comp/E8HNP4/blue-gift-packing-tied-by-ribbon-isolated-on-white-with-path-E8HNP4.jpg"
              className="w-full h-full object-cover"
              alt="shirt1img"
            />
          </div>
        </div>

        {/* <div className="flex flex-col">
            <div className=" w-full lg:w-96 lg:h-[20em] border border-black">
              <img
                src="https://c8.alamy.com/comp/E8HNP4/blue-gift-packing-tied-by-ribbon-isolated-on-white-with-path-E8HNP4.jpg"
                className="w-full h-full object-cover"
                alt="shirt1img"
              />
            </div>
            <div className=" w-full lg:w-96 lg:h-[20em] border border-black">
              <img
                src="https://c8.alamy.com/comp/E8HNP4/blue-gift-packing-tied-by-ribbon-isolated-on-white-with-path-E8HNP4.jpg"
                className="w-full h-full object-cover"
                alt="shirt1img"
              />
            </div>
          </div> */}

        {/* Product details */}
        <div className="border border-black pl-2">

          <div className="flex items-center gap-1"><span className="rounded-full w-2 h-2 bg-violet-700"></span><p> MEALBOXES</p></div>
          <p className="text-xl font-[500]">Pokemon inspired</p>
          <p className="text-lg font-normal">
            Description of the product product of the description product of
            the product
          </p>
          <div className="flex pt-4">
            {[...Array(4)].map((_, index) => (
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
          </div>
          <p className="text-xl font-bold text-gray-900">₹ 850.00</p>
          <div className="mt-8 group relative ">
            <button className="relative bg-black p-2 text-white rounded-3xl  group-hover:text-lg transition-text">
              <span className="transition-text whitespace-nowrap">Add to cart</span>
              <span className="absolute top-2 right-4 flex items-center justify-center rounded-full transition-all opacity-0 group-hover:opacity-100">
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
    </div>
  );
};

export default OfferContent;

