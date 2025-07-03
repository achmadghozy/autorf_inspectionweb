import Strings from "../string/String";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import illus1 from "/illus1.svg";
import illus2 from "/illus2.svg";
import illus3 from "/illus3.svg";
import CompTextBox from "../components/CompTextBox";
import {
  FaWhatsappSquare,
  FaCalendarCheck,
  FaCarAlt,
  FaFileAlt,
  FaPeopleArrows,
} from "react-icons/fa";
import CompTextPoint from "../components/CompTextPoint";
import CompCarThumbnail from "../components/CompCarThumbnail";
import brio from "/pngwing_brio.png";
import rush from "/pngwing_rush.png";
import alphard from "/pngwing_alphard.png";

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

  return (
    <section
      id="Services"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-teal-100 py-20 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-800 bg-white opacity-80 rounded-lg p-4">
        {Strings.SECTION_1_HEADING}
      </h3>

      <div className="w-full max-w-3xl mx-auto mt-8 p-6 rounded-2xl border border-blue-200 bg-white/60 backdrop-blur-sm shadow flex flex-wrap justify-center gap-4">
        {points.map((point, idx) => (
          <div key={idx} className="flex-1 min-w-[180px] max-w-[220px]">
            <CompTextPoint text={point} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Advertisment() {
  return (
    <section
      id="Advertisment"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-blue-50 py-20 px-4 border-b border-blue-100 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-700 bg-white opacity-80 rounded-lg p-4">
        {Strings.SECTION_3_HEADING}
      </h3>
      <p className="text-base md:text-lg text-blue-900 max-w-2xl whitespace-pre-line bg-white opacity-80 rounded-lg p-4">
        {Strings.SECTION_3_DESC}
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
      <div className="flex flex-row gap-4">
        <CompCarThumbnail
          image={brio}
          text1={"Small Car"}
          text2={"Brio"}
          text3={"Calya"}
          text4={"Mazda2"}
          text5={"dll"}
          harga={"Rp. 350.000"}
        />
        <CompCarThumbnail
          image={rush}
          text1={"Medium Car"}
          text2={"Rush"}
          text3={"Avanza"}
          text4={"Innova"}
          text5={"dll"}
          harga={"Rp. 400.000"}
        />
        <CompCarThumbnail
          image={alphard}
          text1={"Luxury Car"}
          text2={"Alphard"}
          text3={"Vellfire"}
          text4={"Fortuner"}
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
  return (
    <section
      id="OrderProcess"
      className="min-h-[40vh] flex flex-col justify-center items-center bg-blue-100 py-20 px-4 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-teal-700">
        {Strings.SECTION_ORDER_PROCESS_HEADING}
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4 mt-4">
        <CompTextBox text1={Strings.ORDER_PROCESS_1} Icon={FaWhatsappSquare} />
        <CompTextBox text1={Strings.ORDER_PROCESS_2} Icon={FaCalendarCheck} />
        <CompTextBox
          text1={Strings.ORDER_PROCESS_3}
          text2={Strings.ORDER_PROCESS_3_SUB}
          Icon={FaCarAlt}
        />
        <CompTextBox
          text1={Strings.ORDER_PROCESS_4}
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
      {Advertisment()}
      {Testimonials()}
      {Contact()}
    </div>
  );
};

export default SecProfile;
