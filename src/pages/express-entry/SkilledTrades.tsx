import ServiceLayout from "../../components/ServiceLayout";
import { Wrench, CheckCircle2, FileText, Award, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function SkilledTrades() {
    return (
        <ServiceLayout
            title="Federal Skilled Trades Program"
            subtitle="Permanent residence pathway for qualified tradespersons with Canadian job offers or certifications."
            heroImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Overview */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        The Federal Skilled Trades (FST) Program is for skilled workers who are qualified in a skilled trade and want to become permanent residents of Canada. This program recognizes the critical need for skilled tradespeople in Canada's economy.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                        <p className="text-sm text-gray-700">
                            <strong>Key Requirement:</strong> You must have either a valid job offer of full-time employment for at least 1 year OR a certificate of qualification in your skilled trade issued by a Canadian provincial or territorial authority.
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
                            <div className="bg-white border border-gray-200 p-6 rounded-xl">
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    Work Experience
                                </h3>
                                <p className="text-sm text-gray-600">
                                    At least 2 years of full-time work experience (or equivalent part-time) in a skilled trade within the 5 years before you apply.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 p-6 rounded-xl">
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    Job Offer or Certification
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    You must have either:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600 pl-4">
                                    <li className="flex gap-2"><span className="text-gray-400">•</span> A valid job offer of full-time employment for at least 1 year, OR</li>
                                    <li className="flex gap-2"><span className="text-gray-400">•</span> A certificate of qualification from a Canadian province/territory</li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-200 p-6 rounded-xl">
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    Language Proficiency
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="text-gray-700">Speaking & Listening</span>
                                        <span className="font-bold text-gray-900">CLB 5</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-700">Reading & Writing</span>
                                        <span className="font-bold text-gray-900">CLB 4</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-abic-blue to-blue-700 text-white p-8 rounded-2xl">
                            <h3 className="font-bold text-2xl mb-4">No Education Requirement</h3>
                            <p className="text-blue-100 mb-6 leading-relaxed">
                                Unlike FSW and CEC, the FST program does not require a minimum level of education. Your skilled trade experience and certification are what matter most.
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                                <p className="text-sm text-blue-100">
                                    <strong className="text-white">Note:</strong> While not required, having education credentials can still boost your CRS score in the Express Entry pool.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Eligible Trades */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-abic-gold/10 rounded-lg text-yellow-600"><Wrench size={24} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">Eligible Skilled Trades</h2>
                    </div>

                    <p className="text-gray-600 mb-6">
                        Your work experience must be in one of the following National Occupational Classification (NOC) groups:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 p-6 rounded-xl">
                            <h4 className="font-bold text-gray-900 mb-3">Major Group 72: Industrial, Electrical & Construction Trades</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Electricians</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Plumbers</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Carpenters</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Welders</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Heavy Equipment Operators</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl">
                            <h4 className="font-bold text-gray-900 mb-3">Major Group 73: Maintenance & Equipment Operation Trades</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> HVAC Mechanics</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Heavy-Duty Equipment Mechanics</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Crane Operators</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Industrial Mechanics</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl">
                            <h4 className="font-bold text-gray-900 mb-3">Major Group 82: Supervisors in Natural Resources & Agriculture</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Contractors & Supervisors (Landscaping, Mining, Oil & Gas)</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl">
                            <h4 className="font-bold text-gray-900 mb-3">Major Group 92: Processing, Manufacturing & Utilities Supervisors</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Supervisors (Food Processing, Industrial Electricians)</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl">
                            <h4 className="font-bold text-gray-900 mb-3">Minor Group 632: Chefs & Cooks</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Chefs</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Cooks</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl">
                            <h4 className="font-bold text-gray-900 mb-3">Minor Group 633: Butchers & Bakers</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Butchers</li>
                                <li className="flex gap-2"><span className="text-abic-blue">•</span> Bakers</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 p-6 rounded-xl">
                        <p className="text-sm text-gray-700">
                            <strong>Important:</strong> Your work experience must match the duties listed in the NOC description for your trade. We help verify your NOC code and ensure your reference letters accurately reflect your duties.
                        </p>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Provincial Certification */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-green-50 rounded-lg text-green-600"><Award size={24} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">Certificate of Qualification</h2>
                    </div>

                    <p className="text-gray-600 mb-6">
                        A Certificate of Qualification proves that you meet the standards for your trade in a specific province or territory. This is issued by the provincial/territorial authority responsible for trades.
                    </p>

                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="font-bold text-lg text-gray-900 mb-4">How to Obtain a Certificate</h3>
                        <ol className="space-y-4">
                            <li className="flex gap-4">
                                <span className="w-8 h-8 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Contact the Provincial Authority</h4>
                                    <p className="text-sm text-gray-600">Reach out to the regulatory body in the province where you want to work (e.g., Ontario College of Trades, Skilled Trades BC).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-8 h-8 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Submit Credentials & Experience</h4>
                                    <p className="text-sm text-gray-600">Provide proof of your training, work experience, and any foreign credentials.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-8 h-8 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Pass the Certification Exam (if required)</h4>
                                    <p className="text-sm text-gray-600">Some trades require you to pass a standardized exam (Red Seal exam) to prove competency.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Common Challenges */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-50 rounded-lg text-red-600"><AlertTriangle size={24} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">Common Challenges</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Obtaining a Job Offer</h4>
                            <p className="text-sm text-gray-600">
                                Finding a Canadian employer willing to provide a valid job offer can be difficult from abroad. Consider applying for a work permit first or exploring Provincial Nominee Programs (PNPs) that target skilled trades.
                            </p>
                        </div>
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Provincial Certification Requirements</h4>
                            <p className="text-sm text-gray-600">
                                Each province has different certification requirements. Some trades are regulated in one province but not in another. We help navigate these provincial variations.
                            </p>
                        </div>
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Low CRS Scores</h4>
                            <p className="text-sm text-gray-600">
                                FST applicants often have lower CRS scores due to lower language and education requirements. Consider improving language scores or applying through a PNP for +600 points.
                            </p>
                        </div>
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Proving Work Experience</h4>
                            <p className="text-sm text-gray-600">
                                Reference letters must detail your specific duties, hours worked, and wages. Incomplete or vague letters are a common cause of refusal.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-abic-blue text-center p-12 rounded-2xl relative overflow-hidden text-white">
                    <h2 className="text-3xl font-bold mb-4 relative z-10">Build Your Future in Canada</h2>
                    <p className="max-w-xl mx-auto text-blue-100 mb-8 relative z-10">
                        Canada needs skilled tradespeople. We help you navigate job offers, provincial certifications, and the Express Entry process to secure your PR.
                    </p>
                    <Link to="/book-consultation" className="relative z-10 inline-block bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold px-8 py-3 rounded-full transition-colors">
                        Book Trades Consultation
                    </Link>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>

            </div>
        </ServiceLayout>
    );
}
