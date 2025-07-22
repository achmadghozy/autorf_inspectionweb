import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CompHeader2 from "./components/CompHeader2";
import CompProgressBar from "./components/CompProgressBar";
import SecGallery from "./section/SecGallery";
import SecInspection from "./section/SecInspection";
import SecProfile from "./section/SecProfile";
import SecContact from "./section/SecContact";
import { useState, useRef } from "react";

enum pageRoute {
  PAGE_HOME = 1,
  PAGE_INSPECTION,
  PAGE_GALLERY,
  PAGE_CONTACT,
}

type PageTbl = {
  label: string;
  route: string;
  jsxobj: JSX.Element;
};

export const pageRouteInfo: Record<pageRoute, PageTbl> = {
  [pageRoute.PAGE_HOME]: {
    label: "Halaman Awal",
    route: "/",
    jsxobj: <SecProfile />,
  },
  [pageRoute.PAGE_INSPECTION]: {
    label: "Detail Inspeksi",
    route: "/InspectionDetail",
    jsxobj: <SecInspection />,
  },
  [pageRoute.PAGE_GALLERY]: {
    label: "Galeri",
    route: "/Galeri",
    jsxobj: <SecGallery />,
  },
  [pageRoute.PAGE_CONTACT]: {
    label: "Hubungi Kami",
    route: "/ContactUs",
    jsxobj: <SecContact />,
  },
};

export const GetMenuPageString = () => {
  return Object.entries(pageRouteInfo).map(([key, value]) => ({
    pageRoute: Number(key) as pageRoute,
    label: value.label,
  }));
};

function App() {
  const [currentPage, setCurrentPage] = useState<pageRoute>(
    pageRoute.PAGE_HOME
  );

  const GetHeader = (menuid: number) => {
    return <CompHeader2 headerClick={setCurrentPage} />;
  };

  return (
    <BrowserRouter>
      <div className="w-screen">
        {GetHeader(1)}
        <div className="flex w-full">
          <div className="h-full w-screen bg-white">
            <Routes>
              {Object.values(pageRouteInfo).map((page) => (
                <Route
                  key={page.route}
                  path={page.route}
                  element={page.jsxobj}
                />
              ))}
              {/* Optionally, redirect "/" to your home page */}
              <Route path="*" element={pageRouteInfo[1].jsxobj} />
            </Routes>
          </div>
          <div className="hidden md:block">
            <CompProgressBar />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
