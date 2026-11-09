
import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  
  SendHorizonal,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#061329] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center text-[#061329]">
              <GraduationCap size={27} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Result<span className="text-yellow-400">Hub</span>
              </h2>
              <p className="text-[10px] text-slate-400 tracking-widest">
                YOUR RESULT, OUR PRIORITY
              </p>
            </div>
          </Link>

          {/* QUICK LINKS */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-400">
            {[
              { name: "Home", path: "/" },
              { name: "Results", path: "/results" },
              { name: "About", path: "/about" },
              { name: "Notifications", path: "/notifications" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3">
            {[FaFacebook, BsInstagram, BsTwitter, SendHorizonal].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={`Social media link ${i + 1}`}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:bg-yellow-400 hover:text-[#061329] hover:border-yellow-400 transition-all duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 my-8" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">

          <p className="text-center">
            © {new Date().getFullYear()} ResultHub. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-yellow-400 transition">
              Terms & Conditions
            </Link>
          </div>

          <p>
            Made with <span className="text-red-400">♥</span> for Students
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
