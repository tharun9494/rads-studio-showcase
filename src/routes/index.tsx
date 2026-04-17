import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyRads } from "@/components/site/WhyRads";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RADS — Architecture Designed for Life · Vijayawada" },
      {
        name: "description",
        content:
          "Premium architecture and interior design studio in Vijayawada. Turnkey residential and commercial projects by RADS — R Architecture Design Studio.",
      },
      {
        property: "og:title",
        content: "RADS — Architecture Designed for Life · Vijayawada",
      },
      {
        property: "og:description",
        content:
          "Premium architecture and interior design studio in Vijayawada. Turnkey residential and commercial projects.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyRads />
      <Reviews />
      <Contact />
    </>
  );
}
