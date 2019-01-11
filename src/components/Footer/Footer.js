import React from "react";
import "./Footer.css";
const footer = props => {
  return (
    <footer className="footer">
      <div className="adress">
        <ul>
          <h3 className="headerfooter">adress</h3>
          <li>hagagatan 1</li>
          <li>113 28 </li>
          <li>Stockholm</li>
        </ul>
      </div>
      <div className="social_media">
        <ul>
          <h3>SocialMedia</h3>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};
export default footer;
