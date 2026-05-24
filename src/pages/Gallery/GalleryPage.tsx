import { useState } from "react";

export default function GalleryPage() {
  const imageModules = import.meta.glob<{ default: string }>(
    "/public/gallery/*.{jpg,jpeg,png,gif,webp}",
    { eager: true },
  );
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(0);

  const images = Object.values(imageModules)
    .map((module) => module.default)
    .sort();

  function showImage(num: number) {
    setShowModal(true);
    setModalImage(num);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="justify-center flex text-white align-center">
      <div className="mt-10 xl:w-2/3">
        <div className="justify-center flex flex-col p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="smtxt text-8xl font-jaro">Gallery</h1>
            <div className="text-xl text-center font-slackey mt-3">
              <span>Some photos from previous workshops!</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                onClick={() => showImage(i)}
                alt={`Gallery Image ${i + 1}`}
                className="w-full h-auto rounded-lg shadow-md hover:cursor-pointer hover:scale-110 transition-all"
              />
            ))}
          </div>
          {showModal && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div
                className="relative max-h-[90vh] max-w-[90vw] rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[modalImage]}
                  alt={`Gallery Image ${modalImage + 1}`}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Close modal"
                >
                  ✕
                </button>
                {modalImage > 0 && (
                  <button
                    onClick={() => setModalImage(modalImage - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    ❮
                  </button>
                )}
                {modalImage < images.length - 1 && (
                  <button
                    onClick={() => setModalImage(modalImage + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center"
                    aria-label="Next image"
                  >
                    ❯
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
