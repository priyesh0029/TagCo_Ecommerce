import { useEffect, useState } from 'react'
import { shopTimer } from '../../Types/ShopTimerType';

const futureDate = "2024-03-01T00:00:00" 


const ShoppingTimer = () => {
    const calculateTimeLeft = () => {
      const difference = +new Date(futureDate) - +new Date();
      let timeLeft: shopTimer = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
      };
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    const addLeadingZero = (value : number) => {
      return value < 10 ? `0${value}` : value;
    };
  
    return (
      <div className='flex gap-3'>
        {timeLeft.days > 0 && (
          <div className="flex flex-col items-center">
            <p className='font-[400] text-4xl lg:text-6xl pr-7'>{timeLeft.days}  </p>
            <p className='font-light text-sm'>Days</p>
          </div>
        )}
        <div className="flex flex-col items-center">
            <p className='font-[400] text-4xl lg:text-6xl'>{addLeadingZero(timeLeft.hours)}</p>
            <p className='font-light text-sm'>Hours</p>
          </div>
          <p className='font-[400] text-4xl lg:text-6xl' >&nbsp;:&nbsp;</p>
          <div className="flex flex-col items-center">
            <p className='font-[400] text-4xl lg:text-6xl'>{addLeadingZero(timeLeft.minutes)}</p>
            <p className='font-light text-sm'>minutes</p>
          </div>
          <p className='font-[400] text-4xl lg:text-6xl'>&nbsp;:&nbsp;</p>

          <div className="flex flex-col items-center">
            <p className='font-[400] text-4xl lg:text-6xl'>{addLeadingZero(timeLeft.seconds)} </p>
            <p className='font-light text-sm'>seconds</p>
          </div>

      </div>
    );
}

export default ShoppingTimer