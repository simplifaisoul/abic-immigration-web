import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";

export default function PR() {
    return (
        <ServiceLayout
            title="Permanent Residence Pathways"
            subtitle="Your journey to calling Canada 'Home' permanently."
            heroImage="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="grid md:grid-cols-2 gap-8">
                    <Link to="/express-entry" className="group block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-abic-blue transition-all">
                        <h3 className="font-bold text-xl mb-2 group-hover:text-abic-blue">Express Entry</h3>
                        <p className="text-gray-600 text-sm">
                            The fastest federal pathway for skilled workers. Includes FSW, CEC, and FST.
                        </p>
                    </Link>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-xl mb-2">Provincial Nominee Programs (PNP)</h3>
                        <p className="text-gray-600 text-sm">
                            Nomination by a specific province (e.g., OINP for Ontario) based on their local labour market needs.
                        </p>
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">PR Card Renewal</h2>
                    <p className="text-gray-600 mb-4">
                        Already a PR? You must meet the <strong>Residency Obligation</strong>: 730 days physically present in Canada within the last 5 years.
                    </p>
                </section>

            </div>
        </ServiceLayout>
    );
}
