import ServiceLayout from "../components/ServiceLayout";
import { BookOpen, FileText, Globe, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const GuideCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center shrink-0 group-hover:bg-abic-blue group-hover:text-white transition-colors">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-3">{description}</p>
                <div className="text-sm text-abic-blue font-semibold">Educational overview – content to be provided by ABIC team</div>
            </div>
        </div>
    </div>
);

export default function Resources() {
    return (
        <ServiceLayout
            title="Immigration Resources"
            subtitle="Guides, updates, and essential information for your Canadian immigration journey."
            heroImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-20">

                {/* 1. IMMIGRATION GUIDES & FAQs */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Immigration Guides & FAQs</h2>
                        <p className="text-gray-600 text-lg">Comprehensive guides to help you understand Canadian immigration processes</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Link to="/resources/visitor-visa-guide" className="block">
                            <GuideCard
                                title="Visitor Visa Guide"
                                description="Everything you need to know about applying for a Canadian visitor visa (TRV)"
                                icon={<Globe size={24} />}
                            />
                        </Link>

                        <Link to="/resources/study-permit-guide" className="block">
                            <GuideCard
                                title="Study Permit Guide"
                                description="Complete guide to studying in Canada, from application to post-graduation"
                                icon={<BookOpen size={24} />}
                            />
                        </Link>

                        <Link to="/resources/work-permit-guide" className="block">
                            <GuideCard
                                title="Work Permit Guide"
                                description="Understanding work permits, LMIA requirements, and work authorization"
                                icon={<FileText size={24} />}
                            />
                        </Link>

                        <Link to="/resources/express-entry-guide" className="block">
                            <GuideCard
                                title="Express Entry Guide"
                                description="Navigate Canada's Express Entry system for skilled workers"
                                icon={<CheckCircle2 size={24} />}
                            />
                        </Link>

                        <Link to="/resources/family-sponsorship-guide" className="block">
                            <GuideCard
                                title="Family Sponsorship Guide"
                                description="Reunite with family members through Canadian sponsorship programs"
                                icon={<MapPin size={24} />}
                            />
                        </Link>

                        <Link to="/resources/lmia-guide" className="block">
                            <GuideCard
                                title="LMIA Guide"
                                description="Labour Market Impact Assessment for employers and workers"
                                icon={<Clock size={24} />}
                            />
                        </Link>
                    </div>
                </section>

                {/* 2. IRCC INFORMATION */}
                <section className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl border border-gray-200">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">IRCC Information</h2>
                        <p className="text-gray-600 text-lg">Key topics and requirements for immigration applicants</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                <Clock className="text-abic-blue" size={20} />
                                Processing Times
                            </h3>
                            <p className="text-sm text-gray-600">Current processing times vary by application type and country. Check IRCC website for latest updates.</p>
                            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" target="_blank" rel="noopener noreferrer" className="text-sm text-abic-blue font-semibold mt-3 inline-block hover:underline">
                                View Processing Times →
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                <FileText className="text-abic-blue" size={20} />
                                Biometrics Requirements
                            </h3>
                            <p className="text-sm text-gray-600">Most applicants must provide biometrics (fingerprints and photo) as part of their application.</p>
                            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/campaigns/biometrics.html" target="_blank" rel="noopener noreferrer" className="text-sm text-abic-blue font-semibold mt-3 inline-block hover:underline">
                                Learn About Biometrics →
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="text-abic-blue" size={20} />
                                Medical Examinations
                            </h3>
                            <p className="text-sm text-gray-600">Medical exams are required for most permanent residence applications and some temporary residence applications.</p>
                            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html" target="_blank" rel="noopener noreferrer" className="text-sm text-abic-blue font-semibold mt-3 inline-block hover:underline">
                                Medical Exam Info →
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                <Shield className="text-abic-blue" size={20} />
                                Police Certificates
                            </h3>
                            <p className="text-sm text-gray-600">Police certificates are required to show you don't have a criminal record in countries where you've lived.</p>
                            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates.html" target="_blank" rel="noopener noreferrer" className="text-sm text-abic-blue font-semibold mt-3 inline-block hover:underline">
                                Police Certificate Guide →
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                <MapPin className="text-abic-blue" size={20} />
                                VAC / Passport Submission
                            </h3>
                            <p className="text-sm text-gray-600">Visa Application Centres (VACs) process applications and collect documents in countries without Canadian offices.</p>
                            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html" target="_blank" rel="noopener noreferrer" className="text-sm text-abic-blue font-semibold mt-3 inline-block hover:underline">
                                Find a VAC →
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                <Globe className="text-abic-blue" size={20} />
                                IRCC Portal
                            </h3>
                            <p className="text-sm text-gray-600">Submit applications, check status, and communicate with IRCC through the online portal.</p>
                            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html" target="_blank" rel="noopener noreferrer" className="text-sm text-abic-blue font-semibold mt-3 inline-block hover:underline">
                                Access IRCC Portal →
                            </a>
                        </div>
                    </div>
                </section>

                {/* 3. EXPRESS ENTRY DRAW DATA */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Express Entry</h2>
                        <p className="text-gray-600 text-lg">Canada's flagship immigration system for skilled workers</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Draw Results</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left py-3 px-4 font-bold text-gray-900">Date</th>
                                        <th className="text-left py-3 px-4 font-bold text-gray-900">Type</th>
                                        <th className="text-left py-3 px-4 font-bold text-gray-900">CRS Score</th>
                                        <th className="text-left py-3 px-4 font-bold text-gray-900">ITAs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-gray-700">2025-01-15</td>
                                        <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">General</span></td>
                                        <td className="py-3 px-4 font-bold text-abic-blue">524</td>
                                        <td className="py-3 px-4 text-gray-700">5,500</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-gray-700">2025-01-08</td>
                                        <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">PNP</span></td>
                                        <td className="py-3 px-4 font-bold text-abic-blue">739</td>
                                        <td className="py-3 px-4 text-gray-700">1,000</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-gray-700">2024-12-18</td>
                                        <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">General</span></td>
                                        <td className="py-3 px-4 font-bold text-abic-blue">529</td>
                                        <td className="py-3 px-4 text-gray-700">5,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 text-gray-700">2024-12-04</td>
                                        <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">CEC</span></td>
                                        <td className="py-3 px-4 font-bold text-abic-blue">511</td>
                                        <td className="py-3 px-4 text-gray-700">4,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mt-6">
                            <strong>Note:</strong> CRS (Comprehensive Ranking System) scores and draw frequencies change regularly. ITAs = Invitations to Apply.
                        </p>
                    </div>
                </section>

                {/* 4. PROVINCIAL NOMINEE PROGRAMS */}
                <section className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border border-blue-100">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Provincial Nominee Programs (PNP)</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Provincial Nominee Programs allow Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and settle in a particular province. Each province has its own streams and criteria.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Popular PNP Streams</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h4 className="font-bold text-gray-800">Ontario (OINP)</h4>
                                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                    <li>• Human Capital Priorities</li>
                                    <li>• Employer Job Offer</li>
                                    <li>• International Student</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-gray-800">British Columbia (BC PNP)</h4>
                                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                    <li>• Skills Immigration</li>
                                    <li>• Express Entry BC</li>
                                    <li>• Entrepreneur Immigration</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-gray-800">Alberta (AAIP)</h4>
                                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                    <li>• Alberta Opportunity Stream</li>
                                    <li>• Express Entry Stream</li>
                                    <li>• Rural Renewal Stream</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-gray-800">Saskatchewan (SINP)</h4>
                                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                    <li>• International Skilled Worker</li>
                                    <li>• Saskatchewan Experience</li>
                                    <li>• Entrepreneur & Farm</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                            <p className="text-sm text-gray-700">
                                <strong className="text-yellow-800">⚠️ Important:</strong> Recent PNP updates and program changes occur frequently. This information is high-level only. <strong>Consult with a licensed RCIC for program-specific advice and eligibility assessment.</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-abic-blue to-blue-600 text-white p-12 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        These resources provide general information. For advice specific to your situation, book a consultation with our regulated immigration consultant.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-abic-blue font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                        Book a Consultation
                    </Link>
                </section>

            </div>
        </ServiceLayout>
    );
}

const Shield = Clock; // Placeholder for missing import
