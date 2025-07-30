import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Lanyard from "./components/Lanyard/Lanyard.jsx";
import { Typewriter } from "react-simple-typewriter";

const tahunMulai = 2022;
const tahunSekarang = new Date().getFullYear();
const tahunPengalaman = tahunSekarang - tahunMulai;


function App() {
  return (
    <>
      {/* Konten hero */}
      <div className="container mx-auto px-4 ">
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 ">
          <div className="pr-4 md:pl-24 md:pr-8 max-w-screen-xl mx-auto">
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              <div
                className="flex items-center gap-2 px-4 py-2 mb-6 w-fit 
                rounded-full border border-white/30 
                bg-white/10 backdrop-blur-md 
                shadow-sm hover:bg-white/20 transition"
              >
                <i className="ri-briefcase-line text-white text-lg"></i>
                <p className="font-medium text-white text-sm">
                  I`m Ready For Job Web Development
                </p>
              </div>

              <h1 className="text-5xl/tight font-bold">
                I`m, Thofa Hesa Alfauzi
              </h1>
              <h1 className="text-5xl font-bold mb-6 text-yellow-300">
                <Typewriter
                  words={["Full Stack Developer", "UI / UX Design"]}
                  loop={0}
                  cursor
                  typeSpeed={80}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </h1>
              <p className="mb-6 opacity-90">
                Saya mempunyai ketertarikan dalam bidang Programming dan
                Designer, terutama pada pembuatan Website dan Desain seperti
                Poster, Pamflet serta Banner, ketertarikan pada bidang ini sudah
                berlangsung lebih dari 4 Tahun untuk semua Bidang.
              </p>
              <div className="flex items-center sm:gap-4 gap-2">
                <a
                  href=""
                  className="bg-yellow-400 text-black p-4 rounded-2xl hover:bg-yellow-500"
                >
                  <i className="ri-download-line ri-lg mr-2"></i>Download CV
                </a>
                <a
                  href="#proyek"
                  className="bg-transparent p-3 rounded-2xl hover:bg-yellow-500 hover:text-black border-2 border-yellow-400"
                >
                  <i className="ri-folder-open-line ri-lg mr-2"></i>Lihat Proyek
                </a>
              </div>
            </div>
          </div>

          <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] mx-auto min-h-[350px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] flex items-center justify-center">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 10]} />
          </div>
        </div>
      </div>

      {/* Tentang */}
      <div className="tentang py-10 scroll-mt-24 bg-white" id="tentang">
        <div className="container mx-auto px-4">
          <div
            className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-base/loose mb-10">
              Hi, perkenalkan saya Thofa Hesa Alfauzi, seorang Full Stack Web
              Developer dan Designer untuk UI/UX Design, Saya percaya bahwa
              desain dan fungsionalitas harus berjalan beriringan, sehingga
              setiap proyek yang saya kembangkan tidak hanya terlihat menarik
              tetapi juga memberikan pengalaman pengguna yang optimal.
            </p>
            <div className="flex items-center justify-between">
              <img
                src={DataImage.HeroImage}
                alt="Image"
                className="w-12 rounded-md sm:block hidden"
                loading="lazy"
              />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    {listProyek.length} <span className="text-blue-600">+</span>
                  </h1>
                  <p>Proyek Selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    {tahunPengalaman} <span className="text-blue-600">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools mt-32 text-black">
            <h1
              className="text-4xl/snug font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Tools yang dipakai
            </h1>
            <p
              className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-70"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
              Website maupun Design
            </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listTools.map((tool) => (
                <div
                  className="flex items-center gap-3 p-4 border border-zinc-600 rounded-xl
                bg-zinc-800 hover:bg-gradient-to-br from-blue-500/10 to-blue-300/10
                hover:border-blue-400/30 transition-all duration-300 ease-in-out 
                shadow-sm hover:shadow-blue-500/20 text-white transform hover:scale-[1.02] group"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                >
                  <img
                    src={tool.gambar}
                    alt="Tools Image"
                    className="w-14 bg-zinc-900 p-2 rounded-md group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-white">{tool.nama}</h4>
                    <p className="opacity-60 text-sm">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek py-10 scroll-mt-18" id="proyek">
        <div className="container mx-auto px-4 ">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Proyek
          </h1>
          <p
            className="text-base/loose text-center opacity-70"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Berikut ini beberapa proyek yang telah saya buat.
          </p>
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="p-4 bg-zinc-800 rounded-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
              >
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a
                      href=""
                      className="bg-blue-600 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-700"
                    >
                      Lihat Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak sm:p-10 p-0 scroll-mt-24 bg-white " id="kontak">
        <div className="container mx-auto px-4 ">
          <h1
            className="text-4xl mb-2 font-bold text-center text-black"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Kontak
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-70 text-black"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Mari terhubung dengan saya.
          </p>
          <form
            action="https://formsubmit.co/thofahesaal@gmail.com"
            method="POST"
            className="bg-zinc-800 p-10 sm:w-fit w:full mx-auto rounded-md"
            autoComplete="of"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukan Nama..."
                  className="border border-zinc-500 p-2 rounded-md text-grey-200"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukan Email..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  cols="45"
                  rows="7"
                  placeholder="Pesan..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-700"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;
