'use client'
import React, { useState } from "react";

import img1 from '../assets/images/gallery/1.jpg';
import img2 from '../assets/images/gallery/2.jpg';
import img3 from '../assets/images/gallery/3.jpg';
import img4 from '../assets/images/gallery/4.jpg';
import img5 from '../assets/images/gallery/5.jpg';
import img6 from '../assets/images/gallery/6.jpg';
import img7 from '../assets/images/gallery/7.jpg';
const Gallery = () => {
    const images = [img1, img2,img3,img4,img5,img6,img7]

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    console.log(isModalOpen)
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeImage = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      {/* Gallery */}
      <div className="gallery row">
        {images.map((src, index) => (
          <div
            key={index}
            className="gallery-item col-12 col-md-6 col-lg-4 mb-20"
            onClick={() => openModal(index)}
          >
            <img loading="lazy" src={src.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="image-modal" >
          <span className="close-modal" onClick={closeModal}>
            &times;
          </span>
          <img
            loading="lazy"
            className="modal-content"
            src={images[currentIndex].src}
            alt={`Image ${currentIndex + 1}`}
            onClick={(e) => e.stopPropagation()} // Prevent close on image click
          />
          <button className="prev" onClick={() => changeImage(-1)}>
            &#10094;
          </button>
          <button className="next" onClick={() => changeImage(1)}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
