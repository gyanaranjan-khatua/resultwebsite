
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
  Headphones,
  GraduationCap,
  CheckCircle2,
  Globe,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@resulthub.in",
    description: "Send us your questions anytime.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "We're here to help you.",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Bhubaneswar, Odisha, India",
    description: "Connecting students across India.",
    color: "from-orange-500 to-yellow-400",
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "Mon – Sat, 9 AM – 6 PM",
    description: "We usually respond within 24 hours.",
    color: "from-emerald-500 to-teal-400",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend API here.
    console.log("Contact Form:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#07152e] px-5 pb-24 pt-28 text-white sm:px-8 lg:pb-32 lg:pt-36">
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[120px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300"
          >
            <MessageCircle size={16} />
            WE'RE HERE TO HELP
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Let's Start a
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Conversation.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg"
          >
            Have a question, found an issue, or need assistance finding your
            exam results? We'd love to hear from you. Our team is always ready
            to help.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap justify-center gap-3 text-sm text-blue-100/70"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-yellow-400" />
              Student-first support
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-yellow-400" />
              Quick responses
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-yellow-400" />
              Always improving
            </span>
          </motion.div>
        </motion.div>

        <div className="absolute -bottom-1 left-0 h-16 w-full rounded-t-[50%] bg-white" />
      </section>

      {/* CONTACT DETAILS */}
      <section className="relative px-5 pb-20 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 text-center"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#07152e] sm:text-4xl">
              We'd Love to Hear From You
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Choose the easiest way to reach us. We're happy to assist you
              with your queries and feedback.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden border border-gray-100 bg-white p-7 shadow-[0_10px_40px_rgba(7,21,46,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(7,21,46,0.12)]"
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-bold text-[#07152e]">
                    {item.title}
                  </h3>
                  <p className="mt-2 break-words text-sm font-bold text-blue-700">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative overflow-hidden bg-[#f5f8fc] px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-200/40 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              <Sparkles size={16} />
              Let's Connect
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07152e] sm:text-5xl">
              Have Something
              <span className="block text-blue-600">On Your Mind?</span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-500">
              Whether it's a question about an examination result, an incorrect
              link, or a suggestion to improve ResultHub, your message matters
              to us.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Headphones,
                  title: "We're listening",
                  text: "Your questions and feedback help us improve.",
                },
                {
                  icon: Globe,
                  title: "Made for students",
                  text: "Our goal is to make result information easier to find.",
                },
                {
                  icon: CheckCircle2,
                  title: "Your feedback matters",
                  text: "Help us make ResultHub a better experience.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#07152e] text-yellow-400">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#07152e]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gray-100 bg-white p-6 shadow-[0_20px_70px_rgba(7,21,46,0.09)] sm:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-black text-[#07152e]">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill in the details below and we'll get back to you.
              </p>
            </div>

            {submitted ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={42} />
                </div>
                <h3 className="text-2xl font-black text-[#07152e]">
                  Thank You!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500">
                  Your form has been submitted in this demo. Connect the form
                  to your backend to receive real messages.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 bg-[#07152e] px-7 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#07152e]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#07152e]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#07152e]">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#07152e]">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-none border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 bg-[#07152e] px-7 py-4 font-bold text-white transition duration-300 hover:bg-blue-700"
                >
                  Send Message
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mx-auto max-w-7xl overflow-hidden bg-[#07152e] px-7 py-14 text-center text-white sm:px-14 sm:py-16"
        >
          <div className="absolute -left-20 -top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-[80px]" />
          <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
              <GraduationCap size={32} />
            </div>

            <h2 className="text-3xl font-black sm:text-4xl">
              Still Need Some Help?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100/70">
              Explore our help center for answers to common questions about
              examination results, notifications, and using ResultHub.
            </p>

            <Link
              to="/help"
              className="group mt-8 inline-flex items-center gap-3 bg-yellow-400 px-8 py-4 font-bold text-[#07152e] transition hover:bg-yellow-300"
            >
              Visit Help Center
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Contact;
