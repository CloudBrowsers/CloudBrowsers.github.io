import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const navItemList = [
  "Home",
  "About Us",
  "Benefits",
  "Offerings",

  "Usage",
  // "CostCalculation",
  "Contact Us",
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMoreMenu = () => {
    setIsMoreMenuOpen(false);
  };

  return (
    <div className="navbar_container bg-white">
      <div className="navbar_items_container common_container_style">
        <img src={logo} alt="Logo" />
        <ul className="links_container hidden md:flex justify-evenly gap-4">
          {navItemList.map((navItem) => (
            <li
              key={navItem}
              className="nav_item"
              onClick={() => {
                document.getElementById(navItem).scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {navItem}
            </li>
          ))}
          <div
            // className="nav_item"
            onMouseEnter={toggleMoreMenu}
            onMouseLeave={closeMoreMenu}
          >
            More
            {isMoreMenuOpen && (
              <div className="more-menu">
                <div>
                  <div className="menu" onClick={closeMoreMenu}>
                    Menu 1
                  </div>
                  <div className="menu" onClick={closeMoreMenu}>
                    Menu 2
                  </div>
                  <div className="menu" onClick={closeMoreMenu}>
                    Menu 3
                  </div>
                </div>
              </div>
            )}
          </div>
        </ul>
        <GiHamburgerMenu className="block md:hidden" onClick={toggleDrawer} />
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="drawer_container">
          <div className="drawer">
            <img src={logo} alt="Logo" />
            <div onClick={toggleDrawer}>Close</div>
          </div>
          <ul className="drawer_menu">
            {navItemList.map((navItem) => (
              <li
                key={navItem}
                onClick={() => {
                  document.getElementById(navItem).scrollIntoView({
                    behavior: "smooth",
                  });
                  toggleDrawer();
                }}
              >
                {navItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
