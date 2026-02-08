import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { Zap, Award, Briefcase, TrendingUp } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000";

export default function ExpressEntryLanding() {
    return (
        <ServiceLayout
            title="Express Entry"
            subtitle="Canada's flagship system for managing skilled worker applications."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Fast-Track Your Permanent Residence</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Express Entry is not a single immigration program, but a system used to manage applications for three of Canada's main economic immigration programs.
                        We help you maximize your Comprehensive Ranking System (CRS) score to receive an Invitation to Apply (ITA).
                    </p>
                </section>

                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/express-entry/fsw" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <Award className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Federal Skilled Worker</h3>
                        <p className="text-gray-500 text-sm">For skilled workers with foreign work experience who want to immigrate permanently.</p>
                    </Link>

                    <Link to="/express-entry/cec" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <Briefcase className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Canadian Experience Class</h3>
                        <p className="text-gray-500 text-sm">For skilled workers who have at least one year of Canadian work experience.</p>
                    </Link>

                    <Link to="/express-entry/fst" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <Zap className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Federal Skilled Trades</h3>
                        <p className="text-gray-500 text-sm">For skilled workers who are qualified in a skilled trade.</p>
                    </Link>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-abic-blue/10 p-4 rounded-full text-abic-blue">
                        <TrendingUp size={32} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Want to improve your CRS Score?</h3>
                        <p className="text-gray-600">
                            Small changes can make a big difference. We can help you identify strategies to boost your score,
                            such as Provincial Nominee Programs (PNP) or improved language test results.
                        </p>
                    </div>
                    <Link to="/contact" className="bg-abic-blue text-white font-bold py-3 px-6 rounded-full hover:bg-abic-gold hover:text-abic-blue transition-colors">
                        Assess My Score
                    </Link>
                </div>
            </div>
        </ServiceLayout>
    );
}
