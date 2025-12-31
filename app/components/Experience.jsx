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
      "Developed a full-stack web application using React JS, Spring Boot and MongoDB to manage users and track attendance records",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0); // default to first experience

  return (
    <div className="max-w-full flex-1 flex flex-col items-center justify-between py-16 px-4 sm:px-8 lg:px-28">
      <section id="experience" className="w-full mb-16 scroll-mt-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Experience
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 pt-3">
          {/* Left tabs */}
          <nav className="w-full lg:w-64">
            <ul className="border-l border-slate-700">
              {experiences.map((exp, i) => {
                const isActive = i === activeIndex;
                return (
                  <li key={exp.company} className="relative">
                    <button
                      onClick={() => setActiveIndex(i)}
                      className={`w-full text-left px-4 py-3 -ml-px transition flex items-center gap-3
                      ${
                        isActive
                          ? "bg-slate-900 text-blue-400 border-l-4 border-blue-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }
                      `}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="text-sm">{exp.company}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right details */}
          <div className="flex-1">
            <div className="pl-0 lg:pl-8">
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
        </div>
      </section>
    </div>
  );
}
