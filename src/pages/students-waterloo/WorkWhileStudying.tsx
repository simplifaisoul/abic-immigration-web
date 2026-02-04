import ServiceLayout from "../../components/ServiceLayout";
import { Briefcase, CheckCircle2, XCircle } from "lucide-react";

export default function WaterlooWorkWhileStudying() {
    return (
        <ServiceLayout
            title="Work While Studying"
            subtitle="Understanding off-campus work authorizations for Waterloo students."
            heroImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-8">

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Can I Work Off-Campus?</h2>
                    <p className="text-gray-600 mb-6">
                        Most international students at UWaterloo, Laurier, and Conestoga are eligible to work off-campus without a separate work permit, provided they meet specific conditions.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h3 className="font-bold text-green-900 flex items-center gap-2 mb-3"><CheckCircle2 size={20} /> Allowed</h3>
                            <ul className="space-y-2 text-sm text-green-800">
                                <li>• Up to 20 hours/week during academic sessions (check current temporary policies).</li>
                                <li>• Full-time during scheduled breaks (Winter/Summer holidays).</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="font-bold text-red-900 flex items-center gap-2 mb-3"><XCircle size={20} /> Forbidden</h3>
                            <ul className="space-y-2 text-sm text-red-800">
                                <li>• Working before your program starts.</li>
                                <li>• Working if you are a part-time student (except in final term).</li>
                                <li>• Working during 'authorized leave' without specific approval.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Co-op Work Permits</h2>
                    <p className="text-gray-600">
                        If work is a mandatory part of your program (e.g., UWaterloo Co-op), you must apply for a separate Co-op Work Permit. This is fee-exempt.
                    </p>
                </section>

            </div>
        </ServiceLayout>
    );
}
