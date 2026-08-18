// import { Navigation } from "@/components/landing/navigation";
// import { CodaHeroSection } from "@/components/landing/coda-hero-section";
// import { ExperienceMarquee } from "@/components/landing/experience-marquee";
// import { StudioShowcase } from "@/components/landing/studio-showcase";
// import { ExpertiseSection } from "@/components/landing/expertise-section";
// import { WorkSection } from "@/components/landing/work-section";
// import { DevelopersSection } from "@/components/landing/developers-section";
// import { TestimonialsSection } from "@/components/landing/testimonials-section";
// import { CtaSection } from "@/components/landing/cta-section";
// import { FooterSection } from "@/components/landing/footer-section";
// // import Frame1 from "@/components/landing/frame1";
// // import Frame2 from "@/components/landing/frame2";
// import { ServicesShowcase } from "@/components/landing/services-showcase";
// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-x-hidden noise-overlay">
//       <Navigation />

//       {/* <Frame1 /> */}
//       {/* <Frame2 /> */}
//       <ExperienceMarquee />
//       <StudioShowcase />
//       <ExpertiseSection />
//       <WorkSection />
//       <ServicesShowcase />
//       <DevelopersSection />
//       <TestimonialsSection />
//       <CtaSection />
//       <FooterSection />
//     </main>
//   );
// }

//

//

import { Navigation } from "@/components/landing/navigation";
import { CodaHeroSection } from "@/components/landing/coda-hero-section";
import { ExperienceMarquee } from "@/components/landing/experience-marquee";
import { StudioShowcase } from "@/components/landing/studio-showcase";
import { ExpertiseSection } from "@/components/landing/expertise-section";
import { WorkSection } from "@/components/landing/work-section";
import { ServicesShowcase } from "@/components/landing/services-showcase";
import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { ProjectContact } from "@/components/landing/project-contact";
import { FooterSection } from "@/components/landing/footer-section";
import { AgencyHeroSection } from "@/components/landing/agency-hero-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      {/* Navigation */}
      <Navigation />
      <AgencyHeroSection />
      {/* Hero */}
      {/* <CodaHeroSection /> */}

      {/* Experience / Client Marquee */}
      <ExperienceMarquee />

      {/* Studio Introduction */}
      <StudioShowcase />

      {/* Expertise */}
      <ExpertiseSection />

      {/* Selected Work */}
      <WorkSection />

      {/* Services */}
      <ServicesShowcase />

      {/* Development */}
      <DevelopersSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <CtaSection />

      {/* Project Enquiry Form */}
      <ProjectContact />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
