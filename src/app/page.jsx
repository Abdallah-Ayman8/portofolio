import About from "../components/About";
import Approach from "../components/Approach";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import MotionReveal from "../components/MotionReveal";
import Work from "../components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <MotionReveal>
        <About />
      </MotionReveal>
      <MotionReveal delay={0.04}>
        <Approach />
      </MotionReveal>
      <MotionReveal delay={0.06}>
        <Work />
      </MotionReveal>
      <MotionReveal delay={0.08}>
        <Services />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <Skills />
      </MotionReveal>
      <MotionReveal delay={0.12}>
        <Faq />
      </MotionReveal>
      <MotionReveal delay={0.14}>
        <Contact />
      </MotionReveal>
      <MotionReveal delay={0.16}>
        <Footer />
      </MotionReveal>
    </main>
  );
}
