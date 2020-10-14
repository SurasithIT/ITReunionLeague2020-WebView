import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListOl,
  faCalendarWeek,
  faFutbol,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const tabs = [
    {
      route: "/Table",
      icon: faListOl,
      label: "Table",
    },
    {
      route: "/Fixture",
      icon: faCalendarWeek,
      label: "Fixture",
    },
    {
      route: "/TopScorer",
      icon: faFutbol,
      label: "Top Scorer",
    },
    {
      route: "/Rules",
      icon: faBookOpen,
      label: "Rules",
    },
  ];

  return (
    <div>
      {/* Top Bar*/}
      <nav
        id="nav-top"
        className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top table-shadow"
        role="navigation"
      >
        <div className="container-fluid ">
          <a className="navbar-brand " href="/">
            <img
              src="it-logo.png"
              alt="IT Logo"
              className="brand-image "
              style={{ height: "2rem" }}
            />{" "}
            <span style={{ verticalAlign: "middle" }}>
              IT Reunion League 2020
            </span>
          </a>
          <Nav className="ml-auto ">
            <NavItem>
              <NavLink to="/Table" className="nav-link">
                League Table
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Fixture" className="nav-link">
                Fixture
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/TopScorer" className="nav-link">
                Top Scorer
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Rules" className="nav-link">
                Rules
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>
      {/* Bottom Tab Navigator */}
      <nav
        id="nav-bottom-head"
        className="navbar navbar-expand-md navbar-light d-block d-lg-none sticky-top table-shadow"
        role="navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="it-logo.png"
              alt="IT Logo"
              className="brand-image"
              style={{ height: "2rem" }}
            />{" "}
            <span className="align-middle">IT Reunion League 2020</span>
          </a>
        </div>
      </nav>
      <nav
        id="nav-bottom"
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon} />
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navbar;
