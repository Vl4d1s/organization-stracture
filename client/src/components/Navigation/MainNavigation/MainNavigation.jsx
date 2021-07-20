import { Link } from "react-router-dom";

import MainHeader from "./MainHeader/MainHeader";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link>Organization Stracture</Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
