import { ClientLogos } from "@/components/ClientLogos";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { ServicesSection } from "@/components/ServicesSection";
import { SmoothScroll } from "@/components/SmoothScroll";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GridContainer } from "@/components/ui/GridContainer";
import { WorkSection } from "@/components/WorkSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";

// Import the noise component (or define it in this file)

function App() {
  return (
    <>
      <SEO />
      <SmoothScroll />

      <div className="min-h-screen bg-background text-white selection:bg-vibranium/30 selection:text-white">
        <Navbar />

        {/* Main Grid Wrapper providing the continuous lines */}
        <GridContainer isMainContainer={true} className="border-t-0">
          <main className="relative z-10">
            <HeroSection />

            <ClientLogos />

            <div id="services">
              <ServicesSection />
            </div>

            <div id="process">
              <ProcessSection />
            </div>

            <div id="work">
              <WorkSection />
            </div>

            <div id="testimonials">
              <TestimonialsSection />
            </div>

            <div id="pricing">
              <PricingSection />
            </div>

            <div id="faq">
              <FAQSection />
            </div>

            <div id="contact">
              <ContactSection />
            </div>
          </main>

          <Footer />
        </GridContainer>
      </div>
    </>
  );
}

export default App;