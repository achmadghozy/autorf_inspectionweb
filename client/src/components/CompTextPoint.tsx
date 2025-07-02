import React from "react";

interface CompTextPointProps {
  text?: string | null;
}

const CompTextPoint: React.FC<CompTextPointProps> = ({ text }) => {
  return (
    <div className="group flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200 cursor-pointer shadow-sm">
      <span className="inline-block w-12 h-12 rounded-full bg-teal-400 group-hover:scale-125 group-hover:bg-teal-500 transition-transform duration-200"></span>
      <span className="text-blue-900 text-base font-medium group-hover:text-teal-700 transition-colors duration-200">
        {text}
      </span>
    </div>
  );
};

export default CompTextPoint;
