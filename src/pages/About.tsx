import ServiceLayout from "../components/ServiceLayout";
import { CheckCircle2, Shield, Award, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <ServiceLayout
            title="About ABIC"
            subtitle="Integrity. Expertise. Personalized Strategy. Your trusted partner in Canadian immigration."
            heroImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. OUR PRACTICE */}
                <section className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-6">Our Philosophy</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        At ABIC Immigration, we believe that every client is more than just a file number. We are dedicated to providing ethical, transparent, and results-driven legal representation. We don't just fill out forms; we build comprehensive strategies to turn your Canadian dream into reality.
                    </p>
                </section>

                <hr className="border-gray-100" />

                {/* 2. RCIC CREDENTIALS */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="relative mb-8 inline-block">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/anthony-cheah.png`}
                                alt="Anthony Cheah RCIC"
                                className="w-32 h-32 object-cover rounded-xl shadow-lg border-2 border-white"
                            />
                            <div className="absolute -bottom-3 -right-3 bg-abic-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">RCIC</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Anthony Cheah</h3>
                        <p className="text-abic-blue font-bold mb-6">Founder & Regulated Canadian Immigration Consultant</p>

                        <div className="space-y-4">
                            <CredentialItem text="Member of CICC (College of Immigration and Citizenship Consultants)" />
                            <CredentialItem text="Member of CAPIC (Canadian Association of Professional Immigration Consultants)" />
                            <CredentialItem text="Commissioner of Oaths / Sworn Affidavits" />
                            <CredentialItem text="M.Sc. & B.Sc. Degrees" />
                        </div>

                        <div className="mt-8">
                            <a href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:underline bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                                <Shield size={16} /> Verify RCIC Status (R513360)
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <Award size={48} className="text-abic-gold mb-6" />
                        <h4 className="font-bold text-xl text-gray-900 mb-4">Why Hire an RCIC?</h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Immigration law is complex. RCICs are regulated professionals licensed to represent you before the Canadian government.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>• Errors can lead to bans (misrepresentation).</li>
                            <li>• We know the latest case law and policy changes.</li>
                            <li>• We are insured and accountable to a regulatory body.</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 3. ETHICS */}
                <section className="bg-abic-blue text-white p-12 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-white/10 rounded text-abic-gold"><Scale size={24} /></div>
                                <h2 className="text-3xl font-montserrat font-bold">Code of Ethics</h2>
                            </div>
                            <p className="text-blue-100 leading-relaxed mb-6">
                                We adhere strictly to the CICC Code of Professional Ethics. This means we prioritize client confidentiality, competence, and honesty above all else. We will never guarantee a result, but we guarantee our best professional effort.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link to="/book-consultation" className="bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold px-8 py-4 rounded-xl shadow-lg transition-colors">
                                Work With Us
                            </Link>
                        </div>
                    </div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const CredentialItem = ({ text }: { text: string }) => (
    <div className="flex gap-3">
        <CheckCircle2 className="text-abic-gold shrink-0 mt-0.5" size={18} />
        <span className="text-gray-700 text-sm">{text}</span>
    </div>
);
