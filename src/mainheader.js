import React from "react";
import { Link } from "react-router-dom";

const Mainheader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg">
        <div className="container">
          <Link
            className="navbar-brand text-warning py-1  fontweight"
            to="/dashboard"
          >
            <i className="fa fa-"></i>Shopping Hub
          </Link>
          <button
            className="navbar-toggler m-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon m-0 p-0"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <Link
                  className="nav-link drop-down  text-white fontweight"
                  to="/dashboard"
                >
                  {" "}
                  Dashboard{" "}
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link drop-down  text-white fontweight"
                  to="/addnewproduct"
                >
                  <i className="fa fa-plus "></i> Add New Product{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>{" "}
      <br />
      <br />
      <br />
    </>
  );
};

export default Mainheader;
