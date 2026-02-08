import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { Briefcase, Globe, Clock } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1521791136064-7985c2717883?auto=format&fit=crop&q=80&w=2000";

export default function WorkPermitLanding() {
    return (
        <ServiceLayout
            title="Work Permits"
            subtitle="Gain valuable Canadian work experience."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Work Legally in Canada</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Whether you have an LMIA-supported job offer, are an IEC candidate, or a recent graduate, we help you secure the right work authorization.
                    </p>
                </section>

                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/work-permit/pgwp" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <Briefcase className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">PGWP</h3>
                        <p className="text-gray-500 text-sm">Post-Graduation Work Permits for international graduates.</p>
                    </Link>

                    <Link to="/work-permit/application" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <Globe className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Open & Employer-Specific</h3>
                        <p className="text-gray-500 text-sm">Spousal Open Work Permits, Francophone Mobility, and LMIA-based permits.</p>
                    </Link>

                    <Link to="/work-permit/extension" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <Clock className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Extensions</h3>
                        <p className="text-gray-500 text-sm">Maintain your status and keep working legally.</p>
                    </Link>
                </div>
            </div>
        </ServiceLayout>
    );
}
