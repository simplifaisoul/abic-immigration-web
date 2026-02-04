import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export default function GuelphStudyPermit() {
    return (
        <ServiceLayout
            title="Study Permit: Guelph"
            subtitle="Securing your status to study at the University of Guelph."
            heroImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <GraduationCap size={40} className="text-abic-red" />
                        <h2 className="text-2xl font-bold text-gray-900">Applying for U of G?</h2>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Whether you are an undergraduate, graduate, or veterinary student, ensuring your study permit application is watertight is crucial. We highlight your academic achievements and financial stability.
                    </p>
                    <Link to="/book-consultation" className="inline-block bg-abic-red text-white font-bold px-8 py-3 rounded-lg hover:bg-red-800 transition-colors">
                        Get Started
                    </Link>
                </section>
            </div>
        </ServiceLayout>
    );
}
