import ServiceLayout from "../../components/ServiceLayout";
import { Search } from "lucide-react";

export default function Recruitment() {
    return (
        <ServiceLayout
            title="Recruitment Strategy"
            subtitle="Meeting ESDC's strict advertising requirements for LMIA."
            heroImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-abic-blue/10 p-3 rounded-full">
                            <Search className="text-abic-blue" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Minimum Advertising</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Before hiring a foreign worker, you must demonstrate extensive efforts to hire a Canadian or Permanent Resident.
                    </p>
                    <ul className="space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <li className="flex gap-3 text-sm text-gray-700">
                            <strong>1.</strong> Advertise on the Government of Canada's Job Bank.
                        </li>
                        <li className="flex gap-3 text-sm text-gray-700">
                            <strong>2.</strong> Use two other methods (e.g., Indeed, LinkedIn, specialized industry sites).
                        </li>
                        <li className="flex gap-3 text-sm text-gray-700">
                            <strong>3.</strong> Keep ads live for at least 4 continuous weeks prior to application.
                        </li>
                        <li className="flex gap-3 text-sm text-gray-700">
                            <strong>4.</strong> Target underrepresented groups (youth, indigenous persons, newcomers, etc.).
                        </li>
                    </ul>
                </section>

            </div>
        </ServiceLayout>
    );
}
