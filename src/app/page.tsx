import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import FeatureSplit from "@/components/home/FeatureSplit";
import ProductGrid from "@/components/home/ProductGrid";
import BannerImage from "@/components/home/BannerImage";

export default function Home() {
  return (
    <div className="flex flex-col bg-white gap-8 md:gap-12">
      <Hero />
      <Intro />
      <BannerImage />
      <FeatureSplit />
      <ProductGrid />
    </div>
  );
}
