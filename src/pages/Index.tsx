import Hero from "@/components/Hero";
import ChartSection from "@/components/ChartSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Gallery />
      <ChartSection />
      <Footer />
    </div>
  );
};

export default Index;
