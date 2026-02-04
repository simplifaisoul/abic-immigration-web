import ServiceLayout from "../../components/ServiceLayout";
import { GraduationCap, DollarSign, FileCheck } from "lucide-react";

export default function StudyApplication() {
    return (
        <ServiceLayout
            title="Study Permit Application"
            subtitle="Your journey to world-class Canadian education starts here."
            heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                {/* Intro */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Studying in Canada</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        A Study Permit authorizes foreign nationals to study at Designated Learning Institutions (DLIs) in Canada. It is more than just a visa; it is a pathway to future work opportunities and potentially Permanent Residence.
                    </p>
                </section>

                {/* Key Requirements */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <GraduationCap className="text-abic-blue mb-4" size={32} />
                        <h3 className="font-bold text-gray-900 mb-2">Acceptance Letter</h3>
                        <p className="text-sm text-gray-500">Must be from a Designated Learning Institution (DLI).</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <DollarSign className="text-abic-blue mb-4" size={32} />
                        <h3 className="font-bold text-gray-900 mb-2">Proof of Funds</h3>
                        <p className="text-sm text-gray-500">Tuition + $20,635 (for single applicant) per year.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <FileCheck className="text-abic-blue mb-4" size={32} />
                        <h3 className="font-bold text-gray-900 mb-2">Study Plan</h3>
                        <p className="text-sm text-gray-500">Clear logic on why this specific course helps your career home.</p>
                    </div>
                </section>

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
