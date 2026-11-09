
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  ArrowRight,
  HelpCircle,
  FileText,
  GraduationCap,
  ShieldCheck,
  Clock,
  ExternalLink,
  Headphones,
  Sparkles,
  BookOpen,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "General",
    question: "What is ResultHub?",
    answer:
      "ResultHub is an examination information platform that helps students and job aspirants discover examination results, recruitment updates and educational announcements in one place.",
  },
  {
    category: "General",
    question: "Is ResultHub free to use?",
    answer:
      "Yes, you can browse examination categories and access the result information available on our platform without a subscription.",
  },
  {
    category: "Results",
    question: "How can I check my examination result?",
    answer:
      "Visit the Results section, select your examination category, find your specific examination and follow the provided result link. You may be redirected to the official examination website.",
  },
  {
    category: "Results",
    question: "Why is my result link not opening?",
    answer:
      "The official website may be experiencing heavy traffic or temporary technical issues. Try refreshing the page after some time or visit the official examination portal directly.",
  },
  {
    category: "Results",
    question: "Where can I find my roll number or scorecard?",
    answer:
      "Check the official examination website and follow its instructions. Keep your registration number, roll number and other required credentials ready.",
  },
  {
    category: "Results",
    question: "Does ResultHub publish official results?",
    answer:
      "ResultHub provides examination information and links to available result sources. Official result announcements, scorecards and final verification should always be checked on the respective examination authority's website.",
  },
  {
    category: "Account",
    question: "Do I need to create an account?",
    answer:
      "You can browse the available result information without creating an account, unless a particular external examination portal requires registration.",
  },
  {
    category: "Account",
    question: "How can I report incorrect information?",
    answer:
      "You can contact our support team through the Contact page and share the examination name, the relevant link and details of the incorrect information.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Exam",
    description: "Browse Banking, Railway, JEE, NEET, UPSC and other categories.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Find Your Result",
    description: "Select the examination and locate its result announcement.",
    icon: Search,
  },
  {
    number: "03",
    title: "Visit Official Portal",
    description: "Open the official result link and follow the required instructions.",
    icon: FileText,
  },
];

function Help() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "General", "Results", "Account"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || faq.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-[#07152e] text-white px-5 sm:px-8 py-20 lg:py-28">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-600/20 blur-[110px]" />

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 text-yellow-300 text-xs font-bold tracking-[2px] uppercase">
            <Headphones size={16} />
            Help & Support Center
          </div>

          <h1 className="mt-7 text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            How Can We
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400">
              Help You?
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-blue-100/70 max-w-2xl mx-auto leading-8">
            Have questions about examination results or our platform?
            Find answers, explore helpful guides and get the support you need.
          </p>

          {/* SEARCH */}
          <div className="relative max-w-2xl mx-auto mt-10">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl" />

            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl">
              <Search className="ml-3 text-slate-400 shrink-0" size={23} />

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCategory("All");
                }}
                placeholder="Search your question here..."
                className="w-full min-w-0 px-4 py-3.5 text-sm sm:text-base text-slate-800 outline-none bg-transparent placeholder:text-slate-400"
              />

              <button
                onClick={() =>
                  document.getElementById("faq-section")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hidden sm:flex shrink-0 items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition"
              >
                Search
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Popular topics:{" "}
            <span className="text-yellow-300">Results, Scorecards, Banking, Railway</span>
          </p>
        </motion.div>
      </section>

      {/* SUPPORT FEATURES */}
      <section className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 -mt-1 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

          {[
            {
              icon: BookOpen,
              title: "Helpful Guides",
              desc: "Learn how to find and check results.",
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              icon: ShieldCheck,
              title: "Reliable Sources",
              desc: "Follow official examination portals.",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              icon: MessageCircle,
              title: "Get Assistance",
              desc: "Find answers to common questions.",
              color: "text-orange-600",
              bg: "bg-orange-50",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl border border-slate-100 bg-white shadow-[0_5px_25px_rgba(15,40,80,0.06)] hover:-translate-y-1 transition"
              >
                <div className={`w-14 h-14 shrink-0 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                  <Icon size={27} />
                </div>

                <div>
                  <h3 className="font-extrabold text-[#071d40]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-5">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* HOW TO CHECK RESULTS */}
      <section className="bg-[#f5f8ff] py-20 px-5 sm:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 text-xs font-extrabold tracking-[2px] uppercase">
              Quick Guide
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-[#071d40] mt-4">
              How It <span className="text-blue-600">Works</span>
            </h2>

            <p className="text-slate-500 mt-4 leading-7">
              Checking your examination result is simple.
              Follow these three easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon size={32} />
                    </div>

                    <span className="text-5xl font-black text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#071d40] mt-7">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-3 leading-7">
                    {step.description}
                  </p>

                  {index !== 2 && (
                    <div className="hidden md:block absolute -right-5 top-1/2 z-10 w-10 h-10 rounded-full bg-yellow-400 text-[#071d40] items-center justify-center">
                      <ArrowRight size={19} />
                    </div>
                  )}
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq-section" className="bg-white py-20 sm:py-24 px-5 sm:px-8">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.75fr_1.25fr] gap-14">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 text-blue-600 font-extrabold text-xs tracking-[2px] uppercase">
              <HelpCircle size={16} />
              Frequently Asked Questions
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-[#071d40] mt-5 leading-tight">
              Got Questions?
              <br />
              <span className="text-blue-600">We've Got Answers.</span>
            </h2>

            <p className="text-slate-500 mt-6 leading-8">
              Explore answers to common questions about ResultHub,
              examination results and accessing official result links.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#071d40] text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-36 h-36 border-[20px] border-white/5 rounded-full" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-yellow-400 text-[#071d40] flex items-center justify-center">
                  <MessageCircle size={25} />
                </div>

                <h3 className="text-xl font-extrabold mt-5">
                  Still need help?
                </h3>

                <p className="text-sm text-slate-400 mt-2 leading-6">
                  Couldn't find the answer you're looking for?
                  Reach out to our team.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-6 text-yellow-400 font-bold text-sm hover:gap-4 transition-all"
                >
                  Contact Support
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT FAQ */}
          <div>

            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap gap-2 mb-7">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setCategory(item);
                    setActiveFaq(-1);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    category === item
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* ACCORDION */}
            <div className="space-y-3">

              <AnimatePresence mode="popLayout">
                {filteredFaqs.map((faq) => {
                  const originalIndex = faqs.indexOf(faq);
                  const isOpen = activeFaq === originalIndex;

                  return (
                    <motion.div
                      layout
                      key={faq.question}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className={`rounded-2xl border overflow-hidden transition-all ${
                        isOpen
                          ? "border-blue-200 bg-blue-50/50 shadow-sm"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setActiveFaq(isOpen ? -1 : originalIndex)
                        }
                        className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
                      >
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600">
                            {faq.category}
                          </span>

                          <h3 className="text-sm sm:text-base font-bold text-[#071d40] mt-1.5">
                            {faq.question}
                          </h3>
                        </div>

                        <div className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-all ${
                          isOpen
                            ? "bg-blue-600 text-white rotate-180"
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          <ChevronDown size={19} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 sm:px-6 pb-6 text-sm text-slate-500 leading-7 border-t border-blue-100 pt-4">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-14 rounded-2xl border border-dashed border-slate-300">
                  <AlertCircle size={35} className="mx-auto text-slate-400" />
                  <h3 className="font-bold text-[#071d40] mt-4">
                    No matching questions found
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    Try another search term or select a different category.
                  </p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setCategory("All");
                      setActiveFaq(0);
                    }}
                    className="mt-5 text-blue-600 font-bold text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="bg-[#f5f8ff] py-20 px-5 sm:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-blue-600 font-extrabold text-xs tracking-[2px] uppercase">
              We're Here To Help
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-[#071d40] mt-4">
              Get In Touch
            </h2>

            <p className="text-slate-500 mt-4">
              Choose the best way to reach our support team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {[
              {
                icon: Mail,
                title: "Email Support",
                desc: "Send us your questions or feedback.",
                action: "Contact Us",
                path: "/contact",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: MessageCircle,
                title: "Contact Page",
                desc: "Share your issue with our support team.",
                action: "Get Support",
                path: "/contact",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: Clock,
                title: "Help Center",
                desc: "Browse answers and helpful information.",
                action: "Read FAQs",
                path: "#faq-section",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#071d40] mt-6">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-3 leading-6">
                    {item.desc}
                  </p>

                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 mt-6 text-blue-600 text-sm font-extrabold hover:gap-4 transition-all"
                  >
                    {item.action}
                    <ExternalLink size={16} />
                  </Link>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#07152e] px-5 sm:px-8 py-16">

        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
            <Sparkles size={32} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mt-6">
            Your Questions Matter To Us.
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-7">
            We're working to make your examination information
            experience simpler and more convenient.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-8 px-7 py-4 rounded-xl bg-yellow-400 text-[#07152e] font-extrabold hover:bg-yellow-300 hover:-translate-y-1 transition-all"
          >
            Get In Touch
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Help;
