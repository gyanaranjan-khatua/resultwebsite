
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Zap,
  GraduationCap,
  Landmark,
  TrainFront,
  Stethoscope,
  Trophy,
  FileText,
  BookOpen,
  Sparkles,
  CircleCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const exams = [
  { name: "Banking", icon: Landmark },
  { name: "Railway", icon: TrainFront },
  { name: "JEE", icon: GraduationCap },
  { name: "NEET", icon: Stethoscope },
  { name: "UPSC", icon: Trophy },
  { name: "SSC", icon: FileText },
  { name: "Board", icon: BookOpen },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#06183a] text-white">
      {/* BACKGROUND GRAPHICS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[300px] rounded-full bg-indigo-600/20 blur-[100px]" />

        {/* Diagonal graphic */}
        <div className="absolute top-0 right-[20%] w-40 h-full bg-blue-500/[0.04] -skew-x-[30deg]" />

        {/* Dot pattern */}
        <div
          className="absolute top-10 right-10 w-36 h-36 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(#60a5fa 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Golden corner */}
        <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-90"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-6 min-h-[560px] lg:min-h-[50vh] py-16 lg:py-8">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md mb-6">
              <Zap size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-yellow-300">
                India's Result Portal
              </span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight">
              All India Exam
              <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400">
                Results
              </span>{" "}
              at One Place
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-blue-100/80 leading-8">
              Get the latest results for Banking, Railway, JEE, NEET,
              UPSC, SSC and more — all in one place.
              <span className="text-yellow-300 font-semibold">
                {" "}Fast, simple and reliable.
              </span>
            </p>

            {/* EXAM CATEGORY ICONS */}
            <div className="flex flex-wrap gap-x-5 gap-y-4 mt-7">
              {exams.map((exam, index) => {
                const Icon = exam.icon;

                return (
                  <motion.div
                    key={exam.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#06183a] group-hover:border-yellow-400 transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    <span className="text-xs sm:text-sm font-medium text-blue-100 group-hover:text-yellow-300 transition">
                      {exam.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <Link
                to="/results"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-[#06183a] font-bold shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Check Latest Results
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/notifications"
                className="inline-flex items-center gap-3 px-5 py-3.5 text-white font-semibold hover:text-yellow-300 transition"
              >
                <Bell size={20} className="text-yellow-400" />
                Get Instant Alerts
              </Link>
            </div>
          </motion.div>

          {/* RIGHT GRAPHIC - CSS ONLY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex items-center justify-center min-h-[320px] lg:min-h-[420px]"
          >
            {/* Outer ring */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full border border-blue-400/20" />

            <div className="absolute w-[250px] h-[250px] sm:w-[340px] sm:h-[340px] lg:w-[370px] lg:h-[370px] rounded-full border border-dashed border-yellow-400/30 animate-[spin_40s_linear_infinite]" />

            {/* Glow */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-600/30 blur-[80px]" />

            {/* Main center graphic */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-[40px] bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-900 border border-blue-300/30 shadow-[0_20px_80px_rgba(37,99,235,0.4)] flex items-center justify-center rotate-[-6deg]">
                  <div className="absolute inset-3 rounded-[32px] border border-white/10" />

                  <GraduationCap
                    size={100}
                    strokeWidth={1.4}
                    className="text-yellow-300 drop-shadow-lg"
                  />

                  <Sparkles
                    size={24}
                    className="absolute top-5 right-5 text-yellow-300"
                  />
                </div>
              </motion.div>

              {/* Result card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="relative mt-6 w-64 sm:w-72 rounded-2xl border border-white/15 bg-[#102957]/90 backdrop-blur-xl p-4 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-200">Exam Results</p>
                    <h3 className="text-lg font-bold mt-1">
                      Result Published
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-green-400/15 flex items-center justify-center">
                    <CircleCheck
                      size={23}
                      className="text-green-400"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-blue-400/20 overflow-hidden">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-yellow-400 to-green-400" />
                  </div>
                  <span className="text-xs text-green-400 font-semibold">
                    LIVE
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Floating mini cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 left-0 sm:left-5 p-3 sm:p-4 rounded-2xl bg-[#102957] border border-blue-400/30 shadow-xl"
            >
              <Landmark size={25} className="text-yellow-400" />
              <p className="text-xs font-bold mt-2">Banking</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-10 right-0 sm:right-5 p-3 sm:p-4 rounded-2xl bg-[#102957] border border-blue-400/30 shadow-xl"
            >
              <TrainFront size={25} className="text-blue-300" />
              <p className="text-xs font-bold mt-2">Railway</p>
            </motion.div>

            <Sparkles
              size={28}
              className="absolute top-16 right-10 text-yellow-400"
            />

            <Sparkles
              size={18}
              className="absolute bottom-20 left-10 text-blue-300"
            />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM GOLDEN WAVE */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-blue-500" />
    </section>
  );
}

export default HeroSection;
