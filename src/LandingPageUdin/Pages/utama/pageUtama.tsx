import React from "react";
import { Link } from "react-router-dom";

const PageUtama = () => {
  const phoneNumber = "628123456789";

  const message = encodeURIComponent("Hallo, Saya tertarik membeli domain ini, mohon informasinya");

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-green-500 to-green-700 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center max-w-2xl w-full">
        {/* Badge */}
        <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">Domain For Sale</div>

        {/* Domain */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 max-sm:text-2xl">KOPDESMERAHPUTIH.ID</h1>

        {/* Deskripsi */}
        <p className="text-gray-600 text-lg mb-8 max-sm:text-base">
          Domain ini saat ini <span className="font-semibold text-red-600">DIJUAL</span>. Jika Anda tertarik untuk membeli domain ini, silakan hubungi kami melalui WhatsApp.
        </p>

        {/* Button */}
        <Link to={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-lg">
          Hubungi via WhatsApp
        </Link>

        {/* Footer */}
        <p className="text-gray-400 text-sm mt-8">© {new Date().getFullYear()} Domain Owner</p>
      </div>
    </div>
  );
};

export default PageUtama;
