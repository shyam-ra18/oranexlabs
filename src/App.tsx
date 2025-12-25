import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ClientLogos } from "@/components/ClientLogos";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkSection } from "@/components/WorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GridContainer } from "@/components/ui/GridContainer";

import { SmoothScroll } from "@/components/SmoothScroll";

function App() {
  return (
    <>
      <SEO />
      <SmoothScroll />
      <div className="min-h-screen bg-background text-text-primary selection:bg-accent-orange/30 selection:text-white">
        <Navbar />

        {/* Main Grid Wrapper providing the continuous lines */}
        <GridContainer isMainContainer={true} className="border-t-0">
          <main>
            <HeroSection />

            <ClientLogos />

            <div id="services">
              <ServicesSection />
            </div>

            <div id="work">
              <WorkSection />
            </div>

            <div id="testimonials">
              <TestimonialsSection />
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