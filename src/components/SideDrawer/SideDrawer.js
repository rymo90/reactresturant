import React from "react";
import "./SideDrawer.css";
const sideDrawer = props => {
  let drawerClass = "side-drawer";
  if (props.show) {
    drawerClass = "side-drawer open";
  }
  return (
    <nav className={drawerClass}>
      <ul>
        <li>
          {""}
          <a href="/">Menu</a>
        </li>
        <li>
          {" "}
          <a href="/">Catering</a>
        </li>
        <li>
          {" "}
          <a href="/">OmOss</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
