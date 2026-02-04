import ServiceLayout from "../../components/ServiceLayout";
import { MapPin, Phone } from "lucide-react";

export default function WaterlooLocalSupport() {
    return (
        <ServiceLayout
            title="Local Support & Consultation"
            subtitle="We are based in Mississauga but serve the entire Waterloo/Guelph corridor virtually and in-person."
            heroImage="https://images.unsplash.com/photo-1577907572621-08fc7d93414a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">We Understand Student Challenges</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Being an international student can be isolating. We provide more than just paperwork; we provide guidance on maintaining status, academic probation issues, and transitioning to PR.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-lg">
                                <MapPin className="text-abic-gold" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Virtual & In-Person</h4>
                                    <p className="text-sm text-gray-500">Zoom consultations available daily.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-lg">
                                <Phone className="text-abic-gold" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Direct Access</h4>
                                    <p className="text-sm text-gray-500">Questions answered within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden">
                        {/* Placeholder for a map or office image */}
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Office Environment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </ServiceLayout>
    );
}
