import React from "react";
import { Link, Outlet } from "react-router-dom";
import Agent_Page from "./Agent_Page";

const Agent_Route = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Agent_Route;
