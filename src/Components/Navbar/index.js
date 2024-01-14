import React from "react";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar   navbar-main navbar-expand-lg px-0 shadow-none border-radius-xl "
        id="navbarBlur"
        data-scroll="false"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <h3 className="font-weight-bolder text-white mb-0">Dashboard</h3>
          </nav>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group">
                <span className="input-group-text text-body">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <ul className="navbar-nav  justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <a
                  href="#"
                  className="nav-link text-white font-weight-bold px-0"
                >
                  <i className="fa fa-user me-sm-1"></i>
                  <span className="d-sm-inline d-none">Sign In</span>
                </a>
              </li>

              <li className="nav-item px-3 d-flex align-items-center">
                <a href="#" className="nav-link text-white p-0">
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
