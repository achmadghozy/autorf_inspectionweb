import React from "react";
import Strings from "../string/String";
import eksterior from "/eksterior.jpg";
import interior from "/interior.jpg";
import kaki2 from "/kaki2.jpg";
import laporan from "/laporan.jpg";
import mesin from "/mesin.jpg";
import dokumen from "/dokumen.jpg";

const inspectionPoints = [
  {
    title: Strings.DETAIL_INSPECTION_TITLE_1,
    img: eksterior,
    description: Strings.DETAIL_INSPECTION_DESC_1,
  },
  {
    title: Strings.DETAIL_INSPECTION_TITLE_2,
    img: interior,
    description: Strings.DETAIL_INSPECTION_DESC_2,
  },
  {
    title: Strings.DETAIL_INSPECTION_TITLE_3,
    img: kaki2,
    description: Strings.DETAIL_INSPECTION_DESC_3,
  },
  {
    title: Strings.DETAIL_INSPECTION_TITLE_4,
    img: mesin,
    description: Strings.DETAIL_INSPECTION_DESC_4,
  },
  {
    title: Strings.DETAIL_INSPECTION_TITLE_5,
    img: dokumen,
    description: Strings.DETAIL_INSPECTION_DESC_5,
  },
  {
    title: Strings.DETAIL_INSPECTION_TITLE_6,
    img: laporan,
    description: Strings.DETAIL_INSPECTION_DESC_6,
  },
];

const strings: Record<string, string> = Strings;

function SecInspection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-bl from-blue-300 via-teal-100 to-teal-200 py-10 px-4 border-b border-blue-100 text-center mt-16">
      <h3 className="text-2xl md:text-4xl font-semibold md:font-bold mb-3 text-teal-800 md:tracking-wide p-4">
        Detail Pemeriksaan
      </h3>
      <div className="w-full max-w-4xl mx-auto mt-3 p-2 rounded-2xl border border-blue-200 bg-white/60 backdrop-blur-sm shadow flex flex-col gap-2">
        {inspectionPoints.map((point, idx) => (
          <div
            key={point.title}
            className="flex flex-col md:flex-row items-center rounded-xl shadow-md p-4 m-2 border border-teal-100 text-left gap-4"
          >
            <div className="flex flex-row items-center w-full mb-2">
              <div className="hidden md:flex-none w-24 h-24 md:w-56 md:h-56 bg-blue-100 mb-3 items-center justify-center">
                <img
                  src={point.img}
                  alt={strings[point.title]}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start justify-start align-middle mx=2 px-2">
                <h4 className="text-lg font-bold text-teal-700 mb-2 text-start md:text-left">
                  {point.title}
                </h4>
                <p className="text-sm text-blue-900 w-full md:w-auto md:flex-1">
                  {point.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SecInspection;
