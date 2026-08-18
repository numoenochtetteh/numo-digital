"use client";

import { Check, Zap, X, ChevronDown } from "lucide-react";

export function ProjectContact() {
  return (
    <section className="w-full bg-[#f5f5f3] p-[4px]">
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[28px]
          bg-[linear-gradient(115deg,#113baa_0%,#1948dd_48%,#1735ae_100%)]
          text-white
          lg:h-[650px]
        "
      >
        {/* =========================
            BACKGROUND GLOW
        ========================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[32%]
            top-[15%]
            h-[520px]
            w-[720px]
            rotate-[-20deg]
            rounded-full
            bg-[#3072ff]/20
            blur-[110px]
          "
        />

        {/* =========================
            CLOSE ICON
        ========================== */}

        <button
          type="button"
          aria-label="Close"
          className="
            absolute
            right-[28px]
            top-[27px]
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            text-white
          "
        >
          <X size={24} strokeWidth={1.7} />
        </button>

        {/* =========================
            MAIN CONTAINER
        ========================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            h-full
            w-full
            max-w-[1060px]
            grid-cols-1
            gap-14
            px-7
            py-16
            lg:grid-cols-[1fr_1fr]
            lg:items-center
            lg:gap-[68px]
            lg:px-4
            lg:py-0
          "
        >
          {/* ==================================================
              LEFT SIDE
          =================================================== */}

          <div className="w-full">
            {/* Heading */}

            <h2
              className="
                mb-[31px]
                text-[43px]
                font-normal
                leading-[0.98]
                tracking-[-0.045em]
                text-white
                md:text-[50px]
              "
            >
              Talk to sales
            </h2>

            {/* =========================
                POINT 1
            ========================== */}

            <div className="mb-[25px] flex items-start gap-[17px]">
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[13px]
                  bg-white/[0.11]
                "
              >
                <Check size={23} strokeWidth={2.2} />
              </div>

              <p
                className="
                  max-w-[390px]
                  pt-[3px]
                  text-[16px]
                  font-normal
                  leading-[1.5]
                  tracking-[-0.025em]
                  text-white
                "
              >
                Learn how Acme can transform your business with tailored
                solutions and flexible pricing options.
              </p>
            </div>

            {/* =========================
                POINT 2
            ========================== */}

            <div className="flex items-start gap-[17px]">
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[13px]
                  bg-white/[0.11]
                "
              >
                <Zap size={23} strokeWidth={2} />
              </div>

              <p
                className="
                  max-w-[390px]
                  pt-[3px]
                  text-[16px]
                  font-normal
                  leading-[1.5]
                  tracking-[-0.025em]
                  text-white
                "
              >
                Experience firsthand how Acme Platform accelerates delivery
                &amp; drives results.
              </p>
            </div>

            {/* =========================
                DIVIDER
            ========================== */}

            <div className="my-[40px] h-px w-full max-w-[460px] bg-white/20" />

            {/* =========================
                TESTIMONIAL
            ========================== */}

            <div className="max-w-[470px]">
              <p
                className="
                  text-[24px]
                  font-normal
                  leading-[1.45]
                  tracking-[-0.035em]
                  text-white
                  md:text-[25px]
                "
              >
                Acme empowers our team to move faster
                <br className="hidden sm:block" />
                and ship products with confidence.
              </p>

              {/* Person */}

              <div className="mt-[22px] flex items-center gap-[15px]">
                <div
                  className="
                    h-[52px]
                    w-[52px]
                    shrink-0
                    overflow-hidden
                    rounded-full
                    bg-white/20
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                    alt="Sarah Chen"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[19px]
                      font-medium
                      leading-[1.1]
                      tracking-[-0.025em]
                      text-white
                    "
                  >
                    Sarah Chen
                  </p>

                  <p className="mt-[5px] text-[15px] leading-none text-white/70">
                    Chrono
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT SIDE
          =================================================== */}

          <div className="w-full">
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              {/* =========================
                  FULL NAME
              ========================== */}

              <div className="mb-[21px]">
                <label
                  htmlFor="fullName"
                  className="
                    mb-[9px]
                    block
                    text-[12px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.11em]
                    text-white
                  "
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="
                    h-[52px]
                    w-full
                    rounded-[13px]
                    border-0
                    bg-[#062b70]
                    px-5
                    text-[16px]
                    text-white
                    outline-none
                    transition
                    focus:ring-1
                    focus:ring-white/30
                  "
                />
              </div>

              {/* =========================
                  WORK EMAIL
              ========================== */}

              <div className="mb-[21px]">
                <label
                  htmlFor="workEmail"
                  className="
                    mb-[9px]
                    block
                    text-[12px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.11em]
                    text-white
                  "
                >
                  Work Email *
                </label>

                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  className="
                    h-[52px]
                    w-full
                    rounded-[13px]
                    border-0
                    bg-[#062b70]
                    px-5
                    text-[16px]
                    text-white
                    outline-none
                    transition
                    focus:ring-1
                    focus:ring-white/30
                  "
                />
              </div>

              {/* =========================
                  WEBSITE / COMPANY SIZE
              ========================== */}

              <div
                className="
                  mb-[21px]
                  grid
                  grid-cols-1
                  gap-[17px]
                  sm:grid-cols-[1fr_138px]
                "
              >
                {/* Website */}

                <div>
                  <label
                    htmlFor="companyWebsite"
                    className="
                      mb-[9px]
                      block
                      text-[12px]
                      font-bold
                      uppercase
                      leading-none
                      tracking-[0.11em]
                      text-white
                    "
                  >
                    Company Website
                  </label>

                  <input
                    id="companyWebsite"
                    name="companyWebsite"
                    type="text"
                    className="
                      h-[52px]
                      w-full
                      rounded-[13px]
                      border-0
                      bg-[#062b70]
                      px-5
                      text-[16px]
                      text-white
                      outline-none
                      transition
                      focus:ring-1
                      focus:ring-white/30
                    "
                  />
                </div>

                {/* Company Size */}

                <div>
                  <label
                    htmlFor="companySize"
                    className="
                      mb-[9px]
                      block
                      text-[12px]
                      font-bold
                      uppercase
                      leading-none
                      tracking-[0.11em]
                      text-white
                    "
                  >
                    Company Size
                  </label>

                  <div className="relative">
                    <select
                      id="companySize"
                      name="companySize"
                      defaultValue="1-10"
                      className="
                        h-[52px]
                        w-full
                        appearance-none
                        rounded-[13px]
                        border-0
                        bg-[#062b70]
                        px-[17px]
                        pr-10
                        text-[16px]
                        text-white
                        outline-none
                        transition
                        focus:ring-1
                        focus:ring-white/30
                      "
                    >
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>

                    <ChevronDown
                      size={15}
                      strokeWidth={1.7}
                      className="
                        pointer-events-none
                        absolute
                        right-[14px]
                        top-1/2
                        -translate-y-1/2
                        text-white
                      "
                    />
                  </div>
                </div>
              </div>

              {/* =========================
                  ANYTHING ELSE
              ========================== */}

              <div className="mb-[27px]">
                <label
                  htmlFor="anythingElse"
                  className="
                    mb-[9px]
                    block
                    text-[12px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.11em]
                    text-white
                  "
                >
                  Anything Else?
                </label>

                <textarea
                  id="anythingElse"
                  name="anythingElse"
                  className="
                    h-[106px]
                    w-full
                    resize-none
                    rounded-[13px]
                    border-0
                    bg-[#062b70]
                    px-5
                    py-4
                    text-[16px]
                    text-white
                    outline-none
                    transition
                    focus:ring-1
                    focus:ring-white/30
                  "
                />
              </div>

              {/* =========================
                  SUBMIT
              ========================== */}

              <button
                type="submit"
                className="
                  flex
                  h-[48px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border-0
                  bg-white
                  text-[16px]
                  font-normal
                  text-[#0644d7]
                  transition
                  duration-200
                  hover:bg-[#f5f5f5]
                "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
