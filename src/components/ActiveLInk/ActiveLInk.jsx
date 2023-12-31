import React from "react";
import './ActiveLInk.css';
import { NavLink } from "react-router-dom";
const ActiveLInk = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>isActive ? "active" : ""}
    >
        {children}
    </NavLink>
  );
};

export default ActiveLInk;
