import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { ApproachJourney } from "@/components/site/ApproachJourney";
import { WhyBoostSphere } from "@/components/site/WhyBoostSphere";
import { Industries } from "@/components/site/Industries";
import { Testimonials } from "@/components/site/Testimonials";
import { ServiceOverview } from "@/components/site/ServiceOverview";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { GlowField } from "@/components/site/GlowField";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";


const TITLE = "BoostSphere Digital | Young & Talented Digital Marketing & Web Development Company";
const DESCRIPTION =
  "BoostSphere Digital is a young and talented digital marketing and web development company that has helped 30+ brands scale through digital marketing, paid ads, social media and web solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:site_name", content: "BoostSphere Digital" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.boostspheredigital.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://www.boostspheredigital.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "BoostSphere Digital",
          slogan: "Your B2B & D2C Growth Partner",
          description: DESCRIPTION,
          telephone: "+91 7760714446",
          email: "Work.boostsphere@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressCountry: "IN",
          },
          areaServed: "India",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <GlowField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Stats />
          <ApproachJourney />
          <WhyBoostSphere />
          <Industries />
          <ServiceOverview />
          <Testimonials />
          <FAQ />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </div>
  );
}
