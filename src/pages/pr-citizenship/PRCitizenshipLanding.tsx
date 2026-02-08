import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { Globe, Map, Flag } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1548126466-4470dfd3a209?auto=format&fit=crop&q=80&w=2000";

export default function PRCitizenshipLanding() {
    return (
        <ServiceLayout
            title="Permanent Residence & Citizenship"
            subtitle="Building your future in Canada, permanently."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">From Temporary Status to Canadian Citizen</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Canada offers over 80 pathways to permanent residence. Whether through economic immigration,
                        humanitarian grounds, or family intake, we guide you to the right program.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    <Link to="/pr-citizenship/pr" className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Map size={120} />
                        </div>
                        <Globe className="w-12 h-12 text-abic-blue mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-abic-blue">Permanent Residence (PR)</h3>
                        <p className="text-gray-600 mb-6">
                            Secure your status in Canada. Travel freely, access healthcare, live and work anywhere in the country.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500 mb-8">
                            <li>• Express Entry (CEC, FSW, FST)</li>
                            <li>• Provincial Nominee Programs (PNP)</li>
                            <li>• Humanitarian & Compassionate (H&C)</li>
                            <li>• Atlantic Immigration Program</li>
                        </ul>
                        <span className="font-bold text-abic-blue group-hover:translate-x-2 transition-transform inline-block">Explore PR Pathways &rarr;</span>
                    </Link>

                    <Link to="/pr-citizenship/citizenship" className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Flag size={120} />
                        </div>
                        <Flag className="w-12 h-12 text-abic-gold mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-abic-gold">Canadian Citizenship</h3>
                        <p className="text-gray-600 mb-6">
                            The final step. Apply for your Canadian passport, vote in elections, and enjoy the security of citizenship.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500 mb-8">
                            <li>• Citizenship Grant Applications</li>
                            <li>• Proof of Citizenship</li>
                            <li>• Resume Citizenship</li>
                            <li>• Oath Ceremony Prep</li>
                        </ul>
                        <span className="font-bold text-abic-gold group-hover:translate-x-2 transition-transform inline-block">Apply for Citizenship &rarr;</span>
                    </Link>
                </div>
            </div>
        </ServiceLayout>
    );
}
