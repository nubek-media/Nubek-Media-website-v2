import Navbar from "./Components/Navbar";
import Hero from "./Components/v2/Hero";
import Marquee from "./Components/Marquee";
import WhyNubek from "./Components/WhyNubek";
import Expertise from "./Components/Expertise";
import CaseStudies from "./Components/CaseStudies";
import Industries from "./Components/Industries";
import Process from "./Components/Process";
import OurTeam from "./Components/OurTeam";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="bg-[#021D26]">

      <Navbar />

      <Hero />

      <Marquee />

      <WhyNubek />

      <Expertise />

      <CaseStudies />

      <Industries />

      <Process />

      <OurTeam />

      <CTA />

      <Footer />

    </main>
  );
}