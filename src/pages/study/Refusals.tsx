import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { XCircle, CheckSquare } from "lucide-react";

export default function StudyRefusals() {
    return (
        <ServiceLayout
            title="Study Permit Refusals"
            subtitle="Study permit refused? We specialize in overturning officer decisions."
            heroImage="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="text-center">
                    <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Common Reasons for Refusal</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Study permit refusal rates are high. Officers often use generic reasons like "Purpose of Visit" or "Financial Assets" to reject applications that lack a strong narrative.
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                        <div className="flex items-center gap-3 mb-4">
                            <XCircle className="text-red-500" />
                            <h3 className="font-bold text-red-900">What went wrong?</h3>
                        </div>
                        <ul className="space-y-2 text-red-800/80 text-sm">
                            <li>• "I am not satisfied you will leave Canada..."</li>
                            <li>• "Your proposed studies are not reasonable..."</li>
                            <li>• "Inconsistent travel history..."</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckSquare className="text-green-600" />
                            <h3 className="font-bold text-green-900">How we fix it</h3>
                        </div>
                        <ul className="space-y-2 text-green-800/80 text-sm">
                            <li>• Detailed Study Plan logic (Career progression)</li>
                            <li>• Stronger proof of ties to home country</li>
                            <li>• Explaining large deposits in bank accounts</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 text-white p-12 rounded-3xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Need a Second Opinion?</h2>
                    <p className="text-gray-300 mb-8">
                        We can order the Global Case Management System (GCMS) notes to see the officer's exact comments before re-applying.
                    </p>
                    <Link to="/book-consultation" className="bg-abic-gold text-abic-blue font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                        Book Refusal Review
                    </Link>
                </section>

            </div>
        </ServiceLayout>
    );
}
