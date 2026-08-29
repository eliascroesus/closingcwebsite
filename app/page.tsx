import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Calculator } from "@/components/calculator";
import { Faq } from "@/components/faq";
import { ApplyForm } from "@/components/apply-form";
import {
  Marquee, Problem, How, Pillars, Pricing, Guarantee,
  Testimonials, Audience, ForClosers, FinalCta, Footer,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Problem />
        <How />
        <Pillars />
        <Calculator />
        <Pricing />
        <Guarantee />
        <Testimonials />
        <Audience />
        <ForClosers />
        <Faq />
        <ApplyForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
