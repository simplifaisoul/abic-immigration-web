import ServiceLayout from "../../components/ServiceLayout";
import { Share2, BookOpen, Clock } from "lucide-react";

export default function GuelphOverview() {
    return (
        <ServiceLayout
            title="Students in Guelph"
            subtitle="Dedicated immigration services for University of Guelph international students."
            heroImage="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Royal City's Education Hub</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Guelph is a welcoming city with a world-class university. We understand the specific challenges U of G students face, from extending study permits to navigating PGWP eligibility for specific programs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center p-4">
                            <BookOpen className="text-abic-red mb-2" size={32} />
                            <h3 className="font-bold">U of G Specialists</h3>
                            <p className="text-sm text-gray-500">Deep knowledge of U of G programs.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <Clock className="text-abic-red mb-2" size={32} />
                            <h3 className="font-bold">Fast Service</h3>
                            <p className="text-sm text-gray-500">Urgent extensions handled.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <Share2 className="text-abic-red mb-2" size={32} />
                            <h3 className="font-bold">Community</h3>
                            <p className="text-sm text-gray-500">Connected to local resources.</p>
                        </div>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
