import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import Trust from "@/components/Trust";
import VideoSection from "@/components/VideoSection";
import Faq from "@/components/Faq";
import DownloadCta from "@/components/DownloadCta";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Features />
      <Showcase />
      <HowItWorks />
      <Trust />
      <VideoSection />
      <Faq />
      <DownloadCta />
    </main>
  );
}
