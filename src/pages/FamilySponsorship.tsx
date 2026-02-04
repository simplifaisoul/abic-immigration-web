import ServiceLayout from "../components/ServiceLayout";
import { Heart, Users, ShieldCheck, Baby } from "lucide-react";
import { Link } from "react-router-dom";

export default function FamilySponsorship() {
    return (
        <ServiceLayout
            title="Family Sponsorship"
            subtitle="Reunite with your loved ones in Canada. We help bring families together."
            heroImage="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. SPOUSAL SPONSORSHIP */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-50 rounded-lg text-abic-red"><Heart size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Spousal Sponsorship</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Canadian citizens and permanent residents can sponsor their spouse, common-law partner, or conjugal partner to become permanent residents.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-abic-red transition-colors group">
                                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-abic-red">Spouse</h4>
                                <p className="text-sm text-gray-600">You are legally married. Valid marriage certificate required.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-abic-red transition-colors group">
                                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-abic-red">Common-Law Partner</h4>
                                <p className="text-sm text-gray-600">You have lived together continuously for at least 12 months.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-abic-red transition-colors group">
                                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-abic-red">Conjugal Partner</h4>
                                <p className="text-sm text-gray-600">Binding relationship for 1+ year but could not live together due to barriers.</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2"><ShieldCheck className="text-green-600" /> The Sponsorship Undertaking</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Sponsors must sign an undertaking to provide for the basic needs of the sponsored person for <strong>3 years</strong>. This is a binding legal contract.
                            </p>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Processing Time</div>
                                <div className="font-bold text-gray-900">Approx. 12 Months</div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 2. PARENTS & GRANDPARENTS */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-blue-50 rounded-lg text-abic-blue"><Users size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Parents & Grandparents (PGP)</h2>
                    </div>
                    <div className="bg-blue-900 text-white p-8 rounded-2xl relative overflow-hidden">
                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Lottery System</h3>
                                <p className="text-blue-200 mb-4 leading-relaxed">
                                    The PGP program operates on a lottery system (Interest to Sponsor form). It opens once a year and is extremely competitive.
                                </p>
                                <div className="inline-block bg-white/10 px-4 py-2 rounded-lg text-sm font-bold text-abic-gold border border-white/20">
                                    Undertaking Period: 20 Years
                                </div>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                <h4 className="font-bold text-white mb-2">Super Visa Option</h4>
                                <p className="text-sm text-gray-300 mb-4">
                                    A great alternative. Allows parents to visit for up to 5 years at a time. Required private medical insurance.
                                </p>
                                <Link to="/visitor-visa" className="text-abic-gold font-bold text-sm hover:underline">See Super Visa Details &rarr;</Link>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-abic-gold rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </section>

                {/* 3. CHILD SPONSORSHIP */}
                <section className="bg-gray-50 p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-100 rounded text-green-700"><Baby size={20} /></div>
                        <h3 className="text-xl font-bold text-gray-900">Dependent Children</h3>
                    </div>
                    <p className="text-gray-600 max-w-2xl">
                        You can sponsor your dependent children (under 22 and unmarried) to become permanent residents. We ensure all proof of relationship and custody documents are successfully presented.
                    </p>
                </section>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">Family reunification is a top priority for Canada, but the paperwork is complex.</p>
                    <Link to="/book-consultation" className="inline-block bg-abic-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-colors">
                        Start Free Family Assessment
                    </Link>
                </div>

            </div>
        </ServiceLayout>
    );
}
