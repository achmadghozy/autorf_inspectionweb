import Strings from "../string/String";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import CompTextBox from "../components/CompTextBox";
import {
  FaWhatsappSquare,
  FaCalendarCheck,
  FaCarAlt,
  FaFileAlt,
  FaPeopleArrows,
  FaBolt,
  FaCogs,
  FaStream,
  FaWrench,
  FaCarSide,
  FaStamp,
} from "react-icons/fa";
import CompTextPoint from "../components/CompTextPoint";
import CompCarThumbnail from "../components/CompCarThumbnail";
import brio from "/pngwing_brio.png";
import rush from "/pngwing_rush.png";
import alphard from "/pngwing_alphard.png";
import React, { useState } from "react";

interface ProfileIF {}

function Introduction() {
  return (
    <section
      id="Intro"
      className="min-h-[80vh] flex flex-col justify-center items-center from-white to-blue-700 py-20 px-4 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-700 drop-shadow">
        {Strings.ABOUT_HEADING}
      </h2>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-600 bg-white opacity-80 rounded-lg p-4">
        {Strings.ABOUT_HEADING_SUB}
      </h2>
      <p className="text-lg md:text-xl text-blue-800 max-w-2xl">
        {Strings.ABOUT_DESC}
      </p>
      <p className="text-lg md:text-xl text-blue-700 max-w-2xl">
        {Strings.ABOUT_DESC_SUB}
      </p>
    </section>
  );
}

function Services() {
  // List of points
  const points = [
    Strings.SECTION_1_POINT_1,
    Strings.SECTION_1_POINT_2,
    Strings.SECTION_1_POINT_3,
    Strings.SECTION_1_POINT_4,
    Strings.SECTION_1_POINT_5,
    Strings.SECTION_1_POINT_6,
    Strings.SECTION_1_POINT_7,
  ];
  // List of icons for each point
  const icons = [
    FaCarAlt, // Mesin
    FaCogs, // Transimisi
    FaStream, // Rangka/Chasis
    FaWrench, // Kaki-kaki
    FaCarSide, // Body
    FaBolt, // Kelistrikan dan Fitur
    FaStamp, // Legalitas
  ];

  return (
    <section
      id="Services"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-teal-100 py-20 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-800 bg-white opacity-80 rounded-lg p-4">
        {Strings.SECTION_1_HEADING}
      </h3>

      <div className="w-full max-w-3xl mx-auto mt-8 p-6 rounded-2xl border border-blue-200 bg-white/60 backdrop-blur-sm shadow flex flex-wrap justify-center gap-4">
        {points.map((point, idx) => {
          const Icon = icons[idx] || FaCarAlt;
          return (
            <div key={idx} className="flex-1 min-w-[180px] max-w-[220px]">
              <CompTextPoint text={point} icon={<Icon />} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BookForms() {
  const [username, setUsername] = useState("");
  const [cars, setCars] = useState([{ carModel: "", year: "", location: "" }]);
  const [inspectionDate, setInspectionDate] = useState("");
  const [inspectionTime, setInspectionTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleCarChange = (idx: number, field: string, value: string) => {
    setCars((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [field]: value };
      return updated;
    });
  };

  const handleAddCar = () => {
    setCars((prev) => [...prev, { carModel: "", year: "", location: "" }]);
  };

  const handleRemoveCar = (idx: number) => {
    setCars((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    let carsMsg = cars
      .map(
        (car, i) =>
          `Mobil #${i + 1}: ${car.carModel}\nTahun: ${car.year}\nLokasi: ${
            car.location
          }`
      )
      .join("\n\n");
    const message =
      `Halo, saya ingin booking inspeksi mobil.\n` +
      `Nama: ${username}\n` +
      `${carsMsg}\n` +
      `Tanggal: ${inspectionDate}\n` +
      `Waktu: ${inspectionTime}\n` +
      `Catatan: ${notes}`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section
      id="Advertisment"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-blue-50 py-20 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-700 bg-white opacity-80 rounded-lg p-4">
        {Strings.SECTION_5_HEADING}
      </h3>
      <form
        className="w-full max-w-[600px] mx-auto mt-8 p-5 rounded-3xl border border-blue-200 bg-white/80 backdrop-blur-md shadow-xl flex flex-col items-stretch gap-6"
        onSubmit={handleBookNow}
      >
        {/* Forms */}
        <span className="text-lg font-semibold text-blue-900 text-left mb-2">
          {Strings.SECTION_5_FORMS_HEADER}
        </span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-800 text-left"
            >
              Nama Lengkap Pemesan:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Prabowo Subianto"
              className="block w-[200px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-800 text-left mb-1">
              Detail Inspeksi:
            </label>
            {/* Header row for car inputs */}
            <div className="hidden md:flex flex-row gap-3 items-center mb-1 pl-1">
              <span className="text-xs font-semibold text-gray-600 w-[150px] text-left">
                Nama Mobil
              </span>
              <span className="text-xs font-semibold text-gray-600 w-[80px] text-left">
                Tahun Mobil
              </span>
              <span className="text-xs font-semibold text-gray-600 w-[200px] text-left">
                Alamat Mobil
              </span>
              <span className="w-8"></span> {/* Spacer for remove button */}
            </div>
            {cars.map((car, idx) => (
              <div className="flex flex-row text-center content-center justify-center items-center bg-teal-50 border border-spacing-1 border-teal-100 rounded-md">
                <div
                  key={idx}
                  className="flex flex-row flex-wrap md:flex-nowrap gap-1 items-center -p-1 rounded-md"
                >
                  <input
                    id={`carmodel-${idx}`}
                    name={`carmodel-${idx}`}
                    type="text"
                    placeholder="Toyota Avanza"
                    className="block w-[150px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
                    value={car.carModel}
                    required
                    onChange={(e) =>
                      handleCarChange(idx, "carModel", e.target.value)
                    }
                  />
                  <input
                    id={`year-${idx}`}
                    name={`year-${idx}`}
                    type="text"
                    placeholder="2022"
                    className="block w-[80px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
                    value={car.year}
                    required
                    onChange={(e) =>
                      handleCarChange(idx, "year", e.target.value)
                    }
                  />
                  <input
                    id={`location-${idx}`}
                    name={`location-${idx}`}
                    type="text"
                    placeholder="Cawang, Jakarta Timur"
                    className="block w-[200px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
                    value={car.location}
                    required
                    onChange={(e) =>
                      handleCarChange(idx, "location", e.target.value)
                    }
                  />
                </div>
                {cars.length > 1 && (
                  <button
                    type="button"
                    className="flex ml-1 h-[90px] md:h-full items-center text-center align-middle justify-center  text-red-500 hover:text-red-700 font-bold text-base bg-red-200"
                    onClick={() => handleRemoveCar(idx)}
                    aria-label="Remove car"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="mt-2 w-fit bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1 px-4 rounded-lg border border-blue-300 shadow-sm transition"
              onClick={handleAddCar}
            >
              + Tambah Mobil
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-800 text-left">
              Tanggal & Waktu Inspeksi
            </label>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                id="inspection-date"
                name="inspection-date"
                type="date"
                className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
                placeholder="Pilih tanggal"
                value={inspectionDate}
                required
                onChange={(e) => setInspectionDate(e.target.value)}
              />
              <input
                id="inspection-time"
                name="inspection-time"
                type="time"
                className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
                placeholder="Pilih waktu"
                value={inspectionTime}
                required
                onChange={(e) => setInspectionTime(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="notes"
              className="text-sm font-semibold text-gray-800 text-left"
            >
              Catatan Khusus:
            </label>
            <input
              id="notes"
              name="notes"
              type="text"
              placeholder="Minus, Kondisi, dll"
              className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg tracking-wide"
        >
          Booking Sekarang
        </button>
      </form>
      <p className="text-base md:text-lg font-light text-blue-900 max-w-2xl whitespace-pre-line bg-white opacity-80 rounded-lg p-4 mt-4">
        {Strings.SECTION_5_DESC}
      </p>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="Pricing"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-white/30 py-20 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-900 bg-white opacity-80 rounded-lg p-4">
        {Strings.SECTION_3_HEADING}
      </h3>
      <div className="flex flex-row justify-evenly mb-4 mt-4 gap-2">
        <CompCarThumbnail
          image={brio}
          text1={Strings.SMALL_CAR}
          text2={Strings.SMALL_CAR_1}
          text3={Strings.SMALL_CAR_2}
          text4={Strings.SMALL_CAR_3}
          text5={"dll"}
          harga={"Rp. 350.000"}
        />
        <CompCarThumbnail
          image={rush}
          text1={Strings.MEDIUM_CAR}
          text2={Strings.MEDIUM_CAR_1}
          text3={Strings.MEDIUM_CAR_2}
          text4={Strings.MEDIUM_CAR_3}
          text5={"dll"}
          harga={"Rp. 400.000"}
        />
        <CompCarThumbnail
          image={alphard}
          text1={Strings.PREMIUM_CAR}
          text2={Strings.PREMIUM_CAR_1}
          text3={Strings.PREMIUM_CAR_2}
          text4={Strings.PREMIUM_CAR_3}
          text5={"dll"}
          harga={"Rp. 500.000"}
        />
      </div>
      <div className="flex justify-center pt-5">
        <div className="relative w-full max-w-2xl bg-gradient-to-br from-blue-700 via-teal-400 to-blue-300 rounded-2xl shadow-lg p-1">
          {/* Accent bar for promotion */}

          <p className="relative text-base md:text-lg font-bold text-white whitespace-pre-line bg-white/20 backdrop-blur-md rounded-2xl p-6 pl-8 shadow-inner">
            {Strings.SECTION_3_DESC}
          </p>
          {/* Promotion badge */}
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-blue-900 font-semibold px-3 py-1 rounded-full shadow-md text-xs md:text-sm animate-ping">
            PROMO
          </span>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  let featurableWidgetId = "0e31b189-2b21-4b21-90c2-75f0e27da0d3";
  return (
    <section
      id="Testimonials"
      className="min-h-[40vh] flex flex-col justify-center items-center bg-blue-50 py-20 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-800">
        {Strings.SECTION_4_HEADING}
      </h3>
      <p className="text-base md:text-lg text-blue-900 max-w-2xl whitespace-pre-line">
        {Strings.SECTION_4_DESC}
      </p>
      <div className="flex justify-center items-center w-full max-w-2xl mx-auto overflow-hidden rounded-lg border bg-white shadow">
        <ReactGoogleReviews
          layout="carousel"
          featurableId={featurableWidgetId}
          maxItems={1}
        />
      </div>
    </section>
  );
}

function OrderProcess() {
  /*   interface ProcessProp {
    text1: string;
    text2?: string | null;
    text3?: string | null;
    icon?: React.ComponentType<{ className?: string }> | null;
    image?: string | null;
  }

  const ContactUS: ProcessProp[] = {
    text1: Strings.ORDER_PROCESS_1,
    icon: FaWhatsappSquare,
  };
  const BookanSched = {
    text1: Strings.ORDER_PROCESS_2,
    icon: FaCalendarCheck,
  };
  const InspectnReport = {
    text1: Strings.ORDER_PROCESS_3,
    text2: Strings.ORDER_PROCESS_3_SUB,
    text3: Strings.ORDER_PROCESS_4_SUB1,
    icon: FaFileAlt,
  };
  const Consultation = {
    text1: Strings.ORDER_PROCESS_5,
    text2: Strings.ORDER_PROCESS_5_SUB,
    icon: FaPeopleArrows,
  };

  const lsOrderProce: ProcessProp[] = [];
 */
  return (
    <section
      id="OrderProcess"
      className="min-h-[40vh] flex flex-col justify-center items-center bg-blue-100 py-20 px-4 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-700">
        {Strings.SECTION_ORDER_PROCESS_HEADING}
      </h3>
      <div className="flex flex-wrap justify-evenly gap-2 md:gap-4 mb-4 mt-4">
        <CompTextBox text1={Strings.ORDER_PROCESS_1} Icon={FaWhatsappSquare} />
        <CompTextBox text1={Strings.ORDER_PROCESS_2} Icon={FaCalendarCheck} />
        <CompTextBox
          text1={Strings.ORDER_PROCESS_3}
          text2={Strings.ORDER_PROCESS_4_SUB1}
          text3={Strings.ORDER_PROCESS_4_SUB2}
          Icon={FaFileAlt}
        />
        <CompTextBox
          text1={Strings.ORDER_PROCESS_5}
          text2={Strings.ORDER_PROCESS_5_SUB}
          Icon={FaPeopleArrows}
        />
      </div>
      <p className="text-base md:text-lg text-blue-900 max-w-2xl mb-6 whitespace-pre-line">
        {Strings.SECTION_ORDER_PROCESS_DESC}
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="Contact"
      className="min-h-[40vh] flex flex-col justify-center items-center bg-white py-20 px-4 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-700">
        {Strings.SECTION_5_HEADING}
      </h3>
      <p className="text-base md:text-lg text-blue-900 max-w-2xl mb-6 whitespace-pre-line">
        {Strings.SECTION_5_DESC}
      </p>
      <a
        href="https://wa.me/6282219929908"
        className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-800 transition"
      >
        Pesan Sekarang
      </a>
    </section>
  );
}

const SecProfile: React.FC<ProfileIF> = ({}) => {
  return (
    <div className="w-full">
      {Introduction()}
      {Services()}
      {OrderProcess()}
      {Pricing()}
      {BookForms()}
      {Testimonials()}
      {Contact()}
    </div>
  );
};

export default SecProfile;
