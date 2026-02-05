import ServiceLayout from "../../components/ServiceLayout";
import { Search, ShieldCheck, AlertTriangle } from "lucide-react";

export default function VerifyStatus() {
    return (
        <ServiceLayout
            title="Verify RCIC Status"
            subtitle="Ensure you are protected. Verify that your representative is licensed and regulated."
            heroImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Instructions */}
                <section className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <ShieldCheck className="text-green-600" size={32} />
                            How to Verify an RCIC
                        </h2>
                        <div className="space-y-6">
                            <Step
                                num="1"
                                title="Visit the CICC Public Register"
                                desc="The College of Immigration and Citizenship Consultants (CICC) maintains the official registry."
                            />
                            <Step
                                num="2"
                                title="Search by RCIC Number"
                                desc={
                                    <span>
                                        Enter Anthony Cheah's license number: <strong className="bg-yellow-100 px-2 rounded text-gray-900">R513360</strong>
                                    </span>
                                }
                            />
                            <Step
                                num="3"
                                title="Confirm Status"
                                desc="Ensure the status is listed as 'Active'. This confirms the consultant is in good standing."
                            />
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                            <a
                                href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-abic-blue text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors shadow-lg"
                            >
                                <Search size={20} /> Open CICC Public Register
                            </a>
                        </div>
                    </div>
                </section>

                {/* Warning */}
                <section className="bg-red-50 p-8 rounded-2xl border border-red-100 max-w-4xl mx-auto flex gap-6 items-start">
                    <AlertTriangle className="text-red-500 shrink-0" size={40} />
                    <div>
                        <h3 className="font-bold text-xl text-red-800 mb-2">Be Wary of "Ghost Consultants"</h3>
                        <p className="text-red-700 leading-relaxed">
                            It is a serious offence for anyone to provide Canadian immigration advice for a fee unless they are an RCIC, a Canadian lawyer, or a Quebec notary.
                            If someone offers to help you "behind the scenes" without signing a Retainer Agreement or putting their name on the forms, they are likely unauthorized.
                            Using a ghost consultant can lead to your application being rejected on the grounds of misrepresentation.
                        </p>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const Step = ({ num, title, desc }: any) => (
    <div className="flex gap-4">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 shrink-0 border border-gray-200">
            {num}
        </div>
        <div>
            <h4 className="font-bold text-lg text-gray-900">{title}</h4>
            <p className="text-gray-600 mt-1">{desc}</p>
        </div>
    </div>
);
