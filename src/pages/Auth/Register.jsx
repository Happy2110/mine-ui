import React from "react";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-[80vh] bg-light-blue">
    <form className="bg-frosted shadow-lg p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-primary-red">Signup</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-text-gray p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-text-gray p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-text-gray p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
        <button className="bg-primary-blue text-white px-4 py-2 w-full rounded-md hover:bg-light-blue hover:text-primary-blue transition-colors duration-300">
          Signup
        </button>
      </form>
    </div>
  );
}
