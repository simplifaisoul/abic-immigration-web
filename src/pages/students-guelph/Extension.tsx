import ServiceLayout from "../../components/ServiceLayout";
import { AlertCircle } from "lucide-react";

export default function GuelphExtension() {
    return (
        <ServiceLayout
            title="Study Extension (Guelph)"
            subtitle="Extend your stay at U of G without interrupting your studies."
            heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex gap-4">
                    <AlertCircle className="text-yellow-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-yellow-900">Registrar Letter Required</h3>
                        <p className="text-yellow-800 text-sm">
                            Ensure you request your "Proof of Enrollment for Immigration Purposes" from the U of G registrar well in advance.
                        </p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
}
