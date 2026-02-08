import ServiceLayout from "../components/ServiceLayout";
import { DollarSign, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Fees() {
    return (
        <ServiceLayout
            title="ABIC Service Fees & Professional Guidance"
            subtitle="Professionalism. Transparency. Value. Clear pricing for regulated immigration advice."
            heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-16">

                {/* INTRODUCTORY TEXT */}
                <section className="text-center max-w-4xl mx-auto">
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                        At ABIC (Above and Beyond Immigration Consultant), professional fees are based on time, complexity, and scope of work.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                        We provide regulated, compliance-first immigration guidance. Immigration outcomes are determined solely by Immigration, Refugees and Citizenship Canada (IRCC).
                    </p>
                </section>

                <hr className="border-gray-100" />

                {/* SECTION 1 — CONSULTATION FEES */}
                <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-abic-blue/10 p-3 rounded-xl text-abic-blue">
                            <DollarSign size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Consultation Fees</h2>
                            <span className="text-sm font-bold text-abic-red uppercase tracking-wider">(Required First Step)</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <ConsultationCard
                            title="60-Minute Online Immigration Strategy Consultation"
                            price="$90"
                        />
                        <ConsultationCard
                            title="In-Person Consultation"
                            price="$150"
                        />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl text-gray-600 text-sm leading-relaxed text-center">
                        <p className="mb-2">
                            Consultations are used to assess eligibility, identify risks, clarify documentation requirements, and outline appropriate immigration pathways.
                        </p>
                        <p className="font-bold text-gray-700">
                            Short consultations are not offered for complex immigration matters to ensure proper professional assessment.
                        </p>
                    </div>
                </section>

                {/* SECTION 2 — PROFESSIONAL GUIDANCE FEE RANGES */}
                <section className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Professional Guidance Fee Ranges</h2>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-10 text-center">
                        <p className="text-yellow-800 text-sm">
                            <strong>Note:</strong> The following are indicative fee ranges only. Final fees are confirmed after consultation based on individual case complexity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Visitor & Temporary Resident */}
                        <FeeGroup title="Visitor & Temporary Resident Matters">
                            <FeeItem name="Visitor Visa (TRV) Application & Strategy Guidance" range="$800 – $1,500+" />
                            <FeeItem name="Visitor Record / Extension of Stay Guidance" range="$600 – $1,200+" />
                            <FeeItem name="Visitor Visa Refusal Review & Re-application Strategy" range="$1,200 – $2,500+" />
                        </FeeGroup>

                        {/* Students & Graduates */}
                        <FeeGroup title="Students & Graduates">
                            <FeeItem name="Study Permit Application & Compliance Guidance" range="$1,500 – $3,000+" />
                            <FeeItem name="Study Permit Extension / Restoration Planning" range="$800 – $1,500+" />
                            <FeeItem name="Study Permit Refusal Review & Re-application Strategy" range="$1,500 – $3,000+" />
                            <FeeItem name="Post-Graduation Work Permit (PGWP) & Transition Planning" range="$1,200 – $2,500+" />
                        </FeeGroup>

                        {/* Express Entry */}
                        <FeeGroup title="Express Entry">
                            <FeeItem
                                name="CRS Assessment & Results Review (No Representation)"
                                range="$150 – $300"
                                note="(CRS calculation, eligibility review, and explanation only — no profile creation or IRCC representation)"
                            />
                            <FeeItem
                                name="Express Entry Strategy, Profile Review & Ongoing Guidance (With Representation)"
                                range="$2,000 – $4,000+"
                            />
                        </FeeGroup>

                        {/* Permanent Residence & Skilled Pathways */}
                        <FeeGroup title="Permanent Residence & Skilled Pathways">
                            <FeeItem name="Provincial Nominee Program (PNP) Strategy & Guidance" range="$2,500 – $4,500+" />
                        </FeeGroup>

                        {/* Work Permits & Employers */}
                        <FeeGroup title="Work Permits & Employers">
                            <FeeItem name="Work Permit Options & Employer-Supported Pathways" range="$1,800 – $3,500+" />
                            <FeeItem name="LMIA Strategy, Employer Compliance & Guidance" range="$2,500 – $5,000+" />
                        </FeeGroup>

                        {/* Family Sponsorship */}
                        <FeeGroup title="Family Sponsorship">
                            <FeeItem name="Spousal / Family Sponsorship Planning & Eligibility Review" range="$2,000 – $4,000+" />
                            <FeeItem name="Family Sponsorship Refusal Review & Re-application Strategy" range="Case-specific (quoted after consultation)" />
                        </FeeGroup>

                    </div>
                </section>

                {/* SECTION 3 — HOW FEES ARE CONFIRMED */}
                <section className="bg-gray-900 text-white rounded-3xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-8">How Fees Are Confirmed</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <Step num="1" text="Consultation completed" />
                            <Step num="2" text="Scope of work clearly defined" />
                            <Step num="3" text="Written fee estimate provided" />
                            <Step num="4" text="Client decides before any work begins" />
                        </div>
                        <div className="mt-10 inline-block bg-abic-gold text-abic-blue font-bold px-6 py-2 rounded-full">
                            No work proceeds without informed agreement.
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — DISCLAIMER */}
                <section className="max-w-4xl mx-auto text-center border-t border-gray-100 pt-12">
                    <div className="flex justify-center mb-4 text-gray-400">
                        <Shield size={32} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Disclaimer</h3>
                    <div className="text-gray-500 text-sm space-y-2">
                        <p>All fees are for professional services and guidance only.</p>
                        <p>Fees do not guarantee immigration outcomes or approvals.</p>
                        <p>Final decisions rest exclusively with Immigration, Refugees and Citizenship Canada (IRCC).</p>
                    </div>
                </section>

                <div className="flex justify-center pt-8">
                    <Link to="/contact" className="bg-abic-blue text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:bg-abic-blue/90 transition-all">
                        Book Your Consultation Now
                    </Link>
                </div>

            </div>
        </ServiceLayout>
    );
}

// Sub-components
const ConsultationCard = ({ title, price }: { title: string, price: string }) => (
    <div className="border border-gray-200 rounded-2xl p-6 text-center hover:border-abic-gold transition-colors bg-gray-50/50">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-3xl font-bold text-abic-blue mb-2">{price}</div>
    </div>
);

const FeeGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full">
        <h3 className="text-lg font-bold text-white bg-abic-blue py-2 px-4 rounded-lg mb-6 inline-block">{title}</h3>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

const FeeItem = ({ name, range, note }: { name: string, range: string, note?: string }) => (
    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
        <div className="flex justify-between items-start gap-4 mb-1">
            <span className="font-medium text-gray-800 text-left">{name}</span>
            <span className="font-bold text-abic-blue whitespace-nowrap">{range}</span>
        </div>
        {note && <p className="text-xs text-gray-500 italic text-left mt-1">{note}</p>}
    </div>
);

const Step = ({ num, text }: { num: string, text: string }) => (
    <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-abic-gold font-bold mb-3 border border-white/20">
            {num}
        </div>
        <p className="font-bold text-sm text-gray-300">{text}</p>
    </div>
);
