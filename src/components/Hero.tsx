import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { useEffect, useState } from "react";
  import HeroImg1 from '../../public/HeroImg1.jpg'; // Import from the public folder
  import HeroImg2 from '../../public/HeroImg2.jpg'; // Import from the public folder
//   import HeroImg2 from '../assets/HeroImg2.jpg'; // Import from the public folder
  
  export function Hero() {
    const slides = [
      {
        imageUrl: HeroImg1, // Reference from the public folder root
        altText: 'Audi e-tron GT',
        title: 'Find Your Perfect Vehicle Online',
        subtitle: "The World's Largest Used Car Dealership",
      },
      {
        imageUrl: HeroImg2, // Directly use the imported image path
        altText: 'Audi RS e-tron GT',
        title: 'Discover Premium Electric Vehicles',
        subtitle: 'Explore Our Wide Selection',
      },
      {
        imageUrl: '/HeroImg1.jpg', // Reference from the public folder root
        altText: 'Audi Q8 e-tron',
        title: 'Experience Luxury and Innovation',
        subtitle: 'Your Dream Car Awaits',
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 2000); // Change slide every 2 seconds
  
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [slides.length]);
  
    return (
      <div className="relative w-full overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent className="-ml-4" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className={`pl-4 w-full flex justify-center transition-transform duration-500`}
              >
                <div className="relative w-full aspect-[16/9] md:aspect-[16/6] lg:aspect-[16/5]">
                  <img
                    src={slide.imageUrl}
                    alt={slide.altText}
                    className="object-cover w-full h-full rounded-md shadow-lg"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-30 rounded-md">
                    <h2 className="text-xl md:text-3xl font-bold">{slide.title}</h2>
                    <p className="text-sm md:text-lg mt-2">{slide.subtitle}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-2 md:left-4"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          />
          <CarouselNext
            className="right-2 md:right-4"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
          />
        </Carousel>
      </div>
    );
  }