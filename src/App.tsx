import { Header, Footer } from "./components/Layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AssessmentWizard from "./components/AssessmentWizard";
import ProcessTimeline from "./components/ProcessTimeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import TextureOverlay from "./components/TextureOverlay";
import { MessageSquare, Calendar } from "lucide-react";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-inter relative">
      <TextureOverlay />
      <Header />

      <main>
        <Hero />
        <Services />
        <AssessmentWizard />
        <ProcessTimeline />

        {/* About Section / Founder Bio */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="about">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-abic-blue/20 rotate-12 transform translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional Immigration Consultant" className="rounded-lg shadow-2xl filter sepia-[.20]" />
              <div className="absolute -bottom-6 -right-6 bg-abic-gold text-black p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-bold text-xl">25+ Years</p>
                <p className="text-sm opacity-80">Of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-abic-gold font-bold tracking-widest uppercase mb-2 text-sm">Leadership</h2>
              <h3 className="text-4xl font-montserrat font-bold mb-6">About Anthony Wai Kean Cheah</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Anthony W.K. Cheah is a <strong>Regulated Canadian Immigration Consultant (RCIC)</strong> and Commissioner of Oaths, recognized for his expertise in both Canada and Malaysia.
                </p>
                <p>
                  With a comprehensive educational background including an M.Sc. in Accounting (USA) and B.Sc. in Computer Science (USA), Anthony brings a strategic, analytical approach to immigration cases.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full"></div> PME Committee Member of ICCRC</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full"></div> Vice President of EBIA (Excel Beyond International Academy)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full"></div> Who’s Who of American Business Leaders Award Recipient</li>
                </ul>
                <div className="pt-8 flex gap-4">
                  <a href="#contact" className="px-8 py-3 bg-abic-blue text-white rounded font-bold hover:bg-blue-900 transition-colors">Book a Meeting</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <Contact />

        {/* Floating CTA */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
          <a href="tel:+14163338110" className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
            <MessageSquare />
          </a>
          <a href="#assessment" className="w-14 h-14 bg-abic-red rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
            <Calendar />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
