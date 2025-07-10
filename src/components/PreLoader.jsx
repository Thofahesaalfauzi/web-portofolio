import { useState, useEffect } from "react";
import 'animate.css';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="w-screen h-screen fixed flex items-center justify-center bg-black z-50">
        <div className="flex items-center overflow-hidden">
          
          {/* Garis Vertikal */}
          <div className="w-1 h-24 bg-blue-500 rounded-full animate__animated animate__fadeInLeft animate__slow"></div>
          
          {/* Kotak yang membatasi tulisan agar tidak kelihatan sebelum keluar dari garis */}
          <div className="ml-4 overflow-hidden">
            <h1 className="text-white text-4xl font-bold animate__animated animate__slideInRight animate__slow">
              Welcome
            </h1>
            <p className="text-lg mt-2 animate__animated animate__slideInRight animate__delay-1s animate__slow">
              My Portofolio
            </p>
          </div>

        </div>
      </div>
    )
  );
};

export default PreLoader;
