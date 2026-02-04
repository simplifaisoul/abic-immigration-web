import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

export default function GuelphRefusals() {
    return (
        <ServiceLayout
            title="Student Refusals (Guelph)"
            subtitle="don't let a refusal stop your U of G journey."
            heroImage="https://images.unsplash.com/photo-1635002962486-791ca21317e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">
                <section className="bg-red-50 p-8 rounded-2xl border border-red-100 flex items-start gap-4">
                    <ShieldAlert className="text-red-600 shrink-0" size={32} />
                    <div>
                        <h2 className="text-2xl font-bold text-red-900 mb-2">Study Permit Denied?</h2>
                        <p className="text-red-800 mb-6">
                            We can help overturn refusals for U of G students. We analyze the refusal letter and GCMS notes to build a stronger re-application.
                        </p>
                        <Link to="/book-consultation" className="text-red-700 font-bold hover:underline">
                            Book Refusal Analysis
                        </Link>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
