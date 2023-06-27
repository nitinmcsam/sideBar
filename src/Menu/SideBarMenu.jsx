import React from "react";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineSearch,AiOutlineUser,AiFillSetting,AiOutlineLogout,AiOutlineFundProjectionScreen} from "react-icons/ai";
import {GoFileMedia} from "react-icons/go" 
import {SiGoogleanalytics,SiPowerpages} from 'react-icons/si'
import {BsInboxes} from 'react-icons/bs'
import {BiHomeAlt2} from 'react-icons/bi'
import {FcAbout} from 'react-icons/fc'


function SideBarMenu({ Ismenu }) {
  return (
    <div className="pl-3">
      <div className={`flex`}>
        <img className="w-10 " src="TailwindLOGO.svg"></img>
        <p
          className={` text-2xl py-3 px-3 text-white ${
            Ismenu && "scale-0"
          }   duration-200`}
        >
          Tailwind
        </p>
      </div>

      <div className={`flex items-center mt-4 ${Ismenu && "w-10"} duration-150 bg-purple-500 py-2 rounded-md`}>
        <AiOutlineSearch size={22} className="w-10 duration-150 text-white text-lg block  cursor-pointer" />
        <input type="text" placeholder="Search ..." className={`text-base bg-transparent w-full text-white focus:outline-none ${Ismenu && " hidden"}`} />
      </div>


      <div className=" py-5">
        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <RxDashboard size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            DashBoard
          </p>
        </ul>

        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <BiHomeAlt2 size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            Home
          </p>
        </ul>

        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <SiPowerpages size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            pages
          </p>
        </ul>
      </div>

{/* stage two */}
      <div className=" py-6">
        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <GoFileMedia size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            Media
          </p>
        </ul>

        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <AiOutlineFundProjectionScreen size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            project
          </p>
        </ul>

        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <SiGoogleanalytics size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            Analytics 
          </p>
        </ul>

        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <BsInboxes size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            Inbox
          </p>
        </ul>
      </div>

      {/* stage three */}

      <div className=" pt-3">
        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <AiOutlineUser size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            profile
          </p>
        </ul>

        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <AiFillSetting size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            setting
          </p>
        </ul>

        <ul className="flex cursor-pointer items-center pt-1 pb-2  text-white hover:text-black">
          <AiOutlineLogout size={22} className="w-8" />
          <p className={`text-lg ${Ismenu && "scale-0"} pl-6 duration-150`}>
            Logout
          </p>
        </ul>

     
      </div>
    </div>
  );
}

export default SideBarMenu;
