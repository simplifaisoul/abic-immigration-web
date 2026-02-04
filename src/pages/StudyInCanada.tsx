import ServiceLayout from "../components/ServiceLayout";
import { GraduationCap, AlertCircle, FileCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudyInCanada() {
    return (
        <ServiceLayout
            title="Study in Canada"
            subtitle="Access world-class education and open pathways to permanent residence."
            heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. STUDY PERMIT APPLICATION */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-50 rounded-lg text-abic-red"><GraduationCap size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Study Permit Application</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        To study in Canada for more than 6 months, you need a Study Permit. This document allows foreign nationals to study at Designated Learning Institutions (DLIs) in Canada.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-abic-blue border-l-4 border-abic-gold pl-3">Key Requirements</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" /> Acceptance Letter from a DLI</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" /> Valid Passport</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" /> Proof of Funds (Tuition + $20,635/year for living expenses)</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" /> Provincial Attestation Letter (PAL) (If applicable)</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Student Direct Stream (SDS)</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Residents of specific countries (India, China, Philippines, etc.) may be eligible for faster processing (20 days) if they meet language (IELTS 6.0) and financial (GIC $20,635) requirements.
                            </p>
                            <Link to="/book-consultation" className="text-abic-blue font-bold text-sm hover:underline">Check SDS Eligibility &rarr;</Link>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 2. STUDY PERMIT EXTENSION */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-blue-50 rounded-lg text-abic-blue"><Clock size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Study Permit Extension</h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white border-l-4 border-abic-blue p-6 shadow-sm rounded-r-xl">
                        <div className="flex-1">
                            <h3 className="font-bold text-xl text-gray-900 mb-2">Staying Longer?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                If your program is extended or you are switching programs, you must apply to extend your stay as a student <strong>at least 30 days before</strong> your current permit expires.
                            </p>
                            <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                                <FileCheck size={16} /> Maintains Implied Status
                            </div>
                        </div>
                        <div className="shrink-0 bg-gray-50 p-4 rounded-lg text-center min-w-[150px]">
                            <div className="text-3xl font-bold text-gray-900">90</div>
                            <div className="text-xs uppercase text-gray-500">Day Restoration Period</div>
                            <div className="text-[10px] text-red-500 mt-1">(If status expired)</div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 3. REFUSALS & RE-APPLICATION */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-50 rounded-lg text-abic-red"><AlertCircle size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Study Permit Refusals</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-gray-600 mb-6">
                                Study permit refusal rates have risen significantly. Common reasons include:
                            </p>
                            <ul className="space-y-4">
                                <RefusalReason title="Financial Insufficiency" desc="Officer doubts ability to pay tuition + living costs without working." />
                                <RefusalReason title="Purpose of Visit" desc="Proposed studies do not match educational history or career goals." />
                                <RefusalReason title="Ties to Home Country" desc="Officer believes you will not leave Canada at the end of your stay." />
                            </ul>
                        </div>
                        <div className="bg-[#0A1A2F] text-white p-8 rounded-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-2xl font-montserrat mb-4 text-white">Don't Give Up.</h3>
                                <p className="text-blue-100 mb-8 leading-relaxed">
                                    A refusal is a setback, not a final verdict. We analyze your GCMS notes and build a stronger, evidence-backed case to address the officer's concerns directly.
                                </p>
                                <Link to="/book-consultation" className="block w-full text-center bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold py-3 rounded-lg transition-colors">
                                    Start Re-Application
                                </Link>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
                        </div>
                    </div>
                </section>

                {/* 4. STUDENTS AT REGIONAL CAMPUSES */}
                <section className="bg-gray-50 -mx-6 px-6 py-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Studying in Waterloo or Guelph?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/students/waterloo" className="bg-white border border-gray-200 hover:border-abic-blue px-6 py-4 rounded-xl shadow-sm transition-all group">
                                <div className="font-bold text-abic-blue group-hover:underline">University of Waterloo / Laurier</div>
                                <div className="text-xs text-gray-500">Go to Regional Portal &rarr;</div>
                            </Link>
                            <Link to="/students/guelph" className="bg-white border border-gray-200 hover:border-abic-blue px-6 py-4 rounded-xl shadow-sm transition-all group">
                                <div className="font-bold text-abic-blue group-hover:underline">University of Guelph</div>
                                <div className="text-xs text-gray-500">Go to Regional Portal &rarr;</div>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

function RefusalReason({ title, desc }: any) {
    return (
        <div className="flex gap-4">
            <div className="w-1.5 h-full bg-red-200 rounded-full shrink-0"></div>
            <div>
                <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>
        </div>
    )
}
