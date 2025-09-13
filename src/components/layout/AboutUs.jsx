import React from "react";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Card */}
        <div className="bg-[var(--color-overlay)] shadow-2xl rounded-xl p-10 md:p-16 text-center md:text-left">
          
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-6 text-secondary">About Us</h2>

          {/* English Description */}
          <p className="text-lg mb-4">
            <strong>Our Vision:</strong> At Metro Mine, we prioritize the **quality of food and overall health** of our customers. We provide fresh, nutritious products and seamless order management, ensuring trust and satisfaction in every interaction.
          </p>

          {/* Hindi Description */}
          <p className="text-lg mb-4 italic text-gray-700">
            <strong>हमारा उद्देश्य:</strong> मेट्रो माइन में, हम अपने ग्राहकों के भोजन की गुणवत्ता और स्वास्थ्य को सर्वोच्च प्राथमिकता देते हैं। हम ताजगी, पौष्टिकता और सरल ऑर्डर प्रबंधन के साथ भरोसा और संतुष्टि सुनिश्चित करते हैं।
          </p>

          {/* Sanskrit Shloka */}
            <div className="flex justify-center items-center flex-col">
                <p className="text-xl font-semibold mb-2 mt-6 text-primary">
            ॥ अन्नं सर्वम् उत्तमम् तम् याच्छामि स्वास्थ्याय ॥ 
          </p>
          <p className="text-md mb-1">
             "I seek the highest quality of food for good health."
          </p>
          <p className="text-md italic text-gray-700">
             "मैं सर्वोत्तम गुणवत्ता वाला भोजन स्वास्थ्य के लिए चाहता हूँ।"
          </p>

          {/* Slogan */}
          <p className="text-lg font-bold mt-6 text-accent">
            "Freshness, Quality & Trust – Always!"
          </p>
            </div>
        </div>
      </div>
    </section>
  );
}
