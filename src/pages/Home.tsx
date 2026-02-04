import { Link } from "react-router-dom";
import { ArrowRight, Globe, GraduationCap, Users } from "lucide-react";
import GlobeHero from "../components/GlobeHero";
import VideoTestimonials from "../components/VideoTestimonials";

export default function Home() {
    return (
        <div className="overflow-x-hidden font-sans">

            <GlobeHero />

            {/* --- SERVICES PREVIEW --- */}
            <section className="py-24 bg-gray-50 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
                        <span className="text-abic-blue font-bold tracking-widest uppercase text-xs mb-3 block">Our Expertise</span>
                        <h2 className="text-gray-900 font-montserrat font-bold text-4xl mb-6">Comprehensive Immigration Pathways</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Whether you're a skilled worker, a student, or looking to reunite with family, we strictly adhere to Canadian immigration laws to find the best pathway for you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <PremiumCard
                            icon={<Globe className="text-white" size={28} />}
                            title="Immigrate Permanently"
                            desc="Express Entry, PNP, and Family Sponsorship pathways to call Canada home."
                            link="/express-entry"
                            color="bg-abic-blue"
                        />
                        <PremiumCard
                            icon={<GraduationCap className="text-white" size={28} />}
                            title="Study in Canada"
                            desc="Access world-class education with Study Permits and Post-Grad guidance."
                            link="/study-in-canada"
                            color="bg-abic-red"
                        />
                        <PremiumCard
                            icon={<Users className="text-white" size={28} />}
                            title="Work in Canada"
                            desc="Secure your career with LMIA-based and Open Work Permits."
                            link="/work-permit"
                            color="bg-abic-gold"
                        />
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/visitor-visa" className="inline-flex items-center gap-2 text-abic-blue font-bold hover:text-abic-red transition-colors border-b-2 border-transparent hover:border-abic-red pb-1">
                            Browse All Services <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- STATS / TRUST --- */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 text-center">
                    <Stat number="10+" label="Years Experience" />
                    <Stat number="500+" label="Successful Cases" />
                    <Stat number="50+" label="Countries Served" />
                </div>
            </section>

            <VideoTestimonials />

            {/* --- CTA SECTION --- */}
            <section className="py-32 bg-abic-blue relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-abic-gold/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white leading-tight">
                        Don't Leave Your Future to Chance.
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Immigration laws change frequently. Ensure your application is accurate, optimized, and professionally represented.
                    </p>
                    <div className="pt-4">
                        <Link to="/book-consultation" className="inline-flex items-center gap-3 px-10 py-5 bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold text-lg rounded-full shadow-2xl hover:shadow-yellow-500/30 transition-all hover:-translate-y-1 transform">
                            Book Your Consultation
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

const PremiumCard = ({ icon, title, desc, link, color }: any) => (
    <Link to={link} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
        <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

        <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-abic-blue transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed bg-white/50 relative z-10">{desc}</p>

        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-abic-blue transition-colors">
            Start Process <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
    </Link>
);

const Stat = ({ number, label }: any) => (
    <div className="space-y-1">
        <div className="text-4xl md:text-5xl font-bold text-abic-blue font-montserrat">{number}</div>
        <div className="text-sm font-bold text-abic-gold uppercase tracking-widest">{label}</div>
    </div>
);
