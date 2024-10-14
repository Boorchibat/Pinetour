import React from "react";
import "./Destination.css";

export const Destination = () => {
  return (
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
            <h1 className="big">Sukhnbatar square</h1>
            <p className="small">Ulaanbatar</p>
            <h1 className="big">Khuvsgul lake</h1>
            <p className="small">Khuvsgul</p>
            <h1 className="big">Khoorgin togoo</h1>
            <p className="small">Arkhangai</p>
            <h1 className="big">Terkhin tsagaan lake</h1>
            <p className="small">Arkhangai</p>
            <h1 className="big">Amarbaysgalant monastary</h1>
            <p className="small">Bulgan</p>
            <h1 className="big">Sukhnbayar Square</h1>
            <p className="small">Ulaanabtar</p>
          </div>
        </div>
      </div>
      <div id="map">
        <img src="./map1.png" alt="map" />
      </div>
    </div>
  );
};
