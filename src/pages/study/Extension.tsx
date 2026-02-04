import ServiceLayout from "../../components/ServiceLayout";
import { Clock } from "lucide-react";

export default function StudyExtension() {
    return (
        <ServiceLayout
            title="Study Permit Extension"
            subtitle="Need more time to finish your program? Extend your status before it expires."
            heroImage="https://images.unsplash.com/photo-1544531835-3a990082585e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
                    <Clock className="text-blue-600 mt-1" />
                    <div>
                        <h3 className="font-bold text-blue-900">When to Apply</h3>
                        <p className="text-blue-800 text-sm">Ideally 90 days before your current permit expires. If you apply before expiry, you have "Maintained Status" and can keep studying.</p>
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Do I Need an Extension?</h2>
                    <ul className="list-disc leading-relaxed pl-5 text-gray-600 space-y-2">
                        <li>Your program is taking longer than expected.</li>
                        <li>You have switched programs or institutions.</li>
                        <li>You want to transition to a new level of study (e.g., Bachelors to Masters).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
                    <div className="bg-white border-l-4 border-abic-gold shadow-sm p-6 rounded-r-xl">
                        <ul className="space-y-3">
                            <li className="font-medium text-gray-800 flex justify-between">
                                <span>1. Letter of Enrollment</span>
                                <span className="text-sm text-gray-500">From Registrar</span>
                            </li>
                            <li className="font-medium text-gray-800 flex justify-between">
                                <span>2. Transcripts</span>
                                <span className="text-sm text-gray-500">Past 2 semesters</span>
                            </li>
                            <li className="font-medium text-gray-800 flex justify-between">
                                <span>3. Proof of Funds</span>
                                <span className="text-sm text-gray-500">Bank statements</span>
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
