import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { GraduationCap, Home, BookOpen, Building2 } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000";

export default function WaterlooLanding() {
    return (
        <ServiceLayout
            title="International Students: Waterloo Region"
            subtitle="Supporting students from UWaterloo, Wilfrid Laurier, and Conestoga College."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Tech Talent & Academic Excellence</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The Waterloo Region is a hub for innovation. We help international students leverage their education
                        to access paths like the PGWP and Tech-focused immigration streams.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link to="/students/waterloo/study-permit" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-abic-blue mb-4 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Study Permits</h3>
                        <p className="text-xs text-gray-500">Initial applications & strategy</p>
                    </Link>

                    <Link to="/students/waterloo/extension" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-abic-blue mb-4 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Extensions</h3>
                        <p className="text-xs text-gray-500">Maintain your student status</p>
                    </Link>

                    <Link to="/students/waterloo/pgwp" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-abic-blue mb-4 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                            <Building2 size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">PGWP</h3>
                        <p className="text-xs text-gray-500">Post-Graduation Work Permits</p>
                    </Link>

                    <Link to="/students/waterloo/local-support" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-abic-blue mb-4 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                            <Home size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Settlement</h3>
                        <p className="text-xs text-gray-500">Local housing & resources</p>
                    </Link>
                </div>

                <div className="bg-gray-900 rounded-3xl p-10 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Plan Your Career in Waterloo</h3>
                    <p className="mb-6 opacity-80 max-w-2xl mx-auto">
                        From co-op work permits to permanent residence, we ensure your immigration status supports your career goals in Canada's tech triangle.
                    </p>
                    <Link to="/contact" className="inline-block bg-abic-gold text-abic-blue font-bold py-3 px-8 rounded-full hover:bg-white transition-colors">
                        Consult with Us
                    </Link>
                </div>
            </div>
        </ServiceLayout>
    );
}
