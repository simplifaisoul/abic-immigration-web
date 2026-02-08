import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, FileText, Globe, Users, AlertCircle, DollarSign, MapPin } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000";

export default function GuelphLanding() {
    return (
        <ServiceLayout
            title="Students at Guelph"
            subtitle="Dedicated immigration support for international students in the Guelph region."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-16">
                {/* CTA Button */}
                <div className="text-center">
                    <Link to="/contact" className="inline-block bg-abic-blue text-white font-bold py-4 px-10 rounded-full hover:bg-abic-gold hover:text-abic-blue transition-all shadow-lg hover:shadow-xl">
                        Book a Student Consultation
                    </Link>
                </div>

                {/* Student Immigration Services */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Student Immigration Services (Guelph)</h2>

                    <div className="space-y-8">
                        {/* 1. Study Permit Services */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-abic-blue/10 rounded-full flex items-center justify-center shrink-0">
                                    <GraduationCap className="text-abic-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">1. Study Permit–Related Services</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Study Permit Extension</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Study Permit Refusal Review</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Change of School / Program Support (high-level compliance guidance)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2. Work Authorization */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-abic-blue/10 rounded-full flex items-center justify-center shrink-0">
                                    <Briefcase className="text-abic-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">2. Work Authorization for Students & Graduates</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Post-Graduation Work Permit (PGWP)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Working While Studying (rules overview)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>PGWP Refusal Review</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3. Temporary Resident Status */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-abic-blue/10 rounded-full flex items-center justify-center shrink-0">
                                    <FileText className="text-abic-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">3. Temporary Resident Status & Compliance</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Visitor Record / Status Extension</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Restoration of Status (high-level assessment; time-sensitive)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 4. Express Entry & PR */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-abic-blue/10 rounded-full flex items-center justify-center shrink-0">
                                    <Globe className="text-abic-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">4. Express Entry & PR Pathway Guidance (Students & Graduates)</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Express Entry educational overview (FSW/CEC/FST – high level)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Canadian Experience Class (CEC) overview (high level)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span className="italic text-sm">No CRS calculation or eligibility confirmation displayed publicly.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 5. PNP */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-abic-blue/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-abic-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">5. Provincial Nominee Program (PNP) – Student & Graduate Pathways</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>PNP overview (base vs Express Entry-aligned – high level)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Graduate pathway overview (high level)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Risk & timing awareness (intakes/priorities change)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 6. Family Services */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-abic-blue/10 rounded-full flex items-center justify-center shrink-0">
                                    <Users className="text-abic-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">6. Family-Related Student Services</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Spouse/Partner of student (spousal open work permit overview)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>Dependent children (visitor record / schooling considerations – high level)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 7. Refusals & Complex Cases */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-abic-blue/10 rounded-full flex items-center justify-center shrink-0">
                                    <AlertCircle className="text-abic-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">7. Refusals, Complex & High-Risk Student Cases</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>General refusal risk review (common refusal factors)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-abic-gold mt-1">•</span>
                                            <span>GCMS notes overview (what they are; no instructions)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Consultation Pricing */}
                <section className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-200">
                    <div className="flex items-center gap-3 justify-center mb-8">
                        <DollarSign className="text-abic-blue" size={32} />
                        <h2 className="text-3xl font-bold text-gray-900">Student Virtual Consultation</h2>
                    </div>
                    <p className="text-center text-gray-600 mb-10">Virtual consultations only</p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-abic-blue transition-all text-center">
                            <div className="text-4xl font-bold text-abic-blue mb-2">$45</div>
                            <p className="text-gray-600 font-semibold mb-4">30 min – Virtual</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-abic-blue shadow-lg text-center transform scale-105">
                            <div className="text-4xl font-bold text-abic-blue mb-2">$75</div>
                            <p className="text-gray-600 font-semibold mb-4">45 min – Virtual</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-abic-blue transition-all text-center">
                            <div className="text-4xl font-bold text-abic-blue mb-2">$90</div>
                            <p className="text-gray-600 font-semibold mb-4">90 min – Virtual</p>
                        </div>
                    </div>

                    <p className="text-center text-sm text-gray-600 italic">Choose 90 minutes for refusals, restorations, or complex situations.</p>
                </section>

                {/* Important Notice */}
                <section className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notice</h3>
                    <p className="text-gray-700 mb-4">
                        ABIC does not provide free assessments. Immigration matters are complex and change frequently; a paid consultation is required for accurate and responsible advice.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-yellow-600 mt-1">•</span>
                            <span>Consultation fees are non-refundable</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-yellow-600 mt-1">•</span>
                            <span>One (1) reschedule may be permitted</span>
                        </li>
                    </ul>
                </section>

                {/* Guelph Office */}
                <section className="bg-abic-blue text-white p-10 rounded-3xl text-center">
                    <h3 className="text-2xl font-bold mb-4">Guelph Office</h3>
                    <p className="text-lg mb-6">2 Wyndham St N, Guelph, ON N1H 4E3</p>
                    <Link to="/contact" className="inline-block bg-abic-gold text-abic-blue font-bold py-4 px-10 rounded-full hover:bg-white transition-colors">
                        Book Your Consultation
                    </Link>
                </section>
            </div>
        </ServiceLayout>
    );
}
