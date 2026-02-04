import ServiceLayout from "../components/ServiceLayout";
import { MapPin, School, BookOpen, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentsGuelph() {
    return (
        <ServiceLayout
            title="Students at Guelph Region"
            subtitle="Dedicated immigration services for University of Guelph students and graduates."
            heroImage="https://images.unsplash.com/photo-1590740030090-0f0c05757d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                {/* 1. REGIONAL OVERVIEW */}
                <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-red-50 rounded-lg text-abic-red shrink-0"><MapPin size={24} /></div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Supporting Gryphons</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We specialize in helping University of Guelph students navigate their immigration journey. Whether you are studying Veterinary Medicine, Agriculture, or Arts, we have the expertise to guide you.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <SchoolBadge name="University of Guelph" />
                                <SchoolBadge name="Conestoga College (Guelph Campus)" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SPECIFIC NEEDS */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Clock className="text-abic-red" size={18} /> Extensions & Restoration
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Forgot to renew your permit? We can help you apply for restoration of status within the 90-day window, ensuring you can continue your studies in Guelph.
                        </p>
                        <Link to="/study-in-canada" className="text-abic-blue text-sm font-bold hover:underline">Extensions Guide &rarr;</Link>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Briefcase className="text-abic-red" size={18} /> Working in Guelph
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Understand the rules for working off-campus in Guelph while studying. Don't jeopardize your future PGWP eligibility by working more hours than allowed.
                        </p>
                        <Link to="/work-permit" className="text-abic-blue text-sm font-bold hover:underline">Work Rules &rarr;</Link>
                    </div>
                </section>

                {/* 3. CTA */}
                <div className="bg-abic-blue text-center p-12 rounded-2xl relative overflow-hidden text-white">
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl font-bold font-montserrat">Graduating Soon?</h2>
                        <p className="max-w-xl mx-auto text-blue-100">
                            Book a consultation to plan your transition from Study Permit to Post-Graduation Work Permit (PGWP) and eventually Eternal Residence.
                        </p>
                        <Link to="/book-consultation" className="inline-block bg-white text-abic-blue font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                            Book Student Consultation
                        </Link>
                    </div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-abic-gold rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                </div>

            </div>
        </ServiceLayout>
    );
}

const SchoolBadge = ({ name }: { name: string }) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700">
        <School size={12} className="text-gray-400" /> {name}
    </span>
);
