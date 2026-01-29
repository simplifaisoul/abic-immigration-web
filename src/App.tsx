import { Header, Footer } from "./components/Layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { MessageSquare, Calendar } from "lucide-react";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      <Header />

      <main>
        <Hero />
        <Services />

        {/* About Section / Founder Bio */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="about">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-abic-blue/20 rotate-12 transform translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional Immigration Consultant" className="rounded-lg shadow-2xl filter sepia-[.20]" />
              {/* Fallback image for Anthony, ideally would be real photo if scraped */}
            </div>
            <div>
              <h2 className="text-Abic-gold font-bold tracking-widest uppercase mb-2 text-sm text-abic-gold">Leadership</h2>
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
                <div className="pt-8">
                  <a href="#about" className="text-white border-b border-abic-gold pb-1 hover:text-abic-gold transition-colors">Read Full Bio</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating CTA */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
          <a href="tel:+14163338110" className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
            <MessageSquare />
          </a>
          <a href="#book" className="w-14 h-14 bg-abic-red rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
            <Calendar />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
