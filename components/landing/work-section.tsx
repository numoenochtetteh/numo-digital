"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "PENGTRESSES",
    type: "Website",
    industry: "Beauty",
    description:
      "Premium booking and digital experience for a London-based hair specialist.",
    image: "/showcase/3.png",
    href: "https://pengtresses.vercel.app",
  },
  {
    title: "Power Electrode Ltd",
    type: "Website",
    industry: "Manufacturing",
    description:
      "Corporate website for a growing welding electrode manufacturer.",
    image: "/showcase/8.png",
    href: "https://github.com/numoenochtetteh/power-electrode-ltd",
  },
  {
    title: "Total Logistics",
    type: "Website",
    industry: "Logistics",
    description:
      "A modern business website focused on trust, services and credibility.",
    image: "/showcase/7.png",
    href: "https://totallog.org",
  },
];
export function WorkSection() {
  return (
    <section id="work" className="portfolio-work">
      <div className="portfolio-container">
        {/* ======================================================
            WORK HEADER
        ====================================================== */}

        <header className="portfolio-header">
          <span className="portfolio-eyebrow">
            <span className="portfolio-eyebrow-dot" />
            OUR WORK
          </span>

          <h2>Digital Experiences.</h2>

          <p>
            We design and develop thoughtful digital experiences that help
            businesses look better, communicate clearly and grow online.
          </p>

          <a href="#projects" className="portfolio-view-button">
            Explore our work
            <ArrowRight size={18} />
          </a>
        </header>

        {/* ======================================================
            PROJECTS
        ====================================================== */}

        <div id="projects" className="portfolio-grid">
          {/* ====================================================
              PROJECT 01
          ==================================================== */}

          <a
            href={projects[0].href}
            target="_blank"
            rel="noreferrer"
            className="portfolio-project"
          >
            <div className="project-image project-image-featured">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 58vw"
              />

              <div className="project-overlay" />

              <span className="project-index">01</span>

              <span className="project-arrow">
                <ArrowUpRight size={21} />
              </span>
            </div>

            <div className="project-information">
              <div className="project-title-row">
                <h3>{projects[0].title}</h3>

                <div className="project-tags">
                  <span>{projects[0].industry}</span>
                  <span>{projects[0].type}</span>
                </div>
              </div>

              <p>{projects[0].description}</p>
            </div>
          </a>

          {/* ====================================================
              PROJECT 02
          ==================================================== */}

          <a
            href={projects[1].href}
            target="_blank"
            rel="noreferrer"
            className="portfolio-project"
          >
            <div className="project-image">
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
              />

              <div className="project-overlay" />

              <span className="project-index">02</span>

              <span className="project-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>

            <div className="project-information">
              <div className="project-title-row">
                <h3>{projects[1].title}</h3>

                <div className="project-tags">
                  <span>{projects[1].industry}</span>
                </div>
              </div>

              <p>{projects[1].description}</p>
            </div>
          </a>

          {/* ====================================================
              PROJECT 03
          ==================================================== */}

          <a
            href={projects[2].href}
            target="_blank"
            rel="noreferrer"
            className="portfolio-project"
          >
            <div className="project-image">
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
              />

              <div className="project-overlay" />

              <span className="project-index">03</span>

              <span className="project-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>

            <div className="project-information">
              <div className="project-title-row">
                <h3>{projects[2].title}</h3>

                <div className="project-tags">
                  <span>{projects[2].industry}</span>
                  <span>{projects[2].type}</span>
                </div>
              </div>

              <p>{projects[2].description}</p>
            </div>
          </a>

          {/* ====================================================
              CTA CARD
          ==================================================== */}

          <div className="portfolio-statement">
            <div className="statement-top">
              <span>What we build</span>
              <span>2026</span>
            </div>

            <div className="statement-content">
              <h3>
                Websites built to
                <br />
                make businesses
                <br />
                look serious.
              </h3>

              <a href="/contact">
                Start a project
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================
            FOOTER
        ====================================================== */}

        <div className="portfolio-footer">
          <p>
            Web Design
            <span>•</span>
            Development
            <span>•</span>
            UX/UI
            <span>•</span>
            SEO
            <span>•</span>
            Branding
          </p>

          <a href="/contact">
            Let&apos;s work together
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <style jsx global>{`
        /* ======================================================
           SECTION
        ====================================================== */

        .portfolio-work {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #f4f4f1;
          color: #0a0a0a;
          padding: 110px 28px 90px;
        }

        .portfolio-container {
          width: min(1400px, 100%);
          margin: 0 auto;
        }

        /* ======================================================
           HEADER
        ====================================================== */

        .portfolio-header {
          display: flex;
          max-width: 1100px;
          margin: 0 auto 70px;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .portfolio-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-bottom: 30px;
          border: 1px solid #d4cec1;
          border-radius: 5px;
          padding: 8px 12px;
          color: #5f574f;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .portfolio-eyebrow-dot {
          display: block;
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 2px;
          background: #d9ff25;
        }

        .portfolio-header h2 {
          max-width: 1100px;
          margin: 0;
          font-size: clamp(43px, 5vw, 72px);
          font-weight: 700;
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .portfolio-header p {
          max-width: 570px;
          margin: 28px auto 0;
          color: #555555;
          font-size: 16px;
          line-height: 1.45;
          letter-spacing: -0.015em;
        }

        .portfolio-view-button {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          margin-top: 30px;
          border: 1px solid #c9c9c5;
          border-radius: 999px;
          padding: 14px 21px 14px 26px;
          color: #111;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .portfolio-view-button svg {
          transition: transform 0.3s ease;
        }

        .portfolio-view-button:hover {
          background: #111;
          color: #fff;
          transform: translateY(-2px);
        }

        .portfolio-view-button:hover svg {
          transform: translateX(4px);
        }

        /* ======================================================
           PROJECT GRID
        ====================================================== */

        .portfolio-grid {
          display: grid;
          grid-template-columns: 1.45fr 1fr;
          gap: 18px;
          align-items: start;
        }

        .portfolio-project {
          display: block;
          min-width: 0;
          color: #111;
          text-decoration: none;
        }

        /* ======================================================
           PROJECT IMAGE
        ====================================================== */

        .project-image {
          position: relative;
          height: 390px;
          overflow: hidden;
          border-radius: 26px;
          background: #e8e8e5;
        }

        .project-image-featured {
          height: 390px;
        }

        .project-image img {
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .portfolio-project:hover .project-image img {
          transform: scale(1.045);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.1) 0%,
            transparent 35%,
            transparent 75%,
            rgba(0, 0, 0, 0.04) 100%
          );
          pointer-events: none;
        }

        /* ======================================================
           NUMBER
        ====================================================== */

        .project-index {
          position: absolute;
          top: 17px;
          left: 17px;
          z-index: 3;
          display: flex;
          height: 31px;
          min-width: 40px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.95);
          padding: 0 10px;
          color: #111;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 9px;
          font-weight: 700;
          backdrop-filter: blur(10px);
        }

        /* ======================================================
           ARROW
        ====================================================== */

        .project-arrow {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 3;
          display: flex;
          width: 43px;
          height: 43px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: #111;
          backdrop-filter: blur(12px);
          transition:
            transform 0.35s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .portfolio-project:hover .project-arrow {
          background: #111;
          color: #fff;
          transform: rotate(45deg);
        }

        /* ======================================================
           PROJECT DETAILS
        ====================================================== */

        .project-information {
          padding: 18px 5px 36px;
        }

        .project-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .project-title-row h3 {
          margin: 0;
          font-size: clamp(25px, 2vw, 31px);
          font-weight: 650;
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .project-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .project-tags span {
          border: 1px solid #cacac5;
          border-radius: 5px;
          padding: 5px 8px;
          background: rgba(255, 255, 255, 0.45);
          font-size: 9px;
          font-weight: 500;
        }

        .project-information p {
          max-width: 560px;
          margin: 12px 0 0;
          color: #606060;
          font-size: 12px;
          line-height: 1.55;
        }

        /* ======================================================
           CTA CARD
        ====================================================== */

        .portfolio-statement {
          position: relative;
          display: flex;
          min-height: 390px;
          overflow: hidden;
          padding: 28px;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 26px;
          background: #d9ff25;
        }

        .portfolio-statement::after {
          position: absolute;
          right: -80px;
          bottom: -100px;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 50%;
          content: "";
        }

        .portfolio-statement::before {
          position: absolute;
          right: -5px;
          bottom: -160px;
          width: 340px;
          height: 340px;
          border: 1px solid rgba(0, 0, 0, 0.09);
          border-radius: 50%;
          content: "";
        }

        .statement-top {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .statement-content {
          position: relative;
          z-index: 2;
        }

        .statement-content h3 {
          margin: 0;
          font-size: clamp(34px, 3.4vw, 51px);
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .statement-content a {
          display: inline-flex;
          align-items: center;
          gap: 35px;
          margin-top: 28px;
          border-radius: 999px;
          background: #111;
          padding: 13px 17px;
          color: white;
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.3s ease;
        }

        .statement-content a:hover {
          gap: 45px;
        }

        /* ======================================================
           FOOTER
        ====================================================== */

        .portfolio-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 45px;
          padding-top: 25px;
          border-top: 1px solid #d1d1cc;
        }

        .portfolio-footer p {
          display: flex;
          gap: 10px;
          margin: 0;
          color: #777;
          font-size: 11px;
        }

        .portfolio-footer a {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #111;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
        }

        .portfolio-footer a svg {
          transition: transform 0.3s ease;
        }

        .portfolio-footer a:hover svg {
          transform: translate(3px, -3px);
        }

        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .portfolio-work {
            padding: 80px 18px 70px;
          }

          .portfolio-header {
            margin-bottom: 60px;
          }

          .portfolio-header h2 {
            font-size: 48px;
          }

          .portfolio-header p {
            font-size: 15px;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .project-image,
          .project-image-featured {
            height: 500px;
          }

          .portfolio-statement {
            min-height: 400px;
          }
        }

        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {
          .portfolio-work {
            padding: 70px 12px 60px;
          }

          .portfolio-header {
            max-width: 390px;
            margin-bottom: 50px;
          }

          .portfolio-eyebrow {
            margin-bottom: 18px;
            padding: 6px 9px;
            font-size: 7px;
          }

          .portfolio-eyebrow-dot {
            width: 7px;
            height: 7px;
          }

          .portfolio-header h2 {
            font-size: 42px;
            line-height: 0.98;
          }

          .portfolio-header p {
            max-width: 350px;
            margin-top: 22px;
            font-size: 14px;
            line-height: 1.45;
          }

          .portfolio-view-button {
            gap: 22px;
            margin-top: 25px;
            padding: 13px 18px 13px 22px;
            font-size: 12px;
          }

          .portfolio-grid {
            gap: 10px;
          }

          .project-image,
          .project-image-featured {
            height: 350px;
            border-radius: 18px;
          }

          .project-index {
            top: 13px;
            left: 13px;
          }

          .project-arrow {
            top: 12px;
            right: 12px;
            width: 41px;
            height: 41px;
          }

          .project-information {
            padding: 17px 3px 32px;
          }

          .project-title-row {
            align-items: flex-start;
            gap: 12px;
            flex-direction: column;
          }

          .project-title-row h3 {
            font-size: 27px;
          }

          .project-tags {
            justify-content: flex-start;
          }

          .project-information p {
            font-size: 12px;
          }

          .portfolio-statement {
            min-height: 350px;
            padding: 22px;
            border-radius: 18px;
          }

          .statement-content h3 {
            font-size: 38px;
          }

          .portfolio-footer {
            align-items: flex-start;
            gap: 25px;
            flex-direction: column;
          }

          .portfolio-footer p {
            gap: 7px;
            flex-wrap: wrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-image img,
          .project-arrow,
          .portfolio-view-button,
          .portfolio-view-button svg,
          .statement-content a,
          .portfolio-footer a svg {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
