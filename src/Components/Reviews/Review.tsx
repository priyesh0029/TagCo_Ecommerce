import  { useState } from 'react'

const review = [
    {
        comment: "I have found the best gifts for kids with Tagcompany!Here you will find a unique range gift ideas,suitable for kids of all Interests",
        userName: "Person Name 1",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfFdK6QyNlNfmYzkSt3e2z4MpClCtVehr3g&usqp=CAU",
        proffession: "House wife 1",
        productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM_ddOGqs4ZGhNlRasgeegDNMQHhNLkd-Sj_sHM17oA&s",
        proName: "Rakhi inspired",
    },
    {
        comment: "Trinkets & Charms Boutique exceeded all my expectations! The ambiance was enchanting, and the variety of gifts available was impressive.",
        userName: "Person Name 2",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfFdK6QyNlNfmYzkSt3e2z4MpClCtVehr3g&usqp=CAU",
        proffession: "House wife 2",
        productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM_ddOGqs4ZGhNlRasgeegDNMQHhNLkd-Sj_sHM17oA&s",
        proName: "Rakhi inspired",
    },
    {
        comment: "What a delightful find! Treasure Trove Emporium is a gem of a gift shop with a wonderful selection of items. From quirky knick-knacks to elegant souvenirs !",
        userName: "Person Name 3",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfFdK6QyNlNfmYzkSt3e2z4MpClCtVehr3g&usqp=CAU",
        proffession: "House wife 3",
        productImg: "https://c8.alamy.com/comp/E8HNP4/blue-gift-packing-tied-by-ribbon-isolated-on-white-with-path-E8HNP4.jpg",
        proName: "Rakhi inspired",
    }
]

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === review.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? review.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative bg-gray-100">
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 text-white focus:outline-none"
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 text-white focus:outline-none"
                >
                    &gt;
                </button>
            </div>
            {/* */}
            <div className='flex lg:flex-row flex-col lg:px-0 px-3'>
                <div className='lg:w-8/12 flex-col items-center p-10'>

                    <div className='flex flex-col border-b-2 border-black w-fit lg:p-16'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-32 h-32'>

                            <path fill="none" stroke="black" strokeWidth={1} d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        <p className='font-semibold lg:text-2xl'>"{review[currentIndex].comment}"</p>
                    </div>
                    <div className='flex gap-8 p-3'>
                    <img
                        src={review[currentIndex].userImg}
                        alt="userImg" className='border-2 rounded-full w-24 h-24' />
                        <div className='flex flex-col  justify-center'>
                            <p className='font-semibold text-lg'>{review[currentIndex].userName}</p>
                            <p className='font-normal text-md'>{review[currentIndex].proffession}</p>
                        </div>
                    </div>

                </div>
                <div className='lg:w-5/12 flex-col items-center'>
                    <div className='flex justify-center '>
                        <img
                            src={review[currentIndex].productImg}
                            alt="productImg"
                            className="w-[70%] h-[70%] lg:pt-20 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review