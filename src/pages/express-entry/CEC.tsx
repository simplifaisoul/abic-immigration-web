import ServiceLayout from "../../components/ServiceLayout";
import { Briefcase, Clock } from "lucide-react";

export default function CEC() {
    return (
        <ServiceLayout
            title="Canadian Experience Class (CEC)"
            subtitle="The path to PR for temporary workers and graduates already in Canada."
            heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">You're Already Here. Stay Here.</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            CEC is designed for candidates who have at least **1 year of Canadian skilled work experience** within the last 3 years. It is one of the fastest and most popular pathways to Permanent Residence, especially for former international students (PGWP holders).
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-abic-blue bg-blue-50 px-3 py-1.5 rounded-full">
                                <Clock size={16} /> Fast Processing
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                                <Briefcase size={16} /> No Proof of Funds*
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">*Unless applying under FSW as well.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="font-bold text-lg mb-4">Key Requirements</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-gray-600">
                                <span className="font-bold text-abic-blue">1.</span>
                                1 year skilled work in Canada (NOC 0, 1, 2, 3).
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600">
                                <span className="font-bold text-abic-blue">2.</span>
                                Valid temporary status during work period.
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600">
                                <span className="font-bold text-abic-blue">3.</span>
                                Language Results (CLB 7 for NOC 0,1; CLB 5 for NOC 2,3).
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600">
                                <span className="font-bold text-abic-blue">4.</span>
                                Plan to live outside Quebec.
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
