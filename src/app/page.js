"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { CardSpotlight } from "@/components/ui/card-spotlight";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/Proficiblack.svg"
              alt="Profici Logo"
              width={120}
              height={40}
            />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-700 hover:text-gray-900 hover:underline"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-gray-900 hover:underline"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-gray-700 hover:text-gray-900 hover:underline"
                >
                  Apply
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-white">
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
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
              >
                Kickstart your career with Profici Digital Marketing Academy.
                <br />
                Our program offers <br />
                <Highlight className="text-black dark:text-white">
                  Hands-on experience, expert mentorship, and real-world skills.
                </Highlight>
              </motion.h1>
              <div className="text-center mt-8">
                <a
                  href="#apply"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                >
                  Apply Now
                </a>
              </div>
            </HeroHighlight>
          </div>
        </section>

        <section id="about" className="py-16  ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-black relative">
              About Profici Academy
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <CardSpotlight className="h-full cursor-pointer w-full transform hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-lg p-6">
                  <div className="absolute inset-0  opacity-75"></div>
                  <p className="text-2xl font-bold relative z-20 mb-4 text-white">
                    Learn by Doing
                  </p>
                  <div className="text-white mt-4 relative z-20">
                    <p className="mb-4">
                      Work on real projects for Profici&apos;s clients, gaining
                      invaluable experience in the digital marketing industry.
                      Our hands-on approach ensures you&apos;re not just
                      learning theory, but applying it in real-world scenarios.
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
                      build your portfolio. Our mentors are active practitioners
                      with years of experience in digital marketing.
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
            </div>
          </div>
        </section>

        <section id="programs" className="bg-gray-100 text-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Profici&apos;s Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Social Media Marketing
                </h3>
                <p className="mb-4">
                  Master the art of engaging audiences across various social
                  platforms with Profici&apos;s expertise.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Content creation strategies</li>
                  <li>Community management</li>
                  <li>Social media analytics</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Website Development
                </h3>
                <p className="mb-4">
                  Learn to create and manage effective websites using
                  Profici&apos;s proven strategies.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>HTML, CSS, and JavaScript fundamentals</li>
                  <li>Responsive design principles</li>
                  <li>User experience (UX) optimization</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  PPC & Digital Advertising
                </h3>
                <p className="mb-4">
                  Develop skills in creating and managing effective paid
                  advertising campaigns with Profici&apos;s industry-leading
                  techniques.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Google Ads and Facebook Ads</li>
                  <li>Campaign optimization</li>
                  <li>Conversion tracking and analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="container text-black mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Graduates Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white  p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  &apos;Profici Academy gave me the practical skills and
                  confidence to land my dream job in digital marketing. The
                  hands-on experience was invaluable.&apos;
                </p>
                <p className="font-semibold">
                  - Sarah J., Social Media Specialist
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  &apos;The mentorship I received at Profici was game-changing.
                  I now run my own successful digital marketing agency thanks to
                  the skills I learned here.&apos;
                </p>
                <p className="font-semibold">- Michael T., Agency Founder</p>
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="py-16 text-black bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Apply to Profici Academy
            </h2>
            <p className="text-xl mb-8">
              Take the first step towards your digital marketing career with
              Profici
            </p>
            <div className="max-w-md mx-auto">
              <p className="mb-4">
                Ready to transform your future? Here&apos;s how to apply:
              </p>
              <ol className="text-left list-decimal pl-5 mb-8">
                <li>Fill out our online application form</li>
                <li>Submit your resume and portfolio (if available)</li>
                <li>Complete a brief skills assessment</li>
                <li>Interview with our admissions team</li>
              </ol>
            </div>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Profici Application
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Profici. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
