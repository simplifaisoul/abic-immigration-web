import ServiceLayout from "../../components/ServiceLayout";
import { GraduationCap } from "lucide-react";

export default function PGWP() {
    return (
        <ServiceLayout
            title="Post-Graduation Work Permit (PGWP)"
            subtitle="The bridge from student to permanent resident."
            heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">One-Time Opportunity</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        The PGWP is a once-in-a-lifetime opportunity. It is an open work permit valid for up to 3 years, depending on the length of your study program. It is crucial for gaining the Canadian work experience needed for Express Entry (CEC).
                    </p>

                    <div className="flex gap-4 items-center bg-red-50 p-4 rounded-xl text-red-900 font-bold border border-red-100">
                        <GraduationCap size={24} />
                        <span>Deadline: You must apply within 180 days of receiving your final marks.</span>
                    </div>
                </section>

                <section>
                    <h3 className="font-bold text-xl mb-4 text-gray-900">Eligibility Checklist</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {[
                            "Completed an academic program of at least 8 months",
                            "Studied full-time during every semester (except final)",
                            "Received transcript and completion letter",
                            "Valid study permit at time of application (for working immediately)"
                        ].map(item => (
                            <li key={item} className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
                                <div className="w-2 h-2 bg-abic-blue rounded-full mt-2 shrink-0" />
                                <span className="text-sm text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        </ServiceLayout>
    );
}
