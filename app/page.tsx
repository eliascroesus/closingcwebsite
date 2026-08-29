import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Faq } from "@/components/faq";
import {
  Marquee, Pricing, How, Guarantee, ForClosers, FinalCta, Footer,
} from "@/components/sections";

/**
 * Order follows the buyer's decision sequence:
 * what is it → what does it cost → how does it work →
 * what if it goes wrong → objections → book.
 */
export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Pricing />
        <How />
        <Guarantee />
        <Faq />
        <ForClosers />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
