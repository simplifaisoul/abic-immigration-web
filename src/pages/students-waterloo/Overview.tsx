import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { BookOpen, MapPin, Users } from "lucide-react";
import StudentConsultationFees from "../../components/StudentConsultationFees";

export default function WaterlooOverview() {
    return (
        <ServiceLayout
            title="Students in Waterloo Region"
            subtitle="Specialized immigration support for UWaterloo, Wilfrid Laurier, and Conestoga College students."
            heroImage="https://images.unsplash.com/photo-1550600150-1df348f7004d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Waterloo?</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        The Waterloo Region is Canada's technology triangle and an education hub. We understand the specific needs of students in this region, from co-op work permits to PGWP applications tailored for tech graduates.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center p-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-abic-blue"><BookOpen /></div>
                            <h3 className="font-bold">World Class Education</h3>
                            <p className="text-sm text-gray-500">Home to top-tier institutions.</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-abic-blue"><Users /></div>
                            <h3 className="font-bold">Diverse Community</h3>
                            <p className="text-sm text-gray-500">Vibrant student life.</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-abic-blue"><MapPin /></div>
                            <h3 className="font-bold">Strategic Location</h3>
                            <p className="text-sm text-gray-500">Close to Toronto tech corridor.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-abic-blue text-white p-12 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4 font-montserrat">Need Campus-Specific Advice?</h2>
                        <p className="text-blue-100 mb-8 max-w-xl">
                            We offer tailored consultations for students dealing with academic probation, authorized leaves, or changing DLI.
                        </p>
                        <Link to="/book-consultation" className="bg-abic-gold text-abic-blue font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                            Book Student Consultation
                        </Link>
                    </div>
                </section>

                <StudentConsultationFees />
            </div>
        </ServiceLayout>
    );
}
