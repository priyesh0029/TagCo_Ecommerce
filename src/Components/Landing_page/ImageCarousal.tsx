import  { useEffect, useState } from "react";

const images = [
    "https://imgs.search.brave.com/JJVYkZ7LxGxhnJEJCHTwXEg_LsWUzJHRki5GgJv4Gpc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNU93WkFt/MTV2ZWZ5M3R0aUdr/eU1nWS8wNTg3NDY0/NmE1N2ZhNmI0ODRh/Nzk3Njk2ZGUzOWU5/My9CZWF1dGlmdWxs/eS1EaXZlcnNlLmpw/Zw",
    "https://imgs.search.brave.com/MZcVw_uqMRXrrCdbi3wOUlSNxfZBENpSMzqYwLyE28c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw",
    "https://imgs.search.brave.com/8zmS_umOIzk7YjDehvdMzrm3JZ-Sgso-CqlhUib3DE4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w" 
]
  

const ImageCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
        clearInterval(timer);
    };
}, []);

 
  const handleImage = (index : number)=>{
    setCurrentIndex(()=> index)
  }

  return (
    <div className="relative">
      <div className="absolute bottom-4 w-full flex justify-center gap-2 items-center">
        {images.map((img,index)=>(
            <button className="rounded-full p-2 bg-transparent border-4 border-white" key={img} onClick={()=>handleImage(index)}></button>
        ))}
      </div>
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-screen h-[40em] object-cover"

      />
    </div>
  );
};

export default ImageCarousal;
