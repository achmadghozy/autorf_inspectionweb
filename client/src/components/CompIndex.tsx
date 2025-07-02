import React, { useEffect, useState } from "react";

interface indexIF {}

const CompIndex: React.FC<indexIF> = ({}) => {
  let sections = document.querySelectorAll("section")!;
  let arrSections = Array.from(sections);

  const [activeSec, setActiveSec] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    sections = document.querySelectorAll("section")!;
    arrSections = Array.from(sections);

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        setActiveSec(section.id);
        console.log("active section:", section.id);
      }
    });
  };
  return (
    <div className="fixed mt-[100px] ml-5 flex flex-col h-full">
      <h2 className="text-[15px] text-gray-800 dark:text-white items-center content-center justify-start">
        On this page
      </h2>
      {arrSections.map((nSec) => (
        <h2
          className="mt-3"
          style={{
            fontSize: `${nSec.id === activeSec ? "20px" : "15px"}`,
            color: `${nSec.id === activeSec ? "text-white" : "text-black"}`,
          }}
        >
          {nSec.id}
        </h2>
      ))}
    </div>
  );
};

export default CompIndex;
