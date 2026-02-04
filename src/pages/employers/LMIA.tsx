import ServiceLayout from "../../components/ServiceLayout";
import { Building2, FileCheck, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function LMIA() {
    return (
        <ServiceLayout
            title="Labour Market Impact Assessment (LMIA)"
            subtitle="Helping Canadian employers hire global talent when no Canadians are available."
            heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an LMIA?</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        An LMIA is a document that an employer in Canada may need to get before hiring a foreign worker. A positive LMIA (often called a confirmation letter) shows that there is a need for a foreign worker to fill the job and that no Canadian worker is available to do the job.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <Building2 className="mx-auto text-abic-blue mb-3" size={32} />
                            <h3 className="font-bold">Employer Driven</h3>
                            <p className="text-xs text-gray-500">The employer applies to ESDC, not the worker.</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <FileCheck className="mx-auto text-abic-blue mb-3" size={32} />
                            <h3 className="font-bold">Advertisement</h3>
                            <p className="text-xs text-gray-500">Must prove effort to hire Canadians first (min. 4 weeks).</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <DollarSign className="mx-auto text-abic-blue mb-3" size={32} />
                            <h3 className="font-bold">Processing Fee</h3>
                            <p className="text-xs text-gray-500">$1,000 government fee per position (usually).</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services for Employers</h2>
                    <ul className="space-y-4">
                        <ListItem title="Assessment" desc="We evaluate if the position qualifies for High-Wage or Low-Wage stream." />
                        <ListItem title="Advertising Strategy" desc="We guide you on exactly where and how to post ads to meet ESDC's strict requirements." />
                        <ListItem title="Transition Plan" desc="Required for High-Wage LMIAs to show how you will reduce reliance on foreign workers." />
                        <ListItem title="Application Management" desc="We handle the portal submission and communicate with Service Canada." />
                    </ul>
                </section>

                <div className="bg-gray-900 text-white p-8 rounded-2xl flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-lg">Are you an employer?</h3>
                        <p className="text-gray-400 text-sm">Book a compliance consultation today.</p>
                    </div>
                    <Link to="/book-consultation" className="bg-white text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                        Book Consultation
                    </Link>
                </div>

            </div>
        </ServiceLayout>
    );
}

const ListItem = ({ title, desc }: any) => (
    <li className="flex gap-4 items-start p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-default">
        <div className="w-2 h-2 bg-abic-gold rounded-full mt-2.5 shrink-0" />
        <div>
            <h4 className="font-bold text-gray-900">{title}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    </li>
);
