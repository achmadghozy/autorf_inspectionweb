import Strings from "../string/String";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import CompTextBox from "../components/CompTextBox";
import {
  FaWhatsappSquare,
  FaWhatsapp,
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
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
  FaGoogle,
} from "react-icons/fa";
import CompTextPoint from "../components/CompTextPoint";
import CompCarThumbnail from "../components/CompCarThumbnail";
import brio from "/pngwing_brio.png";
import rush from "/pngwing_rush.png";
import alphard from "/pngwing_alphard.png";
import React, { useState } from "react";
import LogoComplete from "/logocomplete.png";
import CompPicCollage from "../components/CompPicCollage";
import CompGoogleReviewsWrapper from "../components/CompGoogleReviewsWrapper";

interface ProfileIF {}

function Introduction() {
  // Smooth scroll handler
  const handleBookingScroll = () => {
    const bookingSection = document.getElementById("Booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="Intro"
      className="min-h-[80vh] h-screen flex flex-col justify-center items-center pt-5 pb-5 px-4 text-center bg-gradient-to-br from-blue-100 via-teal-100 to-blue-300"
    >
      <div className="w-full p-0 md:p-8 flex flex-col md:flex-row items-center gap-0 md:gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-0 p-8">
          {/*
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-teal-700 drop-shadow-sm tracking-wide px-4 py-2 border-b-4 border-cyan-200">
            {Strings.ABOUT_HEADING}
          </h2>
          */}
          <h2 className="text-2xl md:text-4xl font-extrabold mb-0 text-teal-600 tracking-wider px-4 pt-2 pb-1 border-b-4 border-teal-0">
            {Strings.ABOUT_HEADING_SUB}
          </h2>
          <p className="text-base md:text-lg text-blue-800 max-w-2xl font-medium mb-1 px-4 pb-2 mt-0 align-top ">
            {Strings.ABOUT_DESC}
          </p>
          <p className="text-xl md:text-xl text-blue-700 max-w-2xl font-semibold px-4 py-2 mt-4">
            {Strings.ABOUT_DESC_SUB}
          </p>
          {/* Booking Button */}
          <button
            onClick={handleBookingScroll}
            className="mt-0 ml-4 flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold text-lg rounded-xl shadow-lg hover:from-teal-600 hover:to-blue-600 transition group"
          >
            <span className="border-r-2 border-white pr-4 text-start justify-start align-middle">
              Booking inspeksi bersama kami
            </span>
            <span className="pl-4 flex items-center">
              <FaArrowRight className="text-2xl group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
        {/* Right: Image Display */}
        <div className="hidden md:flex flex-1 items-center content-center justify-center min-h-[220px] w-full md:w-auto bg-gradient-to-br from-teal-200 via-blue-100 to-white rounded-3xl md:rounded-r-3xl md:rounded-l-none p-8">
          <CompPicCollage />
        </div>
      </div>
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
      className="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-bl from-blue-300 via-teal-100 to-teal-200 py-10 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-4xl font-semibold md:font-bold mb-3 text-teal-800 md:tracking-wide p-4">
        {Strings.SECTION_1_HEADING}
      </h3>

      <div className="w-full max-w-3xl mx-auto mt-3 p-6 rounded-2xl border border-blue-200 bg-white/60 backdrop-blur-sm shadow flex flex-wrap justify-center gap-4">
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
      `Halo tim AutoRF, saya ingin booking inspeksi mobil.\n` +
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
      id="Booking"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-teal-200 via-teal-50 to-blue-50 py-20 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-3 text-teal-700 p-4">
        {Strings.SECTION_5_HEADING}
      </h3>
      <form
        className="w-full max-w-[600px] mx-auto mt-2 p-5 rounded-3xl border border-blue-200 bg-white/80 backdrop-blur-md shadow-xl flex flex-col items-stretch gap-6"
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
              placeholder=""
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
            <div className="hidden md:flex flex-row gap-1 items-center mb-1 pl-1">
              <span className="text-xs font-semibold text-gray-600 w-[150px] text-left">
                Nama Mobil
              </span>
              <span className="text-xs font-semibold text-gray-600 w-[80px] text-left">
                Tahun Mobil
              </span>
              <span className="text-xs font-semibold text-gray-600 w-[200px] mr-1 text-left">
                Alamat Mobil
              </span>
              <span className="w-8"></span> {/* Spacer for remove button */}
            </div>
            {cars.map((car, idx) => (
              <div className="flex flex-row text-center content-center justify-start items-center bg-teal-50 border border-spacing-1 border-teal-100 rounded-md w-full">
                <div
                  key={idx}
                  className="flex flex-row flex-wrap md:flex-nowrap gap-1 items-center -p-1 rounded-md w-full"
                >
                  <input
                    id={`carmodel-${idx}`}
                    name={`carmodel-${idx}`}
                    type="text"
                    placeholder="Toyota Avanza"
                    className="grow-0 w-[150px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
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
                    className="grow-0 w-[80px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
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
                    className="grow min-w-[200px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition"
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
              className="flex flex-grow-0 mt-2 w-fit bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1 px-4 rounded-lg border border-blue-300 shadow-sm transition"
              onClick={handleAddCar}
            >
              + Tambah Mobil
            </button>
          </div>
          <label className="text-sm font-semibold text-gray-800 text-left">
            Tanggal & Waktu Inspeksi
          </label>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                id="inspection-date"
                name="inspection-date"
                type="date"
                className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition
                  [&::-webkit-calendar-picker-indicator]:bg-teal-500
                  [&::-webkit-calendar-picker-indicator]:rounded-full
                  [&::-webkit-calendar-picker-indicator]:p-1
                  [&::-webkit-calendar-picker-indicator]:hover:bg-teal-400"
                placeholder="Pilih tanggal"
                value={inspectionDate}
                required
                onChange={(e) => setInspectionDate(e.target.value)}
              />
              <input
                id="inspection-time"
                name="inspection-time"
                type="time"
                className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition
                  [&::-webkit-calendar-picker-indicator]:bg-teal-500
                  [&::-webkit-calendar-picker-indicator]:rounded-full
                  [&::-webkit-calendar-picker-indicator]:p-1
                  [&::-webkit-calendar-picker-indicator]:hover:bg-teal-400"
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
          className="flex mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg tracking-wide justify-center"
        >
          <span className="text-start justify-start align-middle">
            Booking Sekarang
          </span>
          <span className="pt-0.5 ml-2 justify-center items-center align-middle">
            <FaWhatsapp className="text-2xl group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </form>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="Pricing"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-bl from-blue-100 via-teal-100 to-teal-200 py-5 px-4 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-wide text-blue-900 p-4">
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
          color1={"from-blue-100 via-blue-100 to-sky-200"}
          color2={"from-blue-50 via-sky-100 to-sky-100"}
        />
        <CompCarThumbnail
          image={rush}
          text1={Strings.MEDIUM_CAR}
          text2={Strings.MEDIUM_CAR_1}
          text3={Strings.MEDIUM_CAR_2}
          text4={Strings.MEDIUM_CAR_3}
          text5={"dll"}
          harga={"Rp. 400.000"}
          color1={"from-blue-100 via-blue-200 to-sky-300"}
          color2={"from-blue-200 via-sky-200 to-sky-200"}
        />
        <CompCarThumbnail
          image={alphard}
          text1={Strings.PREMIUM_CAR}
          text2={Strings.PREMIUM_CAR_1}
          text3={Strings.PREMIUM_CAR_2}
          text4={Strings.PREMIUM_CAR_3}
          text5={"dll"}
          harga={"Rp. 500.000"}
          color1={"from-sky-200 via-sky-300 to-teal-300"}
          color2={"from-blue-200 via-sky-300 to-sky-300"}
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
  return (
    <section
      id="Testimonials"
      className="min-h-[40vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-teal-100 to-blue-200 py-20 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-800">
        {Strings.SECTION_4_HEADING}
      </h3>
      <p className="text-base md:text-lg text-blue-900 max-w-2xl whitespace-pre-line">
        {Strings.SECTION_4_DESC}
      </p>
      <div className="relative block md:w-[700px] md:h-[450px] bg-gradient-to-br from-sky-50 via-teal-50 to-blue-50 item-center justify-center rounded-2xl pt-10 mt-5 shadow-lg">
        {/* Google logo at top right */}
        <span className="absolute top-0 right-0 md:top-4 md:right-4 z-10">
          <FaGoogle className="w-12 h-12 text-[#f45142] bg-white rounded-full shadow-lg p-2" />
        </span>
        <CompGoogleReviewsWrapper />
        {/* "Temukan kami di Google" at bottom left */}
        <div className="absolute left-4 bottom-4 flex bg-blue-400 w-auto m-2 p-2 shadow-md rounded-lg items-center">
          <span className="text-base text-blue-50 font-bold text-start justify-start align-middle p-0.5 m-0.5">
            Temukan kami di Google
          </span>
        </div>
      </div>
      {/* Testimonials Google Review */}
      {/* 
      <div className="flex justify-center items-center w-full max-w-2xl mx-auto overflow-hidden rounded-lg border bg-white shadow p-1">
        <ReactGoogleReviews
          layout="custom"
          featurableId={featurableWidgetId}
          renderer={(reviews) => {
            return (
              <div className="flex flex-row w-full bg-gradient-to-tr from-blue-200 via-teal-300 to-teal-400 rounded-lg item-center justify-center content-center">
                {reviews.map(({ reviewId, reviewer, comment }) => (
                  <div className="flex" key={reviewId}>
                    <div>
                      <img className="" src={reviewer.profilePhotoUrl}></img>
                    </div>
                    <h3 className="text-lg font-semibold text-start text-gray-900">
                      {reviewer.displayName}
                    </h3>
                    <p className="text-base w-[300px] bg-white text-gray-800 tracking-normal text-start justify-normal items-start">
                      {comment}
                    </p>
                    {nMap++}
                  </div>
                ))}
                {checkMapLength(nMap)}
              </div>
            );
          }}
        />
      </div>
      */}
      {/* 
      <div className="flex bg-white bg-opacity-90 border border-teal-400">
        <ReactGoogleReviews
          layout="carousel"
          featurableId={featurableWidgetId}
        />
      </div>
      */}
      {/* Testimonials Google Review */}
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
      className="min-h-[40vh] flex flex-col justify-center items-center bg-gradient-to-br from-teal-200 via-teal-100 to-blue-100 py-20 px-4 text-center"
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
      className="min-h-[40vh] flex flex-col justify-center items-center py-20 px-4 text-center bg-gradient-to-br from-blue-100 via-teal-100 to-blue-300"
    >
      {/* Contact Info Card, more transparent for blending */}
      <div className="w-full max-w-lg mx-auto rounded-3xl shadow-xl p-8 flex flex-col items-center gap-6 border border-blue-100 bg-white/60 backdrop-blur-md">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-teal-700">
          Hubungi Kami
        </h3>
        <div className="flex flex-col md:flex-row gap-4 items-start justify-start w-full">
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@autorf.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base text-gray-800 hover:text-teal-600 transition"
          >
            <FaTiktok className="text-2xl" />
            <span>@autorf.id</span>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/autorf.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base text-gray-800 hover:text-teal-600 transition"
          >
            <FaInstagram className="text-2xl" />
            <span>@autorf.id</span>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/autorf.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base text-gray-800 hover:text-teal-600 transition"
          >
            <FaFacebook className="text-2xl" />
            <span>AutoRF Indonesia</span>
          </a>
        </div>
        {/* Location Info */}
        <div className="flex flex-col items-center gap-1 mt-2">
          <span className="text-base text-gray-700 font-semibold">Lokasi:</span>
          <a
            href="https://goo.gl/maps/2QwQn1k8Qw8Qn1k8A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:underline text-base flex items-center gap-2 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-5 w-5 text-teal-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 5.25-7.5 11-7.5 11s-7.5-5.75-7.5-11a7.5 7.5 0 1115 0z"
              />
            </svg>
            Jl. Raya Bogor KM 21, Jakarta Timur
          </a>
        </div>
        <a
          href="/aboutus"
          className="mt-4 text-teal-700 hover:underline text-base font-semibold"
        >
          Tentang Kami
        </a>
      </div>
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
