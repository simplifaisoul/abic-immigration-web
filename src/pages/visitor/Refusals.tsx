import ServiceLayout from "../../components/ServiceLayout";
import { ArrowRight, FileSearch, XCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisitorVisaRefusals() {
    return (
        <ServiceLayout
            title="Visa Refusal Management"
            subtitle="A refusal is not the end. We analyze, strategize, and re-apply with a stronger case."
            heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Overview */}
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Was My Application Refused?</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Visitor visas are often refused under Section 179(b) of the IRPR, meaning the officer wasn't satisfied you would leave Canada at the end of your stay. This is usually due to weak family ties, unclear travel purpose, or unstable employment.
                    </p>
                </section>

                {/* Refusal Reasons Grid */}
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <RefusalCard
                        icon={<XCircle className="text-red-500" size={32} />}
                        title="Weak Ties to Home"
                        desc="Lack of property, family, or stable employment in your home country."
                    />
                    <RefusalCard
                        icon={<FileSearch className="text-orange-500" size={32} />}
                        title="Insufficient Funds"
                        desc="Bank statements didn't show enough available money for the trip."
                    />
                    <RefusalCard
                        icon={<RefreshCw className="text-blue-500" size={32} />}
                        title="Travel History"
                        desc="Lack of previous international travel or previous overstays."
                    />
                </section>

                {/* Our Strategy */}
                <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
                    <div className="md:flex gap-12 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Remedial Strategy</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-abic-blue rounded-full flex items-center justify-center text-white font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">GCMS Notes Analysis</h4>
                                        <p className="text-sm text-gray-600">We order the officer's detailed notes to understand the *exact* reason for refusal.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-abic-blue rounded-full flex items-center justify-center text-white font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Gap Analysis</h4>
                                        <p className="text-sm text-gray-600">We identify what evidence was missing or weak in the first application.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-abic-blue rounded-full flex items-center justify-center text-white font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Professional Submission</h4>
                                        <p className="text-sm text-gray-600">We draft a legal submission letter addressing every concern raised by the officer.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 mt-8 md:mt-0 text-center">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h4 className="font-bold text-xl mb-4">Don't Re-apply Blindly</h4>
                                <p className="text-gray-500 mb-6 text-sm">Resubmitting the same application usually leads to the same refusal. Let us fix it professionally.</p>
                                <Link to="/book-consultation" className="block w-full py-3 bg-abic-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
                                    Book Strategy Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const RefusalCard = ({ icon, title, desc }: any) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
        <div className="mb-4">{icon}</div>
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
    </div>
);
