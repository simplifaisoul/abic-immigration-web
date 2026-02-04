import ServiceLayout from "../components/ServiceLayout";
import { HelpCircle, Book, FileWarning, Briefcase } from "lucide-react";

export default function Resources() {
    return (
        <ServiceLayout
            title="Knowledge Hub"
            subtitle="Expert guides, FAQs, and resources to help you understand Canadian immigration."
            heroImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        >
            <div className="space-y-12">

                {/* FAQs */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <HelpCircle className="text-abic-blue" size={28} />
                        <h2 className="text-2xl font-bold text-gray-900">Immigration FAQs</h2>
                    </div>
                    <div className="grid gap-4">
                        <details className="bg-gray-50 p-4 rounded-lg cursor-pointer group">
                            <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
                                How much funds do I need for Express Entry?
                                <span className="group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 pl-4 border-l-2 border-abic-gold">
                                For a single applicant (FSW), you generally need around $14,690 CAD (updated annually). CEC applicants who are currently working in Canada do not need to show proof of funds.
                            </p>
                        </details>
                        <details className="bg-gray-50 p-4 rounded-lg cursor-pointer group">
                            <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
                                Can I sponsor my brother or sister?
                                <span className="group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 pl-4 border-l-2 border-abic-gold">
                                Generally, no. Sibling sponsorship is only possible in very specific "Lonely Canadian" situations (e.g., they are orphaned, under 18, and related by blood).
                            </p>
                        </details>
                    </div>
                </section>

                {/* Guides */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Book className="text-abic-gold" size={28} />
                        <h2 className="text-2xl font-bold text-gray-900">Guides</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-2">Express Entry Explained</h3>
                            <p className="text-sm text-gray-500 mb-4">A deep dive into the CRS point system and how to improve your score.</p>
                            <a href="#" className="text-abic-blue font-bold text-sm hover:underline">Read Guide &rarr;</a>
                        </div>
                        <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-2">Student Immigration Guide</h3>
                            <p className="text-sm text-gray-500 mb-4">From Study Permit to PGWP to PR. The complete roadmap for international students.</p>
                            <a href="#" className="text-abic-blue font-bold text-sm hover:underline">Read Guide &rarr;</a>
                        </div>
                    </div>
                </section>

                {/* Employers */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Briefcase className="text-abic-blue" size={28} />
                        <h2 className="text-2xl font-bold text-gray-900">Employer Hiring Guides</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Resources for Canadian employers looking to hire foreign talent. Understanding LMIA requirements and exemption codes.
                    </p>
                </section>

                {/* Mistakes */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <FileWarning className="text-abic-red" size={28} />
                        <h2 className="text-2xl font-bold text-gray-900">Common Immigration Mistakes</h2>
                    </div>
                    <ul className="space-y-3 bg-red-50 p-6 rounded-xl text-gray-700">
                        <li>• Failing to declare all family members (even if they aren't coming with you).</li>
                        <li>• Miscalculating work experience hours (needs to be full-time equivalent).</li>
                        <li>• Using expired forms or outdated checklists.</li>
                    </ul>
                </section>

            </div>
        </ServiceLayout>
    );
}
