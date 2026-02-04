import ServiceLayout from "../../components/ServiceLayout";
import { CheckCircle2, Clock, FileText, AlertTriangle } from "lucide-react";

export default function VisitorVisaApplication() {
    return (
        <ServiceLayout
            title="Visitor Visa Application"
            subtitle="Expert guidance for Tourism, Family Visits, and Business Travel to Canada."
            heroImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                {/* Overview */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Securing Your Temporary Resident Visa (TRV)</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        A Visitor Visa (TRV) allows foreign nationals to enter Canada for tourism, visiting family, or conducting business. While it may seem straightforward, refusals are common due to weak ties to home country or unclear travel purpose. We build a comprehensive case to maximize your approval chances.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <Clock className="text-abic-blue mb-2" size={24} />
                            <h3 className="font-bold text-gray-900">Processing Time</h3>
                            <p className="text-sm text-gray-500">Varies by country (15-60 days avg)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <FileText className="text-abic-blue mb-2" size={24} />
                            <h3 className="font-bold text-gray-900">Validity</h3>
                            <p className="text-sm text-gray-500">Up to 10 years (or passport expiry)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <AlertTriangle className="text-abic-blue mb-2" size={24} />
                            <h3 className="font-bold text-gray-900">Key Risk</h3>
                            <p className="text-sm text-gray-500">Proof of ties to home country</p>
                        </div>
                    </div>
                </section>

                {/* Eligibility */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility & Requirements</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Valid Passport",
                            "Proof of Funds to support your stay",
                            "Strong ties to home country (Job, Property, Family)",
                            "No criminal or immigration convictions",
                            "Valid medical exam (if required)",
                            "Letter of Invitation (if visiting family)"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-lg hover:border-abic-blue/30 transition-colors">
                                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Process */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Application Process</h2>
                    <div className="space-y-4">
                        <Step number="01" title="Initial Assessment" desc="We evaluate your profile and identify potential risks (e.g., weak financial ties)." />
                        <Step number="02" title="Document Collection" desc="We provide a tailored checklist, ensuring you gather the strongest evidence." />
                        <Step number="03" title="Submission Letter" desc="Our RCIC drafts a professional legal submission highlighting your eligibility." />
                        <Step number="04" title="Review & Support" desc="We monitor your application and respond to any IRCC requests immediately." />
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const Step = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
        <span className="text-2xl font-bold text-gray-200 group-hover:text-abic-blue transition-colors font-montserrat">{number}</span>
        <div>
            <h3 className="font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
        </div>
    </div>
);
