const socials = [
    { href: "https://github.com/Thofahesaalfauzi", icon: "ri-github-fill", label: "GitHub" },
    { href: "", icon: "ri-instagram-fill", label: "Instagram" },
    { href: "", icon: "ri-tiktok-fill", label: "TikTok" },
    { href: "", icon: "ri-youtube-fill", label: "YouTube" },
  ];
  
  const Footer = () => {
    return (
      <footer className="bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="py-6 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold text-white">MyPortofolio</h1>
  
            <p className="text-sm text-neutral-500 text-center">
              © {new Date().getFullYear()} Portofolio Thofahesaalfauzi.
            </p>
  
            <div className="flex items-center gap-3">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <i className={`${icon} ri-2x`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;