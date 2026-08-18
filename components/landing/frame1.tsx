import Link from "next/link";

function CustomizeIcon() {
  return (
    <svg viewBox="0 0 76 76" aria-hidden="true" className="frame1-icon">
      <rect
        x="3"
        y="3"
        width="70"
        height="70"
        rx="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <rect
        x="18"
        y="22"
        width="40"
        height="32"
        rx="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path
        d="M18 35h12c5 0 8 3 8 8v11M58 42H46c-5 0-8-3-8-8V22"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MonetizeIcon() {
  return (
    <svg
      viewBox="0 0 76 76"
      aria-hidden="true"
      className="frame1-icon frame1-icon-small"
    >
      <rect
        x="3"
        y="3"
        width="70"
        height="70"
        rx="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <ellipse
        cx="29"
        cy="38"
        rx="16"
        ry="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <ellipse
        cx="39"
        cy="38"
        rx="16"
        ry="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <ellipse
        cx="48"
        cy="38"
        rx="16"
        ry="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <text
        x="48"
        y="45"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fill="currentColor"
      >
        $
      </text>
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg
      viewBox="0 0 76 76"
      aria-hidden="true"
      className="frame1-icon frame1-maximize-icon"
    >
      <rect
        x="3"
        y="3"
        width="70"
        height="70"
        rx="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path
        d="m22 48 16-17 16 17M22 35l16-17 16 17M22 61l16-17 16 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

const frameStyles = `
  .frame1-hero {
    position: relative;
    width: 100%;
    height: min(832px, 100svh);
    min-height: 720px;
    overflow: hidden;
    background: #f7f7eb;
    color: #050505;
  }

  .frame1-content {
    position: relative;
    z-index: 2;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 67px 24px 0;
    text-align: center;
  }

  .frame1-pill {
    display: inline-flex;
    min-height: 61px;
    align-items: center;
    gap: 12px;
    border-radius: 999px;
    background: #ecece2;
    padding: 0 21px;
    color: #050505;
    text-decoration: none;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
    font-size: 18px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }

  .frame1-pill-arrow {
    font-family: Arial, sans-serif;
    font-size: 27px;
    font-weight: 300;
    transform: translateY(-1px);
  }

  .frame1-title {
    max-width: 1400px;
    margin: 78px auto 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(62px, 5.15vw, 98px);
    font-weight: 900;
    line-height: 0.88;
    letter-spacing: -0.062em;
    text-transform: uppercase;
  }

  .frame1-title-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.095em;
    white-space: nowrap;
  }

  .frame1-title-row + .frame1-title-row {
    margin-top: 0.09em;
  }

  .frame1-icon {
    width: 0.69em;
    height: 0.69em;
    flex: none;
    overflow: visible;
  }

  .frame1-icon-small {
    width: 0.64em;
    height: 0.64em;
  }

  .frame1-maximize-icon {
    width: 0.72em;
    height: 0.72em;
    margin-right: 0.03em;
  }

  .frame1-description {
    max-width: 620px;
    margin: 57px auto 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(22px, 1.58vw, 30px);
    font-weight: 400;
    line-height: 1.22;
    letter-spacing: -0.025em;
  }

  .frame1-dome {
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: -280px;
    width: min(84vw, 1580px);
    height: 560px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #004b2c;
  }

  .frame1-marker {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-50%);
  }

  .frame1-grow-pill {
    display: inline-flex;
    height: 43px;
    align-items: center;
    border-radius: 999px;
    background: #3f765a;
    padding: 0 15px;
    color: white;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .frame1-line {
    height: 47px;
    margin-top: 2px;
    border-left: 1px dashed rgba(255, 255, 255, 0.85);
  }

  @media (max-width: 1100px) {
    .frame1-title {
      font-size: clamp(48px, 7vw, 72px);
    }

    .frame1-dome {
      width: 1050px;
    }
  }

  @media (max-width: 720px) {
    .frame1-hero {
      height: 720px;
      min-height: 720px;
    }

    .frame1-content {
      padding-top: 45px;
    }

    .frame1-pill {
      min-height: 48px;
      padding: 0 16px;
      font-size: 11px;
    }

    .frame1-pill-arrow {
      font-size: 20px;
    }

    .frame1-title {
      width: 100%;
      margin-top: 68px;
      font-size: clamp(39px, 11vw, 62px);
      line-height: 0.9;
    }

    .frame1-title-row {
      flex-wrap: wrap;
      gap: 0.08em;
      white-space: normal;
    }

    .frame1-description {
      max-width: 390px;
      margin-top: 46px;
      font-size: 20px;
    }

    .frame1-dome {
      bottom: -235px;
      width: 760px;
      height: 470px;
    }

    .frame1-marker {
      bottom: 8px;
    }

    .frame1-grow-pill {
      height: 38px;
      font-size: 13px;
    }
  }
`;

export function Frame1() {
  return (
    <section className="frame1-hero" aria-labelledby="frame1-heading">
      <style dangerouslySetInnerHTML={{ __html: frameStyles }} />

      <div className="frame1-content">
        <Link href="/contact" className="frame1-pill">
          Ready to grow? We&apos;re ready to go
          <span className="frame1-pill-arrow" aria-hidden="true">
            →
          </span>
        </Link>

        <h1 id="frame1-heading" className="frame1-title">
          <span className="frame1-title-row">
            <span>Customize</span>
            <CustomizeIcon />
            <span>Monetize</span>
            <MonetizeIcon />
          </span>

          <span className="frame1-title-row">
            <MaximizeIcon />
            <span>Maximize</span>
          </span>
        </h1>

        <p className="frame1-description">
          Accelerate Growth with Coda&apos;s Merchant
          <br />
          of Record and Payment Solutions
        </p>
      </div>

      <div className="frame1-dome" aria-hidden="true" />

      <div className="frame1-marker">
        <span className="frame1-grow-pill">Grow with us</span>
        <span className="frame1-line" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Frame1;
