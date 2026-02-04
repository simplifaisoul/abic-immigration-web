import ServiceLayout from "../../components/ServiceLayout";
import { MapPin } from "lucide-react";

export default function GuelphLocalSupport() {
    return (
        <ServiceLayout
            title="Local Support (Guelph)"
            subtitle="We support the Guelph community with accessible, expert immigration advice."
            heroImage="https://images.unsplash.com/photo-1577907572621-08fc7d93414a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">
                <section className="text-center">
                    <MapPin className="mx-auto text-abic-red mb-4" size={48} />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving the Royal City</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        While our office is in Mississauga, we have a strong client base in Guelph and offer virtual consultations specially timed for students' schedules.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
}
