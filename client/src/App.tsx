import "./App.css";
import CompHeader2 from "./components/CompHeader2";
import CompProgressBar from "./components/CompProgressBar";
import SecProfile from "./section/SecProfile";
import { useState, useRef } from "react";

function App() {
  enum pageRoute {
    PAGE_HOME = 1,
  }

  const [Menu, SetMenu] = useState(pageRoute.PAGE_HOME);

  const getRoute = (menuid: number) => {
    SetMenu(menuid);
    console.log("Menu id:", Menu);
  };

  const GetPageAvailable = (menuid: number) => {
    let nRes = <></>;
    switch (menuid) {
      case pageRoute.PAGE_HOME:
        nRes = <SecProfile />;
        break;

      default:
        break;
    }
    console.log("page available:", nRes);
    return nRes;
  };

  const GetPageString = (menuid: number) => {
    let cRes = "UNAVAILABLE";
    switch (menuid) {
      case pageRoute.PAGE_HOME:
        cRes = "HOMEPAGE";
        break;

      default:
        break;
    }
    console.log("page available:", cRes);
    return cRes;
  };

  const GetHeader = (menuid: number) => {
    return <CompHeader2 headerClick={getRoute} />;
  };

  return (
    <div className="w-screen">
      {GetHeader(Menu)}
      <div className="flex w-full top-0 right-0">
        <div className="h-full w-screen bg-white">{GetPageAvailable(Menu)}</div>
        <div className="w-[10px]h-full absolute top-0 right-[0px]">
          <CompProgressBar />
        </div>
      </div>
    </div>
  );
}

export default App;
