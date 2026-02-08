import ServiceLayout from "../../components/ServiceLayout";
import { ExternalLink, ShieldCheck } from "lucide-react";

export default function VerifyStatus() {
    return (
        <ServiceLayout
            title="Verify RCIC Status"
            subtitle="Your protection starts with verification."
            heroImage="https://images.unsplash.com/photo-1589330694653-4a8b2446a96b?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-12">

                <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <ShieldCheck className="mx-auto text-abic-blue mb-4" size={48} />
                    <h2 className="text-2xl font-bold font-montserrat text-gray-900 mb-4">Why Verification Matters</h2>
                    <p className="text-gray-700 mb-6">
                        Working with an unauthorized consultant can lead to application refusal and a ban from Canada for 5 years.
                        Always verify that your representative is a licensed RCIC in good standing.
                    </p>
                    <div className="inline-block bg-white px-6 py-3 rounded-lg border border-gray-200 shadow-sm font-mono text-lg font-bold text-gray-800">
                        RCIC License #: <span className="text-abic-blue">R514217</span>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">How to Verify on the CICC Public Register</h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Step number="1" title="Visit CICC Website" desc="Go to the College of Immigration and Citizenship Consultants public register." />
                        <Step number="2" title="Search by Name/ID" desc="Enter 'Anthony Cheah' or 'R514217' in the search fields." />
                        <Step number="3" title="Confirm Status" desc="Ensure the status is listed as 'Active'." />
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-abic-blue text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Open CICC Public Register <ExternalLink size={20} />
                        </a>
                        <p className="text-xs text-gray-500 mt-4">Link opens in a new tab on the official government-authorized website.</p>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const Step = ({ number, title, desc }: any) => (
    <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div className="w-10 h-10 rounded-full bg-abic-gold text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md">
            {number}
        </div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
    </div>
);
