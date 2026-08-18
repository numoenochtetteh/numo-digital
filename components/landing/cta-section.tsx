"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(
                600px circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(0, 0, 0, 0.15),
                transparent 40%
              )`,
            }}
          />

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* Left content */}
              <div className="flex-1">
                <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
                  <span className="h-px w-8 bg-foreground/30" />
                  Start your next project
                </span>

                <h2 className="mb-8 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                  Ready for a website
                  <br />
                  built for growth?
                </h2>

                <p className="mb-12 max-w-xl text-xl leading-relaxed text-muted-foreground">
                  Numo Digital designs and develops professional websites that
                  help growing businesses build trust, attract customers and
                  generate more enquiries.
                </p>

                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="group h-14 rounded-full bg-foreground px-8 text-base text-background hover:bg-foreground/90"
                  >
                    <Link href="/contact">
                      Start a project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border-foreground/20 px-8 text-base hover:bg-foreground/5"
                  >
                    <Link href="/work">View our work</Link>
                  </Button>
                </div>

                <p className="mt-8 font-mono text-sm text-muted-foreground">
                  Projects start from GH₵3,000 · 50% deposit
                </p>
              </div>

              {/* Right animation — unchanged */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute right-0 top-0 h-32 w-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 h-32 w-32 border-r border-t border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
