import ServiceLayout from "../../components/ServiceLayout";
import ServiceContent from "../../components/ServiceContent";

export default function Recruitment() {
    return (
        <ServiceLayout
            title="Recruitment Requirements"
            subtitle="Demonstrating genuine effort to hire Canadians first."
            heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-12">
                <ServiceContent
                    what="Before applying for an LMIA, employers must demonstrate that they have made rigorous efforts to recruit Canadian citizens or permanent residents for the position. This usually involves advertising the job across multiple platforms for a minimum period."
                    who={[
                        "Employers applying for High-Wage or Low-Wage LMIAs",
                        "Companies that do not qualify for LMIA advertising exemptions"
                    ]}
                    risks={[
                        "Posting the ad for less than the required 4 consecutive weeks",
                        "Using platforms that do not target the specific underrepresented groups required (e.g., Indigenous persons, youth, newcomers)",
                        "Ads missing mandatory information (e.g., business address, wage range, benefits)"
                    ]}
                />

                <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Standard Advertising Rule</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Employers must advertise on the <strong>Government of Canada’s Job Bank</strong> plus two other methods of recruitment consistent with the occupation. The ads must run for at least <strong>4 consecutive weeks</strong> within the 3 months prior to submitting the LMIA.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><strong>Method 1:</strong> Job Bank (Mandatory)</li>
                        <li><strong>Method 2:</strong> General recruitment website (e.g., Indeed, LinkedIn, Monster)</li>
                        <li><strong>Method 3:</strong> Method targeting underrepresented groups (As applicable)</li>
                    </ul>
                </section>
            </div>
        </ServiceLayout>
    );
}
