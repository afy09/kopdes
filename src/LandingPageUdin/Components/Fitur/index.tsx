import React from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoPlayForward } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const Fitur = () => {
  const Icon = MdMiscellaneousServices as React.FC<{ className?: string }>;
  const Icon2 = IoPlayForward as React.FC<{ className?: string }>;
  const Icon3 = FaUserFriends as React.FC<{ className?: string }>;

  return (
    <section className="bg-white mt-16 mb-10">
      <div className="w-full flex justify-center">
        <div className="text-lg text-[#2C5C52]  lg:text-2xl  font-bold text-center bg-black bg-opacity-10 px-5 py-2 rounded-lg ">Model Pembentukan</div>
      </div>

      <div className="flex flex-col xl:grid grid-cols-3 justify-center gap-4  mt-10 px-5 xl:px-10 text-[#2C5C52] bg-[#2C5C52] rounded-xl mx-5 md:mx-10 p-10">
        <div className="relative overflow-hidden group border border-gray-100 rounded-lg px-9 py-14 w-full text-center shadow-lg bg-white cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-b from-lime-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0" />

          <div className="relative z-10">
            <div className="text-2xl text-lime-500 mb-2 text-[14px] lg:text-[24px] flex justify-center">
              <Icon className="w-20 h-20" />
            </div>
            <h1 className="font-poppins font-semibold text-[14px] lg:text-[20px]">Membangun Koperasi Baru</h1>
          </div>
        </div>

        <div className="relative overflow-hidden group border border-gray-100 rounded-lg px-9 py-14 w-full text-center shadow-lg bg-white cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-b from-lime-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0" />

          <div className="relative z-10">
            <div className="text-2xl text-lime-500 mb-2 text-[14px] lg:text-[24px] flex justify-center">
              <Icon2 className="w-20 h-20" />
            </div>
            <h1 className="font-poppins font-semibold text-[14px] lg:text-[20px]">Membangun Yang Sudah Ada</h1>
          </div>
        </div>

        <div className="relative overflow-hidden group border border-gray-100 rounded-lg px-9 py-14 w-full text-center shadow-lg bg-white cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-b from-lime-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0" />

          <div className="relative z-10">
            <div className="text-2xl text-lime-500 mb-2 text-[14px] lg:text-[24px] flex justify-center">
              <Icon3 className="w-20 h-20" />
            </div>
            <h1 className="font-poppins font-semibold text-[14px] lg:text-[20px]">Revitalisasi Koperasi</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fitur;
