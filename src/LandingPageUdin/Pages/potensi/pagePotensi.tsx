import React, { useState } from "react";

const data = [
  {
    title: "1. Pusat E-Commerce Desa (Marketplace Desa)",
    content: `Platform Jual Beli Lokal: Domain ini dapat dijadikan situs e-commerce untuk memasarkan produk unggulan desa, UMKM lokal, atau hasil pertanian dan perikanan secara daring.

Cold Storage & Logistik: Menyediakan platform pemesanan untuk layanan cold storage (penyimpanan dingin) dan logistik hasil bumi.`,
  },
  {
    title: "2. Hub Kebutuhan Pokok (Warung Digital Sembako)",
    content: `Penjualan Sembako Murah: Menjadi hub atau pusat distribusi sembako, perlengkapan rumah tangga, alat tulis, dan bahan bangunan dengan harga lebih terjangkau.

Kemitraan: Menjadi mitra strategis bagi warung kelontong tradisional dan pedagang kaki lima di tingkat desa.`,
  },
  {
    title: "3. Layanan Simpan Pinjam Digital",
    content: `Akses Permodalan: Menyediakan platform layanan simpan pinjam digital yang aman dan mudah bagi warga desa.

Mitra Bank: Menjadi perantara perbankan untuk akses kredit dengan bunga rendah.`,
  },
  {
    title: "4. Layanan Jasa Kesehatan dan Apotek Desa",
    content: `Digitalisasi Apotek: Mengoperasikan apotek desa secara online untuk pemesanan obat.

Layanan Kesehatan: Menjadi platform informasi atau layanan rujukan klinik desa.`,
  },
  {
    title: "5. Potensi Monetisasi Lainnya",
    content: `Branding Koperasi Nasional: Domain ini memiliki nilai branding tinggi.

Program Kemitraan Pemerintah: Potensi menjadi mitra resmi dalam program penguatan ekonomi desa.`,
  },
];

const PagePotensiBisnis = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index: any) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Potensi Bisnis Domain</h1>

        <p className="text-gray-600 text-center mb-12">
          Memiliki domain <span className="font-bold text-black">kopdesmerahputih.id </span>
          memiliki potensi bisnis yang sangat strategis karena berkaitan langsung dengan program pemerintah Koperasi Desa Merah Putih yang berkembang mulai tahun 2025-2026.
        </p>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button onClick={() => toggle(index)} className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center">
                {item.title}
                <span className="text-xl">{open === index ? "-" : "+"}</span>
              </button>

              {open === index && <div className="px-6 pb-6 text-gray-600 whitespace-pre-line">{item.content}</div>}
            </div>
          ))}
        </div>

        {/* Domain Info */}
        <div className="mt-16 bg-green-50 border border-green-200 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Keunggulan Menggunakan Domain .id</h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Identitas lokal Indonesia yang kuat</li>
            <li>Meningkatkan kepercayaan pengguna</li>
            <li>SEO lebih baik untuk pasar Indonesia</li>
            <li>Potensi branding nasional yang besar</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Dengan target <b>30.000 – 80.000 Koperasi Desa Merah Putih</b>, domain ini berpotensi menjadi pusat digitalisasi koperasi desa di Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePotensiBisnis;
