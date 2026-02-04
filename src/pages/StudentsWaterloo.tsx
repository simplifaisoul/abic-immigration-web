import ServiceLayout from "../components/ServiceLayout";
import { MapPin, School, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentsWaterloo() {
    return (
        <ServiceLayout
            title="Students at Waterloo Region"
            subtitle="Specialized immigration support for students at UWaterloo, Wilfrid Laurier, and Conestoga College."
            heroImage="https://images.unsplash.com/photo-1550050218-c2a44ae954da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                {/* 1. REGIONAL OVERVIEW */}
                <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-abic-blue/10 rounded-lg text-abic-blue shrink-0"><MapPin size={24} /></div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Local Expertise</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                The Waterloo Region is a hub for innovation and education. As local experts, we understand the specific needs of students attending the region's top institutions. We help you transition from student to permanent resident.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <SchoolBadge name="University of Waterloo" />
                                <SchoolBadge name="Wilfrid Laurier University" />
                                <SchoolBadge name="Conestoga College" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. STUDY PERMIT & EXTENSIONS */}
                <section>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Clock className="text-abic-gold" size={20} /> Permit Extensions
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-abic-blue transition-colors">
                            <h4 className="font-bold text-gray-800 mb-2">Study Permit Extension</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                If you need more time to complete your program at UWaterloo or Laurier, apply for an extension at least 30 days before expiry.
                            </p>
                            <Link to="/study-in-canada" className="text-abic-blue text-sm font-bold hover:underline">View Requirements &rarr;</Link>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-abic-blue transition-colors">
                            <h4 className="font-bold text-gray-800 mb-2">Co-op Work Permit</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Essential for Waterloo's co-op programs. We ensure your work permit aligns with your study terms to avoid interruptions.
                            </p>
                            <Link to="/work-permit" className="text-abic-blue text-sm font-bold hover:underline">Co-op Details &rarr;</Link>
                        </div>
                    </div>
                </section>

                {/* 3. PGWP & CAREER */}
                <section>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Briefcase className="text-abic-gold" size={20} /> Post-Graduation Work Permit (PGWP)
                    </h3>
                    <div className="bg-abic-blue text-white p-8 rounded-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-blue-100 mb-6 leading-relaxed">
                                Graduating from a Waterloo institution opens doors to a 3-year Open Work Permit. However, recent rules regarding program eligibility and field of study have changed.
                            </p>
                            <ul className="space-y-2 mb-8 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full" /> Verify program eligibility for PGWP</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full" /> Apply within 180 days of receiving final grades</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full" /> Maintain full-time status during studies</li>
                            </ul>
                            <Link to="/book-consultation" className="inline-block bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold px-6 py-3 rounded-lg transition-colors">
                                Verify My PGWP Eligibility
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    </div>
                </section>

                <div className="bg-gray-50 p-6 rounded-xl text-center">
                    <p className="text-gray-600 mb-4">We are just a short drive away in Mississauga, ready to serve Waterloo students.</p>
                    <Link to="/book-consultation" className="text-abic-blue font-bold hover:underline">Book an In-Person or Virtual Consultation &rarr;</Link>
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
