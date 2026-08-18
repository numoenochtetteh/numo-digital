"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRODUCTS = ["Coda Webstore", "Codapay", "Coda Distribution", "Codashop"];

const HERO_SCROLL_HEIGHT = 230;

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(Math.max(value, minimum), maximum);
}

function CodaMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full border-[3px] border-current ${className}`}
    >
      <span className="h-[34%] w-[34%] rounded-full border-2 border-current" />
      <span className="absolute h-[72%] w-[3px] bg-current" />
      <span className="absolute h-[3px] w-[72%] bg-current" />
    </span>
  );
}

function UpMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full border-[3px] border-current ${className}`}
    >
      <span className="absolute h-[28%] w-[28%] rotate-45 border-l-[3px] border-t-[3px] border-current" />
      <span className="absolute top-[27%] h-[46%] w-[3px] bg-current" />
    </span>
  );
}

function SmileMark() {
  return (
    <div className="relative h-[116px] w-[98px] rounded-[42px] border-[6px] border-[#202020] sm:h-[132px] sm:w-[112px]">
      <span className="absolute left-[22px] top-[34px] h-4 w-4 rounded-full bg-[#202020] sm:left-[26px] sm:top-[38px]" />
      <span className="absolute right-[22px] top-[34px] h-4 w-4 rounded-full bg-[#202020] sm:right-[26px] sm:top-[38px]" />
      <span className="absolute bottom-[25px] left-1/2 h-[38px] w-[58px] -translate-x-1/2 rounded-b-full border-b-[6px] border-[#202020] sm:bottom-[28px] sm:h-[42px] sm:w-[66px]" />
    </div>
  );
}

const codaHeroStyles = `
  .coda-stage {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100svh;
    min-height: 680px;
    overflow: hidden;
    background: #f5f5e9;
    color: #171717;
    isolation: isolate;
  }

  .coda-intro-word {
    display: inline-block;
    opacity: 0;
    transform: translateY(45px);
    filter: blur(7px);
    animation: coda-word-in 800ms cubic-bezier(.22,1,.36,1) forwards;
  }

  @keyframes coda-word-in {
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  .coda-intro-copy {
    opacity: 0;
    transform: translateY(18px);
    animation: coda-copy-in 650ms 650ms cubic-bezier(.22,1,.36,1) forwards;
  }

  @keyframes coda-copy-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .coda-motion-video {
    filter: saturate(1.02) contrast(1.01);
  }

  .coda-product-bar {
    box-shadow: 0 18px 50px rgba(0, 27, 15, .2);
  }

  .coda-info-card {
    box-shadow: 0 28px 80px rgba(0, 26, 14, .2);
  }

  .coda-card-float {
    animation: coda-card-float 5.5s ease-in-out infinite;
  }

  @keyframes coda-card-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .coda-scroll-pulse {
    animation: coda-scroll-pulse 1.6s ease-in-out infinite;
  }

  @keyframes coda-scroll-pulse {
    0%, 100% { transform: translateY(0); opacity: .45; }
    50% { transform: translateY(5px); opacity: 1; }
  }

  @media (max-width: 767px) {
    .coda-stage { min-height: 700px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .coda-intro-word,
    .coda-intro-copy,
    .coda-card-float,
    .coda-scroll-pulse {
      opacity: 1;
      transform: none;
      filter: none;
      animation: none;
    }
  }
`;

export function CodaHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const measure = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      setProgress(clamp(-rect.top / distance));
    };

    const requestMeasure = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", requestMeasure, { passive: true });
    window.addEventListener("resize", requestMeasure);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestMeasure);
      window.removeEventListener("resize", requestMeasure);
    };
  }, []);

  /* The opening copy fades as the green dome grows. */
  const introExit = clamp((progress - 0.02) / 0.27);
  const introOpacity = 1 - introExit;

  /* Keep the final radius deliberately large so cream never shows again. */
  const domeProgress = clamp(progress / 0.5);
  const domeWidth = 46 + domeProgress * 124;
  const domeHeight = 38 + domeProgress * 162;
  const domeCenterY = 112 - domeProgress * 62;

  /* The product scene settles in after the green field covers the viewport. */
  const sceneProgress = clamp((progress - 0.28) / 0.25);
  const videoProgress = clamp((progress - 0.08) / 0.33);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f5e9]"
      style={{ height: `${HERO_SCROLL_HEIGHT}svh` }}
      aria-label="Coda products hero"
    >
      <style dangerouslySetInnerHTML={{ __html: codaHeroStyles }} />

      <div className="coda-stage">
        {/* Cream introduction */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center px-5 pt-[7.5vh] text-center sm:px-8 lg:pt-[8.5vh]"
          style={{
            opacity: introOpacity,
            transform: `translateY(${-introExit * 52}px)`,
            pointerEvents: introOpacity > 0.2 ? "auto" : "none",
          }}
        >
          <Link
            href="#coda-product-scene"
            className="coda-intro-copy inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-black/65 backdrop-blur-sm sm:text-[10px]"
          >
            Ready to grow? We&apos;re ready to go
            <ArrowRight className="h-3 w-3" />
          </Link>

          <h1 className="mt-7 max-w-[1300px] font-black uppercase text-[clamp(3.15rem,6.35vw,7.65rem)] leading-[0.78] tracking-[-0.073em] text-[#161616]">
            <span
              className="coda-intro-word"
              style={{ animationDelay: "100ms" }}
            >
              Customize
            </span>{" "}
            <CodaMark className="mb-[0.06em] h-[0.57em] w-[0.57em] align-middle" />{" "}
            <span
              className="coda-intro-word"
              style={{ animationDelay: "210ms" }}
            >
              Monetize
            </span>{" "}
            <CodaMark className="mb-[0.06em] h-[0.43em] w-[0.43em] align-middle" />
            <br />
            <UpMark className="mb-[0.06em] mr-[0.08em] h-[0.43em] w-[0.43em] align-middle" />
            <span
              className="coda-intro-word"
              style={{ animationDelay: "330ms" }}
            >
              Maximize
            </span>
          </h1>

          <p className="coda-intro-copy mt-7 max-w-[430px] text-sm font-medium leading-[1.25] text-black sm:text-[17px]">
            Accelerate Growth with Coda&apos;s Merchant
            <br className="hidden sm:block" /> of Record and Payment Solutions
          </p>
        </div>

        {/* Expanding green field */}
        <div
          id="coda-product-scene"
          className="absolute inset-0 z-20 overflow-hidden bg-[#004c2d]"
          style={{
            clipPath: `ellipse(${domeWidth}% ${domeHeight}% at 50% ${domeCenterY}%)`,
          }}
        >
          {/* The source video stays rectangular, centered and unrotated. */}
          <video
            src="/videos/coda-green-motion.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="coda-motion-video pointer-events-none absolute left-1/2 top-1/2 h-auto w-[min(1120px,96vw)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
            style={{
              opacity: videoProgress,
              transform: `translate(-50%, -50%) scale(${0.88 + videoProgress * 0.12})`,
            }}
          />

          <Link
            href="#coda-product-scene"
            className="absolute left-1/2 top-[5px] z-10 -translate-x-1/2 rounded-full bg-[#426a52] px-5 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-white/85"
            style={{ opacity: 1 - sceneProgress }}
          >
            Grow with us
          </Link>
        </div>

        {/* Final Webstore scene */}
        <div
          className="absolute inset-0 z-30 text-[#f1ffef]"
          style={{
            opacity: sceneProgress,
            pointerEvents: sceneProgress > 0.85 ? "auto" : "none",
          }}
        >
          <nav
            aria-label="Coda products"
            className="coda-product-bar absolute left-1/2 top-[17.5%] flex w-[calc(100%-28px)] max-w-[810px] -translate-x-1/2 items-center gap-1 rounded-[17px] bg-[#8ab49a]/70 p-2 backdrop-blur-xl"
            style={{
              transform: `translate(-50%, ${(1 - sceneProgress) * -24}px)`,
            }}
          >
            {PRODUCTS.map((product, index) => (
              <span
                key={product}
                className={`flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-2 py-3 text-[9px] font-semibold sm:px-4 sm:text-sm lg:text-base ${
                  index === 0 ? "bg-[#008d4f] text-white" : "text-white/90"
                }`}
              >
                <CodaMark className="hidden h-4 w-4 sm:inline-flex" />
                {product}
              </span>
            ))}
          </nav>

          <div
            className="absolute bottom-[9%] left-[2.2%] max-w-[970px]"
            style={{
              transform: `translateY(${(1 - sceneProgress) * 46}px)`,
            }}
          >
            <p className="mb-7 font-mono text-[10px] uppercase tracking-[0.16em] text-white sm:text-sm">
              Your vision, brought to life.
            </p>

            <h2 className="font-black uppercase text-[clamp(3.35rem,6vw,7.2rem)] leading-[0.78] tracking-[-0.072em]">
              <span className="block">Your Webstore</span>
              <span className="mt-[0.1em] flex items-center gap-[0.12em]">
                <CodaMark className="h-[0.58em] w-[0.58em]" />
                Your Way
              </span>
            </h2>
          </div>

          <aside className="coda-info-card coda-card-float absolute bottom-[8.5%] right-[2.3%] hidden w-[min(405px,29vw)] rounded-[28px] bg-[#a9ffc4] p-6 text-[#171717] md:block lg:p-7">
            <div className="flex h-[205px] items-center justify-center rounded-[22px] border border-black/10 lg:h-[220px]">
              <SmileMark />
            </div>

            <p className="mt-7 min-h-[76px] text-[15px] leading-[1.45] lg:text-[17px]">
              A 100% customizable web store to sell your content your way.
            </p>

            <Link
              href="https://www.coda.co/products/coda-webstore"
              className="mt-4 flex h-14 w-full items-center justify-center rounded-lg bg-[#202020] text-base font-bold text-white transition-transform hover:scale-[1.01]"
            >
              Learn more
            </Link>
          </aside>

          <Link
            href="https://www.coda.co/products/coda-webstore"
            className="absolute bottom-6 right-5 flex h-12 items-center gap-3 rounded-full bg-[#a9ffc4] px-5 text-sm font-semibold text-[#08331f] md:hidden"
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          className="coda-scroll-pulse absolute bottom-5 left-1/2 z-40 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.16em] text-black/55"
          style={{ opacity: 1 - clamp(progress / 0.17) }}
        >
          Scroll to explore ↓
        </div>
      </div>
    </section>
  );
}

export default CodaHeroSection;
