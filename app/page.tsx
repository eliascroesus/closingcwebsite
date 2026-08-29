import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Calculator } from "@/components/calculator";
import { Faq } from "@/components/faq";
import { ApplyForm } from "@/components/apply-form";
import {
  Marquee, Pricing, Testimonials, How, Guarantee,
  Audience, ForClosers, FinalCta, Footer,
} from "@/components/sections";

/**
 * Order follows the buyer's decision sequence:
 * what is it → what does it cost → does it work → how does it work →
 * what if it goes wrong → what's it worth → am I a fit → objections → book.
 */
export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Pricing />
        <Testimonials />
        <How />
        <Guarantee />
        <Calculator />
        <Audience />
        <Faq />
        <ForClosers />
        <ApplyForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
