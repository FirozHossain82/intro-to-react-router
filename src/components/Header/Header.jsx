import React from "react";
import { Link } from "react-router-dom";
import ActiveLInk from "../ActiveLInk/ActiveLInk.jsx";

const Header = () => {
  return (
    <nav className="text-center py-6 bg-lime-100 font-medium text-lg  ">
      <Link className="mr-12 hover:text-purple-900" to="/">
        Home
      </Link>
      <ActiveLInk>
        {" "}
        <Link className="mr-12 hover:text-purple-900" to="/friends">
          Friends
        </Link>
      </ActiveLInk>
      <Link className="mr-12 hover:text-purple-900" to="/posts">
        Posts
      </Link>
      <Link className="mr-12 hover:text-purple-900" to="/about">
        About
      </Link>
      <Link className="mr-12 hover:text-purple-900" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Header;
