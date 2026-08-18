"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "PENGTRESSES",
    type: "Booking platform",
    description:
      "A premium booking experience created for a London-based hair specialist.",
    accent: "#ff9af5",
  },
  {
    name: "POWER ELECTRODE",
    type: "Corporate website",
    description:
      "A professional digital presence created for a growing Ghanaian manufacturer.",
    accent: "#cfff5b",
  },
  {
    name: "TOTAL LOGISTICS",
    type: "Business website",
    description:
      "A clear, responsive website designed to communicate trust and capability.",
    accent: "#fff047",
  },
];

const process = [
  {
    step: "01",
    label: "Discovery",
    title: "We understand your business",
    description:
      "We identify your goals, customers, services and project requirements.",
    colour: "#ff9af5",
  },
  {
    step: "02",
    label: "Design",
    title: "We create the experience",
    description:
      "We design a clear, professional website focused on trust and conversion.",
    colour: "#cfff5b",
  },
  {
    step: "03",
    label: "Development",
    title: "We build and launch",
    description:
      "We develop, test and launch a responsive website built for every screen.",
    colour: "#fff047",
  },
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={sectionRef} className="about-page">
      {/* Pink section */}
      <section className="pink-section">
        <div className="section-container pink-content">
          <div
            className={`pink-heading ${
              visible ? "content-visible" : "content-hidden"
            }`}
          >
            <span className="small-label">About Numo Digital</span>

            <h1>
              YOUR BUSINESS
              <br />
              KEEPS MOVING.
              <br />
              <span className="headline-bottom">
                <span className="pink-video">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                  >
                    <source src="/videos/pink-balloon.webm" type="video/webm" />
                  </video>
                </span>

                <span>NUMO DOES TOO.</span>
              </span>
            </h1>
          </div>

          <div
            className={`pink-description ${
              visible ? "content-visible" : "content-hidden"
            }`}
          >
            <p>
              Numo Digital designs, builds and maintains professional websites
              that help growing businesses build trust, attract customers and
              generate more enquiries.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="section-container project-grid">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`project-card ${
                visible ? "card-visible" : "card-hidden"
              }`}
              style={{
                transitionDelay: `${300 + index * 120}ms`,
              }}
            >
              <div className="card-header">
                <div className="card-brand">
                  <strong>numo</strong>

                  <span style={{ backgroundColor: project.accent }}>
                    {project.type}
                  </span>
                </div>

                <span className="card-number">0{index + 1}</span>
              </div>

              <div className="stars">★★★★★</div>

              <h2>{project.name}</h2>
              <p>{project.description}</p>

              <div className="card-footer">
                <span
                  className="status-dot"
                  style={{
                    backgroundColor: project.accent,
                    boxShadow: `0 0 14px ${project.accent}`,
                  }}
                />

                <span>Selected Numo Digital project</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Yellow section */}
      <section className="yellow-section">
        <div className="section-container yellow-heading">
          <h2>
            A WEB
            <br />
            STUDIO
          </h2>
        </div>

        <div className="process-stage">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="yellow-video"
          >
            <source src="/videos/yellow-balloon.webm" type="video/webm" />
          </video>

          <div className="process-list">
            {process.map((item, index) => (
              <article
                className="process-card"
                key={item.step}
                style={{
                  transform: `translateX(${index === 1 ? "30px" : "0"})`,
                }}
              >
                <div className="process-top">
                  <span className="process-number">{item.step}</span>

                  <span
                    className="process-label"
                    style={{ backgroundColor: item.colour }}
                  >
                    {item.label}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-container bottom-heading">
          <h2>
            THAT NEVER
            <br />
            STOPS.
          </h2>
        </div>
      </section>

      <style jsx global>{`
        .about-page {
          --black: #1a1a1a;
          --pink: #f3a2ef;
          --yellow: #f8ff58;
          min-height: 100vh;
          overflow: hidden;
          background: #f1f1ef;
          color: var(--black);
          font-family: Arial, Helvetica, sans-serif;
        }

        .section-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .pink-section {
          position: relative;
          min-height: 720px;
          padding: 75px 0 0;
          background:
            radial-gradient(
              circle at 50% 70%,
              rgba(255, 255, 255, 0.34),
              transparent 42%
            ),
            var(--pink);
        }

        .pink-content {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 100px;
          align-items: center;
        }

        .small-label {
          display: block;
          margin-bottom: 17px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .pink-heading h1,
        .yellow-heading h2,
        .bottom-heading h2 {
          margin: 0;
          font-family:
            Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
          font-weight: 900;
          letter-spacing: -0.025em;
          line-height: 0.82;
          text-transform: uppercase;
        }

        .pink-heading h1 {
          font-size: clamp(57px, 6.4vw, 100px);
        }

        .headline-bottom {
          display: flex;
          align-items: center;
          gap: 11px;
          white-space: nowrap;
        }

        .pink-video {
          position: relative;
          display: block;
          width: clamp(75px, 8vw, 125px);
          height: clamp(40px, 4.5vw, 70px);
          overflow: hidden;
          flex-shrink: 0;
        }

        .pink-video video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 280%;
          height: 430%;
          object-fit: contain;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          filter: saturate(2) contrast(1.3);
        }

        .pink-description {
          max-width: 470px;
          padding-top: 70px;
          transition-delay: 150ms !important;
        }

        .pink-description p {
          margin: 0;
          color: rgba(26, 26, 26, 0.62);
          font-size: 15px;
          line-height: 1.55;
        }

        .content-hidden {
          opacity: 0;
          transform: translateY(22px);
        }

        .content-visible {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-grid {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 75px;
          transform: translateY(55px);
        }

        .project-card {
          min-height: 290px;
          padding: 22px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          background: white;
          box-shadow: 0 20px 45px rgba(102, 28, 97, 0.16);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-7px) !important;
          box-shadow: 0 28px 60px rgba(102, 28, 97, 0.24);
        }

        .card-hidden {
          opacity: 0;
          transform: translateY(45px);
        }

        .card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-header,
        .card-brand,
        .card-footer,
        .process-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-brand {
          justify-content: flex-start;
          gap: 8px;
        }

        .card-brand strong {
          font-size: 20px;
          letter-spacing: -0.07em;
        }

        .card-brand span,
        .process-label {
          border-radius: 999px;
          padding: 5px 9px;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .card-number,
        .process-number {
          color: #a1a1a1;
          font-family: ui-monospace, monospace;
          font-size: 9px;
        }

        .stars {
          margin: 39px 0 12px;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .project-card h2 {
          margin: 0;
          font-size: 27px;
          letter-spacing: -0.05em;
        }

        .project-card > p {
          min-height: 65px;
          margin: 14px 0 18px;
          padding: 13px;
          border-radius: 7px;
          background: #f3f3f1;
          color: #747474;
          font-size: 11px;
          line-height: 1.5;
        }

        .card-footer {
          justify-content: flex-start;
          gap: 10px;
          border-top: 1px solid #e5e5e2;
          padding-top: 14px;
          font-size: 10px;
          font-weight: 600;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .yellow-section {
          position: relative;
          min-height: 800px;
          padding: 125px 0 65px;
          overflow: hidden;
          background: var(--yellow);
        }

        .yellow-heading h2,
        .bottom-heading h2 {
          font-size: clamp(70px, 7.8vw, 120px);
        }

        .process-stage {
          position: relative;
          width: min(720px, calc(100% - 40px));
          min-height: 390px;
          margin: -45px auto 0;
        }

        .yellow-video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 520px;
          height: 520px;
          object-fit: contain;
          transform: translate(-50%, -50%);
          opacity: 1;
          mix-blend-mode: screen;
          filter: saturate(2.1) contrast(1.35);
        }

        .process-list {
          position: relative;
          z-index: 3;
          width: min(520px, 90%);
          margin: 0 auto;
          padding-top: 60px;
        }

        .process-card {
          margin-bottom: 5px;
          padding: 17px 20px;
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 12px 30px rgba(110, 108, 0, 0.12);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .process-card:hover {
          transform: translateX(0) scale(1.015) !important;
          box-shadow: 0 18px 40px rgba(110, 108, 0, 0.2);
        }

        .process-label {
          font-size: 8px;
        }

        .process-card h3 {
          margin: 11px 0 4px;
          font-size: 17px;
          letter-spacing: -0.035em;
        }

        .process-card p {
          margin: 0;
          color: #757575;
          font-size: 10px;
          line-height: 1.45;
        }

        .bottom-heading {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: flex-end;
          margin-top: -80px;
          text-align: right;
        }

        @media (max-width: 800px) {
          .pink-section {
            min-height: auto;
            padding-top: 55px;
          }

          .pink-content {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .pink-description {
            max-width: 500px;
            padding-top: 0;
          }

          .project-grid {
            grid-template-columns: 1fr;
            margin-top: 50px;
            padding-bottom: 80px;
            transform: none;
          }

          .project-card {
            min-height: auto;
          }

          .project-card > p {
            min-height: auto;
          }

          .yellow-section {
            min-height: auto;
            padding-top: 70px;
          }

          .process-stage {
            margin-top: 20px;
          }

          .bottom-heading {
            margin-top: 0;
          }
        }

        @media (max-width: 520px) {
          .section-container {
            width: calc(100% - 30px);
          }

          .pink-heading h1 {
            font-size: clamp(49px, 14vw, 68px);
          }

          .headline-bottom {
            display: block;
            white-space: normal;
          }

          .pink-video {
            display: inline-block;
            width: 70px;
            height: 42px;
            margin-right: 7px;
            vertical-align: middle;
          }

          .yellow-heading h2,
          .bottom-heading h2 {
            font-size: clamp(66px, 20vw, 90px);
          }

          .process-stage {
            min-height: 430px;
          }

          .process-list {
            width: 100%;
          }

          .process-card {
            transform: none !important;
          }

          .yellow-video {
            width: 450px;
            height: 450px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
