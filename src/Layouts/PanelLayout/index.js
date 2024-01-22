import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

function DashboardLayout({ children }) {
  return (
    <>
      <div className="container-fluid bg-body">
        <div className="row" style={{ padding: "0px" }}>
          <div className="position-fixed">
            <div className="wth-20">
              <LeftSidebar />
            </div>
          </div>
          <div className="wth-20"></div>
          <div className="wth-80">
            <Header />

            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
