import React from "react";
import "../assets/styles/components/search-mobile.scss";
import { Cancel, Search } from "../assets/icons/icons";

const SearchMobile = () => {
  return (
    <>
      <div className="search-mobile__form-wrapper">
        <form action="" className="form">
          <div className="form-right">
            <div className="search">
              <Search />
            </div>
            <input type="text" className="input-text" placeholder="search" />
          </div>
          <button className="cancel-result">
            <Cancel />
          </button>
        </form>
      </div>
      <div className="result">
        {" "}
        <p className="filter-title">Trending</p>
        <div className="result-list-wrapper">
          <ul className="result-list">
            <li className="result-list-item-wrapper">
              <a className="result-list-item">
                {" "}
                <span className="item-name">bitcoin</span>{" "}
                <span className="item-per">-12.5%</span>{" "}
              </a>
            </li>
            <li className="result-list-item-wrapper">
              <a className="result-list-item">
                <span className="item-name">bitcoin</span>{" "}
                <span className="item-per">-12.5%</span>
              </a>
            </li>
            <li className="result-list-item-wrapper">
              <a className="result-list-item">
                <span className="item-name">bitcoin</span>{" "}
                <span className="item-per">-12.5%</span>
              </a>
            </li>
            <li className="result-list-item-wrapper">
              <a className="result-list-item">
                <span className="item-name">bitcoin</span>{" "}
                <span className="item-per">-12.5%</span>
              </a>
            </li>
            <li className="result-list-item-wrapper">
              <a className="result-list-item">
                <span className="item-name">bitcoin</span>{" "}
                <span className="item-per">-12.5%</span>
              </a>
            </li>{" "}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchMobile;
