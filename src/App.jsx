import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Lanyard from "./components/Lanyard/Lanyard.jsx";
import { Typewriter } from "react-simple-typewriter";

const tahunMulai = 2022;
const tahunSekarang = new Date().getFullYear();
const tahunPengalaman = tahunSekarang - tahunMulai;

const emailKontak = "thofahesaal@gmail.com";

const fokus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC83D]";

const inputCls =
  "w-full rounded-lg border border-[#263754] bg-[#16233A] px-4 py-3 text-[#E8EEF7] placeholder:text-[#9AA9C2] focus:border-[#FFC83D] focus:outline-none focus:ring-2 focus:ring-[#FFC83D]/40";

function App() {
  return (
    <div className="bg-[#0D1330] text-slate-100">
      {/* Hero */}
      <section id="beranda" className="relative isolate overflow-hidden">
        {/* Cahaya latar di belakang Lanyard */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 top-10 h-[480px] w-[480px] rounded-full bg-indigo-500/20 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-[320px] w-[320px] rounded-full bg-amber-400/10 blur-[110px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="hero grid grid-cols-1 items-center gap-6 pt-24 md:grid-cols-2 xl:gap-0">
            <div className="mx-auto max-w-screen-xl pr-4 md:pl-16 md:pr-8 md:-translate-y-16 xl:-translate-y-14">
              <div className="animate__animated animate__fadeInUp animate__delay-3s">
                <div className="mb-6 flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-300" />
                  </span>
                  <p className="text-sm font-medium text-slate-200">
                    I am Ready For Job Web Development
                  </p>
                </div>

                <p className="mb-2 text-lg text-slate-400">Halo, I am</p>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  Thofa Hesa Alfauzi
                </h1>
                <h2 className="mb-6 mt-2 text-3xl font-bold text-amber-300 sm:text-4xl">
                  <Typewriter
                    words={["PHP Developer", "Network Engineering", "IT Infrastruktur"]}
                    loop={0}
                    cursor
                    typeSpeed={80}
                    deleteSpeed={70}
                    delaySpeed={1500}
                  />
                </h2>
                <p className="mb-8 max-w-xl leading-relaxed text-slate-300">
                  Saya memiliki ketertarikan di bidang pemrograman PHP, jaringan
                  komputer, dan infrastruktur IT. Saya terus mempelajari dan
                  mengembangkan kemampuan di bidang pengembangan website,
                  konfigurasi jaringan, serta pengelolaan perangkat dan sistem
                  IT.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-flex items-center rounded-2xl bg-amber-400 px-6 py-3.5 font-semibold text-[#0D1330] shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
                  >
                    <i className="ri-download-line ri-lg mr-2"></i>Download CV
                  </a>
                  <a
                    href="#proyek"
                    className="inline-flex items-center rounded-2xl border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
                  >
                    <i className="ri-folder-open-line ri-lg mr-2"></i>Lihat
                    Proyek
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto flex min-h-[350px] w-[250px] items-center justify-center sm:min-h-[500px] sm:w-[350px] md:min-h-[600px] md:w-[450px] md:-translate-y-12 lg:min-h-[700px] lg:w-[550px] xl:min-h-[800px] xl:w-[650px] xl:-translate-y-20">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 10]} />
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section className="tentang scroll-mt-24 bg-[#1B2742] py-20" id="tentang">
        <div className="container mx-auto px-4">
          <div
            className="mx-auto w-full rounded-3xl bg-[#0D1330] p-8 shadow-xl shadow-indigo-900/10 lg:w-3/4 xl:w-2/3 sm:p-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="mb-10 text-lg leading-loose text-slate-300">
            Saya Thofa Hesa Alfauzi, lulusan D3 Teknik Informatika dengan minat pada PHP Development, Network Engineering, dan IT Infrastructure. Saya memiliki pengalaman dalam pengembangan sistem berbasis web serta konfigurasi dan pemeliharaan perangkat komputer.
            </p>
            <div className="flex items-center justify-between border-t border-white/10 pt-8">
              <img
                src={DataImage.HeroImage}
                alt="Foto Thofa Hesa Alfauzi"
                className="hidden w-14 rounded-xl ring-2 ring-amber-300/60 sm:block"
                loading="lazy"
              />
              <div className="flex items-center gap-10">
                <div>
                  <h3 className="mb-1 text-4xl font-bold text-white">
                    {listProyek.length}
                    <span className="text-amber-300">+</span>
                  </h3>
                  <p className="text-slate-400">Proyek Selesai</p>
                </div>
                <div className="border-l border-white/10 pl-10">
                  <h3 className="mb-1 text-4xl font-bold text-white">
                    {tahunPengalaman}
                    <span className="text-teal-300">+</span>
                  </h3>
                  <p className="text-slate-400">Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools mt-28">
            <h2
              className="mb-4 text-4xl font-bold leading-snug text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Tools yang dipakai
            </h2>
            <p
              className="w-full leading-loose text-slate-300 sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
              Website maupun Design
            </p>
            <div className="tools-box mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {listTools.map((tool) => (
                <div
                  className="group flex items-center gap-3 rounded-2xl border border-[#34425F] bg-[#24314D] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-lg hover:shadow-teal-500/10"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                >
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-14 rounded-xl bg-[#33415D] p-2 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-white">{tool.nama}</h4>
                    <p className="text-sm text-slate-300">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proyek (gaya paste 2) */}
      <section id="proyek" className="scroll-mt-24 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Proyek</h2>
            <p className="max-w-xl leading-relaxed text-[#9AA9C2]">
              Berikut ini beberapa proyek yang telah saya buat.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {listProyek.map((proyek) => (
                <article
                  key={proyek.id}
                  className="flex flex-col rounded-2xl border border-[#263754] bg-[#16233A] p-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={proyek.dad}
                >
                  <img
                    src={proyek.gambar}
                    alt={`Tampilan proyek ${proyek.nama}`}
                    className="aspect-video w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col p-3">
                    <h3 className="mb-2 mt-2 text-xl font-bold">
                      {proyek.nama}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-[#9AA9C2]">
                      {proyek.desk}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {proyek.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="rounded-full border border-[#263754] bg-[#0E1726] px-3 py-1 text-xs font-medium text-[#5CCBF2]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proyek.link ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-auto block rounded-xl border border-[#FFC83D] px-4 py-3 text-center font-semibold text-[#FFC83D] transition-colors hover:bg-[#FFC83D] hover:text-[#0E1726] ${fokus}`}
                    >
                      Lihat Website
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontak dan email (gaya paste 2) */}
      <section
        id="kontak"
        className="scroll-mt-24 bg-[#222E47] py-24 text-slate-100"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Mari terhubung dengan saya
              </h2>
              <p className="mb-8 max-w-md leading-relaxed text-slate-300">
                Punya proyek, peluang kerja, atau sekadar ingin berdiskusi?
                Kirim pesan lewat formulir, saya akan membalasnya lewat email.
              </p>
              <a
                href={`mailto:${emailKontak}`}
                className={`inline-flex items-center gap-3 font-semibold ${fokus}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#FFC83D] text-xl text-[#0E1726]">
                  <i className="ri-mail-line"></i>
                </span>
                {emailKontak}
              </a>
            </div>

            <form
              action={`https://formsubmit.co/${emailKontak}`}
              method="POST"
              className="rounded-3xl border border-white/10 bg-[#121C33] p-8 text-[#E8EEF7] shadow-xl shadow-black/10 sm:p-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nama" className="text-sm font-semibold">
                    Nama lengkap
                  </label>
                  <input
                    id="nama"
                    type="text"
                    name="nama"
                    autoComplete="name"
                    placeholder="Masukkan nama..."
                    className={inputCls}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Masukkan email..."
                    className={inputCls}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pesan" className="text-sm font-semibold">
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows="6"
                    placeholder="Tulis pesan..."
                    className={`${inputCls} resize-y`}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full cursor-pointer rounded-xl bg-[#FFC83D] px-4 py-3.5 font-semibold text-[#0E1726] transition-colors hover:bg-[#FFD76B] ${fokus}`}
                >
                  Kirim pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;