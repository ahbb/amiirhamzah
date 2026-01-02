"use client";

import { useState } from "react";

const experiences = [
  {
    company: "uParcel",
    role: "Software Engineer Intern",
    duration: "Aug 2023 - Apr 2024",
    details: [
      "Involved in integration of Singpass MyInfo API into the uParcel mobile application to streamline the signup process for uParcel delivery agents, using Flutter, Python Django and PostgreSQL",
      "Supported integration of Whatsapp API into the uParcel ecosystem to replace SMS with Whatsapp delivery notifications, using AWS Lambda",
    ],
  },
  {
    company: "ST Engineering",
    role: "Software Engineer Intern",
    duration: "Sep 2018 - Nov 2018",
    details: [
      "Involved in development of a full-stack web application using React JS, Spring Boot and MongoDB to manage users and track attendance records",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0); // default to first experience

  return (
    <div className="mx-auto flex-1 flex flex-col items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-24 pb-24 sm:pb-32 lg:pb-40">
      <section id="experience" className="w-full mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Where I've Worked
        </h2>
        <h3 className="text-md font-bold mb-4 text-blue-400">
          <a href="/">View full resume</a>
        </h3>
        <div className="flex flex-col lg:flex-row gap-2 pt-3">
          {/* Left tabs */}
          <nav className="w-full lg:w-1/6">
            <ul className="border-l border-slate-700">
              {experiences.map((exp, i) => {
                const isActive = i === activeIndex;
                return (
                  <li key={exp.company} className="relative">
                    <button
                      onClick={() => setActiveIndex(i)}
                      className={`w-full text-left px-4 py-3 -ml-px transition flex items-center
                      ${
                        isActive
                          ? "bg-slate-900 text-blue-400 border-l-4 border-blue-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }
                      `}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="text-lg">{exp.company}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right details */}
          <div className="flex-1 lg:pl-4 lg:px-72">
              <h3 className="text-xl font-semibold text-white">
                {experiences[activeIndex].role}{" "}
                <span className="text-blue-400">
                  @ {experiences[activeIndex].company}
                </span>
              </h3>

              <p className="text-sm text-slate-400 mt-1 mb-6">
                {experiences[activeIndex].duration}
              </p>

              <ul className="space-y-4 text-slate-300">
                {experiences[activeIndex].details.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-400">▸</span>
                    <p className="leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
