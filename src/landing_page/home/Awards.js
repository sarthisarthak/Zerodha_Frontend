import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="prizes" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Government Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            style={{ width: "95%" }}
            src="media/images/pressLogos.png"
            alt="EconomicTimes"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;