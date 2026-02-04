import ServiceLayout from "../../components/ServiceLayout";
import { CheckCircle2 } from "lucide-react";

export default function GuelphWorkWhileStudying() {
    return (
        <ServiceLayout
            title="Work While Studying (Guelph)"
            subtitle="Know your rights: Working off-campus in Guelph."
            heroImage="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Working Off-Campus</h2>
                    <p className="text-gray-600 mb-4">
                        Full-time U of G students can typically work off-campus. ensure you have a valid study permit and your SIN.
                    </p>
                    <div className="flex items-center gap-2 text-green-700 font-bold bg-green-50 p-4 rounded-lg inline-block">
                        <CheckCircle2 />
                        <span>Eligible for 20hrs/week (or more under temporary policies)</span>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
