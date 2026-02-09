import ServiceLayout from "../components/ServiceLayout";
import { Shield, CheckCircle2, FileText, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import CICCBadge from "../components/CICCBadge";

const ConsultationCard = ({ title, price, duration, children, btnText, btnLink, highlight }: { title: string, price: string, duration: string, children: React.ReactNode, btnText: string, btnLink: string, highlight?: boolean }) => (
    <div className={`bg-white p-8 rounded-3xl border shadow-lg hover:shadow-2xl transition-all ${highlight ? 'border-2 border-abic-gold' : 'border-gray-100'}`}>
        {highlight && <div className="bg-abic-gold text-abic-blue text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">RECOMMENDED</div>}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-4xl font-bold text-abic-blue mb-2">{price}</div>
        <div className="text-sm text-gray-500 mb-6">{duration}</div>
        <ul className="space-y-3 mb-8 text-gray-600">
            {children}
        </ul>
        <Link to={btnLink} className="block w-full text-center bg-abic-blue text-white font-bold py-4 rounded-xl hover:bg-abic-blue/90 transition-colors">{btnText}</Link>
    </div>
);

export default function Fees() {
    return (
        <ServiceLayout
            title="Fees & Consultation"
            subtitle="Transparent pricing for regulated Canadian immigration expertise."
            heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-24">

                {/* 1. CONSULTATION OPTIONS */}
                <section>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Book a Consultation</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">Every successful application starts with a proper assessment. Choose the consultation that fits your needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <ConsultationCard
                            title="Online Strategy Session"
                            price="$90"
                            duration="60 minutes"
                            btnText="Book Online"
                            btnLink="/contact"
                        >
                            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Full Eligibility Assessment</li>
                            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Document Review</li>
                            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Risk Analysis & Strategy</li>
                            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Recorded Zoom Call</li>
                        </ConsultationCard>

                        <ConsultationCard
                            title="In-Person Consultation"
                            price="$150"
                            duration="60 minutes"
                            btnText="Book In-Person"
                            btnLink="/contact"
                            highlight
                        >
                            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Face-to-Face Meeting</li>
                            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Detailed Case Analysis</li>
                            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Document Review</li>
                            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Written Summary Included</li>
                        </ConsultationCard>
                    </div>
                </section>

                {/* 2. STUDENT FEES SECTION */}
                <section className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border border-blue-100">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Consultation Fees</h2>
                        <p className="text-gray-600 text-lg">Specialized pricing for students in Waterloo & Guelph</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                            <div className="text-4xl font-bold text-abic-blue mb-2">$45</div>
                            <div className="text-sm text-gray-500 mb-4">30 minutes</div>
                            <div className="text-sm text-gray-600 mb-4">Simple questions, quick guidance, status updates</div>
                            <div className="text-xs text-gray-500 italic">Best for: Quick clarifications</div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md text-center border-2 border-abic-gold">
                            <div className="bg-abic-gold text-abic-blue text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">POPULAR</div>
                            <div className="text-4xl font-bold text-abic-gold mb-2">$75</div>
                            <div className="text-sm text-gray-500 mb-4">45 minutes</div>
                            <div className="text-sm text-gray-600 mb-4">Detailed case review, document assessment</div>
                            <div className="text-xs text-gray-500 italic">Best for: New applications</div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                            <div className="text-4xl font-bold text-abic-red mb-2">$90</div>
                            <div className="text-sm text-gray-500 mb-4">90 minutes</div>
                            <div className="text-sm text-gray-600 mb-4">Refusals, complex cases, strategic planning</div>
                            <div className="text-xs text-gray-500 italic">Best for: Refusals & complex issues</div>
                        </div>
                    </div>

                    <div className="bg-blue-100 p-6 rounded-xl max-w-3xl mx-auto">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Clock size={20} className="text-abic-blue" />
                            Why Different Durations?
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex gap-2"><span className="text-abic-blue">•</span> <strong>30 minutes:</strong> Quick questions that don't require extensive document review</li>
                            <li className="flex gap-2"><span className="text-abic-blue">•</span> <strong>45 minutes:</strong> Standard consultations for new applications with document assessment</li>
                            <li className="flex gap-2"><span className="text-abic-blue">•</span> <strong>90 minutes:</strong> Refusals require comprehensive analysis of previous application, refusal reasons, and strategic reapplication planning</li>
                        </ul>
                    </div>
                </section>

                {/* 3. WHY PAY FOR REPRESENTATION - INFOGRAPHIC */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Professional Representation?</h2>
                        <p className="text-gray-600 text-lg">The value of working with a Regulated Canadian Immigration Consultant</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow text-center">
                            <div className="w-16 h-16 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield size={32} />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Regulated Professional</h3>
                            <p className="text-sm text-gray-600">CICC-licensed consultants bound by professional standards and ethics</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow text-center">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Higher Success Rate</h3>
                            <p className="text-sm text-gray-600">Proper documentation and compliance reduce refusal risk</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow text-center">
                            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText size={32} />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Expert Documentation</h3>
                            <p className="text-sm text-gray-600">Thorough case preparation with attention to detail</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow text-center">
                            <div className="w-16 h-16 bg-gold-50 text-abic-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign size={32} />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Save Time & Money</h3>
                            <p className="text-sm text-gray-600">Avoid costly mistakes and reapplication fees</p>
                        </div>
                    </div>

                    <div className="mt-12 bg-gradient-to-r from-abic-blue to-blue-600 text-white p-10 rounded-3xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl font-bold mb-4">Professional Representation = Peace of Mind</h3>
                            <p className="text-lg opacity-90 mb-6">
                                Immigration applications are complex legal processes. Working with a regulated consultant ensures your case is handled with expertise, accuracy, and compliance with Canadian immigration law.
                            </p>
                            <div className="flex justify-center">
                                <CICCBadge size="lg" showLabel variant="grayscale" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. PROFESSIONAL FEES - MOVED TO BOTTOM, SMALLER */}
                <section>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Service Fees</h2>
                        <p className="text-gray-600">Fee estimates for full representation. Final quotes provided after consultation based on case complexity.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {/* Temporary Residence */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="bg-abic-blue text-white py-2 px-3 rounded-lg mb-4 text-center font-bold text-sm">
                                Temporary Residence
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">Visitor Visa</div>
                                    <div className="text-abic-blue font-bold">$800 – $1,500+</div>
                                </div>
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">Study Permit</div>
                                    <div className="text-abic-blue font-bold">$1,500 – $3,000+</div>
                                </div>
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">Work Permit</div>
                                    <div className="text-abic-blue font-bold">$1,800 – $3,500+</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">Extensions</div>
                                    <div className="text-abic-blue font-bold">$800 – $2,000+</div>
                                </div>
                            </div>
                        </div>

                        {/* Express Entry & PR */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="bg-green-600 text-white py-2 px-3 rounded-lg mb-4 text-center font-bold text-sm">
                                Express Entry & PR
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">Express Entry</div>
                                    <div className="text-green-600 font-bold">$3,500 – $5,000+</div>
                                </div>
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">PNP Applications</div>
                                    <div className="text-green-600 font-bold">$4,000 – $6,000+</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">CEC</div>
                                    <div className="text-green-600 font-bold">$3,500 – $5,500+</div>
                                </div>
                            </div>
                        </div>

                        {/* Family Sponsorship */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="bg-abic-red text-white py-2 px-3 rounded-lg mb-4 text-center font-bold text-sm">
                                Family Sponsorship
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">Spouse/Partner</div>
                                    <div className="text-abic-red font-bold">$4,000 – $6,000+</div>
                                </div>
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">Parents/Grandparents</div>
                                    <div className="text-abic-red font-bold">$4,500 – $7,000+</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">Dependent Children</div>
                                    <div className="text-abic-red font-bold">$2,500 – $4,000+</div>
                                </div>
                            </div>
                        </div>

                        {/* Employer Services */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="bg-abic-gold text-abic-blue py-2 px-3 rounded-lg mb-4 text-center font-bold text-sm">
                                Employer Services
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">LMIA</div>
                                    <div className="text-abic-gold font-bold">$3,000 – $6,000+</div>
                                </div>
                                <div className="pb-2 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">LMIA-Exempt</div>
                                    <div className="text-abic-gold font-bold">$2,000 – $4,000+</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">Compliance Review</div>
                                    <div className="text-abic-gold font-bold">$1,500 – $3,000+</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-500 max-w-3xl mx-auto">
                        <p>* Fees vary based on case complexity, urgency, and specific circumstances. All quotes are provided after initial consultation.</p>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
