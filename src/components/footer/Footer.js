import React from "react";
import "./Footer.css";
import { HeaderLogo } from "../../assets";

export const Footer = () => {
  return (
    <div>
      <div id="l">
        <div id="one">
          <div id="two">
            <HeaderLogo/>
            <button id="but">
              <img id="lnk" src="./facebook.svg" alt="l" />
              Facebook
            </button>
            <button id="butt">
              <img id="lnk" src="./insta.svg" alt="l" />
              Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
