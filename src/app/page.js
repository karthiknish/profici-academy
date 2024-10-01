"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { WobbleCard } from "@/components/ui/wobble-card";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Link from "next/link";
const reviews = [
  {
    name: "Sarah J.",
    body: "The Profici Academy transformed my career. The hands-on experience and expert mentorship were invaluable.",
    img: "https://avatar.vercel.sh/sarahj",
  },
  {
    name: "Mike T.",
    body: "I landed my dream job thanks to the skills I gained at Profici. The real-world projects gave me a significant edge.",
    img: "https://avatar.vercel.sh/miket",
  },
  {
    name: "Emily R.",
    body: "The program's focus on current industry trends and practices made all the difference. Highly recommended!",
    img: "https://avatar.vercel.sh/emilyr",
  },
  {
    name: "John D.",
    body: "Profici's expert mentorship helped me develop a strong portfolio. I'm now confidently pursuing my career goals.",
    img: "https://avatar.vercel.sh/johnd",
  },
  {
    name: "Lisa M.",
    body: "The hands-on approach at Profici gave me practical skills that I use daily in my new role as a digital marketer.",
    img: "https://avatar.vercel.sh/lisam",
  },
  {
    name: "Alex K.",
    body: "Profici's program was a game-changer for me. The real-world experience and networking opportunities were invaluable.",
    img: "https://avatar.vercel.sh/alexk",
  },
  {
    name: "Rachel H.",
    body: "Profici's curriculum is cutting-edge. I feel well-prepared for the rapidly evolving digital marketing landscape.",
    img: "https://avatar.vercel.sh/rachelh",
  },
  {
    name: "David W.",
    body: "The instructors at Profici are true industry experts. Their insights and guidance were incredibly valuable.",
    img: "https://avatar.vercel.sh/davidw",
  },
  {
    name: "Sophie L.",
    body: "I appreciated the flexibility of Profici's program. It allowed me to balance my studies with my existing commitments.",
    img: "https://avatar.vercel.sh/sophiel",
  },
  {
    name: "Omar F.",
    body: "The collaborative projects at Profici taught me how to work effectively in a team, a crucial skill in this industry.",
    img: "https://avatar.vercel.sh/omarf",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-200 py-4"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center p-2 rounded-lg mb-4 md:mb-0">
            <Link href="https://profici.co.uk">
              <Image
                src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/Proficiblack.svg"
                alt="Profici Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <nav className="w-full md:w-auto">
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center ${
                mobileMenuOpen ? "block" : "hidden"
              } md:flex`}
            >
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 hover:underline block py-2 md:py-0"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#about")
                      .scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-700 hover:text-gray-900 hover:underline block py-2 md:py-0"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#programs")
                      .scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-gray-900 hover:underline block py-2 md:py-0"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#testimonials")
                      .scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-gray-700 hover:text-gray-900 hover:underline block py-2 md:py-0"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#apply")
                      .scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  Apply
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>

      <main className="flex-grow">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <div className="">
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl cursor-pointer font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
              >
                Kickstart your career with Profici Digital Marketing Academy.
                <br />
                Our program offers <br />
                <Highlight className="text-black cursor-pointer dark:text-white">
                  Hands-on experience, Expert mentorship, and Real-world skills.
                </Highlight>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center mt-8"
              >
                <a
                  href="#apply"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                >
                  Apply Now
                </a>
              </motion.div>
            </HeroHighlight>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="about"
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold mb-12 text-center text-black relative"
            >
              About Profici Academy
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="h-full cursor-pointer w-full transform hover:scale-105 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-lg p-6">
                    <div className="absolute inset-0  opacity-75"></div>
                    <p className="text-2xl font-bold relative z-20 mb-4 text-white">
                      Learn by Doing
                    </p>
                    <div className="text-white mt-4 relative z-20">
                      <p className="mb-4">
                        Work on real projects for Profici&apos;s clients,
                        gaining invaluable experience in the digital marketing
                        industry. Our hands-on approach ensures you&apos;re not
                        just learning theory, but applying it in real-world
                        scenarios.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-indigo-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Collaborate on live client projects
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-indigo-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Develop a professional portfolio
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-indigo-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Gain practical skills valued by employers
                        </li>
                      </ul>
                    </div>
                    <p className="text-indigo-200 mt-6 relative z-20 text-sm italic">
                      Our hands-on approach ensures you&apos;re applying your
                      knowledge in real-world scenarios.
                    </p>
                  </div>
                </CardSpotlight>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="h-full cursor-pointer w-full transform hover:scale-105 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-lg p-6">
                    <div className="absolute inset-0 opacity-75"></div>
                    <p className="text-2xl font-bold relative z-20 mb-4 text-white">
                      Expert Mentorship
                    </p>
                    <div className="text-white mt-4 relative z-20">
                      <p className="mb-4">
                        Receive guidance from Profici&apos;s industry
                        professionals who will help you develop your skills and
                        build your portfolio. Our mentors are active
                        practitioners with years of experience in digital
                        marketing.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-pink-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          One-on-one coaching sessions
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-pink-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Industry insights and trend analysis
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-pink-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Career guidance and networking opportunities
                        </li>
                      </ul>
                    </div>
                    <p className="text-pink-200 mt-6 relative z-20 text-sm italic">
                      Our expert mentors provide invaluable guidance to help you
                      succeed in the digital marketing industry.
                    </p>
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="programs"
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center relative"
            >
              Profici&apos;s Programs
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></span>
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <WobbleCard containerClassName="col-span-1 relative bg-white cursor-pointer min-h-[300px] flex flex-col justify-between rounded-lg shadow-lg shadow-gray-300">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">
                      Social Media Marketing
                    </h3>
                    <p className="mb-4 text-left italic border-l-4 border-indigo-500 pl-4">
                      &ldquo;Master the art of engaging audiences across various
                      social platforms with Profici&apos;s expertise.&rdquo;
                    </p>
                  </div>
                  <ul className="list-none space-y-4 mt-auto">
                    <li className="flex items-center text-left bg-gradient-to-r from-indigo-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">🎨</span>
                      <span className="font-medium">
                        Content creation strategies
                      </span>
                    </li>
                    <li className="flex items-center text-left bg-gradient-to-r from-blue-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">👥</span>
                      <span className="font-medium">Community management</span>
                    </li>
                    <li className="flex items-center text-left bg-gradient-to-r from-purple-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">🔍</span>
                      <span className="font-medium">
                        Social media trend analysis
                      </span>
                    </li>
                  </ul>
                </WobbleCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <WobbleCard containerClassName="col-span-1 bg-white cursor-pointer min-h-[300px] flex flex-col justify-between rounded-lg shadow-lg shadow-gray-300">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">
                      Website Development
                    </h3>
                    <p className="mb-4 text-left italic border-l-4 border-indigo-500 pl-4">
                      &ldquo;Learn to create stunning, functional websites that
                      engage users and drive business growth.&rdquo;
                    </p>
                  </div>
                  <ul className="list-none space-y-4 mt-auto">
                    <li className="flex items-center text-left bg-gradient-to-r from-indigo-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">💻</span>
                      <span className="font-medium">
                        Front-end and back-end development
                      </span>
                    </li>
                    <li className="flex items-center text-left bg-gradient-to-r from-blue-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">🎨</span>
                      <span className="font-medium">
                        UI/UX design principles
                      </span>
                    </li>
                    <li className="flex items-center text-left bg-gradient-to-r from-purple-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">🚀</span>
                      <span className="font-medium">
                        Website optimization techniques
                      </span>
                    </li>
                  </ul>
                </WobbleCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <WobbleCard containerClassName="col-span-1 bg-white cursor-pointer min-h-[300px] flex flex-col justify-between rounded-lg shadow-lg shadow-gray-300">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">
                      Pay-Per-Click (PPC)
                    </h3>
                    <p className="mb-4 text-left italic border-l-4 border-indigo-500 pl-4">
                      &ldquo;Master the art of PPC advertising to drive targeted
                      traffic, maximize ROI, and achieve your marketing goals
                      effectively.&rdquo;
                    </p>
                  </div>
                  <ul className="list-none space-y-4 mt-auto">
                    <li className="flex items-center text-left bg-gradient-to-r from-indigo-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">🎯</span>
                      <span className="font-medium">
                        Campaign strategy and optimization
                      </span>
                    </li>
                    <li className="flex items-center text-left bg-gradient-to-r from-blue-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">💰</span>
                      <span className="font-medium">
                        Budget management and bidding
                      </span>
                    </li>
                    <li className="flex items-center text-left bg-gradient-to-r from-purple-50 to-transparent p-2 rounded-lg h-20">
                      <span className="mr-3 text-3xl">📊</span>
                      <span className="font-medium">
                        Performance analysis and reporting
                      </span>
                    </li>
                  </ul>
                </WobbleCard>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="testimonials"
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center relative"
            >
              What Our Graduates Say
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background"
            >
              <Marquee pauseOnHover className="[--duration:20s] w-full">
                {firstRow.map((review) => (
                  <ReviewCard key={review.name} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s] w-full">
                {secondRow.map((review) => (
                  <ReviewCard key={review.name} {...review} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="apply"
          className="py-16 text-black bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10"
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-br from-indigo-600 to-blue-500 bg-clip-text text-transparent text-center"
            >
              Apply to Profici Academy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl mb-12 text-center"
            >
              Take the first step towards your digital marketing career with
              Profici
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg max-w-md"
              >
                <h3 className="text-2xl font-semibold mb-4">How to Apply</h3>
                <ol className="list-decimal pl-5 mb-4 text-left">
                  <li>Fill out our online application form</li>
                  <li>Submit your resume and portfolio (if available)</li>
                  <li>Complete a brief skills assessment</li>
                  <li>Interview with our admissions team</li>
                </ol>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <p className="text-lg mb-4 font-medium">
                  Ready to transform your future?
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
                >
                  Start Your Profici Application
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-200 text-gray-500 py-2"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="">
            &copy; {new Date().getFullYear()} Profici. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
