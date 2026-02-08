import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { Users, FileCheck, ShieldAlert, Briefcase } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000";

export default function EmployersLMIALanding() {
    return (
        <ServiceLayout
            title="Employer Services & LMIA"
            subtitle="Strategic workforce solutions for Canadian employers."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Hire Global Talent with Confidence</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Navigating the Temporary Foreign Worker Program (TFWP) can be complex.
                        We assist Canadian employers in securing Labour Market Impact Assessments (LMIAs)
                        and maintaining compliance with ESDC regulations.
                    </p>
                </section>

                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/employers-lmia/process" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <FileCheck className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">LMIA Applications</h3>
                        <p className="text-gray-500 text-sm"> comprehensive support for High-Wage, Low-Wage, and Global Talent Stream applications.</p>
                    </Link>

                    <Link to="/employers-lmia/recruitment" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <Users className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Recruitment Strategy</h3>
                        <p className="text-gray-500 text-sm">Guidance on meeting rigorous advertising requirements to demonstrate genuine effort to hire Canadians.</p>
                    </Link>

                    <Link to="/employers-lmia/compliance" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <ShieldAlert className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Compliance & Audits</h3>
                        <p className="text-gray-500 text-sm">Preparation for Employer Compliance Reviews (ECRs) and inspections to avoid penalties.</p>
                    </Link>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-abic-blue/10 p-4 rounded-full text-abic-blue">
                        <Briefcase size={32} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Need a Corporate Retainer?</h3>
                        <p className="text-gray-600">
                            For companies with ongoing immigration needs, we offer volume-based retainer packages
                            to streamline your hiring process.
                        </p>
                    </div>
                    <Link to="/contact" className="bg-abic-blue text-white font-bold py-3 px-6 rounded-full hover:bg-abic-gold hover:text-abic-blue transition-colors">
                        Contact Key Services
                    </Link>
                </div>
            </div>
        </ServiceLayout>
    );
}
