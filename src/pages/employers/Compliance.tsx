import ServiceLayout from "../../components/ServiceLayout";
import { Scale } from "lucide-react";

export default function Compliance() {
    return (
        <ServiceLayout
            title="Employer Compliance"
            subtitle="Avoiding penalties and bans: Your obligations as an employer."
            heroImage="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                    <Scale className="text-red-700 shrink-0" size={32} />
                    <div>
                        <h3 className="font-bold text-red-900 text-lg mb-2">Severe Penalties</h3>
                        <p className="text-red-800 text-sm">
                            Non-compliance can result in administrative monetary penalties (AMPs) ranging from $500 to $100,000 per violation, and a ban from hiring temporary foreign workers.
                        </p>
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Obligations</h2>
                    <ul className="grid gap-4">
                        {[
                            "Pay the wages set out in the offer of employment (no unauthorized deductions).",
                            "Provide the specific working conditions listed in the offer.",
                            "Ensure the workplace is free from abuse.",
                            "Keep all records for 6 years."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-center p-3 bg-white shadow-sm rounded-lg border border-gray-100">
                                <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 font-bold flex items-center justify-center text-xs shrink-0">
                                    {i + 1}
                                </div>
                                <span className="text-sm text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        </ServiceLayout>
    );
}
