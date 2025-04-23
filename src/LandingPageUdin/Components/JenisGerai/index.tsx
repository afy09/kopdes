import React, { useState } from "react";

const geraiList = ["Gerai Sembako (Embrio KopHub)", "Apotek Desa", "Gerai Kantor Koperasi", "Gerai Klinik Desa", "Gerai Cold Storage/Cold Chain", "Logistik (Distribusi)", "Gerai Unit Usaha Simpan Pinjam (Embrio Kop Bank)"];

const questions = [
  {
    q: "Apa itu Koperasi Desa/Kelurahan Merah Putih?",
    a: "Koperasi Desa/Kelurahan Merah Putih adalah lembaga ekonomi beranggotakan masyarakat desa yang dibentuk untuk meningkatkan kesejahteraan melalui prinsip gotong royong, kekeluargaan, dan partisipasi bersama.",
  },
  {
    q: "Apa tujuan utama pembentukan Kopdes/kel Merah Putih?",
    a: "Tujuannya antara lain memperkuat perekonomian desa, meningkatkan nilai tukar petani, menekan inflasi, menciptakan lapangan kerja, dan meningkatkan inklusi keuangan.",
  },
  {
    q: "Apa dasar hukum pembentukan koperasi ini?",
    a: "Pembentukan koperasi didasarkan pada berbagai peraturan, seperti Undang-Undang Nomor 25 Tahun 1992 tentang Perkoperasian (yang telah diubah beberapa kali), Peraturan Pemerintah, Peraturan Presiden, dan peraturan menteri terkait.",
  },

  {
    q: "Apa saja mekanisme pembentukan Kopdes/kel Merah Putih?",
    a: "Mekanismenya meliputi tiga pendekatan: pendirian koperasi baru, pengembangan koperasi yang telah ada, dan revitalisasi koperasi tidak aktif.",
  },
];

const GeraiSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full text-white">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" src="/video/videoalam.mp4" autoPlay muted loop playsInline />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 md:px-12 max-w-7xl mx-auto">
        {/* Right - Jenis Gerai */}
        <div className="flex flex-col items-center md:items-start bg-white bg-opacity-15 px-5 py-6 rounded-lg">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center md:text-left">Jenis Gerai</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {geraiList.map((item, idx) => (
              <div key={idx} className="bg-white bg-opacity-75 text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-md backdrop-blur-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* Left - FAQ */}
        <div className="bg-white bg-opacity-15 px-5 py-6 rounded-lg">
          <h2 className="text-xl md:text-3xl font-bold mb-6">Pertanyaan Umum</h2>
          <div className="space-y-4">
            {questions.map((item, idx) => (
              <div key={idx} className="bg-white bg-opacity-75 rounded-lg shadow-md text-gray-900">
                <button onClick={() => toggle(idx)} className="w-full text-left px-4 py-3 font-semibold focus:outline-none">
                  {item.q}
                </button>
                {openIndex === idx && <div className="px-4 pb-4 text-sm whitespace-pre-line">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeraiSection;
