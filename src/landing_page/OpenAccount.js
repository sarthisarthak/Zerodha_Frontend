import React from "react";

const OpenAccount = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Open Account"
          className="mb-5"
        />
        <h1 className="mt-5 fs-2 mb-3">Open a Zerodha account</h1>
        <p className="mb-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;
