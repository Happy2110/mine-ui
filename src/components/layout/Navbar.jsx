import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="p-4 flex justify-center">
      <nav className="bg-card text-white px-8 py-3 rounded-xl shadow-lg flex justify-between items-center w-[90%] max-w-6xl">
        <Link to="/" className="font-extrabold text-2xl tracking-wide text-light">
          Metro Mine
        </Link>
        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-accent transition-colors duration-300">
            Home
          </Link>
          <Link to="/orders" className="hover:text-accent transition-colors duration-300">
            Orders
          </Link>
          <Link to="/login" className="hover:text-accent transition-colors duration-300">
            Login
          </Link>
          <Link to="/register" className="hover:text-accent transition-colors duration-300">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
