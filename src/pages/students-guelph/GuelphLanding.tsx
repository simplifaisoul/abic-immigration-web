import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Home, BookOpen } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&q=80&w=2000";

export default function GuelphLanding() {
    return (
        <ServiceLayout
            title="International Students: Guelph Region"
            subtitle="Specialized immigration support for University of Guelph and Conestoga College students."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Expertise, Global Reach</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Located right here in Guelph, we understand the specific needs of students attending local Designated Learning Institutions (DLIs).
                        We help you transition from student to worker to permanent resident.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link to="/students/guelph/study-permit" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-abic-blue mb-4 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Study Permits</h3>
                        <p className="text-xs text-gray-500">Initial applications & strategy</p>
                    </Link>

                    <Link to="/students/guelph/extension" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-abic-blue mb-4 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Extensions</h3>
                        <p className="text-xs text-gray-500">Maintain your student status</p>
                    </Link>

                    <Link to="/students/guelph/pgwp" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-abic-blue mb-4 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">PGWP</h3>
                        <p className="text-xs text-gray-500">Post-Graduation Work Permits</p>
                    </Link>

                    <Link to="/students/guelph/local-support" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-abic-blue mb-4 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                            <Home size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Settlement</h3>
                        <p className="text-xs text-gray-500">Local housing & resources</p>
                    </Link>
                </div>

                <div className="bg-abic-blue rounded-3xl p-10 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Visit Our Guelph Office</h3>
                    <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                        We are conveniently located to serve the student community. Book an in-person consultation to discuss your pathway to PR.
                    </p>
                    <Link to="/contact" className="inline-block bg-abic-gold text-abic-blue font-bold py-3 px-8 rounded-full hover:bg-white transition-colors">
                        Book Appointment
                    </Link>
                </div>
            </div>
        </ServiceLayout>
    );
}
