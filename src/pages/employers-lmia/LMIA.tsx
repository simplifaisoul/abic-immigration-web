import ServiceLayout from "../../components/ServiceLayout";
import ServiceContent from "../../components/ServiceContent";

export default function LMIA() {
    return (
        <ServiceLayout
            title="LMIA Application Process"
            subtitle="Securing authorization to hire international talent."
            heroImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-12">
                <ServiceContent
                    what="A Labour Market Impact Assessment (LMIA) is a document that an employer in Canada may need to get before hiring a foreign worker. A positive LMIA will show that there is a need for a foreign worker to fill the job and that no Canadian worker or permanent resident is available to do the job."
                    who={[
                        "Canadian employers struggling to find local talent",
                        "Employers supporting a TFW's work permit application",
                        "Employers supporting a TFW's permanent residence application (Dual Intent)"
                    ]}
                    risks={[
                        "Rejection due to insufficient recruitment efforts",
                        "Incomplete application forms or missing supporting processing fee payments",
                        "Failure to demonstrate business legitimacy",
                        "Housing inspection failures for low-wage streams"
                    ]}
                />

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Key LMIA Streams</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-2 text-abic-blue">High-Wage Stream</h3>
                            <p className="text-gray-600">For positions where the wage is at or above the provincial median. Employers must submit a transition plan to reduce reliance on TFWs.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-2 text-abic-blue">Low-Wage Stream</h3>
                            <p className="text-gray-600">For positions below the provincial median wage. Subject to caps on TFW proportion and strict housing/transportation requirements.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-2 text-abic-blue">Global Talent Stream</h3>
                            <p className="text-gray-600">Expedited processing (2 weeks/standard) for unique and specialized talent or high-growth companies.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-2 text-abic-blue">PR Support LMIA</h3>
                            <p className="text-gray-600">Fee-exempt LMIA used strictly to support a Permanent Residence application under Express Entry (Federal Skilled Worker / Trades).</p>
                        </div>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
