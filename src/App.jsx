import DataImage from "./data";
import {listTools, listProyek} from "./data";
import Lanyard from "./components/Lanyard/Lanyard.jsx";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <p className="font-semibold">
              I`m Ready For Job{" "}
              <span className="bg-blue-600 px-2 py-1 rounded-md">
                Web Development
              </span>
            </p>
          </div>
          <h1 className="text-5xl/tight font-bold">I`m, Thofa Hesa Alfauzi</h1>
          <h1 className="text-5xl font-bold mb-6 text-blue-500">Full Stack Developer</h1>
          <p className="mb-6 opacity-90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa dolorum perferendis commodi autem soluta, sed, accusamus rem necessitatibus, quia exercitationem. Consequuntur, nisi suscipit ex magnam, reiciendis beatae assumenda quas ratione atque ipsam, ipsum distinctio? Sed minima magnam, accusamus eius officiis mollitia accusantium cumque, modi error, incidunt suscipit harum corporis!</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="" className="bg-blue-600 p-4 rounded-2xl hover:bg-blue-700"><i className="ri-download-line ri-lg mr-2"></i>Download CV</a>
            <a href="" className="bg-transparent p-4 rounded-2xl hover:bg-blue-600 border-2 border-blue-700"><i className="ri-folder-open-line ri-lg mr-2"></i>Lihat Proyek</a>
          </div>
        </div>
          <div className="w-[500px] md:ml-auto h-[800px]">
    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 10]}/>
  </div>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <p className="text-base/loose mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo possimus soluta asperiores sint deserunt consequuntur similique inventore unde reprehenderit magnam aperiam suscipit culpa mollitia, doloribus dolores doloremque saepe perspiciatis rem nihil accusamus pariatur odio a ullam dicta? A voluptates voluptatibus amet optio unde, sunt eius qui officiis. Animi quos obcaecati voluptas nam voluptatibus sed! Aliquam aliquid doloribus blanditiis id quas, ex eum error, omnis quidem vero, esse voluptates. Obcaecati sed reprehenderit nulla sit quaerat nesciunt eligendi repudiandae illo necessitatibus et, doloremque accusamus quia deleniti explicabo corporis, expedita quo, iusto omnis modi odit? Temporibus ab nihil perspiciatis beatae, at laudantium voluptatem nesciunt tempora, dolore unde ipsum. Porro nostrum neque accusamus harum assumenda ullam, quidem consequuntur et officiis doloremque magni .</p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">45 <span className="text-blue-600">+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">4 <span className="text-blue-600">+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-70">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website maupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-60">{tool.ket}</p>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-70">Berikut ini beberapa proyek yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="" className="bg-blue-600 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-700">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-70">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/thofahesaal@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w:full mx-auto rounded-md" autoComplete="of">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea id="pesan" name="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-700">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;
