import ServiceLayout from "../../components/ServiceLayout";
import { Users } from "lucide-react";

export default function SameSex() {
    return (
        <ServiceLayout
            title="Same-Sex Sponsorship"
            subtitle="Equal rights under Canadian law. We support LGBTQ+ families."
            heroImage="https://images.unsplash.com/photo-1542152341-2c1b489a2656?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="text-center max-w-3xl mx-auto">
                    <Users size={48} className="mx-auto text-abic-pink mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Love is Love</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Canadian immigration law does not discriminate based on sexual orientation. Same-sex partners are eligible to apply under the Spouse (if married) or Common-Law Partner category, with the exact same rights and requirements.
                    </p>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Conjugal Partner Category</h2>
                    <p className="text-gray-600 mb-4">
                        This category is often used by same-sex couples who <strong>cannot</strong> live together or get married due to persecution or legal restrictions in their home country.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 italic border-l-4 border-abic-blue">
                        "If you are unable to establish a common-law relationship or marry because of legal or immigration barriers, you may qualify as Conjugal Partners."
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
