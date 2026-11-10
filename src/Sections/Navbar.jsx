
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Menu,
  X,
  Bell,
  ChevronDown,
  Home,
  FileText,
  Info,
  CircleHelp,
  Phone,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Notifications", path: "/notifications", icon: Bell },
    { name: "Help", path: "/help", icon: CircleHelp },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const resultLinks = [
    { name: "Banking Results", path: "/results/banking" },
    { name: "Railway Results", path: "/results/railway" },
    { name: "JEE Results", path: "/results/jee" },
    { name: "NEET Results", path: "/results/neet" },
    { name: "UPSC Results", path: "/results/upsc" },
    { name: "SSC Results", path: "/results/ssc" },
    { name: "Board Results", path: "/results/board" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setResultsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#071d40] text-white shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-300 to-amber-500 text-[#071d40] shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap size={30} strokeWidth={2.5} />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Result<span className="text-yellow-400">Hub</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-blue-200 tracking-wider">
                YOUR RESULT, OUR PRIORITY
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-1">

            <Link
              to="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition ${
                isActive("/") ? "bg-blue-600 hover:bg-blue-500" : "hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            {/* RESULTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setResultsOpen(true)}
              onMouseLeave={() => setResultsOpen(false)}
            >
              <button
                onClick={() => setResultsOpen(true)}
                aria-expanded={resultsOpen}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition ${
                  isActive("/results") ? "bg-blue-600 hover:bg-blue-500" : "hover:bg-white/10"
                }`}
              >
                Results
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    resultsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {resultsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-60 rounded-2xl bg-white p-2 shadow-2xl border border-gray-100"
                  >
                    {resultLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setResultsOpen(false)}
                        aria-current={isActive(item.path) ? "page" : undefined}
                        className={`block px-4 py-3 rounded-xl text-sm font-semibold transition ${
                          isActive(item.path)
                            ? "bg-blue-100 text-blue-700"
                            : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`px-4 py-2.5 rounded-full font-semibold text-sm transition whitespace-nowrap ${
                  isActive(item.path) ? "bg-blue-600 hover:bg-blue-500" : "hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ALERT BUTTON */}
          <Link
            to="/notifications"
            aria-current={isActive("/notifications") ? "page" : undefined}
            className={`hidden xl:flex items-center gap-2 px-5 py-3 rounded-full border-2 border-yellow-400 font-semibold text-sm transition-all ${
              isActive("/notifications")
                ? "bg-yellow-400 text-[#071d40]"
                : "text-white hover:bg-yellow-400 hover:text-[#071d40]"
            }`}
          >
            <Bell size={17} className="text-yellow-400 group-hover:text-[#071d40]" />
            Latest Results
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-white/20 hover:bg-white/10 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#071d40]"
          >
            <div className="px-4 py-5 space-y-2">

              {/* HOME */}
              <Link
                to="/"
                onClick={closeMenu}
                aria-current={isActive("/") ? "page" : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${
                  isActive("/") ? "bg-blue-600" : "hover:bg-white/10"
                }`}
              >
                <Home size={19} />
                Home
              </Link>

              {/* MOBILE RESULTS DROPDOWN */}
              <div>
                <button
                  onClick={() => setResultsOpen(!resultsOpen)}
                  aria-expanded={resultsOpen}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition ${
                    isActive("/results") ? "bg-blue-600" : "hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <FileText size={19} />
                    Results
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      resultsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {resultsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-5 mt-2 pl-4 border-l-2 border-yellow-400 space-y-1">
                        {resultLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={closeMenu}
                            aria-current={isActive(item.path) ? "page" : undefined}
                            className={`block px-4 py-3 rounded-lg text-sm transition ${
                              isActive(item.path)
                                ? "bg-white/10 text-yellow-400"
                                : "text-blue-100 hover:bg-white/10 hover:text-yellow-400"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* OTHER LINKS */}
              {navLinks.slice(1).map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMenu}
                    aria-current={isActive(item.path) ? "page" : undefined}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${
                      isActive(item.path) ? "bg-blue-600" : "hover:bg-white/10"
                    }`}
                  >
                    <Icon size={19} />
                    {item.name}
                  </Link>
                );
              })}

              {/* MOBILE ALERT BUTTON */}
              <Link
                to="/notifications"
                onClick={closeMenu}
                aria-current={isActive("/notifications") ? "page" : undefined}
                className={`flex items-center justify-center gap-3 mt-4 px-5 py-3.5 rounded-xl text-[#071d40] font-bold shadow-lg ${
                  isActive("/notifications")
                    ? "bg-yellow-300"
                    : "bg-gradient-to-r from-yellow-400 to-amber-500"
                }`}
              >
                <Bell size={19} />
                Get Latest Alerts
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
