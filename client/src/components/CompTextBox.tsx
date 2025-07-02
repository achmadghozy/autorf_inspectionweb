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
      className={`relative flex flex-col gap-3 rounded-2xl border border-blue-100 shadow-lg p-8 ${color} min-h-[180px] items-center w-full max-w-md mx-auto`}
    >
      {/* Icon/Image Overlay */}
      {(image || Icon) && (
        <div className="absolute top-0 right-0 z-20 flex items-center justify-center w-14 h-14 bg-white/70 rounded-full shadow-md -mt-4 -mr-4">
          {image && (
            <img
              src={image}
              alt="textbox-icon"
              className="w-8 h-8 object-contain"
            />
          )}
          {Icon && !image && <Icon className="w-8 h-8 text-teal-500" />}
        </div>
      )}
      {/* Text Content */}
      <div className="flex flex-col gap-1 w-full justify-center items-center mt-4">
        <span className="text-blue-900 text-xl md:text-2xl font-extrabold tracking-tight z-10 text-center">
          {text1}
        </span>
        {text2 && (
          <span className="text-blue-700 text-base md:text-lg font-light z-10 text-center opacity-80">
            {text2}
          </span>
        )}
        {text3 && (
          <span className="text-blue-600 text-base md:text-lg font-light z-10 text-center opacity-80">
            {text3}
          </span>
        )}
      </div>
    </div>
  );
};

export default CompTextBox;
