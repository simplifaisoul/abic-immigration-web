import ServiceLayout from "../components/ServiceLayout";
import { CheckCircle2, TrendingUp, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExpressEntry() {
    return (
        <ServiceLayout
            title="Express Entry"
            subtitle="The fastest pathway to Canadian Permanent Residence for skilled workers."
            heroImage="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* INTRO */}
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-6">Your Ticket to Canada</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Express Entry is an online system used to manage applications for permanent residence from skilled workers. It involves a points-based ranking system (CRS). We help you maximize your score to receive an Invitation to Apply (ITA).
                    </p>
                </section>

                {/* 1. FEDERAL SKILLED WORKER (FSW) */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-abic-blue/10 rounded text-abic-blue"><Award size={24} /></div>
                            <h3 className="text-2xl font-bold text-gray-900">Federal Skilled Worker (FSW)</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Designed for workers with foreign work experience who want to immigrate to Canada permanently.
                        </p>
                        <h4 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-3">Eligibility Highlights</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> At least 1 year of continuous work experience</li>
                            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> CLB 7 in English or French</li>
                            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Score 67/100 on the selection factors</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-center py-8">
                            <div className="text-5xl font-bold text-abic-gold mb-2">67</div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Points Needed</div>
                        </div>
                        <Link to="/book-consultation" className="block w-full py-3 bg-gray-50 hover:bg-gray-100 text-center rounded-xl text-abic-blue font-bold transition-colors">
                            Calculate My Score
                        </Link>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 2. CANADIAN EXPERIENCE CLASS (CEC) */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-center py-8">
                            <div className="text-5xl font-bold text-abic-red mb-2">1 Yr</div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Canadian Experience</div>
                        </div>
                        <Link to="/book-consultation" className="block w-full py-3 bg-gray-50 hover:bg-gray-100 text-center rounded-xl text-abic-blue font-bold transition-colors">
                            Verify Eligibility
                        </Link>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-abic-red/10 rounded text-abic-red"><TrendingUp size={24} /></div>
                            <h3 className="text-2xl font-bold text-gray-900">Canadian Experience Class (CEC)</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            For skilled workers who have Canadian work experience and want to become permanent residents. Popular among international graduates.
                        </p>
                        <h4 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-3">Eligibility Highlights</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> 1 year of skilled work in Canada (last 3 years)</li>
                            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> CLB 7 (TEER 0/1) or CLB 5 (TEER 2/3)</li>
                            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Must be admissible to Canada</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 3. FEDERAL SKILLED TRADES (FST) */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-abic-gold/10 rounded text-yellow-600"><Briefcase size={24} /></div>
                        <h3 className="text-2xl font-bold text-gray-900">Federal Skilled Trades (FST)</h3>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            For skilled workers who are qualified in a skilled trade and want to become permanent residents. Requires a valid job offer or a certificate of qualification.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <h5 className="font-bold text-gray-900 mb-2">Experience</h5>
                                <p className="text-sm text-gray-500">2 years full-time in trade (last 5 years)</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <h5 className="font-bold text-gray-900 mb-2">Job Offer</h5>
                                <p className="text-sm text-gray-500">Valid full-time offer (1 year) OR Certificate</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <h5 className="font-bold text-gray-900 mb-2">Language</h5>
                                <p className="text-sm text-gray-500">CLB 5 (Speaking/Listening), CLB 4 (Reading/Writing)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-abic-blue text-center p-12 rounded-2xl relative overflow-hidden text-white mt-12">
                    <h2 className="text-3xl font-bold font-montserrat mb-4 relative z-10">Maximize Your CRS Score</h2>
                    <p className="max-w-xl mx-auto text-blue-100 mb-8 relative z-10">
                        Small mistakes can cost you points. We review your profile to suggest improvements (Language, Education, PNP) that can secure your ITA.
                    </p>
                    <Link to="/book-consultation" className="relative z-10 inline-block bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold px-8 py-3 rounded-full transition-colors">
                        Start Free Assessment
                    </Link>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>

            </div>
        </ServiceLayout>
    );
}
