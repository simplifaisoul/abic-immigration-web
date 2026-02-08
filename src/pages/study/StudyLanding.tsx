import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, AlertCircle } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000";

export default function StudyLanding() {
    return (
        <ServiceLayout
            title="Study in Canada"
            subtitle="World-class education opportunities await."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Academic Journey Starts Here</h2>
                    <p className="text-gray-600 leading-relaxed">
                        From obtaining your Letter of Acceptance (LOA) to securing your Study Permit and transitioning to a Post-Graduation Work Permit,
                        we support international students at every step.
                    </p>
                </section>

                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/study-in-canada/application" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <GraduationCap className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Study Permit</h3>
                        <p className="text-gray-500 text-sm">Initial applications for new students with LOA.</p>
                    </Link>

                    <Link to="/study-in-canada/extension" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <BookOpen className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Extensions</h3>
                        <p className="text-gray-500 text-sm">Extend your study permit to complete your program.</p>
                    </Link>

                    <Link to="/study-in-canada/refusals" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <AlertCircle className="w-12 h-12 text-abic-red mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-red">Refusal Appeal</h3>
                        <p className="text-gray-500 text-sm">Address refusals due to funds or travel history.</p>
                    </Link>
                </div>
            </div>
        </ServiceLayout>
    );
}
