// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";

// const heroCards = [
//   { src: "/showcase/1.png", className: "numo-arc-card numo-arc-card-1" },
//   { src: "/showcase/2.png", className: "numo-arc-card numo-arc-card-2" },
//   { src: "/showcase/3.png", className: "numo-arc-card numo-arc-card-3" },
//   { src: "/showcase/4.png", className: "numo-arc-card numo-arc-card-4" },
//   {
//     src: "/showcase/creative-workspace.jpg",
//     className: "numo-arc-card numo-arc-card-5",
//   },
//   {
//     src: "/showcase/coding-workspace.jpg",
//     className: "numo-arc-card numo-arc-card-6",
//   },
//   {
//     src: "/showcase/product-design.jpg",
//     className: "numo-arc-card numo-arc-card-7",
//   },
//   {
//     src: "/showcase/web-design.jpg",
//     className: "numo-arc-card numo-arc-card-8",
//   },
//   { src: "/showcase/1.png", className: "numo-arc-card numo-arc-card-9" },
//   { src: "/showcase/2.png", className: "numo-arc-card numo-arc-card-10" },
// ];

// const companyTabs = ["Web Design", "Development", "UI/UX", "Digital Products"];

// const pixels = Array.from({ length: 54 }, (_, index) => index);

// export function GalleryHero() {
//   const [activeTab, setActiveTab] = useState(0);

//   useEffect(() => {
//     const interval = window.setInterval(() => {
//       setActiveTab((current) => (current + 1) % companyTabs.length);
//     }, 3000);

//     return () => window.clearInterval(interval);
//   }, []);

//   return (
//     <section className="numo-arc-hero">
//       {/* =====================================================
//           BACKGROUND DETAILS
//       ====================================================== */}

//       <div className="numo-hero-glow numo-hero-glow-one" />
//       <div className="numo-hero-glow numo-hero-glow-two" />

//       <div className="numo-hero-pixel-field" aria-hidden="true">
//         {pixels.map((pixel) => (
//           <span
//             key={pixel}
//             className={
//               pixel === 5 ||
//               pixel === 14 ||
//               pixel === 23 ||
//               pixel === 34 ||
//               pixel === 46
//                 ? "numo-hero-pixel numo-hero-pixel-active"
//                 : "numo-hero-pixel"
//             }
//           />
//         ))}
//       </div>

//       <div className="numo-arc-inner">
//         {/* =====================================================
//             COMPANY BAR
//         ====================================================== */}

//         <div className="numo-company-bar">
//           {companyTabs.map((item, index) => (
//             <button
//               key={item}
//               type="button"
//               onClick={() => setActiveTab(index)}
//               className={`numo-company-pill ${
//                 activeTab === index ? "active" : ""
//               }`}
//             >
//               <span className="numo-company-dot" />
//               <span>{item}</span>
//             </button>
//           ))}
//         </div>

//         {/* =====================================================
//             IMAGE ARC
//         ====================================================== */}

//         <div className="numo-arc-images">
//           {heroCards.map((card, index) => (
//             <div key={`${card.src}-${index}`} className={card.className}>
//               <div className="numo-card-inner">
//                 <img src={card.src} alt="" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =====================================================
//             SMALL FLOATING DETAILS
//         ====================================================== */}

//         <div className="numo-floating-detail numo-floating-detail-left">
//           <span className="numo-floating-icon">
//             <Layers3 size={14} />
//           </span>

//           <div>
//             <small>DESIGN LED</small>
//             <strong>Built with intention.</strong>
//           </div>
//         </div>

//         <div className="numo-floating-detail numo-floating-detail-right">
//           <span className="numo-floating-icon">
//             <Code2 size={14} />
//           </span>

//           <div>
//             <small>ENGINEERED</small>
//             <strong>Ready to perform.</strong>
//           </div>
//         </div>

//         {/* =====================================================
//             CONTENT
//         ====================================================== */}

//         <div className="numo-arc-content">
//           <span className="numo-content-eyebrow">
//             <Sparkles size={12} />
//             NUMO DIGITAL
//           </span>

//           <h1>Digital products built for business growth.</h1>

//           <p>
//             Modern websites and digital experiences designed to help businesses
//             look credible, communicate clearly and grow online.
//           </p>

//           <div className="numo-arc-actions">
//             <Link href="/contact" className="numo-arc-primary">
//               <span>Start a project</span>

//               <span className="numo-primary-arrow">
//                 <ArrowUpRight size={16} />
//               </span>
//             </Link>

//             <Link href="/work" className="numo-arc-secondary">
//               View our work
//             </Link>
//           </div>

//           {/* =====================================================
//               BOTTOM MICRO STRIP
//           ====================================================== */}

//           <div className="numo-capability-strip">
//             <span>
//               <i />
//               Strategy
//             </span>

//             <span>
//               <i />
//               Design
//             </span>

//             <span>
//               <i />
//               Development
//             </span>

//             <span>
//               <i />
//               Launch
//             </span>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         /* =====================================================
//            HERO
//         ====================================================== */

//         .numo-arc-hero {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//           background: #f4f4f1;
//           color: #081126;
//           isolation: isolate;
//         }

//         .numo-arc-inner {
//           position: relative;
//           z-index: 4;
//           width: min(1440px, 100%);
//           height: 790px;
//           margin: 0 auto;
//         }

//         /* =====================================================
//            BACKGROUND MOTION
//         ====================================================== */

//         .numo-hero-glow {
//           position: absolute;
//           z-index: 0;
//           border-radius: 50%;
//           filter: blur(110px);
//           pointer-events: none;
//         }

//         .numo-hero-glow-one {
//           top: 100px;
//           left: 22%;
//           width: 360px;
//           height: 360px;
//           background: rgba(217, 255, 37, 0.09);
//           animation: numoGlowOne 10s ease-in-out infinite;
//         }

//         .numo-hero-glow-two {
//           right: 16%;
//           bottom: 80px;
//           width: 340px;
//           height: 340px;
//           background: rgba(129, 146, 255, 0.065);
//           animation: numoGlowTwo 12s ease-in-out infinite;
//         }

//         @keyframes numoGlowOne {
//           0%,
//           100% {
//             transform: translate3d(0, 0, 0) scale(1);
//           }

//           50% {
//             transform: translate3d(45px, 20px, 0) scale(1.12);
//           }
//         }

//         @keyframes numoGlowTwo {
//           0%,
//           100% {
//             transform: translate3d(0, 0, 0) scale(1);
//           }

//           50% {
//             transform: translate3d(-35px, -25px, 0) scale(1.1);
//           }
//         }

//         /* =====================================================
//            PIXEL DETAIL
//         ====================================================== */

//         .numo-hero-pixel-field {
//           position: absolute;
//           top: 390px;
//           left: 50%;
//           z-index: 1;
//           display: grid;
//           width: 350px;
//           grid-template-columns: repeat(9, 1fr);
//           gap: 10px;
//           opacity: 0.17;
//           transform: translateX(-50%);
//           pointer-events: none;
//         }

//         .numo-hero-pixel {
//           width: 7px;
//           height: 7px;
//           justify-self: center;
//           border-radius: 2px;
//           background: #8e948b;
//         }

//         .numo-hero-pixel-active {
//           background: #d9ff25;
//           opacity: 1;
//           animation: numoPixelPulse 3s ease-in-out infinite;
//         }

//         @keyframes numoPixelPulse {
//           0%,
//           100% {
//             transform: scale(1);
//             opacity: 0.55;
//           }

//           50% {
//             transform: scale(1.5);
//             opacity: 1;
//           }
//         }

//         /* =====================================================
//            COMPANY BAR
//         ====================================================== */

//         .numo-company-bar {
//           position: absolute;
//           top: 18px;
//           left: 50%;
//           z-index: 80;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           gap: 5px;

//           padding: 7px;

//           border: 1px solid #d4d7cf;
//           border-radius: 20px;

//           background: #e7e8e2;

//           box-shadow:
//             0 10px 30px rgba(10, 15, 25, 0.065),
//             inset 0 1px 0 rgba(255, 255, 255, 0.7);

//           transform: translateX(-50%);

//           animation: numoBarReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
//         }

//         @keyframes numoBarReveal {
//           from {
//             opacity: 0;
//             transform: translate(-50%, -12px);
//           }

//           to {
//             opacity: 1;
//             transform: translate(-50%, 0);
//           }
//         }

//         .numo-company-pill {
//           position: relative;

//           display: inline-flex;
//           min-height: 45px;
//           align-items: center;
//           justify-content: center;

//           gap: 8px;

//           border: 0;
//           border-radius: 14px;

//           background: transparent;

//           padding: 0 18px;

//           color: #5d6570;

//           font-family: inherit;
//           font-size: 13px;
//           font-weight: 600;

//           white-space: nowrap;
//           cursor: pointer;

//           transition:
//             color 0.45s ease,
//             background 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             box-shadow 0.45s ease;
//         }

//         .numo-company-dot {
//           width: 7px;
//           height: 7px;

//           flex-shrink: 0;

//           border-radius: 50%;

//           background: #949daa;

//           transition:
//             background 0.4s ease,
//             transform 0.4s ease,
//             box-shadow 0.4s ease;
//         }

//         .numo-company-pill.active {
//           background: #0c1530;
//           color: #ffffff;

//           box-shadow: 0 8px 20px rgba(12, 21, 48, 0.16);

//           transform: scale(1.015);
//         }

//         .numo-company-pill.active .numo-company-dot {
//           background: #d9ff25;

//           transform: scale(1.25);

//           box-shadow: 0 0 12px rgba(217, 255, 37, 0.5);
//         }

//         /* =====================================================
//            ARC
//         ====================================================== */

//         .numo-arc-images {
//           position: absolute;
//           top: 92px;
//           left: 50%;

//           width: 1080px;
//           height: 360px;

//           transform: translateX(-50%);
//           transform-origin: top center;

//           pointer-events: none;

//           animation: numoArcFloat 8s ease-in-out infinite;
//         }

//         @keyframes numoArcFloat {
//           0%,
//           100% {
//             transform: translateX(-50%) translateY(0);
//           }

//           50% {
//             transform: translateX(-50%) translateY(-6px);
//           }
//         }

//         .numo-arc-card {
//           position: absolute;
//           overflow: hidden;

//           border-radius: 22px;

//           background: #ffffff;

//           box-shadow: 0 16px 34px rgba(10, 15, 25, 0.1);
//         }

//         .numo-card-inner {
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           border-radius: inherit;
//         }

//         .numo-arc-card img {
//           display: block;
//           width: 100%;
//           height: 100%;

//           object-fit: cover;

//           pointer-events: none;
//           user-select: none;

//           animation: numoImageZoom 11s ease-in-out infinite alternate;
//         }

//         @keyframes numoImageZoom {
//           from {
//             transform: scale(1);
//           }

//           to {
//             transform: scale(1.035);
//           }
//         }

//         /* =====================================================
//            LEFT ARC
//         ====================================================== */

//         .numo-arc-card-1 {
//           top: 280px;
//           left: 38px;
//           width: 132px;
//           height: 132px;
//           z-index: 1;
//           animation: numoCard1 7s ease-in-out infinite;
//         }

//         @keyframes numoCard1 {
//           0%,
//           100% {
//             transform: rotate(-41deg) translateY(0);
//           }

//           50% {
//             transform: rotate(-41deg) translateY(-5px);
//           }
//         }

//         .numo-arc-card-2 {
//           top: 205px;
//           left: 92px;
//           width: 138px;
//           height: 138px;
//           z-index: 2;
//           animation: numoCard2 7.5s -2s ease-in-out infinite;
//         }

//         @keyframes numoCard2 {
//           0%,
//           100% {
//             transform: rotate(-33deg) translateY(0);
//           }

//           50% {
//             transform: rotate(-33deg) translateY(-6px);
//           }
//         }

//         .numo-arc-card-3 {
//           top: 132px;
//           left: 175px;
//           width: 144px;
//           height: 144px;
//           z-index: 3;
//           animation: numoCard3 7.2s -3s ease-in-out infinite;
//         }

//         @keyframes numoCard3 {
//           0%,
//           100% {
//             transform: rotate(-24deg) translateY(0);
//           }

//           50% {
//             transform: rotate(-24deg) translateY(-5px);
//           }
//         }

//         .numo-arc-card-4 {
//           top: 78px;
//           left: 286px;
//           width: 146px;
//           height: 146px;
//           z-index: 4;
//           animation: numoCard4 8s -1s ease-in-out infinite;
//         }

//         @keyframes numoCard4 {
//           0%,
//           100% {
//             transform: rotate(-15deg) translateY(0);
//           }

//           50% {
//             transform: rotate(-15deg) translateY(-6px);
//           }
//         }

//         .numo-arc-card-5 {
//           top: 42px;
//           left: 415px;
//           width: 148px;
//           height: 148px;
//           z-index: 5;
//           animation: numoCard5 7.4s -4s ease-in-out infinite;
//         }

//         @keyframes numoCard5 {
//           0%,
//           100% {
//             transform: rotate(-6deg) translateY(0);
//           }

//           50% {
//             transform: rotate(-6deg) translateY(-5px);
//           }
//         }

//         /* =====================================================
//            RIGHT ARC
//         ====================================================== */

//         .numo-arc-card-6 {
//           top: 50px;
//           left: 552px;
//           width: 148px;
//           height: 148px;
//           z-index: 5;
//           animation: numoCard6 7.8s -2.5s ease-in-out infinite;
//         }

//         @keyframes numoCard6 {
//           0%,
//           100% {
//             transform: rotate(7deg) translateY(0);
//           }

//           50% {
//             transform: rotate(7deg) translateY(-6px);
//           }
//         }

//         .numo-arc-card-7 {
//           top: 84px;
//           left: 678px;
//           width: 146px;
//           height: 146px;
//           z-index: 4;
//           animation: numoCard7 7s -1.5s ease-in-out infinite;
//         }

//         @keyframes numoCard7 {
//           0%,
//           100% {
//             transform: rotate(16deg) translateY(0);
//           }

//           50% {
//             transform: rotate(16deg) translateY(-5px);
//           }
//         }

//         .numo-arc-card-8 {
//           top: 140px;
//           left: 785px;
//           width: 144px;
//           height: 144px;
//           z-index: 3;
//           animation: numoCard8 7.6s -3.2s ease-in-out infinite;
//         }

//         @keyframes numoCard8 {
//           0%,
//           100% {
//             transform: rotate(24deg) translateY(0);
//           }

//           50% {
//             transform: rotate(24deg) translateY(-6px);
//           }
//         }

//         .numo-arc-card-9 {
//           top: 212px;
//           left: 868px;
//           width: 138px;
//           height: 138px;
//           z-index: 2;
//           animation: numoCard9 7.2s -2s ease-in-out infinite;
//         }

//         @keyframes numoCard9 {
//           0%,
//           100% {
//             transform: rotate(33deg) translateY(0);
//           }

//           50% {
//             transform: rotate(33deg) translateY(-5px);
//           }
//         }

//         .numo-arc-card-10 {
//           top: 286px;
//           left: 922px;
//           width: 132px;
//           height: 132px;
//           z-index: 1;
//           animation: numoCard10 7.8s -4s ease-in-out infinite;
//         }

//         @keyframes numoCard10 {
//           0%,
//           100% {
//             transform: rotate(40deg) translateY(0);
//           }

//           50% {
//             transform: rotate(40deg) translateY(-6px);
//           }
//         }

//         /* =====================================================
//            FLOATING DETAILS
//         ====================================================== */

//         .numo-floating-detail {
//           position: absolute;
//           z-index: 15;

//           display: flex;
//           align-items: center;

//           gap: 9px;

//           border: 1px solid #d7d8d0;
//           border-radius: 13px;

//           background: #f7f6f2;

//           padding: 9px 11px;

//           box-shadow: 0 13px 30px rgba(10, 15, 25, 0.06);

//           pointer-events: none;
//         }

//         .numo-floating-detail-left {
//           top: 445px;
//           left: 75px;
//           animation: numoFloatingLeft 6s ease-in-out infinite;
//         }

//         .numo-floating-detail-right {
//           top: 455px;
//           right: 75px;
//           animation: numoFloatingRight 6.5s -2s ease-in-out infinite;
//         }

//         @keyframes numoFloatingLeft {
//           50% {
//             transform: translateY(-6px);
//           }
//         }

//         @keyframes numoFloatingRight {
//           50% {
//             transform: translateY(-7px);
//           }
//         }

//         .numo-floating-icon {
//           display: grid;

//           width: 31px;
//           height: 31px;

//           place-items: center;

//           border-radius: 9px;

//           background: #d9ff25;

//           color: #111827;
//         }

//         .numo-floating-detail > div {
//           display: flex;
//           flex-direction: column;
//         }

//         .numo-floating-detail small {
//           color: #99958d;

//           font-family: ui-monospace, monospace;

//           font-size: 6px;
//           font-weight: 700;

//           letter-spacing: 0.12em;
//         }

//         .numo-floating-detail strong {
//           margin-top: 2px;

//           color: #2b2925;

//           font-size: 9px;
//           font-weight: 650;
//         }

//         /* =====================================================
//            CONTENT
//         ====================================================== */

//         .numo-arc-content {
//           position: absolute;
//           top: 405px;
//           left: 50%;

//           z-index: 20;

//           width: min(680px, 90%);

//           text-align: center;

//           transform: translateX(-50%);
//         }

//         .numo-content-eyebrow {
//           display: inline-flex;
//           align-items: center;

//           gap: 7px;

//           margin-bottom: 14px;

//           border: 1px solid #d9d6cf;
//           border-radius: 999px;

//           background: rgba(255, 255, 255, 0.62);

//           padding: 7px 10px;

//           color: #6b665f;

//           font-family: ui-monospace, monospace;

//           font-size: 7px;
//           font-weight: 700;

//           letter-spacing: 0.13em;

//           animation: numoReveal 0.8s 0.08s cubic-bezier(0.22, 1, 0.36, 1) both;
//         }

//         .numo-content-eyebrow svg {
//           color: #9aad00;
//         }

//         .numo-arc-content h1 {
//           max-width: 650px;

//           margin: 0 auto;

//           color: #081126;

//           font-size: clamp(46px, 4.3vw, 62px);

//           font-weight: 700;

//           line-height: 0.95;

//           letter-spacing: -0.055em;

//           animation: numoReveal 0.9s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both;
//         }

//         .numo-arc-content p {
//           max-width: 540px;

//           margin: 20px auto 0;

//           color: #73819a;

//           font-size: 14px;

//           line-height: 1.5;

//           animation: numoReveal 0.9s 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
//         }

//         @keyframes numoReveal {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* =====================================================
//            BUTTONS
//         ====================================================== */

//         .numo-arc-actions {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           gap: 11px;

//           margin-top: 26px;

//           animation: numoReveal 0.9s 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
//         }

//         .numo-arc-actions a {
//           display: inline-flex;
//           min-height: 52px;

//           align-items: center;
//           justify-content: center;

//           border-radius: 999px;

//           padding: 0 25px;

//           font-size: 13px;
//           font-weight: 600;

//           text-decoration: none;

//           transition:
//             transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
//             background 0.3s ease,
//             box-shadow 0.3s ease;
//         }

//         .numo-arc-primary {
//           gap: 18px;

//           background: #0c1530;

//           color: #ffffff;

//           box-shadow: 0 10px 24px rgba(12, 21, 48, 0.14);
//         }

//         .numo-primary-arrow {
//           display: grid;

//           width: 30px;
//           height: 30px;

//           place-items: center;

//           border-radius: 50%;

//           background: #d9ff25;

//           color: #111827;

//           transition: transform 0.35s ease;
//         }

//         .numo-arc-primary:hover {
//           transform: translateY(-3px);

//           box-shadow: 0 17px 32px rgba(12, 21, 48, 0.18);
//         }

//         .numo-arc-primary:hover .numo-primary-arrow {
//           transform: rotate(45deg);
//         }

//         .numo-arc-secondary {
//           border: 1px solid #d8deea;

//           background: rgba(255, 255, 255, 0.74);

//           color: #101827;
//         }

//         .numo-arc-secondary:hover {
//           background: #ffffff;

//           transform: translateY(-3px);
//         }

//         /* =====================================================
//            CAPABILITY STRIP
//         ====================================================== */

//         .numo-capability-strip {
//           display: inline-flex;
//           align-items: center;

//           gap: 7px;

//           margin-top: 24px;

//           border: 1px solid #ddd9d1;
//           border-radius: 999px;

//           background: rgba(239, 238, 233, 0.84);

//           padding: 7px 9px;

//           box-shadow: 0 8px 20px rgba(10, 15, 25, 0.035);

//           animation: numoReveal 0.9s 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
//         }

//         .numo-capability-strip span {
//           display: flex;
//           align-items: center;

//           gap: 5px;

//           border-radius: 999px;

//           padding: 5px 8px;

//           color: #706c65;

//           font-size: 8px;
//           font-weight: 600;

//           white-space: nowrap;
//         }

//         .numo-capability-strip i {
//           width: 5px;
//           height: 5px;

//           border-radius: 50%;

//           background: #a3a9a1;
//         }

//         .numo-capability-strip span:first-child i {
//           background: #d9ff25;

//           box-shadow: 0 0 7px rgba(217, 255, 37, 0.55);
//         }

//         /* =====================================================
//            LAPTOP
//         ====================================================== */

//         @media (max-width: 1200px) {
//           .numo-arc-inner {
//             height: 740px;
//           }

//           .numo-arc-images {
//             top: 84px;

//             transform: translateX(-50%) scale(0.88);

//             animation: none;
//           }

//           .numo-arc-content {
//             top: 380px;
//           }

//           .numo-arc-content h1 {
//             font-size: 56px;
//           }

//           .numo-floating-detail-left {
//             left: 30px;
//           }

//           .numo-floating-detail-right {
//             right: 30px;
//           }
//         }

//         /* =====================================================
//            TABLET
//         ====================================================== */

//         @media (max-width: 900px) {
//           .numo-arc-inner {
//             height: 670px;
//           }

//           .numo-company-bar {
//             top: 12px;
//           }

//           .numo-company-pill {
//             min-height: 40px;

//             padding: 0 14px;

//             font-size: 11px;
//           }

//           .numo-arc-images {
//             top: 75px;

//             transform: translateX(-50%) scale(0.7);
//           }

//           .numo-arc-content {
//             top: 320px;

//             width: min(590px, 92%);
//           }

//           .numo-arc-content h1 {
//             font-size: 48px;
//           }

//           .numo-arc-content p {
//             max-width: 450px;

//             margin-top: 17px;

//             font-size: 13px;
//           }

//           .numo-floating-detail {
//             display: none;
//           }
//         }

//         /* =====================================================
//            PHONE
//         ====================================================== */

//         @media (max-width: 620px) {
//           .numo-arc-inner {
//             height: 610px;
//           }

//           /* solid background so navigation cannot show through */

//           .numo-company-bar {
//             top: 8px;
//             left: 10px;

//             width: calc(100% - 20px);

//             justify-content: flex-start;

//             gap: 4px;

//             overflow-x: auto;

//             padding: 6px;

//             border: 1px solid #d4d7cf;
//             border-radius: 17px;

//             background: #e7e8e2;

//             transform: none;

//             scrollbar-width: none;

//             animation: numoMobileBarReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1)
//               both;
//           }

//           @keyframes numoMobileBarReveal {
//             from {
//               opacity: 0;
//               transform: translateY(-10px);
//             }

//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .numo-company-bar::-webkit-scrollbar {
//             display: none;
//           }

//           .numo-company-pill {
//             min-height: 37px;

//             flex-shrink: 0;

//             padding: 0 12px;

//             border-radius: 12px;

//             font-size: 10px;
//           }

//           .numo-company-dot {
//             width: 6px;
//             height: 6px;
//           }

//           .numo-arc-images {
//             top: 66px;

//             transform: translateX(-50%) scale(0.46);

//             animation: numoMobileArc 8s ease-in-out infinite;
//           }

//           @keyframes numoMobileArc {
//             0%,
//             100% {
//               transform: translateX(-50%) scale(0.46) translateY(0);
//             }

//             50% {
//               transform: translateX(-50%) scale(0.46) translateY(-6px);
//             }
//           }

//           .numo-hero-pixel-field {
//             top: 245px;

//             width: 220px;

//             gap: 6px;

//             opacity: 0.13;
//           }

//           .numo-hero-pixel {
//             width: 5px;
//             height: 5px;
//           }

//           .numo-arc-content {
//             top: 250px;

//             width: calc(100% - 26px);
//           }

//           .numo-content-eyebrow {
//             margin-bottom: 11px;

//             padding: 6px 9px;

//             font-size: 6px;
//           }

//           .numo-arc-content h1 {
//             max-width: 380px;

//             font-size: 38px;

//             line-height: 0.96;

//             letter-spacing: -0.05em;
//           }

//           .numo-arc-content p {
//             max-width: 315px;

//             margin-top: 15px;

//             font-size: 12px;

//             line-height: 1.45;
//           }

//           .numo-arc-actions {
//             gap: 9px;

//             margin-top: 21px;
//           }

//           .numo-arc-actions a {
//             min-height: 46px;

//             padding: 0 17px;

//             font-size: 11px;
//           }

//           .numo-arc-primary {
//             gap: 10px;
//           }

//           .numo-primary-arrow {
//             width: 27px;
//             height: 27px;
//           }

//           .numo-capability-strip {
//             max-width: 100%;

//             gap: 2px;

//             margin-top: 20px;

//             padding: 5px;

//             overflow: hidden;
//           }

//           .numo-capability-strip span {
//             gap: 4px;

//             padding: 4px 5px;

//             font-size: 6.5px;
//           }

//           .numo-capability-strip i {
//             width: 4px;
//             height: 4px;
//           }

//           .numo-hero-glow-one {
//             top: 100px;
//             left: 10%;

//             width: 220px;
//             height: 220px;
//           }

//           .numo-hero-glow-two {
//             right: -80px;
//             bottom: 50px;

//             width: 210px;
//             height: 210px;
//           }
//         }

//         /* =====================================================
//            480 PHONE
//         ====================================================== */

//         @media (max-width: 480px) {
//           .numo-arc-inner {
//             height: 585px;
//           }

//           .numo-arc-images {
//             top: 62px;

//             transform: translateX(-50%) scale(0.4);

//             animation: numoMobileArcSmall 8s ease-in-out infinite;
//           }

//           @keyframes numoMobileArcSmall {
//             0%,
//             100% {
//               transform: translateX(-50%) scale(0.4) translateY(0);
//             }

//             50% {
//               transform: translateX(-50%) scale(0.4) translateY(-6px);
//             }
//           }

//           .numo-arc-content {
//             top: 225px;
//           }

//           .numo-arc-content h1 {
//             max-width: 350px;

//             font-size: 35px;
//           }

//           .numo-arc-content p {
//             max-width: 300px;

//             font-size: 11.5px;
//           }

//           .numo-arc-actions a {
//             min-height: 44px;

//             padding: 0 15px;

//             font-size: 10.5px;
//           }
//         }

//         /* =====================================================
//            SMALL PHONE
//         ====================================================== */

//         @media (max-width: 390px) {
//           .numo-arc-inner {
//             height: 565px;
//           }

//           .numo-company-pill {
//             min-height: 34px;

//             padding: 0 10px;

//             font-size: 9px;
//           }

//           .numo-arc-images {
//             top: 57px;

//             transform: translateX(-50%) scale(0.355);

//             animation: numoMobileArcTiny 8s ease-in-out infinite;
//           }

//           @keyframes numoMobileArcTiny {
//             0%,
//             100% {
//               transform: translateX(-50%) scale(0.355) translateY(0);
//             }

//             50% {
//               transform: translateX(-50%) scale(0.355) translateY(-5px);
//             }
//           }

//           .numo-arc-content {
//             top: 205px;
//           }

//           .numo-arc-content h1 {
//             max-width: 330px;

//             font-size: 32px;
//           }

//           .numo-arc-content p {
//             max-width: 285px;

//             font-size: 11px;
//           }

//           .numo-capability-strip span {
//             padding: 4px;

//             font-size: 6px;
//           }
//         }

//         /* =====================================================
//            VERY SMALL PHONE
//         ====================================================== */

//         @media (max-width: 350px) {
//           .numo-arc-inner {
//             height: 575px;
//           }

//           .numo-arc-images {
//             transform: translateX(-50%) scale(0.32);

//             animation: none;
//           }

//           .numo-arc-content {
//             top: 195px;
//           }

//           .numo-arc-content h1 {
//             font-size: 30px;
//           }

//           .numo-arc-actions {
//             flex-direction: column;
//           }

//           .numo-arc-actions a {
//             width: 165px;
//           }

//           .numo-capability-strip {
//             display: none;
//           }
//         }

//         /* =====================================================
//            REDUCED MOTION
//         ====================================================== */

//         @media (prefers-reduced-motion: reduce) {
//           .numo-hero-glow,
//           .numo-hero-pixel-active,
//           .numo-company-bar,
//           .numo-arc-images,
//           .numo-arc-card,
//           .numo-arc-card img,
//           .numo-floating-detail,
//           .numo-content-eyebrow,
//           .numo-arc-content h1,
//           .numo-arc-content p,
//           .numo-arc-actions,
//           .numo-capability-strip {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";

const heroCards = [
  { src: "/showcase/1.png", className: "numo-arc-card numo-arc-card-1" },
  { src: "/showcase/2.png", className: "numo-arc-card numo-arc-card-2" },
  { src: "/showcase/3.png", className: "numo-arc-card numo-arc-card-3" },
  { src: "/showcase/4.png", className: "numo-arc-card numo-arc-card-4" },
  {
    src: "/showcase/creative-workspace.jpg",
    className: "numo-arc-card numo-arc-card-5",
  },
  {
    src: "/showcase/coding-workspace.jpg",
    className: "numo-arc-card numo-arc-card-6",
  },
  {
    src: "/showcase/product-design.jpg",
    className: "numo-arc-card numo-arc-card-7",
  },
  {
    src: "/showcase/web-design.jpg",
    className: "numo-arc-card numo-arc-card-8",
  },
  { src: "/showcase/1.png", className: "numo-arc-card numo-arc-card-9" },
  { src: "/showcase/2.png", className: "numo-arc-card numo-arc-card-10" },
];

const companyTabs = ["Web Design", "Development", "UI/UX", "Digital Products"];

const pixels = Array.from({ length: 54 }, (_, index) => index);

export function GalleryHero() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTab((current) => (current + 1) % companyTabs.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="numo-arc-hero">
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div className="numo-hero-glow numo-hero-glow-one" />
      <div className="numo-hero-glow numo-hero-glow-two" />

      <div className="numo-hero-pixel-field" aria-hidden="true">
        {pixels.map((pixel) => (
          <span
            key={pixel}
            className={
              pixel === 5 ||
              pixel === 14 ||
              pixel === 23 ||
              pixel === 34 ||
              pixel === 46
                ? "numo-hero-pixel numo-hero-pixel-active"
                : "numo-hero-pixel"
            }
          />
        ))}
      </div>

      <div className="numo-arc-inner">
        {/* =====================================================
            COMPANY BAR
        ====================================================== */}

        <div className="numo-company-bar">
          {companyTabs.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`numo-company-pill ${
                activeTab === index ? "active" : ""
              }`}
            >
              <span className="numo-company-dot" />
              <span>{item}</span>
            </button>
          ))}
        </div>

        {/* =====================================================
            IMAGE ARC
        ====================================================== */}

        <div className="numo-arc-images">
          {heroCards.map((card, index) => (
            <div key={`${card.src}-${index}`} className={card.className}>
              <div className="numo-card-inner">
                <img src={card.src} alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            FLOATING DETAILS
        ====================================================== */}

        <div className="numo-floating-detail numo-floating-detail-left">
          <span className="numo-floating-icon">
            <Layers3 size={14} />
          </span>

          <div>
            <small>DESIGN LED</small>
            <strong>Built with intention.</strong>
          </div>
        </div>

        <div className="numo-floating-detail numo-floating-detail-right">
          <span className="numo-floating-icon">
            <Code2 size={14} />
          </span>

          <div>
            <small>ENGINEERED</small>
            <strong>Ready to perform.</strong>
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="numo-arc-content">
          <span className="numo-content-eyebrow">
            <Sparkles size={12} />
            NUMO DIGITAL
          </span>

          <h1>Digital products built for business growth.</h1>

          <p>
            Modern websites and digital experiences designed to help businesses
            look credible, communicate clearly and grow online.
          </p>

          <div className="numo-arc-actions">
            <Link href="/contact" className="numo-arc-primary">
              <span>Start a project</span>

              <span className="numo-primary-arrow">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            <Link href="/work" className="numo-arc-secondary">
              View our work
            </Link>
          </div>

          <div className="numo-capability-strip">
            <span>
              <i />
              Strategy
            </span>

            <span>
              <i />
              Design
            </span>

            <span>
              <i />
              Development
            </span>

            <span>
              <i />
              Launch
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* =====================================================
           HERO
        ====================================================== */

        .numo-arc-hero {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #f4f4f1;
          color: #081126;
          isolation: isolate;
        }

        .numo-arc-inner {
          position: relative;
          z-index: 4;
          width: min(1440px, 100%);
          height: 790px;
          margin: 0 auto;
        }

        /* =====================================================
           BACKGROUND GLOWS
        ====================================================== */

        .numo-hero-glow {
          position: absolute;
          z-index: 0;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
        }

        .numo-hero-glow-one {
          top: 100px;
          left: 22%;
          width: 360px;
          height: 360px;
          background: rgba(217, 255, 37, 0.09);
          animation: numoGlowOne 10s ease-in-out infinite;
        }

        .numo-hero-glow-two {
          right: 16%;
          bottom: 80px;
          width: 340px;
          height: 340px;
          background: rgba(129, 146, 255, 0.065);
          animation: numoGlowTwo 12s ease-in-out infinite;
        }

        @keyframes numoGlowOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(45px, 20px, 0) scale(1.12);
          }
        }

        @keyframes numoGlowTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-35px, -25px, 0) scale(1.1);
          }
        }

        /* =====================================================
           PIXEL DETAILS
        ====================================================== */

        .numo-hero-pixel-field {
          position: absolute;
          top: 390px;
          left: 50%;
          z-index: 1;

          display: grid;

          width: 350px;

          grid-template-columns: repeat(9, 1fr);

          gap: 10px;

          opacity: 0.17;

          transform: translateX(-50%);

          pointer-events: none;
        }

        .numo-hero-pixel {
          width: 7px;
          height: 7px;

          justify-self: center;

          border-radius: 2px;

          background: #8e948b;
        }

        .numo-hero-pixel-active {
          background: #d9ff25;

          opacity: 1;

          animation: numoPixelPulse 3s ease-in-out infinite;
        }

        @keyframes numoPixelPulse {
          0%,
          100% {
            transform: scale(1);

            opacity: 0.55;
          }

          50% {
            transform: scale(1.5);

            opacity: 1;
          }
        }

        /* =====================================================
           DARK COMPANY BAR
        ====================================================== */

        .numo-company-bar {
          position: absolute;
          top: 18px;
          left: 50%;
          z-index: 300;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 5px;

          padding: 7px;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;

          background: #0f172a;

          box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.19),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);

          transform: translateX(-50%);

          isolation: isolate;

          animation: numoBarReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes numoBarReveal {
          from {
            opacity: 0;

            transform: translate(-50%, -12px);
          }

          to {
            opacity: 1;

            transform: translate(-50%, 0);
          }
        }

        .numo-company-pill {
          position: relative;

          display: inline-flex;

          min-height: 45px;

          align-items: center;
          justify-content: center;

          gap: 8px;

          border: 0;
          border-radius: 14px;

          background: transparent;

          padding: 0 18px;

          color: #aeb8c8;

          font-family: inherit;

          font-size: 13px;
          font-weight: 600;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 0.45s ease,
            background 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s ease;
        }

        .numo-company-pill:hover {
          background: rgba(255, 255, 255, 0.05);

          color: #ffffff;
        }

        .numo-company-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #778293;

          transition:
            background 0.4s ease,
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .numo-company-pill.active {
          background: linear-gradient(135deg, #18274c 0%, #22325e 100%);

          color: #ffffff;

          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);

          transform: scale(1.015);
        }

        .numo-company-pill.active .numo-company-dot {
          background: #d9ff25;

          transform: scale(1.25);

          box-shadow: 0 0 12px rgba(217, 255, 37, 0.55);
        }

        /* =====================================================
           ARC
        ====================================================== */

        .numo-arc-images {
          position: absolute;
          top: 92px;
          left: 50%;

          width: 1080px;
          height: 360px;

          transform: translateX(-50%);
          transform-origin: top center;

          pointer-events: none;

          animation: numoArcFloat 8s ease-in-out infinite;
        }

        @keyframes numoArcFloat {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }

          50% {
            transform: translateX(-50%) translateY(-6px);
          }
        }

        .numo-arc-card {
          position: absolute;

          overflow: hidden;

          border-radius: 22px;

          background: #ffffff;

          box-shadow: 0 16px 34px rgba(10, 15, 25, 0.1);
        }

        .numo-card-inner {
          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: inherit;
        }

        .numo-arc-card img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          pointer-events: none;
          user-select: none;

          animation: numoImageZoom 11s ease-in-out infinite alternate;
        }

        @keyframes numoImageZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.035);
          }
        }

        /* =====================================================
           ARC LEFT
        ====================================================== */

        .numo-arc-card-1 {
          top: 280px;
          left: 38px;

          width: 132px;
          height: 132px;

          z-index: 1;

          animation: numoCard1 7s ease-in-out infinite;
        }

        @keyframes numoCard1 {
          0%,
          100% {
            transform: rotate(-41deg) translateY(0);
          }

          50% {
            transform: rotate(-41deg) translateY(-5px);
          }
        }

        .numo-arc-card-2 {
          top: 205px;
          left: 92px;

          width: 138px;
          height: 138px;

          z-index: 2;

          animation: numoCard2 7.5s -2s ease-in-out infinite;
        }

        @keyframes numoCard2 {
          0%,
          100% {
            transform: rotate(-33deg) translateY(0);
          }

          50% {
            transform: rotate(-33deg) translateY(-6px);
          }
        }

        .numo-arc-card-3 {
          top: 132px;
          left: 175px;

          width: 144px;
          height: 144px;

          z-index: 3;

          animation: numoCard3 7.2s -3s ease-in-out infinite;
        }

        @keyframes numoCard3 {
          0%,
          100% {
            transform: rotate(-24deg) translateY(0);
          }

          50% {
            transform: rotate(-24deg) translateY(-5px);
          }
        }

        .numo-arc-card-4 {
          top: 78px;
          left: 286px;

          width: 146px;
          height: 146px;

          z-index: 4;

          animation: numoCard4 8s -1s ease-in-out infinite;
        }

        @keyframes numoCard4 {
          0%,
          100% {
            transform: rotate(-15deg) translateY(0);
          }

          50% {
            transform: rotate(-15deg) translateY(-6px);
          }
        }

        .numo-arc-card-5 {
          top: 42px;
          left: 415px;

          width: 148px;
          height: 148px;

          z-index: 5;

          animation: numoCard5 7.4s -4s ease-in-out infinite;
        }

        @keyframes numoCard5 {
          0%,
          100% {
            transform: rotate(-6deg) translateY(0);
          }

          50% {
            transform: rotate(-6deg) translateY(-5px);
          }
        }

        /* =====================================================
           ARC RIGHT
        ====================================================== */

        .numo-arc-card-6 {
          top: 50px;
          left: 552px;

          width: 148px;
          height: 148px;

          z-index: 5;

          animation: numoCard6 7.8s -2.5s ease-in-out infinite;
        }

        @keyframes numoCard6 {
          0%,
          100% {
            transform: rotate(7deg) translateY(0);
          }

          50% {
            transform: rotate(7deg) translateY(-6px);
          }
        }

        .numo-arc-card-7 {
          top: 84px;
          left: 678px;

          width: 146px;
          height: 146px;

          z-index: 4;

          animation: numoCard7 7s -1.5s ease-in-out infinite;
        }

        @keyframes numoCard7 {
          0%,
          100% {
            transform: rotate(16deg) translateY(0);
          }

          50% {
            transform: rotate(16deg) translateY(-5px);
          }
        }

        .numo-arc-card-8 {
          top: 140px;
          left: 785px;

          width: 144px;
          height: 144px;

          z-index: 3;

          animation: numoCard8 7.6s -3.2s ease-in-out infinite;
        }

        @keyframes numoCard8 {
          0%,
          100% {
            transform: rotate(24deg) translateY(0);
          }

          50% {
            transform: rotate(24deg) translateY(-6px);
          }
        }

        .numo-arc-card-9 {
          top: 212px;
          left: 868px;

          width: 138px;
          height: 138px;

          z-index: 2;

          animation: numoCard9 7.2s -2s ease-in-out infinite;
        }

        @keyframes numoCard9 {
          0%,
          100% {
            transform: rotate(33deg) translateY(0);
          }

          50% {
            transform: rotate(33deg) translateY(-5px);
          }
        }

        .numo-arc-card-10 {
          top: 286px;
          left: 922px;

          width: 132px;
          height: 132px;

          z-index: 1;

          animation: numoCard10 7.8s -4s ease-in-out infinite;
        }

        @keyframes numoCard10 {
          0%,
          100% {
            transform: rotate(40deg) translateY(0);
          }

          50% {
            transform: rotate(40deg) translateY(-6px);
          }
        }

        /* =====================================================
           FLOATING DETAIL CARDS
        ====================================================== */

        .numo-floating-detail {
          position: absolute;
          z-index: 25;

          display: flex;
          align-items: center;

          gap: 10px;

          border: 1px solid rgba(205, 203, 195, 0.95);
          border-radius: 14px;

          background: rgba(248, 247, 243, 0.96);

          padding: 10px 12px;

          box-shadow: 0 14px 32px rgba(10, 15, 25, 0.065);

          pointer-events: none;
        }

        /*
          CHANGED:
          no longer sitting at extreme left/right edges.
        */

        .numo-floating-detail-left {
          top: 440px;
          left: 18%;

          animation: numoFloatingLeft 6s ease-in-out infinite;
        }

        .numo-floating-detail-right {
          top: 475px;
          right: 18%;

          animation: numoFloatingRight 6.7s -2s ease-in-out infinite;
        }

        @keyframes numoFloatingLeft {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-7px) rotate(1deg);
          }
        }

        @keyframes numoFloatingRight {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }

        .numo-floating-icon {
          display: grid;

          width: 34px;
          height: 34px;

          flex-shrink: 0;

          place-items: center;

          border-radius: 10px;

          background: #d9ff25;

          color: #111827;

          box-shadow: 0 5px 15px rgba(217, 255, 37, 0.18);
        }

        .numo-floating-detail > div {
          display: flex;
          flex-direction: column;
        }

        .numo-floating-detail small {
          color: #98948c;

          font-family: ui-monospace, monospace;

          font-size: 6px;
          font-weight: 700;

          letter-spacing: 0.13em;
        }

        .numo-floating-detail strong {
          margin-top: 3px;

          color: #292723;

          font-size: 9px;
          font-weight: 650;
        }

        /* =====================================================
           CONTENT
        ====================================================== */

        .numo-arc-content {
          position: absolute;
          top: 405px;
          left: 50%;

          z-index: 30;

          width: min(680px, 90%);

          text-align: center;

          transform: translateX(-50%);
        }

        .numo-content-eyebrow {
          display: inline-flex;
          align-items: center;

          gap: 7px;

          margin-bottom: 14px;

          border: 1px solid #d9d6cf;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.82);

          padding: 7px 10px;

          color: #6b665f;

          font-family: ui-monospace, monospace;

          font-size: 7px;
          font-weight: 700;

          letter-spacing: 0.13em;

          box-shadow: 0 7px 18px rgba(10, 15, 25, 0.035);

          animation: numoReveal 0.8s 0.08s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .numo-content-eyebrow svg {
          color: #9aad00;
        }

        .numo-arc-content h1 {
          max-width: 650px;

          margin: 0 auto;

          color: #081126;

          font-size: clamp(46px, 4.3vw, 62px);

          font-weight: 700;

          line-height: 0.95;

          letter-spacing: -0.055em;

          animation: numoReveal 0.9s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .numo-arc-content p {
          max-width: 540px;

          margin: 20px auto 0;

          color: #73819a;

          font-size: 14px;

          line-height: 1.5;

          animation: numoReveal 0.9s 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes numoReveal {
          from {
            opacity: 0;

            transform: translateY(20px);
          }

          to {
            opacity: 1;

            transform: translateY(0);
          }
        }

        /* =====================================================
           BUTTONS
        ====================================================== */

        .numo-arc-actions {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 11px;

          margin-top: 26px;

          animation: numoReveal 0.9s 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .numo-arc-actions a {
          display: inline-flex;

          min-height: 52px;

          align-items: center;
          justify-content: center;

          border-radius: 999px;

          padding: 0 25px;

          font-size: 13px;
          font-weight: 600;

          text-decoration: none;

          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .numo-arc-primary {
          gap: 18px;

          background: #0c1530;

          color: #ffffff;

          box-shadow: 0 10px 24px rgba(12, 21, 48, 0.14);
        }

        .numo-primary-arrow {
          display: grid;

          width: 30px;
          height: 30px;

          place-items: center;

          border-radius: 50%;

          background: #d9ff25;

          color: #111827;

          transition: transform 0.35s ease;
        }

        .numo-arc-primary:hover {
          transform: translateY(-3px);

          box-shadow: 0 17px 32px rgba(12, 21, 48, 0.18);
        }

        .numo-arc-primary:hover .numo-primary-arrow {
          transform: rotate(45deg);
        }

        .numo-arc-secondary {
          border: 1px solid #d8deea;

          background: rgba(255, 255, 255, 0.74);

          color: #101827;
        }

        .numo-arc-secondary:hover {
          background: #ffffff;

          transform: translateY(-3px);
        }

        /* =====================================================
           CAPABILITY STRIP
        ====================================================== */

        .numo-capability-strip {
          display: inline-flex;
          align-items: center;

          gap: 7px;

          margin-top: 24px;

          border: 1px solid #ddd9d1;
          border-radius: 999px;

          background: rgba(239, 238, 233, 0.9);

          padding: 7px 9px;

          box-shadow: 0 8px 20px rgba(10, 15, 25, 0.035);

          animation: numoReveal 0.9s 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .numo-capability-strip span {
          display: flex;
          align-items: center;

          gap: 5px;

          border-radius: 999px;

          padding: 5px 8px;

          color: #706c65;

          font-size: 8px;
          font-weight: 600;

          white-space: nowrap;
        }

        .numo-capability-strip i {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #a3a9a1;
        }

        .numo-capability-strip span:first-child i {
          background: #d9ff25;

          box-shadow: 0 0 7px rgba(217, 255, 37, 0.55);
        }

        /* =====================================================
           LAPTOP
        ====================================================== */

        @media (max-width: 1200px) {
          .numo-arc-inner {
            height: 740px;
          }

          .numo-arc-images {
            top: 84px;

            transform: translateX(-50%) scale(0.88);

            animation: none;
          }

          .numo-arc-content {
            top: 380px;
          }

          .numo-arc-content h1 {
            font-size: 56px;
          }

          .numo-floating-detail-left {
            left: 12%;
          }

          .numo-floating-detail-right {
            right: 12%;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .numo-arc-inner {
            height: 670px;
          }

          .numo-company-bar {
            top: 12px;
          }

          .numo-company-pill {
            min-height: 40px;

            padding: 0 14px;

            font-size: 11px;
          }

          .numo-arc-images {
            top: 75px;

            transform: translateX(-50%) scale(0.7);
          }

          .numo-arc-content {
            top: 320px;

            width: min(590px, 92%);
          }

          .numo-arc-content h1 {
            font-size: 48px;
          }

          .numo-arc-content p {
            max-width: 450px;

            margin-top: 17px;

            font-size: 13px;
          }

          /*
            Keep tablet clean.
          */

          .numo-floating-detail {
            display: none;
          }
        }

        /* =====================================================
           PHONE
        ====================================================== */

        @media (max-width: 620px) {
          .numo-arc-inner {
            height: 610px;
          }

          .numo-company-bar {
            top: 8px;
            left: 10px;
            z-index: 300;

            width: calc(100% - 20px);

            justify-content: flex-start;

            gap: 4px;

            overflow-x: auto;

            padding: 6px;

            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 17px;

            background: #0f172a;

            box-shadow:
              0 14px 35px rgba(0, 0, 0, 0.19),
              inset 0 1px 0 rgba(255, 255, 255, 0.04);

            transform: none;

            scrollbar-width: none;

            isolation: isolate;

            animation: numoMobileBarReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1)
              both;
          }

          @keyframes numoMobileBarReveal {
            from {
              opacity: 0;

              transform: translateY(-10px);
            }

            to {
              opacity: 1;

              transform: translateY(0);
            }
          }

          .numo-company-bar::-webkit-scrollbar {
            display: none;
          }

          .numo-company-pill {
            min-height: 37px;

            flex-shrink: 0;

            padding: 0 12px;

            border-radius: 12px;

            font-size: 10px;
          }

          .numo-company-dot {
            width: 6px;
            height: 6px;
          }

          .numo-arc-images {
            top: 66px;

            transform: translateX(-50%) scale(0.46);

            animation: numoMobileArc 8s ease-in-out infinite;
          }

          @keyframes numoMobileArc {
            0%,
            100% {
              transform: translateX(-50%) scale(0.46) translateY(0);
            }

            50% {
              transform: translateX(-50%) scale(0.46) translateY(-6px);
            }
          }

          .numo-hero-pixel-field {
            top: 245px;

            width: 220px;

            gap: 6px;

            opacity: 0.13;
          }

          .numo-hero-pixel {
            width: 5px;
            height: 5px;
          }

          .numo-arc-content {
            top: 250px;

            width: calc(100% - 26px);
          }

          .numo-content-eyebrow {
            margin-bottom: 11px;

            padding: 6px 9px;

            font-size: 6px;
          }

          .numo-arc-content h1 {
            max-width: 380px;

            font-size: 38px;

            line-height: 0.96;

            letter-spacing: -0.05em;
          }

          .numo-arc-content p {
            max-width: 315px;

            margin-top: 15px;

            font-size: 12px;

            line-height: 1.45;
          }

          .numo-arc-actions {
            gap: 9px;

            margin-top: 21px;
          }

          .numo-arc-actions a {
            min-height: 46px;

            padding: 0 17px;

            font-size: 11px;
          }

          .numo-arc-primary {
            gap: 10px;
          }

          .numo-primary-arrow {
            width: 27px;
            height: 27px;
          }

          .numo-capability-strip {
            max-width: 100%;

            gap: 2px;

            margin-top: 20px;

            overflow: hidden;

            padding: 5px;
          }

          .numo-capability-strip span {
            gap: 4px;

            padding: 4px 5px;

            font-size: 6.5px;
          }

          .numo-capability-strip i {
            width: 4px;
            height: 4px;
          }

          .numo-hero-glow-one {
            top: 100px;
            left: 10%;

            width: 220px;
            height: 220px;
          }

          .numo-hero-glow-two {
            right: -80px;
            bottom: 50px;

            width: 210px;
            height: 210px;
          }
        }

        /* =====================================================
           480 PHONE
        ====================================================== */

        @media (max-width: 480px) {
          .numo-arc-inner {
            height: 585px;
          }

          .numo-arc-images {
            top: 62px;

            transform: translateX(-50%) scale(0.4);

            animation: numoMobileArcSmall 8s ease-in-out infinite;
          }

          @keyframes numoMobileArcSmall {
            0%,
            100% {
              transform: translateX(-50%) scale(0.4) translateY(0);
            }

            50% {
              transform: translateX(-50%) scale(0.4) translateY(-6px);
            }
          }

          .numo-arc-content {
            top: 225px;
          }

          .numo-arc-content h1 {
            max-width: 350px;

            font-size: 35px;
          }

          .numo-arc-content p {
            max-width: 300px;

            font-size: 11.5px;
          }

          .numo-arc-actions a {
            min-height: 44px;

            padding: 0 15px;

            font-size: 10.5px;
          }
        }

        /* =====================================================
           SMALL PHONE
        ====================================================== */

        @media (max-width: 390px) {
          .numo-arc-inner {
            height: 565px;
          }

          .numo-company-pill {
            min-height: 34px;

            padding: 0 10px;

            font-size: 9px;
          }

          .numo-arc-images {
            top: 57px;

            transform: translateX(-50%) scale(0.355);

            animation: numoMobileArcTiny 8s ease-in-out infinite;
          }

          @keyframes numoMobileArcTiny {
            0%,
            100% {
              transform: translateX(-50%) scale(0.355) translateY(0);
            }

            50% {
              transform: translateX(-50%) scale(0.355) translateY(-5px);
            }
          }

          .numo-arc-content {
            top: 205px;
          }

          .numo-arc-content h1 {
            max-width: 330px;

            font-size: 32px;
          }

          .numo-arc-content p {
            max-width: 285px;

            font-size: 11px;
          }

          .numo-capability-strip span {
            padding: 4px;

            font-size: 6px;
          }
        }

        /* =====================================================
           VERY SMALL PHONE
        ====================================================== */

        @media (max-width: 350px) {
          .numo-arc-inner {
            height: 575px;
          }

          .numo-arc-images {
            transform: translateX(-50%) scale(0.32);

            animation: none;
          }

          .numo-arc-content {
            top: 195px;
          }

          .numo-arc-content h1 {
            font-size: 30px;
          }

          .numo-arc-actions {
            flex-direction: column;
          }

          .numo-arc-actions a {
            width: 165px;
          }

          .numo-capability-strip {
            display: none;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .numo-hero-glow,
          .numo-hero-pixel-active,
          .numo-company-bar,
          .numo-arc-images,
          .numo-arc-card,
          .numo-arc-card img,
          .numo-floating-detail,
          .numo-content-eyebrow,
          .numo-arc-content h1,
          .numo-arc-content p,
          .numo-arc-actions,
          .numo-capability-strip {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
