import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}
