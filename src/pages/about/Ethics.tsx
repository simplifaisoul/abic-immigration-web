import ServiceLayout from "../../components/ServiceLayout";
import { Scale, Lock, Book, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Ethics() {
    return (
        <ServiceLayout
            title="Ethics & Standards"
            subtitle="Adhering to the highest standards of professional conduct in Canadian immigration."
            heroImage="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Code of Ethics Intro */}
                <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm md:p-12">
                    <div className="flex items-start gap-6">
                        <div className="p-4 bg-abic-blue/10 text-abic-blue rounded-2xl hidden md:block">
                            <Scale size={48} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">Code of Professional Ethics</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                As Members of the College of Immigration and Citizenship Consultants (CICC), we are bound by a strict Code of Professional Ethics.
                                This code is capable of being enforced by law and exists to protect the public.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We prioritize competence, honesty, and loyalty to our clients. We will never guarantee a result, as the final decision rests with the immigration officer, but we guarantee our best professional effort and advocacy on your behalf.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Principles */}
                <section className="grid md:grid-cols-3 gap-8">
                    <PrincipleCard
                        icon={<Lock size={32} />}
                        title="Confidentiality"
                        desc="Your personal information is sacred. We maintain strict solicitor-client privilege protocols to ensure your data is secure."
                    />
                    <PrincipleCard
                        icon={<Book size={32} />}
                        title="Competence"
                        desc="We are required to complete ongoing professional development (CPD) annually to stay updated on the latest immigration laws and policies."
                    />
                    <PrincipleCard
                        icon={<FileCheck size={32} />}
                        title="Honesty"
                        desc="We will provide a candid assessment of your chances. If you do not qualify, we will tell you. We do not take cases we believe have no merit."
                    />
                </section>

                <hr className="border-gray-100" />

                {/* Retainer Agreement */}
                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Retainer Agreement</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Before we begin any work on your file, we will sign a Retainer Agreement. This is a legally binding contract that clearly outlines:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-6 list-disc pl-5">
                            <li>The specific scope of work (what we will do for you).</li>
                            <li>The fees and payment schedule (no hidden costs).</li>
                            <li>Our duties to you and your duties to us.</li>
                        </ul>
                        <p className="text-gray-500 text-sm italic">
                            Transparency is key to a successful professional relationship.
                        </p>
                    </div>
                    <div className="shrink-0 bg-gray-50 p-8 rounded-2xl border border-gray-200 max-w-sm text-center">
                        <h4 className="font-bold text-gray-900 mb-4">Ready to proceed?</h4>
                        <Link to="/book-consultation" className="block bg-abic-blue text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-900 transition-colors shadow-lg">
                            Book Initial Consultation
                        </Link>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const PrincipleCard = ({ icon, title, desc }: any) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-abic-gold transition-colors group">
        <div className="text-gray-400 mb-4 group-hover:text-abic-gold transition-colors">{icon}</div>
        <h3 className="font-bold text-xl text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
);
