
import ImageCarousal from "./ImageCarousal";
import AnimatedSVG from "./AnimatedSVG";

const LandingPageBody = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:px-0 px-3 border-b-2 border-black">
      <div className="lg:w-1/2 h-[40em] flex-col items-center lg:border-r-2 lg:border-t-2 border-black">
        <p className="font-[500] text-5xl text-black lg:p-7 p-3">
          Best Gift ideas for all occasions
        </p>
        <p className="lg:pl-7 lg:pr-44 py-2 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="lg:pl-7 lg:py-32 py-28 group relative max-w-28">
          <button className="relative bg-black py-3 px-10  text-white rounded-full text-xl group-hover:text-lg transition-text">
            <span className="transition-text ">Button</span>
            <span className="absolute top-2 right-4 w-6 h-6 flex items-center justify-center rounded-full transition-all opacity-0 group-hover:opacity-100">
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

        <div className="flex group relative lg:pl-7 gap-2">
          <AnimatedSVG />
          <p className="lg:text-sm text-sm lg:font-normal font-semibold lg:pt-2">
            Best selling customized meal boxes starting from ₹999.
          </p>
          <p className="text-sm font-medium transition-text group-hover:text-lg whitespace-nowrap lg:pt-2">
            View now
          </p>
          <span className="lg:pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className=" w-3 h-3 group-hover:w-6 group-hover:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="lg:w-1/2 h-[40em]">
        <ImageCarousal />
      </div>
    </div>
  );
};

export default LandingPageBody;
