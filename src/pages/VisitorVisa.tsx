import ServiceLayout from "../components/ServiceLayout";
import { CheckCircle2, AlertTriangle, Clock, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisitorVisa() {
    return (
        <ServiceLayout
            title="Visitor Visa (TRV)"
            subtitle="Explore Canada for tourism, business, or family visits with a valid Temporary Resident Visa."
            heroImage="https://images.unsplash.com/photo-1506190503964-b8929b007d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. VISITOR VISA APPLICATION */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-blue-50 rounded-lg text-abic-blue"><FileText size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Application Process</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        A Temporary Resident Visa (TRV) is an official document issued by a Canadian visa office that is placed in your passport to show that you have met the requirements for admission to Canada as a temporary resident.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-abic-blue">Eligibility Criteria</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-gray-600"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Valid passport</li>
                                <li className="flex gap-3 text-sm text-gray-600"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Good health (Medical Exam usually not needed for less than 6 months)</li>
                                <li className="flex gap-3 text-sm text-gray-600"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> No criminal or immigration-related convictions</li>
                                <li className="flex gap-3 text-sm text-gray-600"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Ties to home country (Job, family, assets)</li>
                                <li className="flex gap-3 text-sm text-gray-600"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Sufficient funds for your stay</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-abic-blue">Required Documents</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full mt-2" /> Application Form (IMM 5257)</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full mt-2" /> Family Information Form (IMM 5645)</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full mt-2" /> Purpose of Travel (Itinerary, Invitation Letter)</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full mt-2" /> Proof of Funds (Bank statements for 4 months)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 2. VISITOR VISA EXTENSION */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-green-50 rounded-lg text-green-600"><Clock size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Visa Extension (Visitor Record)</h2>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <p className="text-gray-700 mb-6 font-medium">
                            If you want to extend your stay in Canada as a visitor, you must apply for a <strong>Visitor Record</strong>.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-abic-blue mb-1">30 Days</div>
                                <div className="text-xs uppercase tracking-wide text-gray-500">Apply Before Expiry</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-abic-blue mb-1">Online</div>
                                <div className="text-xs uppercase tracking-wide text-gray-500">Application Method</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-abic-blue mb-1">Maintained</div>
                                <div className="text-xs uppercase tracking-wide text-gray-500">Status During Processing</div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-start gap-3 text-sm text-gray-600 bg-blue-50/50 p-4 rounded-lg">
                            <AlertTriangle className="text-abic-gold shrink-0 mt-0.5" size={16} />
                            <span>
                                <strong>Important:</strong> A Visitor Record is not a visa. It allows you to stay in Canada longer but does not guarantee re-entry if you leave.
                            </span>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 3. REFUSALS & SOLUTIONS */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-50 rounded-lg text-abic-red"><Shield size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Refusals & Appeals</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Visa refusals are common and can be devastating. However, a refusal is not always the end of the road. We specialize in overturning refusals.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900">Common Refusal Reasons</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-600"><AlertTriangle size={14} className="text-red-400" /> Unclear purpose of visit</li>
                                <li className="flex items-center gap-2 text-sm text-gray-600"><AlertTriangle size={14} className="text-red-400" /> Weak ties to home country</li>
                                <li className="flex items-center gap-2 text-sm text-gray-600"><AlertTriangle size={14} className="text-red-400" /> Insufficient financial proof</li>
                                <li className="flex items-center gap-2 text-sm text-gray-600"><AlertTriangle size={14} className="text-red-400" /> Travel history concerns</li>
                            </ul>
                        </div>
                        <div className="bg-abic-blue text-white p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-2">How ABIC Can Help</h4>
                            <p className="text-sm text-blue-100 mb-4">
                                We order your GCMS notes to understand the officer's exact reasoning, then prepare a robust re-application addressing every concern with strong legal arguments.
                            </p>
                            <Link to="/book-consultation" className="inline-block bg-abic-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                                Review My Refusal
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="bg-gray-50 p-6 rounded-xl text-center mt-12">
                    <p className="text-gray-600 mb-4">Don't risk a generic application. Get professional guidance today.</p>
                    <Link to="/book-consultation" className="text-abic-blue font-bold hover:underline">Book a Visitor Visa Consultation &rarr;</Link>
                </div>

            </div>
        </ServiceLayout>
    );
}
