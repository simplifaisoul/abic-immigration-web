import ServiceLayout from "../../components/ServiceLayout";
import { Award, CheckCircle2, Shield, BookOpen } from "lucide-react";

export default function Credentials() {
    return (
        <ServiceLayout
            title="RCIC Credentials"
            subtitle="Professionalism you can trust. Regulated by the College of Immigration and Citizenship Consultants (CICC)."
            heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Main Credential Block */}
                <section className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="relative mb-8 inline-block">
                            <img
                                src="/assets/anthony-cheah.png"
                                alt="Anthony Cheah RCIC"
                                className="w-40 h-40 object-cover rounded-xl shadow-lg border-2 border-white"
                            />
                            <div className="absolute -bottom-3 -right-3 bg-abic-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">RCIC</div>
                        </div>
                        <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-2">Anthony Cheah</h2>
                        <p className="text-abic-blue font-bold text-lg mb-6">Regulated Canadian Immigration Consultant (R513360)</p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Anthony Cheah is a member in good standing with the College of Immigration and Citizenship Consultants (CICC).
                            With a Masters degree and extensive experience in Canadian immigration law, he is authorized by the Canadian government
                            to represent clients in all immigration matters.
                        </p>

                        <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Award className="text-abic-gold" size={20} /> Professional Memberships</h4>
                            <CredentialItem text="Member of CICC (College of Immigration and Citizenship Consultants)" />
                            <CredentialItem text="Member of CAPIC (Canadian Association of Professional Immigration Consultants)" />
                            <CredentialItem text="Commissioner of Oaths / Sworn Affidavits" />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Shield size={100} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Background</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center shrink-0">
                                        <BookOpen size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Immigration Practitioner Program</h4>
                                        <p className="text-sm text-gray-500">Accredited Institution</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center shrink-0">
                                        <BookOpen size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Master of Science (M.Sc.)</h4>
                                        <p className="text-sm text-gray-500">University Degree</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center shrink-0">
                                        <BookOpen size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Bachelor of Science (B.Sc.)</h4>
                                        <p className="text-sm text-gray-500">University Degree</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-abic-blue text-white p-8 rounded-2xl">
                            <h3 className="font-bold text-xl mb-4">Why Verification Matters</h3>
                            <p className="text-blue-100 text-sm mb-6">
                                Unauthorized consultants are not regulated and can leave you with no recourse if they mishandle your file.
                                Always verify your representative.
                            </p>
                            <a href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-abic-gold text-abic-blue font-bold px-4 py-3 rounded-lg hover:bg-white transition-colors">
                                Verify Status on CICC Website
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const CredentialItem = ({ text }: { text: string }) => (
    <div className="flex gap-3">
        <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
        <span className="text-gray-700 text-sm font-medium">{text}</span>
    </div>
);
