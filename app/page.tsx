import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import FeaturedWork from "./Components/FeaturedWork";

export default function Home() {
  return (
    <main className="bg-[#021D26]">
      <Navbar />
      <Hero />
      <Marquee />
      <FeaturedWork />
    </main>
  );
}