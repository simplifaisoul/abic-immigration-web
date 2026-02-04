import ServiceLayout from "../../components/ServiceLayout";
import { Flag } from "lucide-react";

export default function Citizenship() {
    return (
        <ServiceLayout
            title="Canadian Citizenship"
            subtitle="The final step: Become a Canadian Citizen."
            heroImage="https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="text-center max-w-2xl mx-auto">
                    <Flag className="mx-auto text-abic-red mb-4" size={56} fill="currentColor" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Rights & Responsibilities</h2>
                    <p className="text-gray-600 leading-relaxed">
                        As a citizen, you can vote, run for political office, and enter/leave Canada freely with a Canadian passport. Dual citizenship is recognized in Canada.
                    </p>
                </div>

                <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl mb-4 text-center">Eligibility To Apply</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <span className="block text-2xl font-bold text-abic-blue mb-1">PR</span>
                            <span className="text-xs text-gray-500">Must be a Permanent Resident</span>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <span className="block text-2xl font-bold text-abic-blue mb-1">3 Yrs</span>
                            <span className="text-xs text-gray-500">Physical presence (1095 days)</span>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <span className="block text-2xl font-bold text-abic-blue mb-1">Tax</span>
                            <span className="text-xs text-gray-500">Filed taxes for 3 years</span>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <span className="block text-2xl font-bold text-abic-blue mb-1">Test</span>
                            <span className="text-xs text-gray-500">Pass knowledge & language tests</span>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
