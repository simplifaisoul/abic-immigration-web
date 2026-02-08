import ServiceLayout from "../components/ServiceLayout";
import { Book, FileText, TrendingUp, MapPin, AlertCircle } from "lucide-react";

export default function Resources() {
    return (
        <ServiceLayout
            title="Resources"
            subtitle="Educational information to help you understand Canadian immigration programs and processes."
            heroImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        >
            <div className="space-y-16">

                {/* Immigration Guides & FAQs */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <Book className="text-abic-blue" size={32} />
                        <h2 className="text-3xl font-bold text-gray-900">Immigration Guides & FAQs</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Visitor Visa Guide</h3>
                            <p className="text-sm text-gray-600 mb-4">Educational overview – content to be provided by ABIC team.</p>
                            <div className="text-abic-blue text-sm font-semibold">Coming Soon</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Study Permit Guide</h3>
                            <p className="text-sm text-gray-600 mb-4">Educational overview – content to be provided by ABIC team.</p>
                            <div className="text-abic-blue text-sm font-semibold">Coming Soon</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Work Permit Guide</h3>
                            <p className="text-sm text-gray-600 mb-4">Educational overview – content to be provided by ABIC team.</p>
                            <div className="text-abic-blue text-sm font-semibold">Coming Soon</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Express Entry Guide</h3>
                            <p className="text-sm text-gray-600 mb-4">Educational overview – content to be provided by ABIC team.</p>
                            <div className="text-abic-blue text-sm font-semibold">Coming Soon</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Family Sponsorship Guide</h3>
                            <p className="text-sm text-gray-600 mb-4">Educational overview – content to be provided by ABIC team.</p>
                            <div className="text-abic-blue text-sm font-semibold">Coming Soon</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-abic-blue transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">LMIA Guide</h3>
                            <p className="text-sm text-gray-600 mb-4">Educational overview – content to be provided by ABIC team.</p>
                            <div className="text-abic-blue text-sm font-semibold">Coming Soon</div>
                        </div>
                    </div>
                </section>

                {/* IRCC Information */}
                <section className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border-2 border-blue-100">
                    <div className="flex items-center gap-3 mb-8">
                        <FileText className="text-abic-blue" size={32} />
                        <h2 className="text-3xl font-bold text-gray-900">IRCC Information</h2>
                    </div>

                    <p className="text-gray-700 mb-6">Key IRCC topics and requirements for immigration applicants:</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <div className="font-semibold text-gray-800">Processing times</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <div className="font-semibold text-gray-800">Biometrics requirements</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <div className="font-semibold text-gray-800">Medical examinations</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <div className="font-semibold text-gray-800">Police certificates</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <div className="font-semibold text-gray-800">VAC / passport submission</div>
                        </div>
                    </div>
                </section>

                {/* Express Entry */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <TrendingUp className="text-green-600" size={32} />
                        <h2 className="text-3xl font-bold text-gray-900">Express Entry</h2>
                    </div>

                    <p className="text-gray-700 mb-8">
                        Express Entry is Canada's flagship immigration system for skilled workers. Below are recent draw results for reference.
                    </p>

                    <div className="overflow-x-auto bg-white rounded-2xl border-2 border-gray-100 shadow-lg">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-abic-blue to-blue-600 text-white">
                                    <th className="px-6 py-4 text-left font-bold">Date</th>
                                    <th className="px-6 py-4 text-left font-bold">Type</th>
                                    <th className="px-6 py-4 text-left font-bold">CRS Score</th>
                                    <th className="px-6 py-4 text-left font-bold">ITAs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-800">2025-01-15</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">General</span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-abic-blue">524</td>
                                    <td className="px-6 py-4 text-gray-800">5,500</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-800">2025-01-08</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">PNP</span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-abic-blue">739</td>
                                    <td className="px-6 py-4 text-gray-800">1,000</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-800">2024-12-18</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">General</span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-abic-blue">529</td>
                                    <td className="px-6 py-4 text-gray-800">5,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-800">2024-12-04</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">CEC</span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-abic-blue">511</td>
                                    <td className="px-6 py-4 text-gray-800">4,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Provincial Nominee Programs */}
                <section className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-3xl border-2 border-amber-100">
                    <div className="flex items-center gap-3 mb-8">
                        <MapPin className="text-abic-gold" size={32} />
                        <h2 className="text-3xl font-bold text-gray-900">Provincial Nominee Programs (PNP)</h2>
                    </div>

                    <p className="text-gray-700 mb-6">
                        Provincial Nominee Programs allow Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and settle in a particular province. Each province has its own streams and criteria.
                    </p>

                    <div className="bg-white p-6 rounded-xl border border-amber-200">
                        <p className="text-gray-700">
                            Recent PNP updates and program changes – high-level information only. Consult with a licensed RCIC for program-specific advice.
                        </p>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-2xl">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="text-yellow-600 shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
                            <p className="text-gray-700">
                                This section is for general information only and does not constitute legal advice. Immigration laws and policies change frequently. Always consult a licensed RCIC for advice specific to your situation.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
