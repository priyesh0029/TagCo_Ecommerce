import ShoppingTimer from "./ShoppingTimer";

const OfferTimer = () => {
    return (
        
            <div className="w-full lg:h-[45em] lg:flex bg-pink-50 gap-16 py-24 p-2 justify-center">
                <div className="lg:w-1/2 w-full h-full ">
                    <div className="border border-black  rounded-tl-[12em]">
                        <div className="lg:p-16">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGR57EzXJERsf2eCAsouV7eJjODz-Kupj4SWpOSkZptmqV_ELSn0lmoqmy5mjw84TZYKA&usqp=CAU"
                                className="object-cover h-full w-full rounded-3xl"
                                alt="image"
                            />
                        </div>
                    </div>
                    <div className="border border-black text-center p-2">
                        <p className="text-2xl font-normal">Happy Rakshabandhan</p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full h-full">
                    <div className="flex flex-col items-center gap-10">
                        <p className="text-5xl font-semibold">
                            Are you ready for Rakshabandhan shopping ?
                        </p>
                        <p className="text-xl font-normal ">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s,
                        </p>
                        <p className="text-2xl font-[500] underline">DAYS TILL RAKSHABANDHAN</p>
                        <div>
                            <ShoppingTimer />
                        </div>
                        <div className="lg:pl-7 lg:py-10 group relative max-w-28">
                            <button className="relative bg-black py-3 px-10  text-white rounded-full text-xl group-hover:text-lg transition-text">
                                <span className="transition-text ">Submit</span>
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
                    </div>
                </div>
            </div>
           
    );
};

export default OfferTimer;
