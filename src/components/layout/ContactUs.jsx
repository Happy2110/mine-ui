import React from "react";
import { FiPhone, FiMail } from "react-icons/fi"; // Feather Icons
import { MdSupportAgent } from "react-icons/md";

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 px-6 bg-[var(--color-overlay)]">
      <div className="max-w-5xl mx-auto">
        {/* Card */}
        <div className="bg-white shadow-2xl rounded-xl p-10 md:p-16 text-center">
          
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-8 text-secondary">
            Contact Us
          </h2>

          {/* English Description */}
          <p className="text-lg mb-6">
            <strong>We're Here to Help:</strong> Our customer support team is available 24x7 to assist with orders, queries, and any concerns. Prompt, reliable, and friendly service is our promise.
          </p>

          {/* Hindi Description */}
          <p className="text-lg mb-8 italic text-gray-700">
            <strong>हम आपकी मदद के लिए हैं:</strong> हमारी ग्राहक सेवा टीम 24x7 उपलब्ध है। त्वरित, विश्वसनीय और मित्रवत सेवा हमारी प्रतिबद्धता है।
          </p>

          {/* Contact Details */}
          <div className="flex flex-col items-center space-y-6">
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-red-600 via-red-500 to-blue-500 flex items-center space-x-3">
              <FiPhone className="inline text-3xl  text-primary" />
              <span>+91 9300 14480</span>
            </p>
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-red-600 via-red-500 to-blue-500 flex items-center space-x-3">
              <FiMail className="inline text-3xl  text-primary" />
              <span>support@metromine.in</span>
            </p>
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-red-600 via-red-500 to-blue-500 flex items-center space-x-3">
              <MdSupportAgent className="text-2xl text-primary" />
              <span>24x7 Dedicated Online CHAT / CALL</span>
            </p>
          </div>

          {/* Services for Customers */}
          <div className="mt-8">
            <p className="font-semibold mb-2 text-lg">Our Services / हमारी सेवाएं:</p>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>Pre Purchase / खरीददारी से पहले</li>
              <li>Post Purchase / खरीददारी के बाद</li>
              <li>Other / अन्य</li>
            </ul>
          </div>

          {/* Slogan */}
          <p className="text-xl font-bold mt-8 text-accent">
            "Prompt Support, Anytime, Always!"
          </p>
        </div>
      </div>
    </section>
  );
}
