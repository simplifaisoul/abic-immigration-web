import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { RefreshCw } from "lucide-react";

export default function WorkPermitExtension() {
    return (
        <ServiceLayout
            title="Work Permit Extension"
            subtitle="Extend your authorization to work in Canada before it expires."
            heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="max-w-3xl mx-auto text-center">
                    <RefreshCw className="mx-auto text-abic-blue mb-4" size={48} />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintain Your Status</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Applying to extend your work permit gives you "Maintained Status" (formerly Implied Status). This allows you to continue working under the same conditions while your application is processed, provided you apply before expiry.
                    </p>
                    <Link to="/book-consultation" className="inline-block bg-abic-gold text-abic-blue font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                        Start Extension
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="font-bold text-gray-900 mb-4">Bridging Open Work Permit (BOWP)</h3>
                        <p className="text-sm text-gray-600">
                            If you have applied for Permanent Residence (Express Entry, PNP, etc.), you may be eligible for a BOWP to keep working while your PR processes.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="font-bold text-gray-900 mb-4">Passport Expiry</h3>
                        <p className="text-sm text-gray-600">
                            IRCC cannot issue a work permit past the validity of your passport. Renew your passport first!
                        </p>
                    </div>
                </div>

            </div>
        </ServiceLayout>
    );
}
