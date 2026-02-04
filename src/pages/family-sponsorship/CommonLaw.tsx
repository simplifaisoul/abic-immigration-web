import ServiceLayout from "../../components/ServiceLayout";
import { Home } from "lucide-react";

export default function CommonLaw() {
    return (
        <ServiceLayout
            title="Common-Law Sponsorship"
            subtitle="Proof of cohabitation is the key to success."
            heroImage="https://images.unsplash.com/photo-1516560640924-2c6f66300438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex gap-6 items-start">
                    <Home className="text-blue-600 shrink-0 mt-1" size={40} />
                    <div>
                        <h2 className="text-2xl font-bold text-blue-900 mb-3">The 12-Month Rule</h2>
                        <p className="text-blue-800 leading-relaxed">
                            To be considered "Common-Law" for immigration purposes, you must have lived together in a conjugal relationship for at least **12 continuous months**. Short breaks for business or family reasons are allowed, but you must prove you maintain one household.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Evidence</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Shared Lease or Property Deed",
                            "Joint Bank Accounts / Credit Cards",
                            "Utility Bills in both names",
                            "Driver's Licenses showing same address",
                            "Life Insurance naming partner as beneficiary",
                            "Photos and text logs spanning the period"
                        ].map(item => (
                            <div key={item} className="p-4 bg-gray-50 rounded-lg text-gray-700 font-medium border border-gray-100">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
