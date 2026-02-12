import ServiceLayout from "../../components/ServiceLayout";
import { CheckCircle2, TrendingUp, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function FederalSkilledWorker() {
    return (
        <ServiceLayout
            title="Federal Skilled Worker Program"
            subtitle="The most popular Express Entry pathway for skilled professionals with foreign work experience."
            heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Overview */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        The Federal Skilled Worker (FSW) Program is designed for skilled workers with foreign work experience who want to immigrate to Canada permanently. It is one of the three programs managed under the Express Entry system.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-abic-blue p-6 rounded-r-xl">
                        <p className="text-sm text-gray-700">
                            <strong>Key Advantage:</strong> No job offer required. You can apply based on your skills, education, and work experience alone.
                        </p>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Eligibility Requirements */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-abic-blue/10 rounded-lg text-abic-blue"><FileText size={24} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">Eligibility Requirements</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    Work Experience
                                </h3>
                                <p className="text-sm text-gray-600 pl-7">
                                    At least 1 year of continuous full-time (or equivalent part-time) skilled work experience in the last 10 years in a NOC TEER 0, 1, 2, or 3 occupation.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    Language Proficiency
                                </h3>
                                <p className="text-sm text-gray-600 pl-7">
                                    Minimum CLB 7 in English or French (IELTS General: 6.0 in each band, or equivalent TEF/CELPIP scores).
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    Education
                                </h3>
                                <p className="text-sm text-gray-600 pl-7">
                                    Canadian secondary (high school) or post-secondary certificate, diploma, or degree, OR a completed foreign credential with an Educational Credential Assessment (ECA).
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                            <h3 className="font-bold text-xl text-gray-900 mb-4">Selection Factors (67 Points)</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                You must score at least 67 out of 100 points on the FSW selection grid based on:
                            </p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between"><span className="text-gray-700">Education</span><span className="font-bold text-gray-900">25 points</span></li>
                                <li className="flex justify-between"><span className="text-gray-700">Language Skills</span><span className="font-bold text-gray-900">28 points</span></li>
                                <li className="flex justify-between"><span className="text-gray-700">Work Experience</span><span className="font-bold text-gray-900">15 points</span></li>
                                <li className="flex justify-between"><span className="text-gray-700">Age</span><span className="font-bold text-gray-900">12 points</span></li>
                                <li className="flex justify-between"><span className="text-gray-700">Arranged Employment</span><span className="font-bold text-gray-900">10 points</span></li>
                                <li className="flex justify-between"><span className="text-gray-700">Adaptability</span><span className="font-bold text-gray-900">10 points</span></li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <Link to="/book-consultation" className="block w-full text-center bg-abic-blue hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
                                    Calculate My Score
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* CRS Score */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-abic-gold/10 rounded-lg text-yellow-600"><TrendingUp size={24} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">Comprehensive Ranking System (CRS)</h2>
                    </div>

                    <p className="text-gray-600 mb-6">
                        Even if you meet the FSW eligibility (67 points), you still need a competitive CRS score to receive an Invitation to Apply (ITA) through Express Entry. Recent draws have ranged from 470-540 points.
                    </p>

                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Ways to Boost Your CRS Score</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-4 rounded-lg border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Improve Language Scores</h4>
                                <p className="text-sm text-gray-600">Each 0.5 band increase in IELTS can add 6+ CRS points.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Get a Provincial Nomination</h4>
                                <p className="text-sm text-gray-600">Instant +600 CRS points, guaranteeing an ITA.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Obtain Canadian Work Experience</h4>
                                <p className="text-sm text-gray-600">1 year of Canadian experience adds 40+ points.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Complete Additional Education</h4>
                                <p className="text-sm text-gray-600">A second degree or Canadian credential boosts points.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-abic-blue text-center p-12 rounded-2xl relative overflow-hidden text-white">
                    <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Apply?</h2>
                    <p className="max-w-xl mx-auto text-blue-100 mb-8 relative z-10">
                        We help you maximize your CRS score, prepare a complete application, and avoid costly mistakes that could delay your PR.
                    </p>
                    <Link to="/book-consultation" className="relative z-10 inline-block bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold px-8 py-3 rounded-full transition-colors">
                        Book Free Assessment
                    </Link>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>

            </div>
        </ServiceLayout>
    );
}
