import ServiceLayout from "../../components/ServiceLayout";
import { FileText, Shield, Scale, Lock } from "lucide-react";

export default function Ethics() {
    return (
        <ServiceLayout
            title="Ethics & Professional Standards"
            subtitle="Adhering to the highest code of professional conduct."
            heroImage="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-12">

                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                    As Regulated Canadian Immigration Consultants, we are bound by a strict <strong>Code of Professional Ethics</strong> administered by the College of Immigration and Citizenship Consultants (CICC). We take these obligations seriously.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <EthicCard
                        icon={<Shield className="text-abic-blue" size={32} />}
                        title="Duty of Competence"
                        desc="We only undertake cases where we have the knowledge and expertise to provide quality representation. We stay updated on the latest immigration laws and policies."
                    />
                    <EthicCard
                        icon={<Lock className="text-abic-blue" size={32} />}
                        title="Confidentiality"
                        desc="We maintain strict client confidentiality. Your personal information and case details are protected and never shared without your explicit consent."
                    />
                    <EthicCard
                        icon={<Scale className="text-abic-blue" size={32} />}
                        title="Conflict of Interest"
                        desc="We avoid all conflicts of interest. We acts solely in your best interest and will disclose any potential conflicts immediately."
                    />
                    <EthicCard
                        icon={<FileText className="text-abic-blue" size={32} />}
                        title="Honesty & Candour"
                        desc="We provide honest assessments. We will never guarantee an outcome, as the final decision rests with IRCC, but we guarantee our best professional effort."
                    />
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-abic-gold">
                    <h3 className="font-bold text-gray-900 mb-4 tex-lg">Our Policy on Misrepresentation</h3>
                    <p className="text-gray-700 mb-0">
                        ABIC Immigration has a <strong>zero-tolerance policy for fraud and misrepresentation</strong>. We will not submit false documents or misleading information to the government. We believe in building your Canadian future on a foundation of truth and integrity.
                    </p>
                </div>

            </div>
        </ServiceLayout>
    );
}

const EthicCard = ({ icon, title, desc }: any) => (
    <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-abic-blue/30 transition-colors">
        <div className="shrink-0">{icon}</div>
        <div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);
