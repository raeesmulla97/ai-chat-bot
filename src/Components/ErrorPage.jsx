import React from "react";
import "./styles/ErrorPage.css";

const ErrorPage = ({ onBack }) => {
  return (
    <div className="error-page">
      <div className="error-box">
        <h2>Something went wrong 😕</h2>
        <p>Please try again or go back.</p>
        <button className="error-btn" onClick={onBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
