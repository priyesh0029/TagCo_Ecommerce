

const company = [
    "CONTACT US",
    "RETURNS",
    "PRIVACY POLICY",
    "TERMS & CONDITIONS",
];
const getInTouch = [
    "Address Line 1",
    "Address Line 2",
    "Address Line 3",
    "Mob : 9567060029",
    "E-mail : priyeshvyala@gmail.com",
];

const Footer = () => {
    return (
        <div className="bg-black  w-full">
            <div className="flex flex-wrap border border-b-white">
                {/* First Column */}
                <div className=" bg-black p-10 lg:w-[33em] border border-r-white">
                    <p className="text-4xl font-bold text-white">
                        Subscribe & get{" "}
                        <span className="text-white text-6xl font-extrabold">20%</span>*
                        discount
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4 items-center">
                        <input
                            type="text"
                            placeholder="Email"
                            className="pl-4 h-16 rounded-full border-2 border-white bg-black"
                        />
                        <div className="lg:pl-7 lg:py-10 group relative max-w-fit max-h-fit">
                            <button className="relative border border-white py-3 px-10 bg-white text-black rounded-full text-xl group-hover:text-lg group-hover:bg-black group-hover:text-white transition-text">
                                <span className="transition-text ">Submit</span>
                                <span className="absolute top-0 right-0 w-6 h-6 flex items-center justify-center rounded-full transition-all opacity-0 group-hover:opacity-100">
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

                {/* Second Column */}
                <div className="flex bg-black justify-evenly flex-wrap">
                    <div className="lg:m-10">
                        <p className="text-lg font-semibold text-white">CATEGORIES</p>
                        <ul className="whitespace-nowrap ml-6">
                            {[...Array(5)].map((_, index) => (
                                <li
                                    className="relative group marker:text-violet-700  list-disc"
                                    key={index}
                                >
                                    <span className="relative right-3">
                                        <button className="relative sm:py-1  py-1 px-3 text-white rounded-3xl  group-hover:text-lg  group-hover:underline transition-text">
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
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:m-10 ">
                        <ul className="whitespace-nowrap m-auto">
                            <li className="text-lg font-semibold text-white ">COMPANY</li>
                            {company.map((desc, index) => (
                                <li className="relative group" key={index}>
                                    <span className="relative right-3">
                                        <button className="relative sm:py-1  py-1 px-3 text-white rounded-3xl  group-hover:text-lg  group-hover:underline transition-text">
                                            <span className="transition-text ">{desc}</span>
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
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:m-10">
                        <ul className="whitespace-nowrap ">
                            <li className="text-lg font-semibold text-white">GetIn Touch</li>
                            {getInTouch.map((desc, index) => (
                                <li className="relative group" key={index}>
                                    <button className="relative sm:py-1  py-1 px-3 text-white rounded-3xl  group-hover:text-lg  transition-text">
                                        <span className="transition-text ">{desc}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap bg-black border border-white">
                <div className=" border border-r-white lg:w-[33em] w-full">
                    <p className="font-bold text-white text-5xl py-8 ml-4">
                        TAG<span className="font-[100] text-gray-500 text-5xl">COMPANY</span>
                    </p>
                </div>
                <div className="m-8 ">
                    <p className="font-bold text-white">©2023 Tag Company,</p>
                    <p className="font-bold text-white">ALL RIGHT RESERVED</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
