
import React from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  TrainFront,
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  FileText,
  BookOpen,
  Trophy,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const results = [
  {
    id: "01",
    title: "Banking",
    subtitle: "IBPS • SBI • RBI",
    description: "Banking recruitment results, scorecards and merit lists.",
    icon: Landmark,
    color: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-500/20",
    path: "/results/banking",
    label: "POPULAR",
  },
  {
    id: "02",
    title: "Railway",
    subtitle: "RRB • NTPC • Group D",
    description: "Latest railway recruitment updates and examination results.",
    icon: TrainFront,
    color: "from-orange-500 to-amber-300",
    glow: "group-hover:shadow-orange-500/20",
    path: "/results/railway",
    label: "TRENDING",
  },
  {
    id: "03",
    title: "JEE",
    subtitle: "MAIN • ADVANCED",
    description: "Engineering entrance results, ranks and scorecards.",
    icon: GraduationCap,
    color: "from-violet-500 to-fuchsia-400",
    glow: "group-hover:shadow-violet-500/20",
    path: "/results/jee",
    label: "ENTRANCE",
  },
  {
    id: "04",
    title: "NEET",
    subtitle: "UG • MEDICAL",
    description: "Medical entrance examination results and merit lists.",
    icon: Stethoscope,
    color: "from-emerald-500 to-teal-300",
    glow: "group-hover:shadow-emerald-500/20",
    path: "/results/neet",
    label: "ENTRANCE",
  },
  {
    id: "05",
    title: "UPSC",
    subtitle: "CSE • CIVIL SERVICES",
    description: "Civil services examination results and selections.",
    icon: ShieldCheck,
    color: "from-rose-500 to-pink-400",
    glow: "group-hover:shadow-rose-500/20",
    path: "/results/upsc",
    label: "GOVERNMENT",
  },
  {
    id: "06",
    title: "SSC",
    subtitle: "CGL • CHSL • MTS",
    description: "Staff selection commission results and notifications.",
    icon: FileText,
    color: "from-sky-500 to-blue-400",
    glow: "group-hover:shadow-sky-500/20",
    path: "/results/ssc",
    label: "GOVERNMENT",
  },
  {
    id: "07",
    title: "Board",
    subtitle: "CLASS 10 • CLASS 12",
    description: "School board examination results and marksheets.",
    icon: BookOpen,
    color: "from-pink-500 to-rose-300",
    glow: "group-hover:shadow-pink-500/20",
    path: "/results/board",
    label: "EDUCATION",
  },
  {
    id: "08",
    title: "Other Exams",
    subtitle: "ENTRANCE • RECRUITMENT",
    description: "Explore more competitive and government examinations.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-300",
    glow: "group-hover:shadow-yellow-500/20",
    path: "/results/other",
    label: "EXPLORE",
  },
];

function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-[#07152e] py-20 sm:py-24 lg:py-28">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/15 blur-[130px] rounded-full" />

        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-600/15 blur-[130px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="absolute top-0 right-0 w-80 h-80 border border-white/[0.04] rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="absolute bottom-0 left-0 w-72 h-72 border border-white/[0.04] rounded-full -translate-x-1/2 translate-y-1/2" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >

          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] mb-6">
              <Sparkles size={15} className="text-yellow-400" />
              <span className="text-yellow-300 text-xs font-bold tracking-[2px] uppercase">
                Explore Your Future
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight">
              Find Your
              <br className="hidden sm:block" />
              Next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400">
                Big Result.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-400 leading-8">
              One destination for every opportunity. Explore the latest
              exam results, recruitment updates and academic achievements.
            </p>

          </div>

          <Link
            to="/results"
            className="group self-start lg:self-end flex items-center gap-3 text-white font-bold border-b border-yellow-400/50 pb-3 hover:text-yellow-400 transition"
          >
            Explore All Results
            <ArrowUpRight
              size={20}
              className="text-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>

        </motion.div>

        {/* RESULTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {results.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.1,
                }}
                className="h-full"
              >

                <Link
                  to={item.path}
                  className={`group relative flex flex-col h-full min-h-[270px] overflow-hidden rounded-[22px] border border-white/[0.09] bg-gradient-to-br from-[#14294b] to-[#0c1d39] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl ${item.glow}`}
                >

                  {/* TOP ACCENT */}
                  <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition`} />

                  {/* LARGE BACKGROUND NUMBER */}
                  <span className="absolute top-5 right-5 text-6xl font-black text-white/[0.035] tracking-tighter select-none group-hover:text-white/[0.08] transition-colors">
                    {item.id}
                  </span>

                  {/* ICON AND LABEL */}
                  <div className="relative flex items-center justify-between">

                    <div className={`relative w-[58px] h-[58px] rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-500`}>
                      <Icon
                        size={28}
                        strokeWidth={1.8}
                        className="text-white"
                      />

                      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
                    </div>

                    <span className="relative px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.07] text-[9px] font-extrabold tracking-[1.2px] text-slate-400 group-hover:text-white transition">
                      {item.label}
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div className="relative mt-7">

                    <h3 className="text-[25px] font-extrabold tracking-tight text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className={`mt-2 text-[10px] font-extrabold tracking-[1.5px] bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}>
                      {item.subtitle}
                    </p>

                    <p className="mt-4 text-[13px] text-slate-400 leading-6 group-hover:text-slate-300 transition-colors">
                      {item.description}
                    </p>

                  </div>

                  {/* BOTTOM ACTION */}
                  <div className="relative mt-auto pt-7 flex items-center justify-between">

                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition">
                      Check Results
                    </span>

                    <div className={`w-10 h-10 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-white group-hover:bg-gradient-to-br ${item.color} group-hover:border-transparent group-hover:scale-110 transition-all duration-300`}>
                      <MoveUpRight size={18} />
                    </div>

                  </div>

                  {/* BOTTOM GLOW */}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-0 blur-[65px] group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

                </Link>

              </motion.div>
            );
          })}

        </div>

        {/* BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden mt-12 rounded-[24px] border border-blue-400/20 bg-gradient-to-r from-[#123b78] via-[#104b9d] to-[#122d60] p-7 sm:p-10"
        >

          <div className="absolute -right-10 -top-24 w-72 h-72 rounded-full border-[35px] border-white/[0.04]" />

          <div className="absolute right-32 bottom-[-100px] w-64 h-64 rounded-full bg-blue-400/20 blur-[80px]" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-7">

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={17} className="text-yellow-400" />
                <span className="text-yellow-300 text-xs font-bold tracking-[2px] uppercase">
                  Your Next Opportunity
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Didn't find your exam?
              </h3>

              <p className="mt-3 text-sm sm:text-base text-blue-100/70">
                Discover more examination categories and results.
              </p>
            </div>

            <Link
              to="/results"
              className="shrink-0 group flex items-center gap-3 px-7 py-4 rounded-xl bg-yellow-400 text-[#07152e] font-extrabold hover:bg-yellow-300 hover:-translate-y-1 transition-all shadow-xl shadow-yellow-400/10"
            >
              Discover More
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ResultsSection;
