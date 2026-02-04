import ServiceLayout from "../components/ServiceLayout";
import { Briefcase, FileText, CheckSquare, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmployersLMIA() {
    return (
        <ServiceLayout
            title="Employers (LMIA)"
            subtitle="Guidance for Canadian employers hiring foreign talent. Labour Market Impact Assessments made simple."
            heroImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. LMIA PROCESS */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-abic-blue/10 rounded-lg text-abic-blue"><Briefcase size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">What is an LMIA?</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        A Labour Market Impact Assessment (LMIA) is a document that an employer in Canada may need to get before hiring a foreign worker. A positive LMIA will show that there is a need for a foreign worker to fill the job and that no Canadian worker is available to do the job.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <StepCard
                            number="01"
                            title="Recruitment"
                            desc="Advertise the position for at least 4 weeks on Job Bank and strict adherence to additional methods."
                        />
                        <StepCard
                            number="02"
                            title="Application"
                            desc="Submit detailed application to ESDC proving the business legitimacy and need."
                        />
                        <StepCard
                            number="03"
                            title="Decision"
                            desc="Receive a Positive LMIA letter, which the worker uses to apply for a work permit."
                        />
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 2. RECRUITMENT & COMPLIANCE */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-abic-gold/10 rounded text-yellow-600"><Search size={24} /></div>
                            <h3 className="text-2xl font-bold text-gray-900">Recruitment Requirements</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0">1</div>
                                <p className="text-sm text-gray-600">Must advertise on Government of Canada Job Bank.</p>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0">2</div>
                                <p className="text-sm text-gray-600">Must use two other additional methods targeting underrepresented groups (youth, indigenous, etc.).</p>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0">3</div>
                                <p className="text-sm text-gray-600">Ads must run for continuously 4 weeks prior to applying.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-100 rounded text-green-700"><CheckSquare size={24} /></div>
                            <h3 className="text-2xl font-bold text-gray-900">Employer Compliance</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">
                            Employers who hire TFWs are subject to compliance reviews. You must maintain all records for 6 years.
                        </p>
                        <div className="bg-white p-4 rounded-lg text-sm text-gray-800 font-medium shadow-sm">
                            <span className="text-red-500 font-bold">Warning:</span> Failure to comply can result in fines and bans from hiring foreign workers.
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Need to hire?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        The LMIA process is rigorous and unforgiving of small errors. Let us handle the strategy and paperwork while you focus on your business.
                    </p>
                    <Link to="/book-consultation" className="inline-block bg-abic-blue hover:bg-black text-white font-bold px-8 py-3 rounded-lg transition-colors">
                        Employer Consultation
                    </Link>
                </div>

            </div>
        </ServiceLayout>
    );
}

const StepCard = ({ number, title, desc }: any) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
        <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-4 transition-colors group-hover:text-blue-50">{number}</div>
        <div className="relative z-10">
            <h4 className="font-bold text-lg text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </div>
    </div>
);
