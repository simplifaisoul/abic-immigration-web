import { Link } from "react-router-dom";
import { GraduationCap, FileCheck, Globe, ShieldAlert, BadgeCheck, PlayCircle, Plane, Briefcase, Users, Building2, Gavel, Heart } from "lucide-react";
import { motion } from "framer-motion";
import VideoTestimonials from "../components/VideoTestimonials";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <div className="font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image: Group of International Students */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={`${import.meta.env.BASE_URL}assets/misc/group-of-friends-hanging-out-933964.jpg`}
                        alt="International Students in Canada"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block bg-abic-gold/20 border border-abic-gold text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                            Authorized & Regulated Representation
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Canadian Immigration Services. <br />
                            <span className="text-abic-gold">Clear. Strategic. Compliance-First.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl leading-relaxed">
                            Start your journey with confidence. Regulated experts for students, professionals, and families.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/contact" className="bg-abic-gold text-abic-blue text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-abic-blue transition-all transform hover:-translate-y-1 text-center">
                                Book a Consultation
                            </Link>
                            <Link to="/students" className="border-2 border-white text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-white hover:text-abic-blue transition-colors text-center flex items-center justify-center gap-2">
                                <GraduationCap /> Student Support
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. TRUST & RECOGNITION BADGES (Visual Polish: More Room) */}
            <section className="bg-white pt-24 pb-52 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-20">Trusted & Recognized By</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 md:gap-40 opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
                        {/* Enlarged Logos for Impact */}
                        <img src={`${import.meta.env.BASE_URL}assets/cicc-logo-new.png`} alt="CICC Regulated" className="h-24 md:h-32 object-contain hover:scale-110 transition-transform duration-300" />
                        <img src={`${import.meta.env.BASE_URL}assets/logos/capic.jpg`} alt="CAPIC Member" className="h-20 md:h-28 object-contain hover:scale-110 transition-transform duration-300" />
                        <img src={`${import.meta.env.BASE_URL}assets/logos/ICEF.jpeg`} alt="ICEF Agent" className="h-20 md:h-28 object-contain hover:scale-110 transition-transform duration-300" />
                        <img src={`${import.meta.env.BASE_URL}assets/logos/Ashton-Logo.png`} alt="Ashton College" className="h-16 md:h-24 object-contain hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
            </section>

            {/* 3. QUICK ACCESS TILES */}
            <section className="py-20 bg-gray-50 relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6 -mt-32 relative z-20">
                        <QuickTile
                            to="/students"
                            icon={<GraduationCap size={32} />}
                            title="Student Services"
                            desc="Waterloo & Guelph Hubs"
                            color="bg-blue-600"
                        />
                        <QuickTile
                            to="/services"
                            icon={<FileCheck size={32} />}
                            title="Student Services"
                            desc="International & Local"
                            color="bg-blue-700"
                        />
                        <QuickTile
                            to="/services"
                            icon={<Globe size={32} />}
                            title="Express Entry & PR"
                            desc="Pathways to Permanence"
                            color="bg-blue-800"
                        />
                        <QuickTile
                            to="/services"
                            icon={<ShieldAlert size={32} />}
                            title="Refusals & Appeals"
                            desc="Expert Case Review"
                            color="bg-blue-900"
                        />
                    </div>


                    {/* 4. SERVICES OVERVIEW GRID */}
                    <div className="mt-24">
                        <SectionHeader title="Comprehensive Immigration Services" subtitle="Expert guidance for every step of your journey." />

                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                            <ServiceCard title="Visitor Visa" icon={<Plane size={40} className="text-abic-blue" />} link="/visitor-visa" />
                            <ServiceCard title="Study Permit" icon={<GraduationCap size={40} className="text-abic-blue" />} link="/study-in-canada" />
                            <ServiceCard title="Work Permit / PGWP" icon={<Briefcase size={40} className="text-abic-blue" />} link="/work-permit" />
                            <ServiceCard title="Express Entry" icon={<Globe size={40} className="text-abic-blue" />} link="/express-entry" />
                            <ServiceCard title="Family Sponsorship" icon={<Users size={40} className="text-abic-blue" />} link="/family-sponsorship" />
                            <ServiceCard title="LMIA Services" icon={<Building2 size={40} className="text-abic-blue" />} link="/employers-lmia" />
                            <ServiceCard title="Refusals & Appeals" icon={<Gavel size={40} className="text-abic-blue" />} link="/visitor-visa/refusals" />
                            <ServiceCard title="H&C Applications" icon={<Heart size={40} className="text-abic-blue" />} link="/pr-citizenship" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. STUDENT HIGHLIGHT SECTION */}
            <section className="py-20 bg-abic-blue text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl font-bold leading-tight">Attention Students in <br /><span className="text-abic-gold">Waterloo & Guelph</span></h2>
                        <p className="text-lg opacity-90 max-w-xl">
                            We are your local immigration partners. Specializing in study permit extensions, PGWP transitions, and restoration of status for students at UWaterloo, Laurier, Conestoga, and UofGuelph.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/students/waterloo" className="bg-white text-abic-blue hover:bg-abic-gold hover:text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md">
                                Waterloo Students
                            </Link>
                            <Link to="/students/guelph" className="bg-transparent border-2 border-white hover:bg-white hover:text-abic-blue font-bold px-8 py-3 rounded-xl transition-all">
                                Guelph Students
                            </Link>
                        </div>
                        <div className="pt-4 flex items-center gap-4 text-sm font-bold tracking-wide uppercase opacity-75">
                            <BadgeCheck className="text-abic-gold" /> Regulated Support
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            Consultations from $45
                        </div>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-3xl shadow-2xl text-gray-900 max-w-md ml-auto">
                        <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                            <PlayCircle className="text-abic-blue" />
                            Student Success Stories
                        </h3>
                        {/* Placeholder for Client Video - Standard HTML5 Video or Embed */}
                        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative group cursor-pointer mb-6">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <PlayCircle size={32} className="text-abic-blue ml-1" />
                                </span>
                            </div>
                            <img src={`${import.meta.env.BASE_URL}assets/misc/people-looking-at-laptop-computer-1595391.jpg`} alt="Video Thumbnail" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-gray-600 text-sm mb-6 italic">"Anthony helped me restore my status when I thought all was lost. Highly recommended for complex cases." — Javier</p>
                        <Link to="/about/reviews" className="text-abic-blue font-bold hover:underline text-sm block text-center">
                            Watch More Testimonials &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. CLIENT TESTIMONIALS (Text) */}
            <Testimonials />

            {/* 7. CLIENT VIDEO TESTIMONIALS */}
            <VideoTestimonials />

            {/* 7. FINAL CTA */}
            <section className="py-24 bg-gray-50 border-t border-gray-100 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Application?</h2>
                    <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                        Immigration laws change frequently. Don't rely on outdated advice. Book a consultation with a Regulated Canadian Immigration Consultant (RCIC) today.
                    </p>
                    <Link to="/contact" className="bg-abic-blue text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all inline-block">
                        Book Consultation
                    </Link>
                    <p className="mt-8 text-sm text-gray-400 font-medium uppercase tracking-widest">
                        Mississauga • Waterloo • Guelph
                    </p>
                </div>
            </section>

        </div>
    );
}

// --- SUB-COMPONENTS ---

const QuickTile = ({ to, icon, title, desc, color }: any) => (
    <Link to={to} className={`${color} text-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-start gap-4 group`}>
        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-xl mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{desc}</p>
        </div>
    </Link>
);

const ServiceCard = ({ title, icon, link }: any) => (
    <Link to={link || "#"} className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:border-abic-blue/30 transition-all group text-center">
        <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{icon}</span>
        <h3 className="font-bold text-gray-900 group-hover:text-abic-blue transition-colors">{title}</h3>
    </Link>
);




const SectionHeader = ({ title, subtitle }: any) => (
    <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-500 text-lg">{subtitle}</p>
        <div className="w-20 h-1 bg-abic-gold mx-auto mt-6 rounded-full"></div>
    </div>
);
