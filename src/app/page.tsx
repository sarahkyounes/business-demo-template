import FooterCTA from "@/components/FooterCTA";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import MenuOrServicesSection from "@/components/MenuOrServicesSection";
import PhotoGallery from "@/components/PhotoGallery";
import { business } from "@/data/business";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-red-500/30">
      <HeroSection business={business} />
      <PhotoGallery business={business} />
      <MenuOrServicesSection business={business} />
      <InfoSection business={business} />
      <FooterCTA business={business} />
    </main>
  );
}