import ServiceLayout from "../components/ServiceLayout";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, Globe, Briefcase, BookOpen } from "lucide-react";

export default function StudentsLanding() {
    return (
        <ServiceLayout
            title="International Student Services"
            subtitle="Expert guidance for study permits, PGWPs, and permanent residence pathways."
            heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="max-w-6xl mx-auto space-y-16">

                {/* International Students Section - Main Focus */}
                <section className="bg-gradient-to-br from-blue-50 to-white p-10 md:p-12 rounded-3xl border border-blue-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-abic-blue text-white rounded-full flex items-center justify-center">
                            <Globe size={32} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Study in Canada</h2>
                            <p className="text-gray-600">Comprehensive support for every stage of your education journey</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Study Permit Services</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Initial study permit applications</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Study permit extensions</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Program changes & transfers</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Refusal appeals & reapplications</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Work Authorization</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Co-op & internship work permits</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Off-campus work permits</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Post-Graduation Work Permit (PGWP)</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> PGWP to PR pathways</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Family Support</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Spouse open work permits</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Dependent children permits</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Visitor visas for family</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Family reunification planning</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Permanent Residence</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Canadian Experience Class (CEC)</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Provincial Nominee Programs (PNP)</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Express Entry optimization</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Strategic PR planning</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Specialized Support - Waterloo, Guelph, PGWP */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Student Support</h2>
                        <p className="text-gray-600 text-lg">
                            Targeted expertise for key regions and critical transition points
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Waterloo */}
                        <Link to="/students/waterloo" className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center mb-6 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Waterloo Students</h3>
                            <p className="text-gray-500 mb-6 text-sm">UWaterloo, Wilfrid Laurier, Conestoga</p>
                            <div className="mt-auto flex items-center gap-2 text-abic-blue font-bold text-sm">
                                View Services <ArrowRight size={16} />
                            </div>
                        </Link>

                        {/* Guelph */}
                        <Link to="/students/guelph" className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-abic-red rounded-full flex items-center justify-center mb-6 group-hover:bg-abic-red group-hover:text-white transition-colors">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Guelph Students</h3>
                            <p className="text-gray-500 mb-6 text-sm">University of Guelph</p>
                            <div className="mt-auto flex items-center gap-2 text-abic-red font-bold text-sm">
                                View Services <ArrowRight size={16} />
                            </div>
                        </Link>

                        {/* PGWP */}
                        <Link to="/work-permit/pgwp" className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">PGWP</h3>
                            <p className="text-gray-500 mb-6 text-sm">Post-Graduation Work Permit Strategy</p>
                            <div className="mt-auto flex items-center gap-2 text-green-600 font-bold text-sm">
                                View Services <ArrowRight size={16} />
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Consultation Pricing Info */}
                <section className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Student Consultation Pricing</h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="text-3xl font-bold text-abic-blue mb-2">$45</div>
                            <div className="text-sm text-gray-500 mb-3">30 minutes</div>
                            <p className="text-sm text-gray-600">Simple questions, quick guidance, status updates</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center border-2 border-abic-gold">
                            <div className="text-3xl font-bold text-abic-gold mb-2">$75</div>
                            <div className="text-sm text-gray-500 mb-3">45 minutes</div>
                            <p className="text-sm text-gray-600">Detailed case review, document assessment</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="text-3xl font-bold text-abic-red mb-2">$90</div>
                            <div className="text-sm text-gray-500 mb-3">90 minutes</div>
                            <p className="text-sm text-gray-600">Refusals, complex cases, strategic planning</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/contact" className="inline-block bg-abic-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-800 transition-colors">
                            Book a Consultation
                        </Link>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
