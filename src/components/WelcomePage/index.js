import React from "react";
import "./style.scss";
import HomeLink from "../HomeLink/";
import { NavLink } from "react-router-dom";

const WelcomePage = () => (
  <div className="welcome-page">
    <HomeLink />
    <NavLink to="/boards">Welcome</NavLink>
  </div>
);

export default WelcomePage;
