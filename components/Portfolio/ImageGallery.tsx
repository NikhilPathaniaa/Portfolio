"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ImageGalleryProps {
  images: string[];
  captions?: string[];
}

const ImageGallery = ({ images, captions = [] }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState("");
  const [loadingError, setLoadingError] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [images]);

  const handleImageError = (imgSrc: string) => {
    console.error(`Failed to load image: ${imgSrc}`);
    setLoadingError((prev) => ({ ...prev, [imgSrc]: true }));
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-48 w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 snap-start"
              onClick={() => {
                setSelectedImage(img);
                setSelectedCaption(captions?.[idx] || "");
              }}
            >
              {loadingError[img] ? (
                <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <span className="text-sm text-gray-500">Image not found</span>
                </div>
              ) : (
                <Image
                  src={img}
                  alt={`Screenshot ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => handleImageError(img)}
                />
              )}
              {captions?.[idx] && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="line-clamp-2 text-sm">{captions[idx]}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {showLeftButton && (
          <button
            className="absolute -left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            onClick={(e) => {
              e.stopPropagation();
              scrollContainerRef.current?.scrollBy({
                left: -300,
                behavior: "smooth",
              });
            }}
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
        )}

        {showRightButton && (
          <button
            className="absolute -right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            onClick={(e) => {
              e.stopPropagation();
              scrollContainerRef.current?.scrollBy({
                left: 300,
                behavior: "smooth",
              });
            }}
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close fullscreen"
          >
            <FaTimes className="h-6 w-6" />
          </button>

          <div className="relative h-full w-full max-w-6xl">
            <div className="flex h-full flex-col">
              <div className="relative flex-1">
                <Image
                  src={selectedImage}
                  alt="Fullscreen view"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {selectedCaption && (
                <div className="mt-4 rounded-lg bg-white/10 p-4 text-center text-white backdrop-blur-sm">
                  <p className="text-sm md:text-base">{selectedCaption}</p>
                </div>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.indexOf(selectedImage);
                const prevIndex =
                  (currentIndex - 1 + images.length) % images.length;
                setSelectedImage(images[prevIndex]);
                setSelectedCaption(captions?.[prevIndex] || "");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/20"
              aria-label="Previous image"
            >
              <FaChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.indexOf(selectedImage);
                const nextIndex = (currentIndex + 1) % images.length;
                setSelectedImage(images[nextIndex]);
                setSelectedCaption(captions?.[nextIndex] || "");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/20"
              aria-label="Next image"
            >
              <FaChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;