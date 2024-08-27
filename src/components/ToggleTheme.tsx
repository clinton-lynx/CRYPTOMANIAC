import React from "react";
import "../assets/styles/components/toggle.scss";

const ToggleTheme = () => {
  return (
    <div className="wrapper">
      <label>
        <input className="toggle-checkbox" type="checkbox"></input>
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div
              className="iconify sun-icon"
              data-icon="feather-sun"
              data-inline="false"
            ></div>
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <div
              className="iconify moon-icon"
              data-icon="feather-moon"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleTheme;
