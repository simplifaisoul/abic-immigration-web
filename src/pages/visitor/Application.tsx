import ServiceLayout from "../../components/ServiceLayout";
import ServiceContent from "../../components/ServiceContent";
import { CheckCircle2 } from "lucide-react";

export default function VisitorVisaApplication() {
    return (
        <ServiceLayout
            title="Visitor Visa Application"
            subtitle="Expert guidance for Tourism, Family Visits, and Business Travel to Canada."
            heroImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <ServiceContent
                    what="A Visitor Visa (Temporary Resident Visa or TRV) is an official document issued by a Canadian visa office that is placed in your passport to show that you have met the requirements for admission to Canada as a temporary resident (either as a visitor, a student, or a worker)."
                    who={[
                        "Tourists and holiday makers",
                        "Individuals visiting family or friends",
                        "Business visitors attending conferences or meetings",
                        "Short-term students (under 6 months)"
                    ]}
                    risks={[
                        "Refusal due to weak family or financial ties to home country",
                        "Unclear purpose of visit or travel history issues",
                        "Misrepresentation of funds or employment",
                        "Applying for the wrong type of visa (e.g., business vs. tourist)"
                    ]}
                />

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
