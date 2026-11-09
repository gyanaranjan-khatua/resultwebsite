
import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "Fast Updates",
    desc: "Stay informed with the latest examination results and announcements.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Information",
    desc: "We prioritize reliable information and official result sources.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Globe,
    title: "One Platform",
    desc: "Access multiple examination categories from one convenient place.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: HeartHandshake,
    title: "Student First",
    desc: "Designed to make checking examination results simple for everyone.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

const stats = [
  { value: "01", label: "Centralized Platform" },
  { value: "24/7", label: "Easy Accessibility" },
  { value: "100%", label: "Student Focused" },
];

function About() {
  return (
    <main className="overflow-hidden bg-[#07152e]">

      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-32 px-5 sm:px-8">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 text-yellow-300 text-xs font-bold tracking-[2px] uppercase mb-7">
            <Sparkles size={15} />
            Discover ResultHub
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Making Results
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400">
              Simple & Accessible.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-7 text-base sm:text-lg text-slate-400 leading-8">
            Your trusted destination for discovering examination results,
            recruitment updates and educational announcements.
            Everything you need, all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <Link
              to="/results"
              className="flex items-center gap-3 px-7 py-4 rounded-xl bg-yellow-400 text-[#07152e] font-extrabold hover:bg-yellow-300 hover:-translate-y-1 transition-all"
            >
              Explore Results
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-3 px-7 py-4 rounded-xl border border-white/15 text-white font-bold hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative bg-white py-20 sm:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-600 font-extrabold text-xs tracking-[2px] uppercase">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl sm:text-5xl font-black text-[#071d40] leading-tight">
              Bringing Every
              <span className="text-blue-600"> Result </span>
              Closer to You.
            </h2>

            <p className="mt-6 text-gray-500 leading-8">
              ResultHub is an examination information platform created
              to make accessing examination results easier and more
              convenient for students and job aspirants.
            </p>

            <p className="mt-4 text-gray-500 leading-8">
              From banking and railway recruitment to JEE, NEET,
              UPSC, SSC and board examinations, our goal is to bring
              important result information together in one accessible
              destination.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Easy access to different examination categories",
                "Organized result information",
                "Simple and user-friendly experience",
                "Convenient access across devices",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-blue-600 shrink-0"
                  />
                  <span className="text-sm sm:text-base font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GRAPHIC CARD */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#071d40] via-[#103b79] to-blue-700 p-8 sm:p-12 min-h-[380px] flex flex-col items-center justify-center">

              <div className="absolute w-72 h-72 rounded-full border border-white/10" />
              <div className="absolute w-52 h-52 rounded-full border border-dashed border-yellow-400/30" />
              <div className="absolute w-60 h-60 bg-blue-400/20 blur-[80px] rounded-full" />

              <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-[35px] bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center shadow-2xl shadow-yellow-500/20 rotate-[-8deg]">
                <GraduationCap
                  size={85}
                  className="text-[#071d40]"
                  strokeWidth={1.5}
                />
              </div>

              <div className="relative z-10 mt-9 text-center">
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  Your Result,
                </h3>
                <h3 className="text-3xl sm:text-4xl font-black text-yellow-400">
                  Our Priority.
                </h3>
              </div>

              <Sparkles className="absolute top-10 right-10 text-yellow-400" size={30} />
              <Sparkles className="absolute bottom-10 left-10 text-blue-200" size={22} />

            </div>

            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                <ShieldCheck className="text-green-600" size={25} />
              </div>
              <div>
                <p className="font-extrabold text-[#071d40] text-sm">
                  Student Focused
                </p>
                <p className="text-xs text-gray-400">
                  Simple. Convenient. Accessible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#f4f7fc] py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-[2px] text-xs uppercase">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#071d40] mt-4">
              Mission & Vision
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Building a more accessible and convenient examination
              information experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <motion.div
              whileHover={{ y: -7 }}
              className="rounded-3xl p-8 sm:p-10 bg-[#071d40] text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-52 h-52 border-[30px] border-white/5 rounded-full" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center text-[#071d40]">
                  <Target size={29} />
                </div>

                <h3 className="text-2xl font-extrabold mt-7">
                  Our Mission
                </h3>

                <p className="mt-4 text-blue-100/70 leading-8">
                  To simplify access to examination results and
                  educational updates by providing students and
                  aspirants with an organized, convenient and
                  user-friendly information platform.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -7 }}
              className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-blue-600 to-indigo-800 text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-52 h-52 border-[30px] border-white/5 rounded-full" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-700">
                  <Eye size={29} />
                </div>

                <h3 className="text-2xl font-extrabold mt-7">
                  Our Vision
                </h3>

                <p className="mt-4 text-blue-100 leading-8">
                  To become a convenient destination for examination
                  information, helping students and job aspirants
                  discover important updates and opportunities
                  with greater ease.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#07152e] py-20 sm:py-24 px-5 sm:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-yellow-400 font-bold text-xs tracking-[2px] uppercase">
              The ResultHub Difference
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">
              Why Choose <span className="text-yellow-400">Us?</span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              A simple platform designed around the information
              students and aspirants need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -7 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.07] hover:border-white/20 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-extrabold text-white mt-6">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-7 mt-3">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-14 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl sm:text-5xl font-black text-blue-600">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-500 font-semibold mt-2">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f4f7fc] px-5 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#0b2b5a] to-blue-700 p-9 sm:p-14 text-center">

          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-[35px] border-white/5" />

          <div className="relative z-10">
            <Award size={42} className="mx-auto text-yellow-400 mb-5" />

            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Your Next Step Starts Here.
            </h2>

            <p className="text-blue-100/75 mt-5 max-w-xl mx-auto leading-7">
              Explore examination results and stay connected
              with important updates.
            </p>

            <Link
              to="/results"
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 rounded-xl bg-yellow-400 text-[#07152e] font-extrabold hover:bg-yellow-300 hover:-translate-y-1 transition-all"
            >
              Explore Results
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
