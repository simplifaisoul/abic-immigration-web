import ServiceLayout from "../components/ServiceLayout";
import { Award, TrendingUp, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExpressEntry() {
    return (
        <ServiceLayout
            title="Express Entry"
            subtitle="The fastest pathway to Canadian Permanent Residence for skilled workers."
            heroImage="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Overview */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Express Entry?</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Express Entry is an online application management system used by Immigration, Refugees and Citizenship Canada (IRCC) to select candidates for permanent residence. It manages applications for three federal economic immigration programs:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <Award className="text-abic-blue mb-3" size={32} />
                            <h3 className="font-bold text-gray-900 mb-2">Federal Skilled Worker</h3>
                            <p className="text-sm text-gray-600">For skilled workers with foreign work experience</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <TrendingUp className="text-abic-red mb-3" size={32} />
                            <h3 className="font-bold text-gray-900 mb-2">Canadian Experience Class</h3>
                            <p className="text-sm text-gray-600">For workers with Canadian work experience</p>
                        </div>
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <Wrench className="text-yellow-600 mb-3" size={32} />
                            <h3 className="font-bold text-gray-900 mb-2">Federal Skilled Trades</h3>
                            <p className="text-sm text-gray-600">For qualified tradespersons</p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* How It Works */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">How Express Entry Works</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Create Your Profile</h4>
                                <p className="text-sm text-gray-600">Submit your profile to the Express Entry pool. You'll be ranked using the Comprehensive Ranking System (CRS).</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Receive an Invitation to Apply (ITA)</h4>
                                <p className="text-sm text-gray-600">If your CRS score is above the cutoff in a draw, you'll receive an ITA.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Submit Your Application</h4>
                                <p className="text-sm text-gray-600">You have 60 days to submit a complete application with all supporting documents.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 bg-abic-gold text-abic-blue rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Get Your PR</h4>
                                <p className="text-sm text-gray-600">Most applications are processed within 6 months.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Choose Your Program */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choose Your Program</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Each program has different eligibility requirements. Click on a program below to learn more and see if you qualify.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Federal Skilled Worker */}
                        <Link to="/express-entry/federal-skilled-worker" className="bg-white border-2 border-gray-200 hover:border-abic-blue p-8 rounded-2xl transition-all group hover:shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-abic-blue group-hover:bg-abic-blue group-hover:text-white transition-colors">
                                    <Award size={32} />
                                </div>
                                <ArrowRight className="text-gray-400 group-hover:text-abic-blue group-hover:translate-x-1 transition-all" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-abic-blue transition-colors">Federal Skilled Worker</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                For skilled professionals with foreign work experience. No job offer required.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> 1+ year work experience</li>
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> CLB 7 language requirement</li>
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> 67/100 selection points</li>
                            </ul>
                        </Link>

                        {/* Canadian Experience Class */}
                        <Link to="/express-entry/canadian-experience-class" className="bg-white border-2 border-gray-200 hover:border-abic-red p-8 rounded-2xl transition-all group hover:shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-red-50 rounded-lg text-abic-red group-hover:bg-abic-red group-hover:text-white transition-colors">
                                    <TrendingUp size={32} />
                                </div>
                                <ArrowRight className="text-gray-400 group-hover:text-abic-red group-hover:translate-x-1 transition-all" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-abic-red transition-colors">Canadian Experience Class</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                For international graduates and workers with Canadian experience. Popular PGWP → PR pathway.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> 1 year Canadian experience</li>
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> CLB 5-7 (depends on NOC)</li>
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> No education requirement</li>
                            </ul>
                        </Link>

                        {/* Federal Skilled Trades */}
                        <Link to="/express-entry/skilled-trades" className="bg-white border-2 border-gray-200 hover:border-yellow-600 p-8 rounded-2xl transition-all group hover:shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                                    <Wrench size={32} />
                                </div>
                                <ArrowRight className="text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">Federal Skilled Trades</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                For qualified tradespersons with job offers or provincial certification.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> 2 years trade experience</li>
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> Job offer OR certificate</li>
                                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={16} /> CLB 4-5 language requirement</li>
                            </ul>
                        </Link>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Common Risks */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Risks & Mistakes</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Inaccurate CRS Score Calculation</h4>
                            <p className="text-sm text-gray-600">
                                Claiming points for unverified education or work experience can lead to misrepresentation and a 5-year ban.
                            </p>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Incomplete Documentation</h4>
                            <p className="text-sm text-gray-600">
                                Missing reference letters, police certificates, or medical exams can result in refusal or delays.
                            </p>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Falling Below CRS Cutoff</h4>
                            <p className="text-sm text-gray-600">
                                Recent draws have ranged from 470-540 points. We help you maximize your score through language improvement, PNPs, or additional credentials.
                            </p>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Missing the 60-Day Deadline</h4>
                            <p className="text-sm text-gray-600">
                                After receiving an ITA, you have only 60 days to submit a complete application. Preparation is key.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-abic-blue text-center p-12 rounded-2xl relative overflow-hidden text-white">
                    <h2 className="text-3xl font-bold mb-4 relative z-10">Maximize Your CRS Score</h2>
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
