import ServiceLayout from "../../components/ServiceLayout";
import ServiceContent from "../../components/ServiceContent";
import { ShieldAlert, CheckCircle, Search } from "lucide-react";

export default function EmployerCompliance() {
    return (
        <ServiceLayout
            title="Employer Compliance & Inspections"
            subtitle="Protecting your business from penalties and bans."
            heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-12">
                <ServiceContent
                    what="Employers who hire Temporary Foreign Workers (TFWs) are subject to compliance reviews and inspections by ESDC/Service Canada. These inspections verify that the employer is upholding the terms and conditions set out in the LMIA and work permit offer."
                    who={[
                        "Any employer who has hired a TFW in the past 6 years",
                        "Employers selected for random audit",
                        "Employers reported to the tip line"
                    ]}
                    risks={[
                        "Administrative Monetary Penalties (AMPs) ranging from $500 to $100,000 per violation",
                        "Ban from hiring foreign workers (1, 2, 5, 10 years, or permanent)",
                        "Public listing on the 'ineligible employers' list",
                        "Revocation of existing LMIAs and work permits"
                    ]}
                />

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Compliance Triggers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-red-100 bg-red-50 p-6 rounded-xl">
                            <ShieldAlert className="text-red-600 mb-4" size={32} />
                            <h3 className="font-bold text-lg mb-2">Wage Discrepancies</h3>
                            <p className="text-sm text-gray-600">Paying less than the amount stated in the LMIA/Offer of Employment, or making unauthorized deductions.</p>
                        </div>
                        <div className="border border-red-100 bg-red-50 p-6 rounded-xl">
                            <Search className="text-red-600 mb-4" size={32} />
                            <h3 className="font-bold text-lg mb-2">Working Conditions</h3>
                            <p className="text-sm text-gray-600">Changing duties substantially from the NOC code approved, or failing to provide safe working conditions.</p>
                        </div>
                        <div className="border border-red-100 bg-red-50 p-6 rounded-xl">
                            <CheckCircle className="text-red-600 mb-4" size={32} />
                            <h3 className="font-bold text-lg mb-2">Record Keeping</h3>
                            <p className="text-sm text-gray-600">Failure to keep all records associated with the LMIA for 6 years designated period.</p>
                        </div>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
