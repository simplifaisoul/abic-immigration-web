import {
    MapPin, CreditCard, ShieldCheck,
    AlertTriangle, CheckCircle2, Clock, Globe, Laptop,
    FileText
} from "lucide-react";


export default function BookConsultation() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* HER0 / INTRO */}
            <div className="bg-abic-blue text-white pt-32 pb-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                        Book a Consultation
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-medium mb-4">
                        Regulated Canadian Immigration Advice — Clear, Strategic, Compliance-First
                    </p>
                    <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
                        At Above and Beyond Immigration Consultant (ABIC), consultations are designed to give you accurate, regulated, and case-specific immigration advice before you take any action.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-16 pb-24 space-y-20">

                {/* 1. WHAT A CONSULTATION IS FOR */}
                <section className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <CheckCircle2 className="text-abic-gold" size={28} /> What a Consultation Is For
                            </h2>
                            <ul className="space-y-4">
                                <ListItem text="Understand which Canadian immigration options may apply to you" />
                                <ListItem text="Identify risks, compliance issues, or refusal concerns" />
                                <ListItem text="Clarify IRCC rules and officer expectations" />
                                <ListItem text="Decide your next steps before submitting an application" />
                                <ListItem text="Determine whether professional representation is appropriate" />
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl md:w-80 text-center border border-blue-100">
                            <p className="text-abic-blue font-bold text-lg mb-2">Essential First Step</p>
                            <p className="text-sm text-gray-600">A consultation is often the most important step before you apply.</p>
                        </div>
                    </div>
                </section>

                {/* 2. CONSULTATION TYPES & FEES */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Types & Fees</h2>
                        <p className="text-gray-600">ABIC offers two consultation options, depending on your needs and preferences.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* VIRTUAL CONSULTATION */}
                        <PricingCard
                            title="60-Minute Virtual Consultation"
                            price="90"
                            icon={<Globe size={32} className="text-white" />}
                            color="bg-blue-600"
                            features={[
                                "60 minutes of one-on-one consultation with an RCIC",
                                "Review of your immigration background and goals",
                                "Eligibility assessment under relevant programs",
                                "Explanation of IRCC requirements and realistic outcomes",
                                "Answers to your case-specific questions"
                            ]}
                            benefits={[
                                "Ideal for overseas applicants and in-Canada clients",
                                "No travel required — attend from anywhere",
                                "Flexible, efficient, and cost-effective",
                                "Screen-sharing allows documents to be discussed clearly"
                            ]}
                            bestFor="Study permits, PGWP, work permits, PR pathways, General strategy"
                        />

                        {/* IN-PERSON CONSULTATION */}
                        <PricingCard
                            title="60-Minute In-Person Consultation"
                            price="150"
                            icon={<MapPin size={32} className="text-white" />}
                            color="bg-blue-800"
                            features={[
                                "60 minutes of in-person consultation",
                                "In-depth discussion of complex or sensitive matters",
                                "Review of physical documents (if applicable)",
                                "More detailed clarification for nuanced situations"
                            ]}
                            benefits={[
                                "Best for complex cases, refusals, or multiple issues",
                                "Allows deeper discussion and interaction",
                                "Preferred by clients who value face-to-face professional advice"
                            ]}
                            bestFor="Previous refusals, Complicated immigration histories, In-person preference"
                        />
                    </div>
                </section>

                {/* 3. READY TO BOOK CTAS */}
                <section className="text-center bg-gray-900 text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-8">Ready to Book?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Choose your consultation type and proceed to secure payment.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-abic-gold text-abic-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <Globe size={20} /> Book Virtual ($90)
                            </button>
                            <button className="bg-white text-abic-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <MapPin size={20} /> Book In-Person ($150)
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </section>

                {/* 4. IMPORTANT POLICIES (GRID) */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Conditions */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                            <FileText className="text-abic-blue" /> Important Consultation Conditions
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" /> Consultations are by appointment only</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" /> Full payment is required before confirmation</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" /> Consultations provide advice only — they do not include application preparation or representation</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" /> Immigration outcomes are subject to IRCC discretion</li>
                        </ul>
                    </div>

                    {/* Cancellation & Refund */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                            <Clock className="text-abic-blue" /> Cancellation, Rescheduling & Refund
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div className="p-3 bg-red-50 text-red-700 rounded-lg border border-red-100">
                                <span className="font-bold block mb-1">❌ No Refund Policy</span>
                                All consultation fees are strictly non-refundable, once payment is made.
                            </div>
                            <div className="p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-100">
                                <span className="font-bold block mb-1">🔄 Rescheduling Policy</span>
                                Only one (1) reschedule permitted (at least 24h notice). Missed appointments result in fee forfeiture.
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. SECURE PAYMENT */}
                <section className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Secure Consultation Payment</h2>
                        <p className="text-gray-500 mt-2">Payment must be completed before a consultation is scheduled.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                        <PaymentFeature icon={<CreditCard />} title="Secure Methods" desc="We accept updated credit cards, debit cards, and encrypted gateways." />
                        <PaymentFeature icon={<CheckCircle2 />} title="What's Covered" desc="Reserved time, professional assessment, and case-specific guidance." />
                        <PaymentFeature icon={<Laptop />} title="AI Transparency" desc="We may use AI tools for research/admin efficiency. All advice is human-led." />
                    </div>
                </section>

                {/* 6. DISCLAIMERS */}
                <div className="space-y-4">
                    <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
                        <div className="flex gap-3 items-start">
                            <AlertTriangle className="text-gray-500 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Consultation Disclaimer</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Consultations provide professional advice based on the information you provide. They do not guarantee application approval and do not include application preparation or representation unless a separate retainer agreement is signed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
                        <div className="flex gap-3 items-start">
                            <AlertTriangle className="text-gray-500 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Payment & Relationship Disclaimer</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Payment confirms your request for a consultation only and does not establish an ongoing client-consultant relationship. Representation begins only after a signed retainer agreement is in place.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// --- SUB-COMPONENTS ---

const ListItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3">
        <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
        <span className="text-gray-700 leading-relaxed">{text}</span>
    </li>
);

const PricingCard = ({ title, price, icon, color, features, benefits, bestFor }: any) => (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
        <div className={`${color} p-8 text-white text-center`}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="text-4xl font-bold">CAD ${price}</div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
            <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">What's Included</h4>
                <ul className="space-y-3">
                    {features.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            < CheckCircle2 size={16} className="text-abic-blue shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Benefits</h4>
                <ul className="space-y-2">
                    {benefits.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="text-abic-gold font-bold">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-900 text-xs uppercase block mb-1">Best For:</span>
                <p className="text-sm text-gray-600 italic">{bestFor}</p>
            </div>
        </div>
    </div>
);

const PaymentFeature = ({ icon, title, desc }: any) => (
    <div className="text-center p-4">
        <div className="text-abic-blue mb-3 flex justify-center">{icon}</div>
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
);
