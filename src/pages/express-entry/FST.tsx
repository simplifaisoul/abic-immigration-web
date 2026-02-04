import ServiceLayout from "../../components/ServiceLayout";
import { Hammer, HardHat } from "lucide-react";

export default function FST() {
    return (
        <ServiceLayout
            title="Federal Skilled Trades (FST)"
            subtitle="For qualified tradespeople in construction, culinary, industrial, and electrical fields."
            heroImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="bg-gray-900 text-white p-8 rounded-2xl flex gap-6 items-start">
                    <HardHat size={48} className="text-abic-gold shrink-0 mt-1" />
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Trades in Demand</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Canada has a massive shortage of skilled trades workers. The FST program often has lower language requirements (CLB 5 Speaking/Listening) but requires specific certification or a job offer.
                        </p>
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Requirements</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 p-6 rounded-xl hover:border-abic-blue transition-colors">
                            <h3 className="font-bold text-lg mb-2">Experience</h3>
                            <p className="text-gray-600 text-sm">
                                At least <strong>2 years</strong> of full-time work experience in a skilled trade (within the last 5 years).
                            </p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded-xl hover:border-abic-blue transition-colors">
                            <h3 className="font-bold text-lg mb-2">Job Offer OR Certificate</h3>
                            <p className="text-gray-600 text-sm">
                                You must have effective employment for 1 year OR a Certificate of Qualification issued by a Canadian province.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Hammer size={20} /> Eligible Categories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
                        <span>• Major Group 72 (Industrial, Electrical)</span>
                        <span>• Major Group 73 (Maintenance)</span>
                        <span>• Major Group 82 (Natural Resources)</span>
                        <span>• Major Group 92 (Processing/Manufacturing)</span>
                        <span>• Major Group 632 (Chefs & Cooks)</span>
                        <span>• Major Group 633 (Butchers & Bakers)</span>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
