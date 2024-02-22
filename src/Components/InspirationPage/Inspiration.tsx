import React from 'react'
import CategorySlide from './CategorySlide'

const categoryDetails = [
    {
        img : "https://jjsflowershop.com/cdn/shop/products/jjs-rosetwodozen-24-web_2599b05c-19fb-4069-a49c-8971f19d0d45.jpg?v=1665512618" ,
        categoryName :" Anniversary Gifts",
    },
    {
        img : "https://jjsflowershop.com/cdn/shop/products/jjs-rosetwodozen-24-web_2599b05c-19fb-4069-a49c-8971f19d0d45.jpg?v=1665512618" ,
        categoryName :" Anniversary Gifts",
    },
    {
        img : "https://jjsflowershop.com/cdn/shop/products/jjs-rosetwodozen-24-web_2599b05c-19fb-4069-a49c-8971f19d0d45.jpg?v=1665512618" ,
        categoryName :" Anniversary Gifts",
    },
    {
        img : "https://jjsflowershop.com/cdn/shop/products/jjs-rosetwodozen-24-web_2599b05c-19fb-4069-a49c-8971f19d0d45.jpg?v=1665512618" ,
        categoryName :" Anniversary Gifts",
    },
    {
        img : "https://jjsflowershop.com/cdn/shop/products/jjs-rosetwodozen-24-web_2599b05c-19fb-4069-a49c-8971f19d0d45.jpg?v=1665512618" ,
        categoryName :" Anniversary Gifts",
    },
    {
        img : "https://jjsflowershop.com/cdn/shop/products/jjs-rosetwodozen-24-web_2599b05c-19fb-4069-a49c-8971f19d0d45.jpg?v=1665512618" ,
        categoryName :" Anniversary Gifts",
    },
    
]

const Inspiration = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center items-center px-10 py-6'>
                <p className='text-4xl font-[500] '>Need some Inspiration ?</p>
                <p className='text-lg font-normal pt-4 '>check some of our categories and we guarantee you will find the perfect gift</p>
            </div>
            <div className='overflow-x-auto flex no-scrollbar mx-12 '>
                {categoryDetails.map((categoory, index) => (
                    <div className='px-2 py-4'>
                        <CategorySlide key={index} {...categoory} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Inspiration