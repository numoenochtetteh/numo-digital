"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

const TAB_DURATION = 3500;

const codeExamples = [
  {
    label: "Strategy",
    number: "01",
    code: `const project = {
  business: "Your company",
  goal: "Attract more customers",
  audience: "Your ideal clients",
  experience: "Clear and professional"
}

const direction = await numo.plan(project)`,
  },
  {
    label: "Build",
    number: "02",
    code: `export default function Website() {
  return (
    <main>
      <Hero />
      <Services />
      <SelectedWork />
      <Contact />
    </main>
  )
}`,
  },
  {
    label: "Launch",
    number: "03",
    code: `const launchChecklist = {
  responsive: true,
  accessible: true,
  performance: "optimized",
  seo: "configured",
  analytics: "connected"
}

await numo.launch(launchChecklist)`,
  },
];

const animationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateY(7px);
    animation: devLineReveal 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dev-code-char {
    opacity: 0;
    filter: blur(6px);
    animation: devCharReveal 0.25s ease forwards;
  }

  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }

  .tab-progress {
    transform-origin: left;
    animation: tabProgress ${TAB_DURATION}ms linear forwards;
  }

  @keyframes tabProgress {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dev-code-line,
    .dev-code-char {
      opacity: 1;
      filter: none;
      transform: none;
      animation: none;
    }

    .tab-progress {
      animation: none;
      transform: scaleX(1);
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /*
   * Automatically changes:
   * Strategy → Build → Launch → Strategy
   */
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveTab((current) => (current + 1) % codeExamples.length);
      setCopied(false);
    }, TAB_DURATION);

    return () => window.clearTimeout(timeout);
  }, [activeTab]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeTab].code);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-[#efefed] px-3 py-2 sm:px-4">
      <section
        id="development"
        ref={sectionRef}
        className="relative overflow-hidden rounded-[28px] bg-[#F3A6EF] py-14 text-black lg:rounded-[34px] lg:py-20"
      >
        <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full border-[60px] border-white/10" />

        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[60px] border-white/10" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Left content */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
            >
              <span className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-black/55">
                <span className="h-px w-8 bg-black/35" />
                How we build
              </span>

              <h2 className="max-w-[570px] font-display text-[clamp(2.7rem,4.2vw,4.7rem)] leading-[0.96] tracking-[-0.055em]">
                Built by developers.
                <br />
                <span className="text-black/45">Made for your customers.</span>
              </h2>

              <p className="mt-6 max-w-[550px] text-base leading-relaxed text-black/60 lg:text-lg">
                We use modern technology behind the scenes to create websites
                that feel simple, professional and effortless for your
                customers.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-7 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-black/80"
                >
                  View our work
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex h-12 items-center rounded-full border border-black/20 bg-white/30 px-7 text-sm font-medium transition-colors hover:bg-white/60"
                >
                  Start a project
                </a>
              </div>
            </div>

            {/* Right code panel */}
            <div
              className={`transition-all delay-150 duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-7 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_30px_80px_rgba(110,30,100,0.16)]">
                {/* Tabs */}
                <div className="flex items-center border-b border-black/10 px-2 sm:px-4">
                  {codeExamples.map((example, index) => (
                    <button
                      key={example.label}
                      type="button"
                      onClick={() => {
                        setActiveTab(index);
                        setCopied(false);
                      }}
                      className={`relative flex items-center gap-2 px-4 py-5 font-mono text-xs transition-colors sm:px-6 sm:text-sm ${
                        activeTab === index
                          ? "text-black"
                          : "text-black/40 hover:text-black"
                      }`}
                    >
                      <span className="hidden text-[9px] text-black/30 sm:inline">
                        {example.number}
                      </span>

                      {example.label}

                      {activeTab === index && (
                        <span
                          key={`progress-${activeTab}`}
                          className="tab-progress absolute inset-x-0 bottom-0 h-[2px] bg-black"
                        />
                      )}
                    </button>
                  ))}

                  <div className="flex-1" />

                  {/* Copy button */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="rounded-full p-3 text-black/40 transition-colors hover:bg-black/5 hover:text-black"
                    aria-label="Copy example"
                    title="Copy example"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Current phase */}
                <div className="flex items-center justify-between border-b border-black/5 bg-[#fafafa] px-6 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/35">
                    Current phase
                  </span>

                  <span className="rounded-full bg-[#F3A6EF]/45 px-3 py-1 text-xs font-medium">
                    {codeExamples[activeTab].label}
                  </span>
                </div>

                {/* Code content */}
                <div className="min-h-[230px] overflow-x-auto px-5 py-5 font-mono text-xs sm:px-8 sm:py-6 sm:text-sm">
                  <div key={activeTab} className="min-w-max text-black/70">
                    {codeExamples[activeTab].code
                      .split("\n")
                      .map((line, lineIndex) => (
                        <div
                          key={`${activeTab}-${lineIndex}`}
                          className="dev-code-line leading-[1.85]"
                          style={{
                            animationDelay: `${lineIndex * 60}ms`,
                          }}
                        >
                          {/* Line number */}
                          <span className="mr-5 inline-block w-4 select-none text-right text-[9px] text-black/20">
                            {String(lineIndex + 1).padStart(2, "0")}
                          </span>

                          {/* Animated code */}
                          <span className="inline-flex">
                            {(line || " ")
                              .split("")
                              .map((character, characterIndex) => (
                                <span
                                  key={`${activeTab}-${lineIndex}-${characterIndex}`}
                                  className="dev-code-char"
                                  style={{
                                    animationDelay: `${
                                      lineIndex * 60 + characterIndex * 10
                                    }ms`,
                                  }}
                                >
                                  {character === " " ? "\u00A0" : character}
                                </span>
                              ))}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
