import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sidebar_Links from "../../Globel_Arrays/SideBar";
const itemData = [
  Sidebar_Links.Files,
  Sidebar_Links.Contact,
  Sidebar_Links.Invoicing,
  Sidebar_Links.Accounting,
  Sidebar_Links.Online_Payment,
  Sidebar_Links.Ledgers,
  Sidebar_Links.ESign,
  Sidebar_Links.Fintrac,
  Sidebar_Links.Reports,
  Sidebar_Links.Setting,
  Sidebar_Links.About,
];

const List = ({ index, array }) => {
  const [drop, setDrop] = useState(true);
  const dorpDwon = () => {
    setDrop(!drop);
  };
  return (
    <>
      <li key={`list-${index}`}>
        <button
          type="button"
          onClick={dorpDwon}
          className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {itemData[index].Logo}
          <NavLink
            to={"/dash"}
            className="flex-1 ml-5 text-left whitespace-nowrap"
          >
            {itemData[index].File}
          </NavLink>

          <div className="text-[1.3rem]">
            {drop ? (
              <FaAngleDown />
            ) : (
              <div className="text-[1rem]">
                <FaChevronRight />
              </div>
            )}
          </div>
        </button>
        <div className="duration-700">
          <ul className={`${drop ? "hidden" : ""}`}>
            {array.map((value, i) => (
              <NavLink
                key={`array-item-${index}-${i}`}
                to={value.name}
                className="text-base w-full text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-16 dark:text-gray-200 dark:hover:bg-gray-700 bg-white dark:bg-gray-700"
              >
                {value.Show}
              </NavLink>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
};

const Sidebar = () => {
  return (
    <div>
      <div>
        <aside
          id="sidebar"
          className="fixed top-0 left-0 z-20  flex-col flex-shrink-0  w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
          aria-label="Sidebar"
        >
          <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <ul className="pb-2 space-y-2">
                  {itemData.map((value, index) => (
                    <List
                      key={`itemData-${index}`}
                      index={index}
                      array={value.Arrays}
                    />
                  ))}
                </ul>
                <div className="pt-2 space-y-2"></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
