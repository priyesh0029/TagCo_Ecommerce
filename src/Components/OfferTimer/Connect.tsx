const Connect = () => {
  return (
    <div className="flex-col gap-28 p-10">
      <p className="font-[500] text-2xl">
        LET'S BE FRIEND'S AT INSTAGRAM_HANDLE
      </p>

      <div className="overflow-x-scroll flex no-scrollbar mx-12 gap-4 pt-10">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="w-[] bg-white shadow-md rounded-3xl relative group"
          >
            <div className="relative w-36 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFV5uL-Ai4_Wr1F-dVgYq_Hx1Q8d-PdTIcgjwLQLc7g&s"
                className="w-full h-full rounded-t-3xl object-cover transform transition-transform duration-600 hover:scale-150"
                alt="Product"
              />
            </div>
            <div className="px-4 py-2 flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold text-gray-800 ">@account</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
