import ServiceLayout from "../components/ServiceLayout";
import ServiceContent from "../components/ServiceContent";
import { Flag, Award, BookOpen, UserCheck, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function PRCitizenship() {
    return (
        <ServiceLayout
            title="PR & Citizenship"
            subtitle="Secure your permanent status and take the final step to becoming a Canadian citizen."
            heroImage="https://images.unsplash.com/photo-1542152060-1e5b57d6928e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                <ServiceContent
                    what="Permanent Residence (PR) allows you to live, work, and study in Canada indefinitely, while Canadian Citizenship grants you the right to vote, run for office, and hold a passport. Transitioning from PR to Citizen is the final milestone in your immigration journey."
                    who={[
                        "PR card holders ready to renew",
                        "Permanent Residents eligible for Citizenship (3 years physical presence)",
                        "Individuals requiring PR Card replacements (lost/stolen)",
                        "Those seeking to clarify residency obligations"
                    ]}
                    risks={[
                        "Failing to meet the residency obligation (730 days in 5 years)",
                        "Criminal inadmissibility affecting PR status",
                        "Miscalculating physical presence days for citizenship",
                        "Travelling with an expired PR card"
                    ]}
                />

                {/* 1. PERMANENT RESIDENCE */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-abic-blue/10 rounded-lg text-abic-blue"><Award size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Permanent Residence (PR)</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="font-bold text-xl text-gray-900 mb-4">Rights & Benefits</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" /> Access to universal healthcare coverage</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" /> Protection under Canadian law and Charter</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" /> Right to live/work anywhere in Canada</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="font-bold text-xl text-gray-900 mb-4">Obligations</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full mt-2" /> Must live in Canada for 730 days every 5 years</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full mt-2" /> Must not commit serious crimes</li>
                                <li className="flex gap-3 text-sm text-gray-600"><div className="w-1.5 h-1.5 bg-abic-gold rounded-full mt-2" /> Send updated PR card application before travel</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 2. CANADIAN CITIZENSHIP */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-50 rounded-lg text-abic-red"><Flag size={24} /></div>
                        <h2 className="text-3xl font-montserrat font-bold text-gray-900">Canadian Citizenship</h2>
                    </div>
                    <p className="text-gray-600 mb-8">
                        The final goal for many immigrants. As a citizen, you can vote, run for office, and hold a Canadian passport—one of the most powerful in the world.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <EligibilityCard
                            icon={<Calendar className="text-abic-blue" />}
                            title="Physical Presence"
                            desc="1095 days (3 years) in Canada out of the last 5 years."
                        />
                        <EligibilityCard
                            icon={<BookOpen className="text-abic-blue" />}
                            title="Language & Knowledge"
                            desc="Pass the citizenship test and prove language ability (CLB 4)."
                        />
                        <EligibilityCard
                            icon={<UserCheck className="text-abic-blue" />}
                            title="Tax Filing"
                            desc="Filed income taxes for at least 3 years within the 5-year period."
                        />
                    </div>

                    <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Ready to apply?</h4>
                            <p className="text-sm text-gray-600">We verify your physical presence calculation to ensure 100% accuracy before submission.</p>
                        </div>
                        <Link to="/book-consultation" className="bg-abic-blue hover:bg-black text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shrink-0">
                            Start Citizenship App
                        </Link>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const EligibilityCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="mb-4">{icon}</div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
);
