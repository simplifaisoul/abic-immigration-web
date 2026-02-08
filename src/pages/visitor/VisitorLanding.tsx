import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { Plane, CalendarCheck, AlertTriangle } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&q=80&w=2000";

export default function VisitorLanding() {
    return (
        <ServiceLayout
            title="Visitor Visas & Extensions"
            subtitle="Visit Canada for tourism, business, or family reunification."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Canada with Confidence</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Whether you need a Temporary Resident Visa (TRV) to enter Canada or a Visitor Record to extend your stay,
                        we ensure your application meets all IRCC requirements for financial support and ties to your home country.
                    </p>
                </section>

                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/visitor-visa/application" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <Plane className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Visitor Visa (TRV)</h3>
                        <p className="text-gray-500 text-sm">New applications for tourists, business visitors, and family visits.</p>
                    </Link>

                    <Link to="/visitor-visa/extension" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <CalendarCheck className="w-12 h-12 text-abic-blue mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Extend Your Stay</h3>
                        <p className="text-gray-500 text-sm">Apply for a Visitor Record to stay longer than 6 months.</p>
                    </Link>

                    <Link to="/visitor-visa/refusals" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <AlertTriangle className="w-12 h-12 text-abic-red mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-red">Refusal Management</h3>
                        <p className="text-gray-500 text-sm">Re-apply strategically after a refusal. We address officer concerns.</p>
                    </Link>
                </div>
            </div>
        </ServiceLayout>
    );
}
