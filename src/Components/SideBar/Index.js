import React, { useState } from "react";
import logo from "../../Resources/logo.png";

function Index() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (item) => {
    setActiveItem(item);
    console.log(activeItem);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "280px" }}
    >
      <img className="m-auto" src={logo} style={{ width: "50px" }} alt="Logo" />
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className={`nav-item rounded ${
            activeItem === "Home" ? "bg-primary" : ""
          }`}
          onClick={() => handleClick("Home")}
        >
          <a
            className={`nav-link ${activeItem === "Home" ? "text-light" : ""}`}
            href="#"
          >
            Home
          </a>
        </li>
        <li
          className={`nav-item rounded ${
            activeItem === "CustomerHistory" ? "bg-primary" : ""
          }`}
          onClick={() => handleClick("CustomerHistory")}
        >
          <a
            className={`nav-link ${
              activeItem === "CustomerHistory" ? "text-light" : ""
            }`}
            href="#"
          >
            CustomerHistory
          </a>
        </li>
        <li
          className={`nav-item  rounded ${
            activeItem === "Calls" ? "bg-primary" : ""
          }`}
          onClick={() => handleClick("Calls")}
        >
          <a
            className={`nav-link ${activeItem === "Calls" ? "text-light" : ""}`}
            href="#"
          >
            Calls
          </a>
        </li>
        <li
          className={`nav-item rounded ${
            activeItem === "Customer" ? "bg-primary" : ""
          }`}
          onClick={() => handleClick("Customer")}
        >
          <a
            className={`nav-link ${
              activeItem === "Customer" ? "text-light" : ""
            }`}
            href="#"
          >
            Customer
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>Settings</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;
