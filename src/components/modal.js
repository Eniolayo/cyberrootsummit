import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";

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
    <div className="fixed inset-0 bg-black py-20 px-10 bg-opacity-70 text-white z-50">
      <div className="flex justify-between items-center">
        <button
          className="border-2 border-black bg-white rounded-full p-2"
          onClick={handlePrev}
        >
          <Icon icon="icon-park:left" className="text-2xl" />
        </button>
        <button
          className="text-center bg-black border-2 border-white rounded-full p-3 block mx-auto font-black"
          onClick={closeModal}
        >
          <Icon icon="iconoir:cancel" className="text-3xl" />
        </button>
        <button
          className="border-2 border-black bg-white rounded-full p-2"
          onClick={handleNext}
        >
          <Icon icon="icon-park:right" className="text-2xl" />
        </button>
      </div>
      <div className="modal-container pt-6">
        <div className="w-[90%] mx-auto relative max-w-[1000px] h-[70vh]">
          <Image
            src={"http://" + images[currentIndex].fields.file.url.slice(2)}
            alt={`Image ${currentIndex + 1}`}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
