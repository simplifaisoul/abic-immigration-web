import ServiceLayout from "../../components/ServiceLayout";
import { Clock, AlertCircle } from "lucide-react";

export default function WaterlooExtension() {
    return (
        <ServiceLayout
            title="Study Extension (Waterloo)"
            subtitle="Extend your stay to complete your degree or transition to a new program."
            heroImage="https://images.unsplash.com/photo-1544531835-3a990082585e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl flex gap-4">
                    <AlertCircle className="text-orange-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-orange-900">For Conestoga / UW / Laurier Students</h3>
                        <p className="text-orange-800 text-sm mt-1">
                            You must have a letter from your registrar confirming your remaining credits and expected graduation date.
                        </p>
                    </div>
                </div>

                <section className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Apply?</h2>
                        <div className="flex items-start gap-4 p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                            <Clock className="text-abic-blue" size={24} />
                            <p className="text-gray-600 text-sm">
                                We recommend applying <strong>3-4 months</strong> before your current permit expires. Processing times can vary.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Restoration?</h2>
                        <p className="text-gray-600 mb-4">
                            If your permit has already expired (less than 90 days ago), you must stop studying immediately and apply for restoration.
                        </p>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
