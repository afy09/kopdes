import React from "react";

interface FooterProps {
  className?: string;
  handleMenuClick?: (page: string) => void; // opsional kalau belum digunakan
}

const Footer: React.FC<FooterProps> = ({ className, handleMenuClick }) => {
  return (
    <>
      <div className="bg-[#0e4b5a] px-14 lg:px-28 py-5 lg:flex justify-center gap-12 items-center border-b-8 border-b-red-900">
        <div>
          <p className="text-white text-center lg:text-start text-xl lg:text-3xl font-bold hidden md:block">
            Mari Bangun Negeri Dengan Jadi Bagian Dari <br /> Koperasi Desa/Kelurahan Merah Putih
          </p>
          <p className="text-white text-center lg:text-start text-xl lg:text-3xl font-bold block md:hidden">Mari Bangun Negeri Dengan Jadi Bagian Dari Koperasi Desa/Kelurahan Merah Putih</p>
          <button onClick={() => handleMenuClick && handleMenuClick("Download")} className="px-4 py-2 bg-lime-500 rounded-lg mt-4 text-white w-full block md:hidden">
            Masuk
          </button>
          <button onClick={() => handleMenuClick && handleMenuClick("Download")} className="px-4 py-2 bg-lime-500 rounded-lg mt-6 text-white hidden md:block">
            Masuk
          </button>
        </div>

        <div className="mt-5 md:mt-0">
          <img className="w-72 h-72 md:h-[350px]" src="/images/anak.png" alt="Anak" />
        </div>
      </div>

      <footer className={`${className || "bg-[#ffff]"} bg-opacity-10 lg:pt-[50px] md:pt-[50px] pt-[25px] lg:p-3 px-[24px] lg:px-[40px] border-t border-[#2C5C52]`}>
        <div className="mx-auto md:flex justify-between border-b pb-6">
          {/* Logo */}
          <div className="flex flex-col items-start lg:gap-0 gap-5 md:gap-0">
            <div className="w-full md:w-[80%] h-full">
              <img src="/images/logofother.png" alt="Logo" className="object-contain" />
            </div>
          </div>

          {/* Kontak */}
          <div className="flex flex-col gap-2 mt-2 lg:mt-0 text-left w-full md:w-[250px] lg:w-auto max-sm:text-center">
            <h3 className="text-[#2C5C52] text-[12px] lg:text-[20px] font-bold">Satuan Tugas Koperasi Desa/Kelurahan Merah Putih</h3>
            <div className="text-[#252525] space-y-2 text-[11px]">
              <div className="flex">
                <p className="text-[11px] ml-[5px] md:ml-[5px] lg:text-[16px] lg:w-[400px] w-full md:w-[200px]">
                  Graha Mandiri Lt.3, Jl. Imam Bonjol No.61, RT.8/RW.4, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center my-6 text-black font-poppins text-[9px] md:text-base">
          <p>© 2025 Kementerian Koperasi Republik Indonesia | All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
