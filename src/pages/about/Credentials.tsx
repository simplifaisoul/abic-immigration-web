import ServiceLayout from "../../components/ServiceLayout";
import { Check, Award, BookOpen } from "lucide-react";

export default function Credentials() {
    return (
        <ServiceLayout
            title="Credentials & Education"
            subtitle="Verified qualifications for your peace of mind."
            heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-12">

                <section>
                    <h2 className="text-2xl font-bold font-montserrat text-gray-900 mb-6 flex items-center gap-3">
                        <Award className="text-abic-blue" />
                        Professional Licenses
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <Check className="text-green-500 mt-1 shrink-0" size={20} />
                            <div>
                                <strong className="block text-gray-900">RCIC - Regulated Canadian Immigration Consultant</strong>
                                <span className="text-sm text-gray-500">College of Immigration and Citizenship Consultants (CICC)</span>
                                <div className="mt-1 text-xs font-bold text-abic-blue bg-blue-50 inline-block px-2 py-0.5 rounded">License #R514217</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <Check className="text-green-500 mt-1 shrink-0" size={20} />
                            <div>
                                <strong className="block text-gray-900">Member in Good Standing</strong>
                                <span className="text-sm text-gray-500">Canadian Association of Professional Immigration Consultants (CAPIC)</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <Check className="text-green-500 mt-1 shrink-0" size={20} />
                            <div>
                                <strong className="block text-gray-900">Commissioner of Oaths</strong>
                                <span className="text-sm text-gray-500">Appointed for taking affidavits in Ontario</span>
                            </div>
                        </li>
                    </ul>
                </section>

                <hr className="border-gray-100" />

                <section>
                    <h2 className="text-2xl font-bold font-montserrat text-gray-900 mb-6 flex items-center gap-3">
                        <BookOpen className="text-abic-gold" />
                        Education
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-gray-900">Immigration Consultant Diploma</h3>
                            <p className="text-gray-600 text-sm mb-2">Ashton College, Vancouver, BC</p>
                            <p className="text-xs text-gray-500 italic">Comprehensive training in Canadian immigration law, policies, and procedures.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-gray-900">B.Sc. (Hons) Applied Accounting</h3>
                            <p className="text-gray-600 text-sm mb-2">Oxford Brookes University, UK</p>
                            <p className="text-xs text-gray-500 italic">Strong foundation in financial analysis and business ethics.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-gray-900">B.Sc. (Hons) Banking & Finance</h3>
                            <p className="text-gray-600 text-sm mb-2">University of London, UK</p>
                            <p className="text-xs text-gray-500 italic">Expertise in financial regulations and compliance.</p>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
