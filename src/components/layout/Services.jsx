import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-[var(--color-overlay)]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2 text-primary">Fast Orders</h3>
          <p className="text-gray-700">
            Place and track your orders in just a few clicks.
          </p>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2 text-secondary">Secure Login</h3>
          <p className="text-gray-700">
            Protect your data with strong authentication.
          </p>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2 text-accent">Smart Dashboard</h3>
          <p className="text-gray-700">
            Monitor everything with our easy-to-use dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
