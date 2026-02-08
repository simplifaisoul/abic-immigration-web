import ServiceLayout from "../../components/ServiceLayout";
import ServiceContent from "../../components/ServiceContent";

export default function WorkPermitOverview() {
    return (
        <ServiceLayout
            title="Work Permit Support"
            subtitle="Understand your options for working legally in Canada."
            heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <ServiceContent
                    what="A Work Permit authorizes foreign nationals to work in Canada for a specific time period. Work permits are generally divided into two categories: Open Work Permits (allowing work for most employers) and Employer-Specific Work Permits (tied to one employer)."
                    who={[
                        "Foreign workers with a valid job offer (LMIA)",
                        "Graduates eligible for a PGWP",
                        "Spouses of skilled workers or international students",
                        "Business professionals under international agreements (CUSMA/GATS)"
                    ]}
                    risks={[
                        "Working without authorization (or exceeding authorized hours)",
                        "Misunderstanding 'Implied Status' during extensions",
                        "Employer non-compliance affecting your permit validity",
                        "Inaccuracies in job descriptions vs. actual duties (NOC mismatch)"
                    ]}
                />

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Open vs. Closed Work Permits</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-blue-900 text-lg mb-2">Open Work Permit</h3>
                            <p className="text-sm text-blue-800 mb-4">
                                Allows you to work for *almost* any employer in Canada.
                            </p>
                            <ul className="text-sm text-blue-800 space-y-2">
                                <li>• Post-Graduation Work Permit (PGWP)</li>
                                <li>• Spousal Open Work Permit (SOWP)</li>
                                <li>• Bridging Open Work Permit (BOWP)</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h3 className="font-bold text-purple-900 text-lg mb-2">Employer-Specific (Closed)</h3>
                            <p className="text-sm text-purple-800 mb-4">
                                Tied to a specific employer, location, and role.
                            </p>
                            <ul className="text-sm text-purple-800 space-y-2">
                                <li>• LMIA-based Work Permits</li>
                                <li>• Intra-Company Transferees</li>
                                <li>• CUSMA / NAFTA Professionals</li>
                            </ul>
                        </div>
                    </div>
                </section>



            </div>
        </ServiceLayout>
    );
}
