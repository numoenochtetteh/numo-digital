"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

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
    <div className="bg-[#f4f4f1] px-3 py-3 sm:px-4">
      <section className="project-stories relative overflow-hidden rounded-[26px] border border-black/[0.06] bg-[#eeece6] py-10 text-black sm:py-12 lg:rounded-[32px] lg:py-14">
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="story-orb story-orb-one pointer-events-none absolute -left-24 -top-20 h-[300px] w-[300px] rounded-full bg-[#d9ff25]/30 blur-[110px]" />

        <div className="story-orb story-orb-two pointer-events-none absolute -right-20 top-10 h-[340px] w-[340px] rounded-full bg-[#9d8cff]/15 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-120px] left-[45%] h-[260px] w-[260px] rounded-full bg-[#ff9f6d]/10 blur-[100px]" />

        {/* subtle grid */}
        <div className="story-dot-grid pointer-events-none absolute right-[7%] top-[10%] hidden grid-cols-5 gap-[13px] opacity-30 lg:grid">
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="story-grid-dot h-[3px] w-[3px] rounded-full bg-black"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            />
          ))}
        </div>

        {/* large decorative number */}
        <div className="pointer-events-none absolute -bottom-10 left-5 hidden font-display text-[180px] font-semibold leading-none text-black/[0.025] lg:block">
          0{activeIndex + 1}
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-12">
          {/* =====================================================
              TOP
          ===================================================== */}

          <div className="mb-8 flex items-center gap-4 lg:mb-10">
            <div className="flex items-center gap-3">
              <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d9ff25]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/50 sm:text-[10px]">
                Selected project stories
              </span>
            </div>

            <div className="h-px flex-1 bg-black/10" />

            <span className="font-mono text-[9px] text-black/40 sm:text-[10px]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projectStories.length).padStart(2, "0")}
            </span>
          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
            {/* =================================================
                STORY
            ================================================= */}

            <div>
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isAnimating
                    ? "translate-y-5 opacity-0 blur-[3px]"
                    : "translate-y-0 opacity-100 blur-0"
                }`}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-3 py-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#9cae00]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-black/45">
                    Project outcome
                  </span>
                </div>

                <p className="max-w-[860px] font-display text-[clamp(2.2rem,3.5vw,4rem)] font-medium leading-[1] tracking-[-0.05em]">
                  {activeProject.statement}
                </p>
              </div>

              {/* =================================================
                  PROJECT DETAILS
              ================================================= */}

              <div
                className={`mt-7 flex flex-wrap items-center gap-4 transition-all delay-75 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isAnimating
                    ? "translate-y-3 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-black/10 bg-[#d9ff25] shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
                  <span className="font-display text-lg font-semibold">
                    {activeProject.project.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="text-[14px] font-semibold sm:text-[15px]">
                    {activeProject.project}
                  </p>

                  <p className="mt-1 text-[11px] text-black/45 sm:text-xs">
                    {activeProject.category}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT CARD
            ================================================= */}

            <div>
              <div
                className={`relative overflow-hidden rounded-[22px] border border-black/[0.08] bg-white/70 p-6 shadow-[0_20px_55px_rgba(45,40,30,0.08)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-7 ${
                  isAnimating
                    ? "translate-y-4 scale-[0.97] opacity-0"
                    : "translate-y-0 scale-100 opacity-100"
                }`}
              >
                <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#d9ff25]/20 blur-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-black/40">
                        Project focus
                      </span>

                      <p className="mt-4 font-display text-[clamp(2rem,2.7vw,3.25rem)] font-medium leading-[0.95] tracking-[-0.045em]">
                        {activeProject.focus}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* status */}
                  <div className="mt-7 flex items-center justify-between border-t border-black/[0.08] pt-4">
                    <div className="flex items-center gap-2">
                      <span className="h-[7px] w-[7px] rounded-full bg-[#d9ff25]" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.11em] text-black/40">
                        Built by Numo Digital
                      </span>
                    </div>

                    <span className="font-mono text-[8px] text-black/30">
                      2026
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  NAVIGATION
              ================================================= */}

              <div className="mt-5 flex items-center justify-between gap-5">
                <div className="flex gap-2">
                  {projectStories.map((project, index) => (
                    <button
                      key={project.project}
                      type="button"
                      onClick={() => changeProject(index)}
                      aria-label={`View ${project.project}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      className={`relative h-[7px] overflow-hidden rounded-full transition-all duration-500 ease-out ${
                        index === activeIndex
                          ? "w-11 bg-black"
                          : "w-[7px] bg-black/15 hover:bg-black/40"
                      }`}
                    >
                      {index === activeIndex && (
                        <span className="story-progress absolute inset-y-0 left-0 bg-[#d9ff25]" />
                      )}
                    </button>
                  ))}
                </div>

                <span className="hidden font-mono text-[8px] uppercase tracking-[0.12em] text-black/30 sm:block">
                  Auto rotates
                </span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .story-orb {
            animation: storyOrbMove 8s ease-in-out infinite;
          }

          .story-orb-two {
            animation-delay: -4s;
          }

          @keyframes storyOrbMove {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(25px, -20px, 0) scale(1.08);
            }
          }

          .story-grid-dot {
            animation: storyDotPulse 2.7s ease-in-out infinite;
          }

          @keyframes storyDotPulse {
            0%,
            100% {
              opacity: 0.15;
              transform: scale(1);
            }

            50% {
              opacity: 0.75;
              transform: scale(1.45);
            }
          }

          .story-progress {
            width: 100%;
            transform-origin: left;
            animation: storyProgress ${DISPLAY_TIME}ms linear forwards;
          }

          @keyframes storyProgress {
            from {
              transform: scaleX(0);
            }

            to {
              transform: scaleX(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .story-orb,
            .story-grid-dot,
            .story-progress {
              animation: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
