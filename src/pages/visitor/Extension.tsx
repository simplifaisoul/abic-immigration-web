import ServiceLayout from "../../components/ServiceLayout";
import { ArrowRight, Calendar, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisitorVisaExtension() {
    return (
        <ServiceLayout
            title="Visitor Record (Visa Extension)"
            subtitle="Extend your stay in Canada legally. Don't let your status expire."
            heroImage="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                {/* Hero Alert */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                    <div className="flex gap-4">
                        <AlertCircle className="text-orange-600 shrink-0" />
                        <div>
                            <h3 className="font-bold text-orange-900 mb-1">Important: 30-Day Rule</h3>
                            <p className="text-orange-800 text-sm">
                                You should apply for an extension at least 30 days before your current status expires. If your status has already expired, you may need to apply for Restoration of Status.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Staying Longer as a Visitor</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            A Visitor Record is not a visa; it is a status document that allows you to remain in Canada longer. You might need this if your initial 6-month stay is ending but you want to spend more time with family or finish a short-term course.
                        </p>
                        <h3 className="font-bold text-lg text-gray-900 mb-3">When to Apply?</h3>
                        <ul className="space-y-2 mb-6 text-gray-600">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-blue rounded-full" /> Before your current stamp expires.</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-blue rounded-full" /> If you want to change conditions of your stay.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Required Documents</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="text-abic-blue font-bold">01</span>
                                <span className="text-sm font-medium">Proof of Financial Support</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="text-abic-blue font-bold">02</span>
                                <span className="text-sm font-medium">Letter of Explanation (Reason for staying)</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="text-abic-blue font-bold">03</span>
                                <span className="text-sm font-medium">Valid Passport copy</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Restoration */}
                <section className="bg-gray-900 text-white p-8 rounded-2xl">
                    <h2 className="text-xl font-bold mb-4 font-montserrat">Status Expired? Restoration of Status</h2>
                    <p className="text-gray-300 mb-6">
                        If it has been less than 90 days since your status expired, you may apply to restore it. This is complex and requires a strong explanation.
                    </p>
                    <Link to="/book-consultation" className="inline-flex items-center gap-2 text-abic-gold font-bold hover:gap-3 transition-all">
                        Book Urgent Consultation <ArrowRight size={18} />
                    </Link>
                </section>

            </div>
        </ServiceLayout>
    );
}
