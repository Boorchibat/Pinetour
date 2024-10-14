import React from "react";
import "./Pricing.css";

export const Pricing = () => {
  return (
    <div>
      <div id="last">
        <div id="writing">
          <h1 id="word">Pricing</h1>
          <h1 id="word2">Pricing of our agency</h1>
        </div>
        <div id="packs">
          <div className="price-box">
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
          <div id="right" className="price-box">
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
    </div>
  );
};
