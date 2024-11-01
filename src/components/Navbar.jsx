import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [page, setPage] = useState(0);
  // nothing = portfolio = 0, about = 1

  useEffect(() => {
    if (pathname === "/") {
      setPage(0);
    } else {
      setPage(1);
    }
  });

  return (
    <div className="h-[60px] w-full px-[5%] sm:px-[15%] flex justify-between items-center ">
      <h1 className="hidden sm:block text-lg sm:text-2xl font-semibold ">
        <Link to="/">Isaac Weng</Link>
      </h1>
      <h1 className="sm:hidden text-lg sm:text-2xl font-semibold ">
        <Link to="/">IW</Link>
      </h1>
      <nav className="flex gap-6 align-center text-sm sm:text-base">
        <Link to="/" className={page === 0 ? "text-yellow-400" : ""}>
          Portfolio
        </Link>
        <Link to="about" className={page === 1 ? "text-yellow-400" : ""}>
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
