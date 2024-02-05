import React, { useState } from 'react';
import movie1 from './movie1.jpg';
import movie2 from './movie2.jpg';
import movie3 from './movie3.jpg';
import { Carousel } from 'react-responsive-carousel';
import movie4 from './movie4.jpeg';
import movie5 from './movie5.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import movie6 from './movie6.jpg';
import movie7 from './movie7.jpg';


const Slide = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [movie1, movie4, movie7, movie2, movie3, movie5, movie6];

  const handleDotClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevImageClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImageClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <div>
        <Carousel 
          selectedItem={selectedImageIndex} 
          showArrows={false} 
          showStatus={false} 
          showThumbs={false}
          dynamicHeight={false}
          showIndicators={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                {index === 0 && (
                  <div onClick={handlePrevImageClick}>
                    <img src={images[images.length - 1]} className='h-[100%] w-auto'/>
                  </div>
                )}
                {index > 0 && (
                  <div onClick={handlePrevImageClick}>
                    <img src={images[index - 1]} className='h-[100%] w-auto'/>
                  </div>
                )}
                <img src={image} className='h-[100%] w-auto m-3'/>
                {index < images.length - 1 && (
                  <div onClick={handleNextImageClick}>
                    <img src={images[index + 1]} className='h-[100%] w-auto'/>
                  </div>
                )}
                {index === images.length - 1 && (
                  <div onClick={handleNextImageClick}>
                    <img src={images[0]} className='h-[100%] w-auto'/>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full mx-2 cursor-pointer ${index === selectedImageIndex ? 'bg-black' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slide;
