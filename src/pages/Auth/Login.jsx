import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-white">
      <form className="bg-card shadow-xl p-8 rounded-2xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-[var(--color-border)] p-3 mb-4 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] 
                     bg-gray-100 placeholder-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-[var(--color-border)] p-3 mb-6 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] 
                     bg-gray-100 placeholder-gray-500"
        />

        <button
          className="bg-primary text-white px-4 py-2 w-full rounded-lg 
                     hover:bg-secondary transition-all duration-300 shadow-md font-semibold"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-accent font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
