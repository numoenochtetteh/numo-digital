import Link from "next/link";

const products = ["Coda Webstore", "Codapay", "Coda Distribution", "Codashop"];

function ProductIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="frame2-product-icon">
      <circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <rect
        x="10"
        y="13"
        width="20"
        height="15"
        rx="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M10 19h6c3 0 4 2 4 4v5M30 21h-6c-3 0-4-2-4-4v-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmileIcon() {
  return (
    <div className="frame2-smile">
      <span className="frame2-eye frame2-eye-left" />
      <span className="frame2-eye frame2-eye-right" />
      <span className="frame2-mouth" />
    </div>
  );
}

const frame2Styles = `
  .frame2-section {
    position: relative;
    width: 100%;
    height: 100svh;
    min-height: 760px;
    overflow: hidden;
    background: #004b2c;
    color: #f1fff0;
  }

  .frame2-video-wrapper {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: min(1180px, 76vw);
    aspect-ratio: 1 / 1;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .frame2-video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: screen;
  }

  .frame2-products {
    position: absolute;
    z-index: 10;
    top: 70px;
    left: 50%;
    display: flex;
    width: min(820px, calc(100% - 40px));
    align-items: center;
    gap: 4px;
    transform: translateX(-50%);
    border-radius: 18px;
    background: rgba(124, 170, 142, 0.68);
    padding: 8px;
    box-shadow: 0 18px 50px rgba(0, 30, 17, 0.24);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .frame2-product {
    display: flex;
    min-width: 0;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border: 0;
    border-radius: 12px;
    background: transparent;
    padding: 14px 10px;
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
  }

  .frame2-product-active {
    background: #008c4f;
    color: #ffffff;
  }

  .frame2-product-icon {
    width: 18px;
    height: 18px;
    flex: none;
  }

  .frame2-content {
    position: absolute;
    z-index: 5;
    bottom: 62px;
    left: 40px;
    max-width: 980px;
  }

  .frame2-eyebrow {
    margin: 0 0 25px;
    color: #ffffff;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .frame2-title {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(64px, 5.65vw, 108px);
    font-weight: 900;
    line-height: 0.79;
    letter-spacing: -0.075em;
    text-transform: uppercase;
  }

  .frame2-title-line {
    display: block;
  }

  .frame2-title-bottom {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
  }

  .frame2-title-icon {
    width: 0.57em;
    height: 0.57em;
    flex: none;
  }

  .frame2-card {
    position: absolute;
    z-index: 12;
    right: 28px;
    bottom: 64px;
    width: min(405px, 29vw);
    border-radius: 28px;
    background: #a8ffc4;
    padding: 26px;
    color: #202020;
    box-shadow: 0 30px 90px rgba(0, 25, 14, 0.25);
  }

  .frame2-card-icon-area {
    display: flex;
    height: 215px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(5, 51, 31, 0.15);
    border-radius: 22px;
  }

  .frame2-smile {
    position: relative;
    width: 108px;
    height: 126px;
    border: 6px solid #202020;
    border-radius: 46px;
  }

  .frame2-eye {
    position: absolute;
    top: 37px;
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: #202020;
  }

  .frame2-eye-left {
    left: 25px;
  }

  .frame2-eye-right {
    right: 25px;
  }

  .frame2-mouth {
    position: absolute;
    bottom: 27px;
    left: 50%;
    width: 64px;
    height: 40px;
    transform: translateX(-50%);
    border-bottom: 6px solid #202020;
    border-radius: 0 0 999px 999px;
  }

  .frame2-card-copy {
    min-height: 74px;
    margin: 27px 0 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.45;
  }

  .frame2-button {
    display: flex;
    width: 100%;
    height: 56px;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
    border-radius: 8px;
    background: #202020;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    transition:
      transform 200ms ease,
      background 200ms ease;
  }

  .frame2-button:hover {
    transform: translateY(-2px);
    background: #000000;
  }

  @media (max-width: 1100px) {
    .frame2-video-wrapper {
      width: 920px;
    }

    .frame2-card {
      right: 22px;
      width: 330px;
    }

    .frame2-card-icon-area {
      height: 180px;
    }

    .frame2-content {
      left: 25px;
      max-width: 650px;
    }

    .frame2-title {
      font-size: clamp(58px, 7.5vw, 82px);
    }
  }

  @media (max-width: 800px) {
    .frame2-section {
      min-height: 850px;
    }

    .frame2-products {
      top: 28px;
      overflow-x: auto;
      justify-content: flex-start;
    }

    .frame2-product {
      min-width: 145px;
      flex: none;
      font-size: 12px;
    }

    .frame2-video-wrapper {
      top: 42%;
      width: 760px;
    }

    .frame2-content {
      right: 22px;
      bottom: 250px;
      left: 22px;
    }

    .frame2-title {
      font-size: clamp(47px, 12vw, 72px);
    }

    .frame2-card {
      right: 20px;
      bottom: 20px;
      left: 20px;
      display: grid;
      width: auto;
      grid-template-columns: 110px 1fr;
      column-gap: 20px;
      padding: 18px;
    }

    .frame2-card-icon-area {
      grid-row: span 2;
      height: 130px;
    }

    .frame2-smile {
      width: 72px;
      height: 84px;
      border-width: 4px;
      border-radius: 31px;
    }

    .frame2-eye {
      top: 24px;
      width: 10px;
      height: 10px;
    }

    .frame2-eye-left {
      left: 16px;
    }

    .frame2-eye-right {
      right: 16px;
    }

    .frame2-mouth {
      bottom: 17px;
      width: 42px;
      height: 27px;
      border-bottom-width: 4px;
    }

    .frame2-card-copy {
      min-height: 0;
      margin-top: 4px;
      font-size: 14px;
    }

    .frame2-button {
      height: 48px;
      margin-top: 12px;
    }
  }

  @media (max-width: 520px) {
    .frame2-section {
      min-height: 780px;
    }

    .frame2-products {
      width: calc(100% - 24px);
    }

    .frame2-video-wrapper {
      top: 39%;
      width: 620px;
    }

    .frame2-content {
      bottom: 240px;
    }

    .frame2-eyebrow {
      margin-bottom: 16px;
      font-size: 9px;
    }

    .frame2-title {
      font-size: clamp(41px, 13.5vw, 62px);
    }

    .frame2-title-bottom {
      gap: 7px;
    }

    .frame2-card {
      grid-template-columns: 88px 1fr;
      column-gap: 14px;
    }

    .frame2-card-icon-area {
      height: 110px;
    }

    .frame2-smile {
      transform: scale(0.75);
    }

    .frame2-card-copy {
      font-size: 12px;
    }
  }
`;

export function Frame2() {
  return (
    <section className="frame2-section" aria-labelledby="frame2-heading">
      <style dangerouslySetInnerHTML={{ __html: frame2Styles }} />

      {/* Looping background animation */}
      <div className="frame2-video-wrapper">
        <video
          src="/videos/coda-green-motion.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="frame2-video"
        />
      </div>

      {/* Product navigation */}
      <div className="frame2-products">
        {products.map((product, index) => (
          <div
            key={product}
            className={`frame2-product ${
              index === 0 ? "frame2-product-active" : ""
            }`}
          >
            <ProductIcon />
            <span>{product}</span>
          </div>
        ))}
      </div>

      {/* Bottom-left content */}
      <div className="frame2-content">
        <p className="frame2-eyebrow">Your vision, brought to life.</p>

        <h2 id="frame2-heading" className="frame2-title">
          <span className="frame2-title-line">Your Webstore</span>

          <span className="frame2-title-bottom">
            <ProductIcon />
            <span>Your Way</span>
          </span>
        </h2>
      </div>

      {/* Right information card */}
      <aside className="frame2-card">
        <div className="frame2-card-icon-area">
          <SmileIcon />
        </div>

        <p className="frame2-card-copy">
          A 100% customizable web store to sell your content your way.
        </p>

        <Link
          href="https://www.coda.co/products/coda-webstore"
          className="frame2-button"
        >
          Learn more
        </Link>
      </aside>
    </section>
  );
}

export default Frame2;
