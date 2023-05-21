import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeModal = () => {
    setCurrentIndex(0);
    onClose();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black p-20 bg-opacity-30 text-white z-50">
      <button
        className="text-center bg-black p-5 block mx-auto font-black"
        onClick={closeModal}
      >
        X
      </button>
      <div className="modal-container pt-6">
        <div className="flex justify-between h-[70vh]">
          <button className="modal-prev" onClick={handlePrev}>
            Prev
          </button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="h-[100%]"
          />
          <button className="modal-next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
