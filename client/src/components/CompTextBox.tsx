import React from "react";

interface CompTextBoxProps {
  text1: string;
  text2?: string | null;
  text3?: string | null;
  image?: string | null;
  color?: string | "bg-teal-200";
  Icon?: React.ComponentType<{ className?: string }> | null;
}
const CompTextBox: React.FC<CompTextBoxProps> = ({
  text1,
  text2,
  text3,
  image,
  color = "bg-gradient-to-br from-teal-50 via-blue-50 to-blue-100",
  Icon,
}) => {
  return (
    <div
      className={`relative flex flex-col gap-3 rounded-2xl border border-blue-100 shadow-lg pt-3 pl-3 ${color} min-h-[180px] items-center w-[150px] md:w-[220px] mx-1 md:mx-auto`}
    >
      {/* Icon/Image Overlay */}
      {(image || Icon) && (
        <div className="absolute top-0 right-0 z-20 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-white/70 rounded-full shadow-md -mt-4 -mr-4">
          {image && (
            <img
              src={image}
              alt="textbox-icon"
              className="scale-50 md:scale-100 object-contain"
            />
          )}
          {Icon && !image && <Icon className="w-8 h-8 text-teal-500" />}
        </div>
      )}
      {/* Text Content */}
      <div className="flex flex-col gap-1 w-full justify-start items-start mt-1 mb-2 md:mt-4 content-start">
        <span className="text-blue-900 text-base md:text-2xl font-extrabold tracking-tight md:z-10 text-start justify-start">
          {text1}
        </span>
        {/* Only show text2 and text3 on md and up */}
        <div className="flex flex-col gap-1 w-full text-start justify-start">
          {text2 && (
            <span className="text-blue-700 text-base md:text-md font-light z-10 text-start justify-start tracking-tight md:tracking-normal opacity-80 w-full">
              {text2}
            </span>
          )}
          {text3 && (
            <span className="text-blue-600 text-base md:text-md font-light z-10 text-start tracking-tight md:tracking-normal justify-start opacity-80 w-full">
              {text3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompTextBox;
