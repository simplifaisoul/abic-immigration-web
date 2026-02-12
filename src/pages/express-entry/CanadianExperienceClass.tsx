import ServiceLayout from "../../components/ServiceLayout";
import { CheckCircle2, GraduationCap, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function CanadianExperienceClass() {
    return (
        <ServiceLayout
            title="Canadian Experience Class"
            subtitle="The ideal pathway for international graduates and temporary workers with Canadian experience."
            heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Overview */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        The Canadian Experience Class (CEC) is designed for skilled workers who have Canadian work experience and want to become permanent residents. This is the most popular pathway for international students who have graduated from Canadian institutions and obtained a Post-Graduation Work Permit (PGWP).
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                        <p className="text-sm text-gray-700">
                            <strong>Key Advantage:</strong> Lower language requirements (CLB 5 for some NOC categories) and no foreign work experience needed.
                        </p>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Eligibility Requirements */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-abic-red/10 rounded-lg text-abic-red"><Briefcase size={24} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">Eligibility Requirements</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="text-green-500" size={20} />
                                Canadian Work Experience
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                At least 1 year (1,560 hours) of skilled work experience in Canada in the last 3 years. This must be:
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 pl-6">
                                <li className="flex gap-2"><span className="text-gray-400">•</span> In a NOC TEER 0, 1, 2, or 3 occupation</li>
                                <li className="flex gap-2"><span className="text-gray-400">•</span> Gained while on a valid work permit (e.g., PGWP, LMIA-based permit)</li>
                                <li className="flex gap-2"><span className="text-gray-400">•</span> Full-time (30+ hours/week) or equivalent part-time</li>
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 p-6 rounded-xl">
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    Language Proficiency
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    Minimum language requirements depend on your NOC category:
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="text-gray-700">NOC TEER 0 or 1</span>
                                        <span className="font-bold text-gray-900">CLB 7</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-700">NOC TEER 2 or 3</span>
                                        <span className="font-bold text-gray-900">CLB 5</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-200 p-6 rounded-xl">
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    Admissibility
                                </h3>
                                <p className="text-sm text-gray-600">
                                    You must be admissible to Canada (no criminal record, medical issues, or misrepresentation history) and intend to live outside Quebec.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* PGWP to PR Pathway */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-blue-50 rounded-lg text-abic-blue"><GraduationCap size={24} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">PGWP → PR Pathway</h2>
                    </div>

                    <p className="text-gray-600 mb-6">
                        Most CEC applicants are international graduates who completed a program at a Canadian Designated Learning Institution (DLI) and obtained a Post-Graduation Work Permit (PGWP).
                    </p>

                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="font-bold text-lg text-gray-900 mb-6">Typical Timeline</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Graduate from Canadian DLI</h4>
                                    <p className="text-sm text-gray-600">Complete a program of at least 8 months (for 1-year PGWP) or 2+ years (for 3-year PGWP).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Apply for PGWP</h4>
                                    <p className="text-sm text-gray-600">Must apply within 180 days of receiving final grades. Processing: 80-180 days.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Gain 1 Year of Skilled Work Experience</h4>
                                    <p className="text-sm text-gray-600">Work full-time in a NOC TEER 0, 1, 2, or 3 role for 12 months (1,560 hours).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-abic-gold text-abic-blue rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Create Express Entry Profile & Receive ITA</h4>
                                    <p className="text-sm text-gray-600">Submit your profile, receive ITA if your CRS score is competitive, and apply for PR.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Common Challenges */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-50 rounded-lg text-red-600"><Clock size={24} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">Common Challenges</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">PGWP Expiring Before 1 Year</h4>
                            <p className="text-sm text-gray-600">
                                If your PGWP is less than 3 years, you may not have enough time to accumulate 1 year of work experience. Consider applying for a work permit extension or exploring PNP options.
                            </p>
                        </div>
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Low CRS Score</h4>
                            <p className="text-sm text-gray-600">
                                Recent CEC draws have had cutoffs around 470-500. If your score is lower, consider improving language scores, getting a provincial nomination, or gaining more Canadian experience.
                            </p>
                        </div>
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">NOC Code Mismatch</h4>
                            <p className="text-sm text-gray-600">
                                Your job duties must match the NOC description. A mismatch can lead to refusal. We help verify your NOC code before submission.
                            </p>
                        </div>
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Incomplete Documentation</h4>
                            <p className="text-sm text-gray-600">
                                Missing reference letters, pay stubs, or T4s can delay or derail your application. We ensure all documents are complete and formatted correctly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-abic-blue text-center p-12 rounded-2xl relative overflow-hidden text-white">
                    <h2 className="text-3xl font-bold mb-4 relative z-10">From Student to Permanent Resident</h2>
                    <p className="max-w-xl mx-auto text-blue-100 mb-8 relative z-10">
                        We specialize in guiding international graduates through the PGWP → CEC → PR pathway. Let us help you navigate this critical transition.
                    </p>
                    <Link to="/book-consultation" className="relative z-10 inline-block bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold px-8 py-3 rounded-full transition-colors">
                        Book Student Consultation
                    </Link>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>

            </div>
        </ServiceLayout>
    );
}
