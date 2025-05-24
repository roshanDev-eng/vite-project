import React from "react";

const Heading_Component = ({ ui, text, Searching, Steps, btn }) => {
  return (
    <div className="p-4 mb-2 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full mb-1">
        <div className="mb-4">
          <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center gap-2">Dashboard</li>
              <li>{ui}</li>
            </ol>
          </nav>
          <div className="w-full border-b border-black border-opacity-10 mb-5 h-1"></div>
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {text}
            </h1>
            {btn && btn} {/* Render btn if passed */}
          </div>
          <div className="my-5">{Searching}</div>
          {Steps && <div>{Steps}</div>} {/* Render Steps if passed */}
        </div>
      </div>
    </div>
  );
};

export default Heading_Component;
