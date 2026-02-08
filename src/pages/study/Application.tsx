import ServiceLayout from "../../components/ServiceLayout";
import ServiceContent from "../../components/ServiceContent";

export default function StudyApplication() {
    return (
        <ServiceLayout
            title="Study Permit Application"
            subtitle="Your journey to world-class Canadian education starts here."
            heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                {/* Standardized Content */}
                <ServiceContent
                    what="A Study Permit is an official document issued by Immigration, Refugees and Citizenship Canada (IRCC) that authorizes foreign nationals to study at Designated Learning Institutions (DLIs) in Canada. It allows you to gain world-class education and potentially qualify for work permits and permanent residence."
                    who={[
                        "International students accepted into a DLI",
                        "Individuals wanting to upskill or change careers",
                        "Minors accompanying parents who are working or studying in Canada"
                    ]}
                    risks={[
                        "High refusal rates for 'unclear study plans' or 'career progression' logic",
                        "Insufficient proof of funds (tuition + $20,635/year + travel)",
                        "Misinterpreting 'dual intent' (wanting to study vs. stay permanently)",
                        "Applying to non-eligible PGWP programs"
                    ]}
                />

                {/* Process */}
                <section className="bg-gray-50 p-8 rounded-2xl">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Application Steps</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <span className="font-bold text-abic-blue">01.</span>
                            <p className="text-gray-700"><strong>Get Accepted:</strong> Secure your Letter of Acceptance (LOA) from a DLI.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="font-bold text-abic-blue">02.</span>
                            <p className="text-gray-700"><strong>Prepare Documents:</strong> Gather financial proof, medicals, and write your Statement of Purpose (SOP).</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="font-bold text-abic-blue">03.</span>
                            <p className="text-gray-700"><strong>Submit to IRCC:</strong> Apply online. Processing times vary significantly.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="font-bold text-abic-blue">04.</span>
                            <p className="text-gray-700"><strong>Biometrics:</strong> Give your fingerprints and photo at a local VAC.</p>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
