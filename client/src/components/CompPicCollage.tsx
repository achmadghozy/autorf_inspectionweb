import React from "react";
import image1 from "/4 (1).jpg";
import image2 from "/6 (1).jpg";
import image3 from "/8 (1).jpg";
import image4 from "/9 (1).jpg";
import image5 from "/16 (1).jpg";
import image6 from "/ourcustomer.png";

// Dummy images (replace with real ones as needed
/*
interface CompPicCollage {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}
*/

// Generate random aspect ratios and sizes for collage
const getRandomSize = () => {
  const width = Math.floor(Math.random() * 60) + 120; // 120-180px
  const height = Math.floor(Math.random() * 40) + 100; // 100-140px
  return { width, height };
};

const CompPicCollage: React.FC = ({}) => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <div className="relative w-full max-w-3xl mx-auto py-8">
      {/* Collage grid */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {images.map((src, idx) => {
          const { width, height } = getRandomSize();
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md border border-white bg-gray-100"
              style={{ width, height }}
            >
              <img
                src={src}
                alt={`Customer ${idx + 1}`}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompPicCollage;
