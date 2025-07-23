import React, { useEffect, useRef, useState } from "react";
import { FaGoogle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Review {
  reviewId?: string | null;
  reviewer: {
    displayName: string;
    profilePhotoUrl: string;
  };
  comment: string;
}

interface CardCarouselProps {
  reviews: Review[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ reviews }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, reviews.length]);

  const getIndex = (idx: number) => (idx + reviews.length) % reviews.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="relative w-[240px] md:w-[500px] h-[300px] mx-auto py-8 flex flex-col items-center">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white text-teal-600 rounded-full shadow p-2 md:p-3 border border-teal-200 transition"
        aria-label="Previous review"
        style={{ marginLeft: "-1.5rem" }}
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white text-teal-600 rounded-full shadow p-2 md:p-3 border border-teal-200 transition"
        aria-label="Next review"
        style={{ marginRight: "-1.5rem" }}
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
      <div className="relative w-full flex items-center justify-center min-h-[260px]">
        {/* Stacked cards: previous, current, next */}
        {[-1, 0, 1].map((offset) => {
          const idx = getIndex(current + offset);
          const review = reviews[idx];
          const isCenter = offset === 0;
          if (!isCenter) {
            // Side cards: just a stack, no details
            return (
              <div
                key={review.reviewId || idx}
                className={` 
                  ${offset === -1 || offset === 1 ? "hidden" : ""}
                  md:flex
                  absolute transition-all duration-300
                  z-0 scale-90 bg-slate-200 opacity-60
                  ${offset === -1 ? "-translate-x-24 md:-translate-x-32" : ""}
                  ${offset === 1 ? "translate-x-24 md:translate-x-32" : ""}
                  pointer-events-none
                `}
                style={{
                  left: "50%",
                  transform: `translateX(-50%) ${
                    offset === -1
                      ? "translateX(-6rem)"
                      : offset === 1
                      ? "translateX(6rem)"
                      : ""
                  }`,
                  width: "90%",
                  height: 220,
                  background: "rgba(200,200,200,0.5)",
                  borderRadius: "1.5rem",
                  boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
                  transition: "all 0.5s cubic-bezier(.4,2,.6,1)",
                }}
              />
            );
          }
          // Center card: show details, photo protruding
          return (
            <div
              key={review.reviewId || idx}
              className="absolute z-30 scale-100 bg-white shadow-xl transition-all duration-300"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                minHeight: 260,
                borderRadius: "1.5rem",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                transition: "all 0.5s cubic-bezier(.4,2,.6,1)",
              }}
            >
              <div className="relative flex flex-col items-center px-6 pt-10 pb-6 h-full">
                {/* Protruding photo */}
                <img
                  src={review.reviewer.profilePhotoUrl}
                  alt={review.reviewer.displayName}
                  className="absolute -top-5 left-6 w-16 h-16 rounded-full border-4 border-white shadow-lg bg-white object-cover"
                  style={{ zIndex: 10 }}
                />
                <div className="mt-2 w-full flex flex-col items-start">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 pl-2 pt-2">
                    {review.reviewer.displayName}
                  </h3>
                  <p className="text-base w-full h-[150px] text-gray-800 pl-2 pr-2 pt-1 overflow-hidden text-ellipsis justify-start align-middle text-start">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCarousel;
