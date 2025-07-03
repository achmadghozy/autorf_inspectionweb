import React from "react";

interface CompCarThumbnailProps {
  image: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  harga: string;
}

const CompCarThumbnail: React.FC<CompCarThumbnailProps> = ({
  image,
  text1,
  text2,
  text3,
  text4,
  text5,
  harga,
}) => {
  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-teal-200 via-blue-300 to-blue-500 border rounded-2xl shadow-md p-6 flex flex-col gap-4">
      {/* Title */}
      <span className="text-blue-900 text-xl md:text-3xl font-extrabold leading-tight mb-2 text-center">
        {text1}
      </span>
      {/* Content: 2 columns */}
      <div className="flex flex-row gap-2 items-start">
        {/* Image */}
        <div className="flex-shrink-0 max-w-32">
          <img
            src={image}
            alt="Car Thumbnail"
            className="w-full h-full object-cover rounded-xl bg-transparent"
          />
        </div>
        {/* List and Price */}
        <div className="flex flex-col gap-2 w-full">
          <ul className="bg-gradient-to-br  from-teal-700 via-blue-500 to-blue-300 rounded-lg px-4 py-2 flex flex-col gap-1 shadow-sm mb-2">
            <li className="text-white text-base font-medium border-b border-blue-50 last:border-b-0 py-1">
              {text2}
            </li>
            <li className="text-white text-base font-medium border-b border-blue-50 last:border-b-0 py-1">
              {text3}
            </li>
            <li className="text-white text-base font-medium border-b border-blue-50 last:border-b-0 py-1">
              {text4}
            </li>
            <li className="text-white text-sm font-medium py-1">{text5}</li>
          </ul>
        </div>
      </div>
      <span className="inline-block px-4 py-1 rounded-full bg-transparent text-white text-lg font-bold shadow border border-blue-200 backdrop-blur-sm w-fit text-center">
        {harga}
      </span>
    </div>
  );
};

export default CompCarThumbnail;
