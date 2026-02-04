import ServiceLayout from "../../components/ServiceLayout";
import { Briefcase, AlertTriangle } from "lucide-react";

export default function WaterlooPGWP() {
    return (
        <ServiceLayout
            title="PGWP for Waterloo Graduates"
            subtitle="Transition from student to worker with the Post-Graduation Work Permit."
            heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                        <Briefcase className="text-abic-blue" size={32} />
                        <h2 className="text-2xl font-bold text-gray-900">Work After Graduation</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Graduates from UWaterloo, Laurier, and Conestoga may be eligible for a PGWP valid for up to 3 years. This is an open work permit, allowing you to work for any employer in Canada.
                    </p>
                    <h3 className="font-bold text-lg mb-3">Eligibility Key Points:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Maintain full-time student status during every semester (except final).</li>
                        <li>Complete a program of at least 8 months.</li>
                        <li>Apply within 180 days of receiving final marks.</li>
                    </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                    <AlertTriangle className="text-red-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-red-900">Common Pitfall: Part-Time Status</h3>
                        <p className="text-red-800 text-sm mt-1">
                            If you took a semester part-time (other than your last one) without an authorized leave, your PGWP could be refused. We can help explain gaps professionally.
                        </p>
                    </div>
                </div>

            </div>
        </ServiceLayout>
    );
}
