import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
const toolbar = props => {
  return (
    <header className="toolbar">
      <nav className=" toolbar__navigation">
        <div className="toobar__toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/"> THE LOGO</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              {" "}
              <a href="/">Menu</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/">Catering</a>
            </li>
            <li>
              <a href="/">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default toolbar;
