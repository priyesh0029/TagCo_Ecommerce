
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    { text: "Home", to: "/" },
    { text: "Shop", to: "/shop" },
    { text: "About", to: "/about" },
    { text: "Contact Us", to: "/contact" }
];


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-28">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <p className='hidden lg:block font-extrabold text-5xl'>TAG</p>
                        <p className='hidden lg:block font-extralight text-4xl pt-[0.5rem]'>CO.</p>
                        <p className='block lg:hidden font-extrabold text-3xl'>TAG</p>
                        <p className='block lg:hidden font-extralight text-2xl pt-[0.3rem]'>CO.</p>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-auto gap-12">
                        <div className="flex space-x-4">
                            {navLinks.length !== 0 && (navLinks.map((link) => (
                                <Link
                                    key={link.text + link.to}
                                    to={link.to}
                                    className="text-black hover:bg-gray-700 hover:text-white px-3 pt-2 rounded-md text-2xl font-semibold"
                                >
                                    {link.text}
                                </Link>
                            )))}
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="block sm:text-sm border border-black rounded-3xl p-2"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    {/* Magnifying Glass Icon */}
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M15 15l4.5 4.5M10 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className=" flex flex-row gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hidden lg:block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hidden lg:block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="-mr-2 flex items-center lg:hidden gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only ">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-8 w-8 text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M0 6h28M6 12h22M0 18h24"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>



            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-gray-400" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.length !== 0 && (navLinks.map((link) => (
                            <Link
                                key={link.text + link.to}
                                to={link.to}
                                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.text}
                            </Link>
                        )))}
                    </div>
                    <div className="px-5 py-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="block w-full border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
