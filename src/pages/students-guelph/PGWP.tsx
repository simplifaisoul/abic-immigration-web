import ServiceLayout from "../../components/ServiceLayout";
import { Briefcase } from "lucide-react";

export default function GuelphPGWP() {
    return (
        <ServiceLayout
            title="PGWP for Guelph Grads"
            subtitle="Start your career in Canada after graduating from U of G."
            heroImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                        <Briefcase className="text-abic-red" size={32} />
                        <h2 className="text-2xl font-bold text-gray-900">Career Launchpad</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Guelph graduates are highly sought after in agriculture, veterinary sciences, and business. A Post-Graduation Work Permit (PGWP) allows you to gain the Canadian experience needed for Permanent Residence.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
}
