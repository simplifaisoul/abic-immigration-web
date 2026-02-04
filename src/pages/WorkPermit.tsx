import ServiceLayout from "../components/ServiceLayout";
import { Briefcase, Globe, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WorkPermit() {
    return (
        <ServiceLayout
            title="Work Permits"
            subtitle="Unlock career opportunities in Canada with the right work authorization."
            heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. OVERVIEW */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-6">Work in Canada</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Canada offers various types of work permits depending on your situation. Working illegally is a serious offense that can lead to deportation. We ensure you have the correct authorization.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-abic-blue">
                                <Briefcase size={18} /> Valid Status
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                                <Globe size={18} /> Global Talent
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-4">Common Permit Types</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between p-3 bg-white rounded-lg shadow-sm">
                                <span className="text-gray-700">Employer-Specific</span>
                                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Tied to Job</span>
                            </li>
                            <li className="flex justify-between p-3 bg-white rounded-lg shadow-sm">
                                <span className="text-gray-700">Open Work Permit</span>
                                <span className="text-green-600 text-xs uppercase tracking-wider font-bold">Any Employer</span>
                            </li>
                            <li className="flex justify-between p-3 bg-white rounded-lg shadow-sm">
                                <span className="text-gray-700">PGWP</span>
                                <span className="text-abic-gold text-xs uppercase tracking-wider font-bold">Grads Only</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 2. PERMIT TYPES DETAIL */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-abic-blue transition-colors group">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-xl text-gray-900 group-hover:text-abic-blue">Employer-Specific (Closed)</h3>
                                <Briefcase className="text-gray-300 group-hover:text-abic-blue transition-colors" />
                            </div>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Allows you to work according to the conditions on your work permit, which include: the name of the employer you can work for, how long you can work, and the location where you can work.
                            </p>
                            <Link to="/employers-lmia" className="text-abic-blue font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Requires LMIA <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-abic-blue transition-colors group">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-xl text-gray-900 group-hover:text-abic-blue">Open Work Permit</h3>
                                <Globe className="text-gray-300 group-hover:text-abic-blue transition-colors" />
                            </div>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Allows you to work for any employer in Canada, except for those listed as ineligible. Available to spouses of skilled workers/students, and eligible graduates (PGWP).
                            </p>
                            <Link to="/book-consultation" className="text-abic-blue font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Check Eligibility <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 3. EXTENSIONS */}
                <section className="bg-gray-50 p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-100 rounded text-green-700"><Clock size={20} /></div>
                        <h3 className="text-xl font-bold text-gray-900">Work Permit Extension</h3>
                    </div>
                    <p className="text-gray-600 max-w-3xl mb-6">
                        If you want to keep working, you must apply to extend your work permit at least 30 days before your current permit expires. If you apply before expiry, you have <strong>maintained status</strong> and can continue working until a decision is made.
                    </p>
                    <Link to="/book-consultation" className="inline-block bg-white border border-gray-200 hover:border-abic-blue text-abic-blue font-bold px-6 py-3 rounded-lg transition-colors">
                        Extend My Permit
                    </Link>
                </section>

            </div>
        </ServiceLayout>
    );
}
