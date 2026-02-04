import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function GlobeHero() {
    const globeEl = useRef<any>(null);
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);

        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            globeEl.current.pointOfView({ lat: 56.1304, lng: -106.3468, altitude: 2.5 }); // Canada view
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const arcsData = [
        { startLat: 28.6139, startLng: 77.2090, endLat: 43.6532, endLng: -79.3832, color: '#D4AF37' }, // Delhi -> Toronto
        { startLat: 6.5244, startLng: 3.3792, endLat: 49.2827, endLng: -123.1207, color: '#D4AF37' }, // Lagos -> Vancouver
        { startLat: 31.2304, startLng: 121.4737, endLat: 45.5017, endLng: -73.5673, color: '#D4AF37' }, // Shanghai -> Montreal
        { startLat: -23.5505, startLng: -46.6333, endLat: 51.0447, endLng: -114.0719, color: '#D4AF37' }, // Sao Paulo -> Calgary
    ];

    return (
        <section className="relative h-screen flex items-center bg-[#0A1A2F] overflow-hidden">

            {/* Globe Container - Absolute right/center */}
            <div className="absolute inset-0 z-0 opacity-80 md:opacity-100 md:left-1/3 cursor-move">
                <Globe
                    ref={globeEl}
                    width={dimensions.width}
                    height={dimensions.height}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    arcsData={arcsData}
                    arcColor="color"
                    arcDashLength={0.4}
                    arcDashGap={4}
                    arcDashInitialGap={() => Math.random() * 5}
                    arcDashAnimateTime={2000}
                    atmosphereColor="#D4AF37"
                    atmosphereAltitude={0.15}
                    backgroundColor="rgba(0,0,0,0)"
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F] via-[#0A1A2F]/90 to-transparent z-10 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-abic-gold text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Accepting New Clients
                    </div>

                    <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white leading-tight">
                        Connecting the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-abic-gold to-yellow-200">World to Canada</span>
                    </h1>

                    <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                        We bridge the gap between your dreams and Canadian reality. Expert, regulated advice for students, workers, and families globally.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/book-consultation" className="px-8 py-4 bg-abic-red hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-900/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                            Book Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services-overview" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/10 transition-all backdrop-blur-sm flex items-center justify-center">
                            Explore Pathways
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center gap-6 text-sm font-medium text-gray-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-abic-gold" size={18} /> 98% Success Rate
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-abic-gold" size={18} /> CICC Regulated
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
