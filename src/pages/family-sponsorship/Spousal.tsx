import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function SpousalSponsorship() {
    return (
        <ServiceLayout
            title="Spousal Sponsorship"
            subtitle="Reuniting families is a top priority for Canadian immigration."
            heroImage="https://images.unsplash.com/photo-1629079448107-7977a45fc494?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <Heart className="text-abic-red mb-4" size={48} fill="currentColor" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Bring your partner home.</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            If you are a Canadian Citizen or Permanent Resident, you can sponsor your spouse to live in Canada. The core of this application is proving the <strong>genuineness</strong> of your relationship.
                        </p>
                        <Link to="/book-consultation" className="bg-abic-red text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                            Start Application
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-xl mb-4">In-Canada Class</h3>
                        <p className="text-sm text-gray-600 mb-4">Your spouse is already living in Canada with you.</p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>• Spouse can apply for Open Work Permit (SOWP)</li>
                            <li>• No appeal rights (if refused)</li>
                            <li>• Requirement to live together</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-xl mb-4">Family Class (Overseas)</h3>
                        <p className="text-sm text-gray-600 mb-4">Your spouse is currently outside Canada.</p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>• Can appeal a refusal (IAD)</li>
                            <li>• Spouse can visit while processing (TRV)</li>
                            <li>• No work permit until they land (usually)</li>
                        </ul>
                    </div>
                </div>

            </div>
        </ServiceLayout>
    );
}
