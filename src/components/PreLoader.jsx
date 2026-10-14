import { useEffect, useState } from "react";

const DURATION = 2600; // lama hitung 0 -> 100 (ms)
const EXIT = 900; // lama animasi tirai terbuka (ms)

const easeInOut = (t) =>
  t < 0.5 ? 8 * t ** 4 : 1 - Math.pow(-2 * t + 2, 4) / 2;

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading | exit | done

  // Kunci scroll selama loader tampil
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Counter 0 -> 100
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 600 : DURATION;
    const start = performance.now();
    let raf;
    let timeout;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(Math.round(easeInOut(t) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else timeout = setTimeout(() => setPhase("exit"), 250);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  // Lepas dari DOM setelah tirai selesai terbuka
  useEffect(() => {
    if (phase !== "exit") return;
    const id = setTimeout(() => setPhase("done"), EXIT + 100);
    return () => clearTimeout(id);
  }, [phase]);

  if (phase === "done") return null;

  const exiting = phase === "exit";

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      role="status"
      aria-label="Loading"
    >
      <style>{`
        @keyframes pl-draw   { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes pl-up     { from { transform: translateY(110%) } to { transform: translateY(0) } }
        @keyframes pl-down   { from { transform: translateY(-110%) } to { transform: translateY(0) } }
        @keyframes pl-fade   { from { opacity: 0 } to { opacity: 1 } }
        @keyframes pl-shine  { from { transform: translateX(-100%) } to { transform: translateX(400%) } }

        .pl-half {
          position: absolute; left: 0; width: 100%; height: 50%;
          background: #000; display: flex; justify-content: center;
          transition: transform ${EXIT}ms cubic-bezier(0.76, 0, 0.24, 1);
          will-change: transform;
        }
        .pl-top    { top: 0; align-items: flex-end; padding-bottom: 1.25rem; }
        .pl-bottom { bottom: 0; align-items: flex-start; padding-top: 1.25rem; }
        .pl-top.is-exit    { transform: translateY(-100%); }
        .pl-bottom.is-exit { transform: translateY(100%); }

        .pl-mask { overflow: hidden; }
        .pl-title { display: block; animation: pl-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
        .pl-sub   { display: block; animation: pl-down 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both; }

        .pl-track { animation: pl-draw 0.8s cubic-bezier(0.76, 0, 0.24, 1) both; transform-origin: center; }
        .pl-count { animation: pl-fade 0.6s ease 1s both; }

        .pl-shine::after {
          content: ""; position: absolute; inset: 0; width: 25%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
          animation: pl-shine 1.2s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .pl-title, .pl-sub, .pl-track, .pl-count { animation-duration: 0.01ms; animation-delay: 0s; }
          .pl-shine::after { animation: none; }
          .pl-half { transition-duration: 0.2s; }
        }
      `}</style>

      {/* Setengah atas: judul */}
      <div className={`pl-half pl-top ${exiting ? "is-exit" : ""}`}>
        <div className="pl-mask">
          <h1 className="pl-title text-white text-4xl sm:text-5xl font-light tracking-tight">
            Welcome
          </h1>
        </div>
      </div>

      {/* Setengah bawah: subjudul + counter */}
      <div className={`pl-half pl-bottom ${exiting ? "is-exit" : ""}`}>
        <div className="pl-mask">
          <p className="pl-sub text-neutral-400 text-sm sm:text-base tracking-[0.25em]">
            My Portfolio
          </p>
        </div>

        <span className="pl-count absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-5xl sm:text-6xl font-extralight tabular-nums text-neutral-600">
          {String(progress).padStart(3, "0")}
        </span>
      </div>

      {/* Garis progress tepat di sambungan tirai */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(18rem,70vw)] transition-opacity duration-300"
        style={{ opacity: exiting ? 0 : 1 }}
      >
        <div className="pl-track relative h-[2px] w-full bg-white/15 overflow-hidden">
          <div
            className="pl-shine absolute inset-y-0 left-0 w-full origin-left bg-blue-500 overflow-hidden"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;