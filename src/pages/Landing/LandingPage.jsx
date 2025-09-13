import React from "react";
import "../../styles/global.css";
import Footer from "../../components/layout/Footer";
import Services from "../../components/layout/Services";
import ContactUs from "../../components/layout/ContactUs";
import AboutUs from "../../components/layout/AboutUs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-secondary)] from-20% via-[var(--color-primary)] via-40% to-[var(--color-secondary)] to-90% text-white py-20 px-6 text-center shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-accent">Metro Mine</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Your one-stop solution for managing orders, users, and seamless access.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition-all"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary transition-all"
          >
            Register
          </a>
        </div>
      </section>

      {/* Services Section */}
       <Services />
      <ContactUs />
      <AboutUs />
      <Footer />
    </div>
  );
}
