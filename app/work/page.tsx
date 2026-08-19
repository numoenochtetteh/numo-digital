"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  Layers3,
  MoveUpRight,
  Palette,
  Sparkles,
} from "lucide-react";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "PENGTRESSES",
    industry: "Beauty",
    type: "Booking platform",
    year: "2026",
    description:
      "A premium booking and digital experience created for a London-based hair specialist.",
    image: "/showcase/creative-workspace.jpg",
    video: "/expertise/product-experience.mp4",
    href: "https://pengtresses.vercel.app",
    accent: "#d9ff25",
    layout: "featured",
  },
  {
    number: "02",
    title: "Power Electrode Ltd",
    industry: "Manufacturing",
    type: "Corporate website",
    year: "2026",
    description:
      "A professional digital presence for a growing welding electrode manufacturer.",
    image: "/showcase/coding-workspace.jpg",
    href: "https://github.com/numoenochtetteh/power-electrode-ltd",
    accent: "#8fb5ff",
    layout: "standard",
  },
  {
    number: "03",
    title: "Total Logistics",
    industry: "Logistics",
    type: "Business website",
    year: "2026",
    description:
      "A modern logistics website focused on credibility, services and customer confidence.",
    image: "/showcase/product-design.jpg",
    video: "/expertise/tech-websites.mp4",
    href: "https://totallog.org",
    accent: "#ff8b67",
    layout: "standard",
  },
  {
    number: "04",
    title: "NUMO & SEBI",
    industry: "E-commerce",
    type: "Digital store",
    year: "2026",
    description:
      "A polished jewellery shopping experience built around strong imagery and clean product presentation.",
    image: "/showcase/creative-workspace.jpg",
    href: "#",
    accent: "#c9bfff",
    layout: "wide",
  },
  {
    number: "05",
    title: "Kent Architects",
    industry: "Architecture",
    type: "Portfolio website",
    year: "2026",
    description:
      "A minimal architectural portfolio designed to let projects and imagery lead the experience.",
    image: "/showcase/product-design.jpg",
    href: "https://kent-architects.vercel.app",
    accent: "#79dcb5",
    layout: "standard",
  },
  {
    number: "06",
    title: "Lucenex",
    industry: "Technology",
    type: "SaaS interface",
    year: "2026",
    description:
      "A modern operations interface designed around clarity, tracking and business-critical information.",
    image: "/showcase/coding-workspace.jpg",
    video: "/expertise/fintech-solutions.mp4",
    href: "#",
    accent: "#ffd66b",
    layout: "standard",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function WorkPage() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Navigation />

      <main className="work-page">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="work-hero">
          <div className="work-hero-glow work-glow-lime" />
          <div className="work-hero-glow work-glow-blue" />

          <div className="work-hero-inner">
            <span className="work-badge" data-reveal>
              <span />
              OUR WORK
            </span>

            <h1 data-reveal>
              Work built to
              <br />
              move businesses.
            </h1>

            <div className="work-hero-bottom" data-reveal>
              <p>
                Websites, platforms and digital experiences created to help
                businesses communicate clearly, look credible and grow online.
              </p>

              <Link href="#projects">
                Explore projects
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div className="work-hero-showcase" data-reveal>
            <div className="work-browser">
              <div className="work-browser-header">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>numodigital.com/work</span>

                <ArrowUpRight size={15} />
              </div>

              <div className="work-browser-media">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/showcase/creative-workspace.jpg"
                >
                  <source
                    src="/expertise/product-experience.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <div className="hero-work-card hero-work-card-one">
              <span>01</span>

              <div>
                <small>BEAUTY</small>
                <strong>PENGTRESSES</strong>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <div className="hero-work-card hero-work-card-two">
              <span>02</span>

              <div>
                <small>MANUFACTURING</small>
                <strong>Power Electrode</strong>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <div className="hero-work-card hero-work-card-three">
              <Sparkles size={17} />

              <div>
                <small>NUMO DIGITAL</small>
                <strong>Made for growth.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MOVING STRIP
        ====================================================== */}

        <section className="work-marquee">
          <div className="work-marquee-track">
            {[...projects, ...projects].map((project, index) => (
              <div
                className="work-marquee-item"
                key={`${project.title}-${index}`}
              >
                <span style={{ backgroundColor: project.accent }} />

                {project.title}

                <i>✦</i>

                {project.industry}
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="work-intro">
          <div className="work-intro-inner">
            <div className="work-section-label" data-reveal>
              <span>01</span>
              SELECTED PROJECTS
            </div>

            <div data-reveal>
              <h2>
                Different businesses.
                <br />
                Different challenges.
                <br />
                <span>Same attention to detail.</span>
              </h2>

              <p>
                Every project starts with understanding what the business needs
                to communicate and what customers need to understand.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <section id="projects" className="project-gallery">
          <div className="project-gallery-inner">
            {/* =================================================
                PROJECT 01 FEATURED
            ================================================= */}

            <a
              href={projects[0].href}
              target="_blank"
              rel="noreferrer"
              className="case-project case-project-featured"
              style={
                {
                  "--project-accent": projects[0].accent,
                } as React.CSSProperties
              }
              data-reveal
            >
              <div className="case-media">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={projects[0].image}
                >
                  <source src={projects[0].video} type="video/mp4" />
                </video>

                <div className="case-media-overlay" />

                <span className="case-number">{projects[0].number}</span>

                <span className="case-arrow">
                  <ArrowUpRight size={22} />
                </span>

                <div className="case-floating-label">
                  <span>Featured project</span>
                  <strong>{projects[0].type}</strong>
                </div>
              </div>

              <div className="case-content">
                <div>
                  <div className="case-meta">
                    <span>{projects[0].industry}</span>
                    <span>{projects[0].type}</span>
                    <span>{projects[0].year}</span>
                  </div>

                  <h3>{projects[0].title}</h3>
                </div>

                <p>{projects[0].description}</p>
              </div>
            </a>

            {/* =================================================
                PROJECTS 02 + 03
            ================================================= */}

            <div className="project-pair">
              {projects.slice(1, 3).map((project) => (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="case-project case-project-half"
                  style={
                    {
                      "--project-accent": project.accent,
                    } as React.CSSProperties
                  }
                  key={project.number}
                  data-reveal
                >
                  <div className="case-media">
                    {project.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={project.image}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 800px) 100vw, 50vw"
                      />
                    )}

                    <div className="case-media-overlay" />

                    <span className="case-number">{project.number}</span>

                    <span className="case-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  <div className="case-content case-content-small">
                    <div>
                      <div className="case-meta">
                        <span>{project.industry}</span>
                        <span>{project.year}</span>
                      </div>

                      <h3>{project.title}</h3>
                    </div>

                    <p>{project.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* =================================================
                PROJECT 04
            ================================================= */}

            <a
              href={projects[3].href}
              className="case-project case-project-banner"
              style={
                {
                  "--project-accent": projects[3].accent,
                } as React.CSSProperties
              }
              data-reveal
            >
              <div className="banner-content">
                <div className="banner-top">
                  <span>{projects[3].number}</span>

                  <span>
                    {projects[3].industry} · {projects[3].year}
                  </span>
                </div>

                <div>
                  <h3>{projects[3].title}</h3>

                  <p>{projects[3].description}</p>
                </div>

                <span className="banner-arrow">
                  <ArrowUpRight size={24} />
                </span>
              </div>

              <div className="banner-media">
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  sizes="100vw"
                />
              </div>
            </a>
          </div>
        </section>

        {/* =====================================================
            DARK FEATURE SECTION
        ====================================================== */}

        <section className="work-feature-section">
          <div className="work-feature-inner" data-reveal>
            <div className="work-feature-copy">
              <span className="dark-project-label">
                <span />
                DIGITAL EXPERIENCES
              </span>

              <h2>
                Design that gets
                <br />
                out of the way.
              </h2>

              <p>
                Strong digital work should help people understand the business,
                find what matters and take action without unnecessary friction.
              </p>

              <div className="feature-points">
                <div>
                  <Palette size={18} />
                  <span>Clear visual direction</span>
                </div>

                <div>
                  <Layers3 size={18} />
                  <span>Purposeful UX</span>
                </div>

                <div>
                  <Code2 size={18} />
                  <span>Responsive development</span>
                </div>

                <div>
                  <Globe2 size={18} />
                  <span>Built for real users</span>
                </div>
              </div>
            </div>

            <div className="work-feature-visual">
              <div className="feature-ring feature-ring-one" />
              <div className="feature-ring feature-ring-two" />
              <div className="feature-ring feature-ring-three" />

              <div className="feature-center">
                <strong>numo</strong>
                <span>DIGITAL</span>
              </div>

              <div className="feature-node feature-node-one">
                <Palette size={17} />
                DESIGN
              </div>

              <div className="feature-node feature-node-two">
                <Code2 size={17} />
                BUILD
              </div>

              <div className="feature-node feature-node-three">
                <Globe2 size={17} />
                LAUNCH
              </div>

              <div className="feature-node feature-node-four">
                <MoveUpRight size={17} />
                GROW
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS 05 + 06
        ====================================================== */}

        <section className="project-gallery project-gallery-bottom">
          <div className="project-gallery-inner">
            <div className="project-pair">
              {projects.slice(4, 6).map((project) => (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="case-project case-project-half"
                  style={
                    {
                      "--project-accent": project.accent,
                    } as React.CSSProperties
                  }
                  key={project.number}
                  data-reveal
                >
                  <div className="case-media">
                    {project.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={project.image}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 800px) 100vw, 50vw"
                      />
                    )}

                    <div className="case-media-overlay" />

                    <span className="case-number">{project.number}</span>

                    <span className="case-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  <div className="case-content case-content-small">
                    <div>
                      <div className="case-meta">
                        <span>{project.industry}</span>
                        <span>{project.type}</span>
                      </div>

                      <h3>{project.title}</h3>
                    </div>

                    <p>{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PHILOSOPHY
        ====================================================== */}

        <section className="work-philosophy">
          <div className="work-philosophy-inner">
            <span data-reveal>WHAT MATTERS</span>

            <h2 data-reveal>
              Not work for
              <br />
              the portfolio.
              <br />
              <em>Work for the business.</em>
            </h2>

            <div className="philosophy-bottom" data-reveal>
              <p>
                Beautiful design matters, but the job is bigger than making
                something look good. The goal is to make the business easier to
                understand and easier to trust.
              </p>

              <Link href="/contact">
                Start a project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="work-final">
          <div className="work-final-inner" data-reveal>
            <div className="work-final-glow" />

            <div className="work-final-copy">
              <span>YOUR PROJECT COULD BE NEXT</span>

              <h2>
                Let&apos;s build
                <br />
                something good.
              </h2>
            </div>

            <Link href="/contact">
              Start a project
              <span>
                <ArrowUpRight size={22} />
              </span>
            </Link>
          </div>
        </section>

        {/* =====================================================
            STYLES
        ====================================================== */}

        <style jsx global>{`
          /* =====================================================
             GLOBAL
          ====================================================== */

          .work-page {
            overflow: hidden;
            background: #f4f4f1;
            color: #111;
          }

          [data-reveal] {
            opacity: 0;
            transform: translateY(36px);
            transition:
              opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }

          [data-reveal].is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* =====================================================
             HERO
          ====================================================== */

          .work-hero {
            position: relative;
            min-height: 1080px;
            overflow: hidden;
            padding: 145px 28px 90px;
          }

          .work-hero-inner {
            position: relative;
            z-index: 5;
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .work-badge {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            border: 1px solid #d4cec1;
            border-radius: 6px;
            padding: 8px 12px;
            color: #5f574f;
            font-family:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.16em;
          }

          .work-badge > span {
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background: #d9ff25;
          }

          .work-hero h1 {
            max-width: 1100px;
            margin: 38px 0 0;
            font-size: clamp(62px, 8vw, 125px);
            font-weight: 650;
            line-height: 0.85;
            letter-spacing: -0.075em;
          }

          .work-hero-bottom {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 60px;
            margin-top: 45px;
          }

          .work-hero-bottom p {
            max-width: 600px;
            margin: 0;
            color: #67615a;
            font-size: 16px;
            line-height: 1.6;
          }

          .work-hero-bottom a {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            gap: 28px;
            border-radius: 999px;
            background: #111;
            padding: 16px 21px 16px 26px;
            color: white;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
          }

          .work-hero-bottom a svg {
            color: #d9ff25;
          }

          /* =====================================================
             HERO GLOW
          ====================================================== */

          .work-hero-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
            animation: workGlowMove 8s ease-in-out infinite;
          }

          .work-glow-lime {
            top: 170px;
            left: -100px;
            width: 480px;
            height: 480px;
            background: rgba(217, 255, 37, 0.2);
          }

          .work-glow-blue {
            top: 300px;
            right: -100px;
            width: 500px;
            height: 500px;
            background: rgba(92, 121, 255, 0.15);
            animation-delay: -4s;
          }

          @keyframes workGlowMove {
            50% {
              transform: translate3d(35px, -25px, 0) scale(1.08);
            }
          }

          /* =====================================================
             HERO SHOWCASE
          ====================================================== */

          .work-hero-showcase {
            position: relative;
            z-index: 4;
            width: min(1150px, 90%);
            height: 490px;
            margin: 80px auto 0;
          }

          .work-browser {
            position: absolute;
            inset: 0 100px;
            overflow: hidden;
            border: 1px solid #d7d4cd;
            border-radius: 28px;
            background: white;
            box-shadow: 0 35px 80px rgba(0, 0, 0, 0.1);
            transform: perspective(1200px) rotateX(3deg);
          }

          .work-browser-header {
            display: grid;
            height: 52px;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            padding: 0 18px;
            border-bottom: 1px solid #eceae5;
          }

          .browser-dots {
            display: flex;
            gap: 5px;
          }

          .browser-dots span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #d8d6d0;
          }

          .work-browser-header > span {
            color: #8b8781;
            font-size: 9px;
          }

          .work-browser-header > svg {
            justify-self: end;
          }

          .work-browser-media {
            height: calc(100% - 52px);
          }

          .work-browser-media video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hero-work-card {
            position: absolute;
            z-index: 7;
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid rgba(17, 17, 17, 0.09);
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.9);
            padding: 11px 14px;
            box-shadow: 0 18px 50px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(16px);
            animation: workCardFloat 4.5s ease-in-out infinite;
          }

          .hero-work-card-one {
            top: 60px;
            left: 0;
          }

          .hero-work-card-two {
            top: 210px;
            right: 0;
            animation-delay: -1.5s;
          }

          .hero-work-card-three {
            bottom: 30px;
            left: 60px;
            animation-delay: -3s;
          }

          @keyframes workCardFloat {
            50% {
              transform: translateY(-14px);
            }
          }

          .hero-work-card > span:first-child {
            display: grid;
            width: 38px;
            height: 38px;
            place-items: center;
            border-radius: 11px;
            background: #d9ff25;
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .hero-work-card > div {
            display: flex;
            min-width: 125px;
            flex-direction: column;
          }

          .hero-work-card small {
            color: #8e8983;
            font-family: ui-monospace, monospace;
            font-size: 6px;
            letter-spacing: 0.08em;
          }

          .hero-work-card strong {
            margin-top: 3px;
            font-size: 11px;
          }

          /* =====================================================
             MARQUEE
          ====================================================== */

          .work-marquee {
            overflow: hidden;
            border-top: 1px solid #d1cec7;
            border-bottom: 1px solid #d1cec7;
            background: #e8e6df;
          }

          .work-marquee-track {
            display: flex;
            width: max-content;
            animation: workMarqueeMove 28s linear infinite;
          }

          .work-marquee-item {
            display: flex;
            height: 70px;
            align-items: center;
            gap: 17px;
            padding: 0 25px;
            white-space: nowrap;
            font-size: 14px;
          }

          .work-marquee-item > span {
            width: 9px;
            height: 9px;
            border-radius: 2px;
          }

          .work-marquee-item i {
            color: #9b958e;
            font-style: normal;
          }

          @keyframes workMarqueeMove {
            to {
              transform: translateX(-50%);
            }
          }

          /* =====================================================
             INTRO
          ====================================================== */

          .work-intro {
            padding: 130px 28px;
          }

          .work-intro-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 0.35fr 1fr;
            gap: 70px;
          }

          .work-section-label {
            display: flex;
            gap: 17px;
            padding-top: 10px;
            color: #77716b;
            font-family: ui-monospace, monospace;
            font-size: 9px;
            letter-spacing: 0.12em;
          }

          .work-section-label span {
            color: #9aac00;
          }

          .work-intro h2 {
            margin: 0;
            font-size: clamp(53px, 6vw, 92px);
            font-weight: 600;
            line-height: 0.91;
            letter-spacing: -0.065em;
          }

          .work-intro h2 span {
            color: #827b74;
          }

          .work-intro p {
            max-width: 570px;
            margin: 32px 0 0;
            color: #6b645e;
            font-size: 15px;
            line-height: 1.65;
          }

          /* =====================================================
             PROJECT GALLERY
          ====================================================== */

          .project-gallery {
            padding: 0 28px 120px;
          }

          .project-gallery-bottom {
            padding-top: 120px;
          }

          .project-gallery-inner {
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .case-project {
            display: block;
            color: #111;
            text-decoration: none;
          }

          .case-media {
            position: relative;
            overflow: hidden;
            border-radius: 28px;
            background: #deddd7;
          }

          .case-project-featured .case-media {
            height: 650px;
          }

          .case-media img,
          .case-media video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .case-project:hover .case-media img,
          .case-project:hover .case-media video {
            transform: scale(1.045);
          }

          .case-media-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.08),
              transparent 40%,
              rgba(0, 0, 0, 0.08)
            );
          }

          .case-number {
            position: absolute;
            top: 18px;
            left: 18px;
            z-index: 3;
            display: grid;
            min-width: 42px;
            height: 32px;
            place-items: center;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.94);
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .case-arrow {
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 4;
            display: grid;
            width: 46px;
            height: 46px;
            place-items: center;
            border-radius: 50%;
            background: white;
            transition:
              transform 0.3s ease,
              background 0.3s ease,
              color 0.3s ease;
          }

          .case-project:hover .case-arrow {
            background: var(--project-accent);
            transform: rotate(45deg);
          }

          .case-floating-label {
            position: absolute;
            bottom: 25px;
            left: 25px;
            z-index: 4;
            display: flex;
            min-width: 220px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.85);
            padding: 13px 15px;
            flex-direction: column;
            backdrop-filter: blur(15px);
          }

          .case-floating-label span {
            color: #7e7871;
            font-family: ui-monospace, monospace;
            font-size: 7px;
          }

          .case-floating-label strong {
            margin-top: 4px;
            font-size: 12px;
          }

          .case-content {
            display: grid;
            grid-template-columns: 1fr 0.6fr;
            gap: 50px;
            align-items: end;
            padding: 25px 4px 55px;
          }

          .case-meta {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
          }

          .case-meta span {
            border: 1px solid #cfccc5;
            border-radius: 999px;
            padding: 6px 9px;
            color: #716b65;
            font-size: 8px;
          }

          .case-content h3 {
            margin: 18px 0 0;
            font-size: clamp(40px, 4vw, 62px);
            font-weight: 600;
            line-height: 0.92;
            letter-spacing: -0.055em;
          }

          .case-content > p {
            margin: 0;
            color: #69635d;
            font-size: 13px;
            line-height: 1.6;
          }

          /* =====================================================
             PROJECT PAIR
          ====================================================== */

          .project-pair {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .case-project-half .case-media {
            height: 480px;
          }

          .case-content-small {
            display: block;
            padding-bottom: 55px;
          }

          .case-content-small > p {
            max-width: 500px;
            margin-top: 16px;
          }

          /* =====================================================
             BANNER PROJECT
          ====================================================== */

          .case-project-banner {
            display: grid;
            min-height: 570px;
            margin-top: 15px;
            grid-template-columns: 0.7fr 1.3fr;
            overflow: hidden;
            border-radius: 30px;
            background: var(--project-accent);
          }

          .banner-content {
            position: relative;
            display: flex;
            padding: 38px;
            flex-direction: column;
            justify-content: space-between;
          }

          .banner-top {
            display: flex;
            justify-content: space-between;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.08em;
          }

          .banner-content h3 {
            margin: 0;
            font-size: clamp(45px, 5vw, 78px);
            font-weight: 600;
            line-height: 0.88;
            letter-spacing: -0.065em;
          }

          .banner-content p {
            max-width: 470px;
            margin: 22px 0 0;
            font-size: 12px;
            line-height: 1.6;
          }

          .banner-arrow {
            position: absolute;
            right: 25px;
            bottom: 25px;
            display: grid;
            width: 52px;
            height: 52px;
            place-items: center;
            border-radius: 50%;
            background: #111;
            color: white;
            transition: transform 0.3s ease;
          }

          .case-project-banner:hover .banner-arrow {
            transform: rotate(45deg);
          }

          .banner-media {
            position: relative;
            min-height: 570px;
            overflow: hidden;
          }

          .banner-media img {
            object-fit: cover;
            transition: transform 0.8s ease;
          }

          .case-project-banner:hover .banner-media img {
            transform: scale(1.04);
          }

          /* =====================================================
             FEATURE DARK
          ====================================================== */

          .work-feature-section {
            padding: 28px;
          }

          .work-feature-inner {
            display: grid;
            width: min(1350px, 100%);
            min-height: 690px;
            margin: 0 auto;
            grid-template-columns: 1fr 1fr;
            overflow: hidden;
            border-radius: 34px;
            background: #111;
            color: white;
          }

          .work-feature-copy {
            display: flex;
            justify-content: center;
            padding: 70px;
            flex-direction: column;
          }

          .dark-project-label {
            display: inline-flex;
            align-self: flex-start;
            align-items: center;
            gap: 9px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 6px;
            padding: 8px 11px;
            color: rgba(255, 255, 255, 0.6);
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.1em;
          }

          .dark-project-label span {
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background: #d9ff25;
          }

          .work-feature-copy h2 {
            margin: 35px 0 0;
            font-size: clamp(55px, 5.7vw, 90px);
            font-weight: 600;
            line-height: 0.9;
            letter-spacing: -0.065em;
          }

          .work-feature-copy > p {
            max-width: 500px;
            margin: 30px 0 0;
            color: rgba(255, 255, 255, 0.56);
            font-size: 14px;
            line-height: 1.65;
          }

          .feature-points {
            display: grid;
            margin-top: 40px;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .feature-points > div {
            display: flex;
            align-items: center;
            gap: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            padding-top: 14px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 10px;
          }

          .feature-points svg {
            color: #d9ff25;
          }

          .work-feature-visual {
            position: relative;
            overflow: hidden;
          }

          .feature-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .feature-ring-one {
            width: 230px;
            height: 230px;
          }

          .feature-ring-two {
            width: 420px;
            height: 420px;
          }

          .feature-ring-three {
            width: 620px;
            height: 620px;
          }

          .feature-center {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            width: 125px;
            height: 125px;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            background: #d9ff25;
            color: #111;
            flex-direction: column;
            transform: translate(-50%, -50%);
            animation: featurePulse 4s ease-in-out infinite;
          }

          .feature-center strong {
            font-size: 25px;
          }

          .feature-center span {
            font-family: ui-monospace, monospace;
            font-size: 6px;
            letter-spacing: 0.13em;
          }

          @keyframes featurePulse {
            50% {
              transform: translate(-50%, -50%) scale(1.07);
            }
          }

          .feature-node {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
            padding: 11px 14px;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            backdrop-filter: blur(10px);
            animation: featureNodeFloat 5s ease-in-out infinite;
          }

          .feature-node-one {
            top: 19%;
            left: 14%;
          }

          .feature-node-two {
            top: 24%;
            right: 13%;
            animation-delay: -1.3s;
          }

          .feature-node-three {
            bottom: 20%;
            left: 18%;
            animation-delay: -2.6s;
          }

          .feature-node-four {
            right: 16%;
            bottom: 22%;
            animation-delay: -3.8s;
          }

          @keyframes featureNodeFloat {
            50% {
              transform: translateY(-13px);
            }
          }

          /* =====================================================
             PHILOSOPHY
          ====================================================== */

          .work-philosophy {
            padding: 150px 28px;
          }

          .work-philosophy-inner {
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .work-philosophy-inner > span {
            font-family: ui-monospace, monospace;
            font-size: 9px;
            letter-spacing: 0.15em;
          }

          .work-philosophy h2 {
            margin: 35px 0 0;
            font-size: clamp(65px, 8vw, 125px);
            font-weight: 600;
            line-height: 0.85;
            letter-spacing: -0.075em;
          }

          .work-philosophy h2 em {
            color: #817a73;
            font-family: serif;
            font-weight: 400;
          }

          .philosophy-bottom {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 50px;
            margin-top: 60px;
          }

          .philosophy-bottom p {
            max-width: 600px;
            margin: 0;
            color: #68615b;
            font-size: 15px;
            line-height: 1.65;
          }

          .philosophy-bottom a {
            display: inline-flex;
            align-items: center;
            gap: 25px;
            border-radius: 999px;
            background: #111;
            padding: 15px 20px 15px 25px;
            color: white;
            font-size: 12px;
            text-decoration: none;
          }

          .philosophy-bottom a svg {
            color: #d9ff25;
          }

          /* =====================================================
             FINAL
          ====================================================== */

          .work-final {
            padding: 30px 28px 70px;
          }

          .work-final-inner {
            position: relative;
            display: flex;
            width: min(1350px, 100%);
            min-height: 530px;
            margin: 0 auto;
            align-items: flex-end;
            justify-content: space-between;
            gap: 50px;
            overflow: hidden;
            border-radius: 34px;
            background: #dedbd3;
            padding: 60px;
          }

          .work-final-glow {
            position: absolute;
            top: -120px;
            right: 5%;
            width: 480px;
            height: 480px;
            border-radius: 50%;
            background: rgba(217, 255, 37, 0.75);
            filter: blur(100px);
          }

          .work-final-copy {
            position: relative;
            z-index: 3;
          }

          .work-final-copy > span {
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.14em;
          }

          .work-final h2 {
            margin: 25px 0 0;
            font-size: clamp(65px, 7vw, 108px);
            font-weight: 600;
            line-height: 0.86;
            letter-spacing: -0.07em;
          }

          .work-final-inner > a {
            position: relative;
            z-index: 3;
            display: flex;
            flex-shrink: 0;
            align-items: center;
            gap: 30px;
            border-radius: 999px;
            background: #111;
            padding: 7px 8px 7px 27px;
            color: white;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
          }

          .work-final-inner > a > span {
            display: grid;
            width: 54px;
            height: 54px;
            place-items: center;
            border-radius: 50%;
            background: #d9ff25;
            color: #111;
            transition: transform 0.3s ease;
          }

          .work-final-inner > a:hover > span {
            transform: rotate(45deg);
          }

          /* =====================================================
             TABLET
          ====================================================== */

          @media (max-width: 900px) {
            .work-hero {
              min-height: auto;
              padding-top: 125px;
            }

            .work-hero-bottom {
              align-items: flex-start;
              flex-direction: column;
            }

            .work-hero-showcase {
              width: 100%;
            }

            .work-browser {
              inset: 0 40px;
            }

            .work-intro-inner {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .project-pair {
              grid-template-columns: 1fr;
            }

            .case-project-banner {
              grid-template-columns: 1fr;
            }

            .banner-media {
              min-height: 450px;
            }

            .work-feature-inner {
              grid-template-columns: 1fr;
            }

            .work-feature-visual {
              min-height: 550px;
            }

            .philosophy-bottom {
              align-items: flex-start;
              flex-direction: column;
            }

            .work-final-inner {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-end;
            }
          }

          /* =====================================================
             MOBILE
          ====================================================== */

          @media (max-width: 600px) {
            .work-hero {
              padding: 100px 14px 70px;
            }

            .work-badge {
              padding: 6px 9px;
              font-size: 7px;
            }

            .work-hero h1 {
              margin-top: 30px;
              font-size: 52px;
              line-height: 0.89;
            }

            .work-hero-bottom {
              margin-top: 28px;
              gap: 28px;
            }

            .work-hero-bottom p {
              font-size: 14px;
            }

            .work-hero-showcase {
              height: 310px;
              margin-top: 55px;
            }

            .work-browser {
              inset: 0;
              border-radius: 20px;
            }

            .hero-work-card {
              padding: 8px;
            }

            .hero-work-card-one {
              top: 25px;
              left: -5px;
            }

            .hero-work-card-two {
              top: 135px;
              right: -5px;
            }

            .hero-work-card-three {
              bottom: 10px;
              left: 15px;
            }

            .hero-work-card > div {
              min-width: 90px;
            }

            .hero-work-card strong {
              font-size: 8px;
            }

            .work-marquee-item {
              height: 62px;
              padding: 0 20px;
              font-size: 12px;
            }

            .work-intro {
              padding: 85px 14px;
            }

            .work-intro h2 {
              font-size: 47px;
            }

            .project-gallery {
              padding-right: 12px;
              padding-bottom: 80px;
              padding-left: 12px;
            }

            .case-project-featured .case-media,
            .case-project-half .case-media {
              height: 360px;
              border-radius: 20px;
            }

            .case-content {
              display: block;
              padding: 18px 3px 40px;
            }

            .case-content h3 {
              font-size: 38px;
            }

            .case-content > p {
              margin-top: 18px;
            }

            .case-project-banner {
              min-height: auto;
              border-radius: 20px;
            }

            .banner-content {
              min-height: 380px;
              padding: 24px;
            }

            .banner-content h3 {
              font-size: 48px;
            }

            .banner-media {
              min-height: 320px;
            }

            .work-feature-section {
              padding: 12px;
            }

            .work-feature-inner {
              min-height: auto;
              border-radius: 22px;
            }

            .work-feature-copy {
              padding: 50px 24px;
            }

            .work-feature-copy h2 {
              font-size: 48px;
            }

            .feature-points {
              grid-template-columns: 1fr;
            }

            .work-feature-visual {
              min-height: 420px;
            }

            .feature-ring-one {
              width: 170px;
              height: 170px;
            }

            .feature-ring-two {
              width: 285px;
              height: 285px;
            }

            .feature-ring-three {
              width: 390px;
              height: 390px;
            }

            .feature-center {
              width: 95px;
              height: 95px;
            }

            .feature-node {
              padding: 8px 10px;
              font-size: 7px;
            }

            .project-gallery-bottom {
              padding-top: 80px;
            }

            .work-philosophy {
              padding: 90px 14px;
            }

            .work-philosophy h2 {
              font-size: 55px;
            }

            .philosophy-bottom {
              margin-top: 40px;
            }

            .work-final {
              padding: 20px 12px 50px;
            }

            .work-final-inner {
              min-height: 470px;
              border-radius: 22px;
              padding: 28px 22px;
            }

            .work-final h2 {
              font-size: 54px;
            }

            .work-final-inner > a {
              width: 100%;
              justify-content: space-between;
            }
          }

          /* =====================================================
             REDUCED MOTION
          ====================================================== */

          @media (prefers-reduced-motion: reduce) {
            .work-hero-glow,
            .hero-work-card,
            .work-marquee-track,
            .feature-center,
            .feature-node {
              animation: none !important;
            }

            [data-reveal] {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <FooterSection />
    </>
  );
}
