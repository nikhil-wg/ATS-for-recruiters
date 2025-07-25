import React from "react";
import SideBar from "./_components/SideBar.js";
import Header from "./_components/Header.js";
function DashboardLayout({ children }) {
  return (
    <div>
      <div className="w-64 h-screen fixed">
        <SideBar />
      </div>

      <div className="sm:ml-64">
        <Header />
        <div className="p-5 ">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
