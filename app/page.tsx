import Footer from "./components/Footer";
import CertificateGallery from "./components/sections/CertificateGallery";
import CourseModules from "./components/sections/CourseModules";
import FaqSupport from "./components/sections/FaqSupport";
import Hero from "./components/sections/Hero";
import MarketingIntro from "./components/sections/MarketingIntro";
import SocialProofOffer from "./components/sections/SocialProofOffer";

export default function Page() {
  return (
    <main className="max-w-screen bg-[#D82099] font-articulat text-[#313131]">
      <Hero />
      <MarketingIntro />
      <CourseModules />
      <CertificateGallery />
      <SocialProofOffer />
      <FaqSupport />
      <Footer />
    </main>
  );
}
