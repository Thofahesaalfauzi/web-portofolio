import { useState, useEffect } from "react";

const links = [
  { id: "beranda", label: "Beranda", icon: "ri-home-5-line" },
  { id: "tentang", label: "Tentang", icon: "ri-user-3-line" },
  { id: "proyek", label: "Proyek", icon: "ri-folder-open-line" },
  { id: "kontak", label: "Kontak", icon: "ri-mail-line" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("beranda");

  // Efek navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY < 100) setActiveId("beranda");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menandai menu aktif sesuai section yang sedang dilihat
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (e, id) => {
    setOpen(false);
    // "beranda" tidak punya id di App.jsx, jadi scroll ke paling atas
    if (id === "beranda") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveId("beranda");
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full transition-all duration-500 ease-out ${
          scrolled ? "max-w-3xl" : "max-w-6xl"
        }`}
        aria-label="Navigasi utama"
      >
        {/* Bar utama */}
        <div
          className={`flex items-center justify-between rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "bg-white/5 border-white/10 shadow-lg shadow-black/10"
              : "bg-white/5 border-white/10"
          }`}
        >
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => handleNav(e, "beranda")}
            className="flex items-center gap-2 pl-1"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-yellow-300 text-sm font-extrabold text-black">
              TH
            </span>
            <span className="text-lg font-bold text-white">
              Thofa<span className="text-yellow-300">Hesa</span>
            </span>
          </a>

          {/* Menu desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNav(e, link.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-yellow-300 text-black"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA desktop */}
          <a
            href="#kontak"
            className="hidden items-center gap-2 rounded-full border border-yellow-300/60 px-4 py-2 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-300 hover:text-black md:inline-flex"
          >
            <i className="ri-send-plane-line"></i>
            Hubungi Saya
          </a>

          {/* Tombol hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 md:hidden"
          >
            <i className={open ? "ri-close-line" : "ri-menu-4-line"}></i>
          </button>
        </div>

        {/* Menu mobile */}
        <div
          id="menu-mobile"
          aria-hidden={!open}
          className={`grid transition-all duration-300 ease-out md:hidden ${
            open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {/* Perubahan ada di baris bawah ini (disamakan dengan gaya desktop: bg-white/5, border-white/10, dan backdrop-blur-xl) */}
            <ul className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-lg shadow-black/20 backdrop-blur-xl">
              {links.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      tabIndex={open ? 0 : -1}
                      onClick={(e) => handleNav(e, link.id)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-medium transition ${
                        isActive
                          ? "bg-yellow-300 text-black"
                          : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <i className={`${link.icon} text-lg`}></i>
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="p-2 pt-3">
                <a
                  href="#kontak"
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-yellow-300/60 px-4 py-3 font-semibold text-yellow-300 transition hover:bg-yellow-300 hover:text-black"
                >
                  <i className="ri-send-plane-line"></i>
                  Hubungi Saya
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;