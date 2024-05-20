"use client"
import React, { useEffect, useState } from 'react';

const images = [
  'https://source.unsplash.com/random/1920x1080?nature',
  'https://source.unsplash.com/random/1920x1080?water',
  'https://source.unsplash.com/random/1920x1080?sky',
  'https://source.unsplash.com/random/1920x1080?forest',
];

const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    />
  );
};

export default BackgroundSlider;
