import React from "react";
import Navebar from "./Component/header/Navebar";
import Sidebar from "./Component/Layout/Sidebar";
import PagesRoutes from "./Routes/Routes/routes";

const App = () => {
  return (
    <div>
      <Navebar />
      <Sidebar />
      <div className="w-screen pt-16  px-5 pl-[260px]  ">
        <PagesRoutes />
      </div>
    </div>
  );
};

export default App;
