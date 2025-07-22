import React from "react";

interface CompCarThumbnailProps {
  image: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  harga: string;
  color1?: string | null;
  color2?: string | null;
}

const CompCarThumbnail: React.FC<CompCarThumbnailProps> = ({
  image,
  text1,
  text2,
  text3,
  text4,
  text5,
  harga,
  color1 = "from-teal-200 via-blue-100 to-sky-300",
  color2 = "from-teal-200 via-blue-100 to-sky-300",
}) => {
  return (
    <div
      className={`flex flex-col w-full min-w-[125px] max-w-6xl bg-gradient-to-tr border ${color1} rounded-2xl shadow-md p-2 md:p-6 md:gap-4`}
    >
      {/* Title */}
      <span className="text-blue-900 text-l md:text-3xl font-extrabold leading-tight mb-2 text-center">
        {text1}
      </span>
      {/* Content: 2 columns */}
      <div className="flex flex-row gap-2 items-start">
        {/* Image */}
        <div className="hidden md:block flex-shrink-0 max-w-32">
          <img
            src={image}
            alt="Car Thumbnail"
            className="w-full h-full object-cover rounded-xl bg-transparent"
          />
        </div>
        {/* List and Price */}
        <div className="flex flex-col gap-2 w-full">
          <ul
            className={`bg-gradient-to-br  ${color2} rounded-lg px-4 py-2 flex flex-col gap-1 shadow-sm mb-2`}
          >
            <li className="text-gray-700 text-base font-semibold border-b border-blue-50 last:border-b-0 py-1">
              {text2}
            </li>
            <li className="text-gray-700 text-base font-semibold border-b border-blue-50 last:border-b-0 py-1">
              {text3}
            </li>
            <li className="text-gray-700 text-base font-semibold border-b border-blue-50 last:border-b-0 py-1">
              {text4}
            </li>
            <li className="text-gray-700 text-sm font-semibold py-1">
              {text5}
            </li>
          </ul>
        </div>
      </div>
      <span className="inline-block px-4 py-1 rounded-full bg-transparent text-gray-900  text-l md:text-lg font-bold shadow border border-blue-200 backdrop-blur-sm w-fit text-center">
        {harga}
      </span>
    </div>
  );
};

export default CompCarThumbnail;
