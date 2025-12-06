// Navigation.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mouse, Menu, X, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const mainLinks = [
  { path: "/scan", label: "손 스캔" },
  { path: "/analysis", label: "AI 분석" },
  { path: "/customize", label: "커스터마이징" },
  { path: "/recommendation", label: "쉘 추천" },
  { path: "/weekly-report", label: "주간 리포트" },
];

const supportLinks = [
  { path: "/checkout", label: "스토어" },
  { path: "#", label: "지원" },
  { path: "#", label: "커뮤니티" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLinks = (links: typeof mainLinks) =>
    links.map((link) => (
      <Link
        key={link.path + link.label}
        to={link.path}
        className={`text-xs font-semibold uppercase tracking-[0.25em] ${
          location.pathname === link.path
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </Link>
    ));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      // 🔥 fixed → sticky 로 변경해서 콘텐츠 안 가리게
      className={`sticky top-0 z-50 ${
        scrolled ? "backdrop-blur-xl bg-black/80" : "backdrop-blur-lg bg-black/60"
      }`}
    >

      <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 sm:px-6 ${
            scrolled ? "bg-black/75" : "bg-black/55"
          } shadow-[0_18px_45px_rgba(0,0,0,0.7)]`}
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <Mouse className="h-8 w-8" style={{ color: "var(--ux-green)" }}/>
              <div className="absolute inset-0 rounded-full bg-[#44d62c]/25 blur-lg" />
            </div>
            <div>
              <span className="text-lg font-semibold tracking-tight">
                콤,마
              </span>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {renderLinks(mainLinks)}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            {renderLinks(supportLinks)}
            <Link
              to="/scan"
              className="ux-btn-primary text-[0.7rem] uppercase tracking-[0.3em]"
            >
              프로젝트 시작
            </Link>
          </div>

          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="모바일 메뉴 토글"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mx-auto mt-3 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8 lg:hidden"
        >
          <div className="rounded-2xl border border-white/10 bg-black/90 px-6 py-5">
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                메뉴
              </p>
              {renderLinks(mainLinks)}
              <div className="ux-divider" />
              {renderLinks(supportLinks)}
              <Link
                to="/scan"
                className="ux-btn-primary w-full text-center text-[0.7rem] uppercase tracking-[0.3em]"
              >
                프로젝트 시작
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
