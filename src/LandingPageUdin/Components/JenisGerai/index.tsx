import React from "react";
import { FaStore, FaClinicMedical, FaTruck, FaHandHoldingUsd, FaSnowflake, FaCapsules, FaBuilding } from "react-icons/fa";
// import { IconBaseProps } from "react-icons";

// type GeraiItem = {
//   label: string;
//   icon: React.ElementType<IconBaseProps>; // Ganti IconType dengan React.ElementType
// };

// const geraiList: GeraiItem[] = [
//   { label: "Gerai Sembako (Embrio KopHub)", icon: FaStore },
//   { label: "Apotek Desa", icon: FaCapsules },
//   { label: "Gerai Kantor Koperasi", icon: FaBuilding },
//   { label: "Gerai Klinik Desa", icon: FaClinicMedical },
//   { label: "Gerai Cold Storage/Cold Chain", icon: FaSnowflake },
//   { label: "Logistik (Distribusi)", icon: FaTruck },
//   { label: "Gerai Unit Usaha Simpan Pinjam (Embrio Kop Bank)", icon: FaHandHoldingUsd },
// ];

const GeraiSection = () => {
  const Icon = FaStore as React.FC<React.SVGProps<SVGSVGElement>>;
  const Icon2 = FaCapsules as React.FC<React.SVGProps<SVGSVGElement>>;
  const Icon3 = FaBuilding as React.FC<React.SVGProps<SVGSVGElement>>;
  const Icon4 = FaClinicMedical as React.FC<React.SVGProps<SVGSVGElement>>;
  const Icon5 = FaSnowflake as React.FC<React.SVGProps<SVGSVGElement>>;
  const Icon6 = FaTruck as React.FC<React.SVGProps<SVGSVGElement>>;
  const Icon7 = FaHandHoldingUsd as React.FC<React.SVGProps<SVGSVGElement>>;
  return (
    <section className="relative w-full text-white">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" src="/video/videoalam.mp4" autoPlay muted loop playsInline />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex justify-center py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="bg-white bg-opacity-15 px-6 py-8 rounded-xl backdrop-blur-md text-center w-full max-w-3xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white">Jenis Gerai</h2>
          <div className="grid grid-cols-2 gap-4 justify-items-center text-center">
            <div className="flex items-center gap-3 bg-white bg-opacity-75 text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-md w-full max-w-sm">
              <span className="text-xl text-[#2C5C52]">
                <Icon /> {/* Gunakan komponen Icon langsung */}
              </span>
              <span>Gerai Sembako</span>
            </div>

            <div className="flex items-center gap-3 bg-white bg-opacity-75 text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-md w-full max-w-sm">
              <span className="text-xl text-[#2C5C52]">
                <Icon2 /> {/* Gunakan komponen Icon langsung */}
              </span>
              <span>Apotek Desa</span>
            </div>

            <div className="flex items-center gap-3 bg-white bg-opacity-75 text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-md w-full max-w-sm">
              <span className="text-xl text-[#2C5C52]">
                <Icon3 /> {/* Gunakan komponen Icon langsung */}
              </span>
              <span>Gerai Kantor Koperasi</span>
            </div>
            <div className="flex items-center gap-3 bg-white bg-opacity-75 text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-md w-full max-w-sm">
              <span className="text-xl text-[#2C5C52]">
                <Icon4 /> {/* Gunakan komponen Icon langsung */}
              </span>
              <span>Gerai Klinik Desa</span>
            </div>
            <div className="flex items-center gap-3 bg-white bg-opacity-75 text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-md w-full max-w-sm">
              <span className="text-xl text-[#2C5C52]">
                <Icon5 /> {/* Gunakan komponen Icon langsung */}
              </span>
              <span>Gerai Cold Storage</span>
            </div>
            <div className="flex items-center gap-3 bg-white bg-opacity-75 text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-md w-full max-w-sm">
              <span className="text-xl text-[#2C5C52]">
                <Icon6 /> {/* Gunakan komponen Icon langsung */}
              </span>
              <span>Logistik ( Distribusi )</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white bg-opacity-75 text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-md w-full mt-4 text-center">
            <span className="text-xl text-[#2C5C52]">
              <Icon7 /> {/* Gunakan komponen Icon langsung */}
            </span>
            <span>Gerai Unit Usaha Simpan Pinjam (Embrio Kop Bank)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeraiSection;
