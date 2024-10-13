import React from "react";
import "./Hero.css";
import { HeaderLogo } from "../../assets";

export const Hero = () => {
return(
    <div >
    <div id="hero">
        <h1 id="lake">Khuvsgul lake</h1>
   <div id="images">
          <img src="./stat.png" alt="1"/>
          <img src="./building.png" alt="2"/>
          <img src="./gir.png" alt="3"/>
          <img src="./land.png" alt="4"/>
    </div>
    </div>
    <div id="destination">
      <div id="temp">
        <p id="tour">Tours| 6 days</p>
<h1 id="dest">Desination of our agency</h1>
<div id="box">
    <div>
<h1 className="circle">D1</h1>
<h1 className="circle">D2</h1>
<h1 className="circle">D3</h1>
<h1 className="circle">D4</h1>
<h1 className="circle">D5</h1>
<h1 className="circle">D6</h1>
   </div>
   <div id="info">
    <h1>Sukhnbayar square</h1>
    <p className="small">Ulaanbatar</p>
    <h1>Khuvsgul lake</h1>
    <p className="small">Khuvsgul</p>
    <h1>Khoorgin togoo</h1>
    <p className="small">Arkhangai</p>
    <h1>Terkhin tsagaan lake</h1>
    <p className="small">Arkhangai</p>
    <h1>Amarbaysgalant monastary</h1>
    <p className="small">Bulgan</p>
    <h1>Sukhnbayar Square</h1>
    <p className="small">Ulaanabtar</p>
   </div>
</div>
      </div>
      <div id="map">
        <img src="./map.png" alt="map"/>
      </div>
    </div>
    <div id="last">
        <div id="writing">
<h1 id="word">
    Pricing
</h1>
<h1 id="word2">
    Pricing of our agency
</h1>
        </div>
        <div id="packs">
<div className="bx">
<h1 className="pac">Starter Pack</h1>
<ul id="list">
<li>Trip</li>
<li>Hotel</li>
<li>Breakfeast</li>
<li>Lunch</li>
<li>Dinner</li>
</ul>
<h1 className="price">2100$</h1>
</div>
<div id="right" className="bx">
<h1 className="pac">Luxury pack</h1>
<ul id="list">
    <li>Starter Pack</li>
    <li>Flights</li>
    <li>Cruise Trip</li>
    <li>Cruise Trip</li>
</ul>
<h1 className="price">4200$</h1>
</div>
        </div>

    </div>
    <div id="tond">
        <div id="to">
            <h1 id="wrd">Are you ready?</h1>
            <button id="button">Order now</button>
        </div>
    </div>
<div id="l">
  <div id="one">
    <div id="two">
  <HeaderLogo />
       <button id="but"><img id="lnk" src="./facebook.svg" alt="l"/>Facebook</button>
       <button id="butt"><img id="lnk" src="./insta.svg" alt="l"/>Instagram</button>
    </div>
  </div>
</div>
</div>
)
}