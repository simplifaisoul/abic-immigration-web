import ServiceLayout from "../components/ServiceLayout";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function StudentsLanding() {
    return (
        <ServiceLayout
            title="Student Services"
            subtitle="Specialized support for International Students in Waterloo & Guelph."
            heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="max-w-4xl mx-auto text-center space-y-12">

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">Select Your Campus Region</h2>
                    <p className="text-gray-600 mb-12 text-lg">
                        We provide tailored immigration advice based on your location and institution. Choose your region below to see specific services, pricing, and support.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Waterloo */}
                        <Link to="/students/waterloo" className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Waterloo Region</h3>
                            <p className="text-gray-500 mb-6">UWaterloo, Wilfrid Laurier, Conestoga</p>
                            <div className="flex items-center justify-center gap-2 text-abic-blue font-bold">
                                View Services <ArrowRight size={18} />
                            </div>
                        </Link>

                        {/* Guelph */}
                        <Link to="/students/guelph" className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-red-50 text-abic-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-abic-red group-hover:text-white transition-colors">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Guelph</h3>
                            <p className="text-gray-500 mb-6">University of Guelph</p>
                            <div className="flex items-center justify-center gap-2 text-abic-red font-bold">
                                View Services <ArrowRight size={18} />
                            </div>
                        </Link>
                    </div>
                </section>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">
                        Not a student in these regions? We help students across Canada. <Link to="/contact" className="text-abic-blue underline">Contact us</Link> for general student inquiries.
                    </p>
                </div>

            </div>
        </ServiceLayout>
    );
}
