"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projectStories = [
  {
    statement:
      "A premium booking experience created to make it easier for customers to explore services, reserve appointments and pay deposits.",
    project: "PENGTRESSES",
    category: "Beauty · Booking platform",
    focus: "Bookings and deposits",
  },
  {
    statement:
      "A professional corporate website designed to communicate manufacturing capability, product quality and business credibility.",
    project: "Power Electrode Ltd",
    category: "Manufacturing · Corporate website",
    focus: "Trust and enquiries",
  },
  {
    statement:
      "A clear digital presence created to help customers understand the company’s logistics services and contact the right team.",
    project: "Total Logistics",
    category: "Logistics · Business website",
    focus: "Service discovery",
  },
  {
    statement:
      "A refined online storefront designed to present jewellery products through a modern, responsive shopping experience.",
    project: "NUMO & SEBI",
    category: "Retail · E-commerce",
    focus: "Product experience",
  },
];

const DISPLAY_TIME = 6500;
const TRANSITION_TIME = 500;

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const transitionTimeout = useRef<number | null>(null);

  const changeProject = (nextIndex: number) => {
    if (nextIndex === activeIndex || isAnimating) return;

    if (transitionTimeout.current) {
      window.clearTimeout(transitionTimeout.current);
    }

    setIsAnimating(true);

    transitionTimeout.current = window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsAnimating(false);
    }, TRANSITION_TIME);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsAnimating(true);

      transitionTimeout.current = window.setTimeout(() => {
        setActiveIndex(
          (currentIndex) => (currentIndex + 1) % projectStories.length,
        );

        setIsAnimating(false);
      }, TRANSITION_TIME);
    }, DISPLAY_TIME);

    return () => {
      window.clearInterval(interval);

      if (transitionTimeout.current) {
        window.clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  const activeProject = projectStories[activeIndex];

  return (
    <div className="bg-[#efefed] px-3 py-2 sm:px-4">
      <section className="relative overflow-hidden rounded-[28px] bg-[#FFF75A] py-14 text-black lg:rounded-[34px] lg:py-20">
        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[60px] border-white/20" />

        <div className="pointer-events-none absolute -bottom-32 left-[35%] h-72 w-72 rounded-full border-[55px] border-white/15" />

        <div className="pointer-events-none absolute left-12 top-1/2 h-24 w-24 rounded-full bg-white/10 blur-xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section label */}
          <div className="mb-10 flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/55 sm:text-xs">
              Selected project stories
            </span>

            <div className="h-px flex-1 bg-black/15" />

            <span className="font-mono text-xs text-black/55">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projectStories.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Project statement */}
            <div className="lg:col-span-8">
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isAnimating
                    ? "translate-y-5 opacity-0 blur-[3px]"
                    : "translate-y-0 opacity-100 blur-0"
                }`}
              >
                <p className="max-w-[850px] font-display text-[clamp(2rem,3.5vw,4.2rem)] leading-[1.05] tracking-[-0.045em]">
                  {activeProject.statement}
                </p>
              </div>

              {/* Project identity */}
              <div
                className={`mt-9 flex items-center gap-4 transition-all delay-75 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isAnimating
                    ? "translate-y-3 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/15 bg-white/35">
                  <span className="font-display text-xl">
                    {activeProject.project.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="font-medium">{activeProject.project}</p>

                  <p className="mt-1 text-sm text-black/55">
                    {activeProject.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Project focus */}
            <div className="lg:col-span-4">
              <div
                className={`rounded-[22px] border border-black/10 bg-white/55 p-7 shadow-[0_20px_50px_rgba(100,90,0,0.08)] backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isAnimating
                    ? "translate-y-4 scale-[0.96] opacity-0"
                    : "translate-y-0 scale-100 opacity-100"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/50">
                    Project focus
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-black/40" />
                </div>

                <p className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                  {activeProject.focus}
                </p>
              </div>

              {/* Navigation dots */}
              <div className="mt-6 flex gap-2">
                {projectStories.map((project, index) => (
                  <button
                    key={project.project}
                    type="button"
                    onClick={() => changeProject(index)}
                    aria-label={`View ${project.project}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      index === activeIndex
                        ? "w-10 bg-black"
                        : "w-2 bg-black/20 hover:bg-black/45"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-black/40">
                Automatically changes every 6.5 seconds
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
