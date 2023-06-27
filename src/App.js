import logo from "./logo.svg";
import "./App.css";
import SideBarMenu from "./Menu/SideBarMenu";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [Menu, setMenu] = useState(false);
  return (
    <div className=" flex App">

      <div
        className={`flex bg-purple-900 h-screen p-2 pt-4text-white relative ${
          Menu ? `w-20` : ` w-64`
        } duration-300`}
      >
        <SideBarMenu Ismenu={Menu} />

        <AiOutlineArrowLeft
          size={15}
          className={`bg-white text-black w-6 h-6 rounded-full absolute -right-3 top-9 border border-gray-950 ${
            Menu && "rotate-180"
          }`}
          onClick={() => {
            setMenu(!Menu);
          }}
        />
      </div>
      <div className="p-9">  
      </div>
    </div>
  );
}

export default App;
