import { useRef } from "react";
import FeaturedProducts from "../FearuredProducts/FeaturedProducts";

const productDetails = [
  {
    img: "https://images.pexels.com/photos/3927227/pexels-photo-3927227.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3927227.jpg&fm=jpg",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGR57EzXJERsf2eCAsouV7eJjODz-Kupj4SWpOSkZptmqV_ELSn0lmoqmy5mjw84TZYKA&usqp=CAU",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtjE19kbSOoVyXW_XDRMXdAvoa61BIgLRbWOZ5eViDmq_AxbOBtw9HrNHm1c5tK5uRB0&usqp=CAU",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://c8.alamy.com/comp/E8HNP4/blue-gift-packing-tied-by-ribbon-isolated-on-white-with-path-E8HNP4.jpg",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663841374856-431879a96d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdCUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM_ddOGqs4ZGhNlRasgeegDNMQHhNLkd-Sj_sHM17oA&s",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://images.pexels.com/photos/3927227/pexels-photo-3927227.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3927227.jpg&fm=jpg",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGR57EzXJERsf2eCAsouV7eJjODz-Kupj4SWpOSkZptmqV_ELSn0lmoqmy5mjw84TZYKA&usqp=CAU",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtjE19kbSOoVyXW_XDRMXdAvoa61BIgLRbWOZ5eViDmq_AxbOBtw9HrNHm1c5tK5uRB0&usqp=CAU",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://c8.alamy.com/comp/E8HNP4/blue-gift-packing-tied-by-ribbon-isolated-on-white-with-path-E8HNP4.jpg",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663841374856-431879a96d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdCUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM_ddOGqs4ZGhNlRasgeegDNMQHhNLkd-Sj_sHM17oA&s",
    proName: "Rakhi inspired",
    desc: "description of the product",
    rating: 4,
    oldPrice: 1500,
    newPrice: 800,
  },
];

const TopProducts = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const hadleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 100;
    }
  };

  const hadleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 100;
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-between px-10">
        <p className="text-3xl font-semibold px-3 py-16">Top 10 Gifts</p>
        <div className="flex gap-10 py-20 pr-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={hadleScrollLeft}

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={hadleScrollRight}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto flex no-scrollbar mx-12 "ref={scrollRef}>
        {productDetails.map((product, index) => (
          <div className="px-2 py-4">
            <FeaturedProducts key={index} {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
