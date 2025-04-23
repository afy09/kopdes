import { useEffect, useState, useRef } from "react";

const logos = [
  "/logo/Logo_Kemenko_Pangan.png",
  "/logo/kemnkop.png",
  "/logo/bpkp.png",
  "/logo/pajak.png",
  "/logo/kemenkes.png",
  "/logo/kelautan.png",
  "/logo/pengayoman.png",
  "/logo/kemensos.png",
  "/logo/bumn.png",
  "/logo/badangizi.png",
  "/logo/komdigi.png",
  "/logo/pangan.png",
];

const LogoMarquee = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            setVisibleCount((prev) => {
              if (prev < logos.length) return prev + 1;
              clearInterval(interval);
              return prev;
            });
            i++;
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-6 mt-24">
      <div className="flex justify-center ">
        <h2 className="text-center font-bold text-[#2C5C52] text-lg md:text-2xl mb-8 hidden md:block bg-black bg-opacity-10 px-5 py-2 rounded-lg">Satuan Tugas Koperasi Desa/Kelurahan Merah Putih</h2>
      </div>

      <div className="flex justify-center ">
        <h2 className="text-center font-bold text-[#2C5C52] text-lg md:text-2xl mb-12 block md:hidden bg-black bg-opacity-10 px-5 py-2 rounded-lg ">
          Satuan Tugas Koperasi <br />
          Desa/Kelurahan Merah Putih
        </h2>
      </div>

      <div ref={containerRef} className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-16">
        {logos.map((logo, index) => (
          <div key={index} className={`transition-opacity duration-700 transform ${index < visibleCount ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}>
            <img src={logo} alt={`logo-${index}`} className="h-[80px] w-[80px] object-contain mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
