import { CheckCircle2, AlertTriangle, FileText } from "lucide-react";

export default function StudentConsultationFees() {
    return (
        <section className="space-y-12 py-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat text-center">⏱️ Choosing the Right Consultation Length</h2>
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Not all student immigration questions require the same amount of time.
                        To keep fees fair and discussions focused, ABIC offers different consultation lengths based on case complexity.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* 30 Minutes */}
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:border-abic-blue transition-colors relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-abic-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                            $45
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2 text-center">30 Minutes</h3>
                        <p className="text-sm text-gray-500 text-center mb-6 font-medium">Simple & Clarification Matters</p>

                        <p className="text-sm text-gray-600 mb-4">Best for straightforward questions where no deep analysis is required.</p>

                        <div className="space-y-3 mb-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Common Examples:</p>
                            <ul className="text-sm space-y-2 text-gray-600">
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-blue rounded-full mt-2" /> Study permit extension (no status issues)</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-blue rounded-full mt-2" /> PGWP eligibility confirmation</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-blue rounded-full mt-2" /> Working hours clarification</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-blue rounded-full mt-2" /> Travel questions (valid permit)</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-blue rounded-full mt-2" /> Understanding IRCC letters</li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-blue-100 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-blue"><CheckCircle2 size={14} /> Focused</div>
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-blue"><CheckCircle2 size={14} /> Clarification-based</div>
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-blue"><CheckCircle2 size={14} /> Minimal document review</div>
                        </div>
                    </div>

                    {/* 45 Minutes */}
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:border-abic-blue transition-colors relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-abic-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                            $75
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2 text-center">45 Minutes</h3>
                        <p className="text-sm text-gray-500 text-center mb-6 font-medium">Moderate Planning & Multiple Questions</p>

                        <p className="text-sm text-gray-600 mb-4">Best when you have more than one issue or need early-stage planning.</p>

                        <div className="space-y-3 mb-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Common Examples:</p>
                            <ul className="text-sm space-y-2 text-gray-600">
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-gold rounded-full mt-2" /> PGWP planning + future PR discussion</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-gold rounded-full mt-2" /> Study permit extension (financial updates)</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-gold rounded-full mt-2" /> Change of school or program implications</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-gold rounded-full mt-2" /> Student + visitor status questions</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-gold rounded-full mt-2" /> Early Express Entry CRS (no profile)</li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-blue-100 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-gold"><CheckCircle2 size={14} /> Broader discussion</div>
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-gold"><CheckCircle2 size={14} /> Light strategy planning</div>
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-gold"><CheckCircle2 size={14} /> Limited document assessment</div>
                        </div>
                    </div>

                    {/* 60 Minutes */}
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:border-abic-blue transition-colors relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-abic-red text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                            $90
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2 text-center">60 Minutes</h3>
                        <p className="text-sm text-gray-500 text-center mb-6 font-medium">Complex Student Matters</p>

                        <p className="text-sm text-gray-600 mb-4">Recommended for cases involving risk, compliance, or strategy.</p>

                        <div className="space-y-3 mb-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Common Examples:</p>
                            <ul className="text-sm space-y-2 text-gray-600">
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-red rounded-full mt-2" /> Study permit refusal review</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-red rounded-full mt-2" /> Status gaps or overstays</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-red rounded-full mt-2" /> Restoration of status</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-red rounded-full mt-2" /> Transition to work permit (complex)</li>
                                <li className="flex items-start gap-2"><div className="w-1 h-1 bg-abic-red rounded-full mt-2" /> Student with family in Canada</li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-blue-100 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-red"><CheckCircle2 size={14} /> In-depth review</div>
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-red"><CheckCircle2 size={14} /> Risk assessment</div>
                            <div className="flex items-center gap-2 text-xs font-bold text-abic-red"><CheckCircle2 size={14} /> Strategic guidance</div>
                        </div>
                    </div>
                </div>

                {/* Extended Matters */}
                <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                    <div className="flex items-start gap-4">
                        <div className="bg-red-100 text-red-600 p-3 rounded-full"><AlertTriangle size={24} /></div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Extended / Complex Matters — May Require 90 Minutes or More</h3>
                            <p className="text-gray-600 mb-4">
                                Some situations cannot be responsibly addressed in shorter sessions. These may require extended consultations or follow-up sessions.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Examples include:</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• Study permit refusals with multiple refusal reasons</li>
                                        <li>• Student + spousal sponsorship planning</li>
                                        <li>• Student sponsoring or being sponsored by a spouse</li>
                                        <li>• Multiple prior refusals across visa categories</li>
                                        <li>• Complex travel, employment, or status history</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">ABIC Recommendation:</h4>
                                    <ul className="text-sm space-y-1 text-gray-700 mb-4">
                                        <li>• A 60-minute consultation plus follow-up, or</li>
                                        <li>• An extended strategy session to ensure proper professional review</li>
                                    </ul>
                                    <div className="flex gap-4 text-xs font-bold text-gray-600">
                                        <span className="flex items-center gap-1"><FileText size={12} /> Multiple documents</span>
                                        <span className="flex items-center gap-1"><FileText size={12} /> Cross-category analysis</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Note */}
                <div className="mt-8 text-center bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                    <h4 className="font-bold text-yellow-800 mb-2">⚠️ Important Note for Students</h4>
                    <p className="text-sm text-yellow-800/80 mb-0">
                        Choosing a shorter consultation does not reduce professionalism — but complex cases cannot be rushed without increasing risk.
                        If a longer session is required, you will be informed before any work proceeds.
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 text-center text-xs text-gray-400 max-w-2xl mx-auto">
                    <p className="font-bold uppercase mb-1">Professional Disclaimer</p>
                    <p>
                        Consultation time is based on case complexity, not outcomes. All guidance is provided by a Regulated Canadian Immigration Consultant (RCIC).
                        Final immigration decisions are made by Immigration, Refugees and Citizenship Canada (IRCC).
                    </p>
                </div>

            </div>
        </section>
    );
}
