import ServiceLayout from "../../components/ServiceLayout";
import { Calculator, Globe2 } from "lucide-react";

export default function FSW() {
    return (
        <ServiceLayout
            title="Federal Skilled Worker (FSW)"
            subtitle="The primary pathway for skilled professionals to immigrate to Canada."
            heroImage="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <div className="flex gap-8 items-center bg-gray-900 text-white p-8 rounded-2xl">
                    <Globe2 size={64} className="text-abic-blue hidden md:block" />
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Foreign Work Experience?</h2>
                        <p className="text-gray-300 leading-relaxed">
                            FSW is designed for individuals with at least **1 year of continuous full-time** skilled work experience outside Canada. You do not need a job offer to apply, but you must meet the 67-point selection grid.
                        </p>
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Selection Criteria (67 Points)</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <PointCard title="Language Skills" desc="CLB 7 minimum in English or French." max="Max 28 pts" />
                        <PointCard title="Education" desc="ECA Report required for foreign degrees." max="Max 25 pts" />
                        <PointCard title="Work Experience" desc="Years of skilled work (NOC TEER 0, 1, 2, 3)." max="Max 15 pts" />
                        <PointCard title="Age" desc="Points decrease after age 35." max="Max 12 pts" />
                        <PointCard title="Arranged Employment" desc="Valid LMIA job offer in Canada." max="Max 10 pts" />
                        <PointCard title="Adaptability" desc="Family in Canada, study in Canada, etc." max="Max 10 pts" />
                    </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    <div className="flex gap-4 items-center mb-6">
                        <Calculator className="text-abic-blue" size={32} />
                        <h2 className="text-xl font-bold text-gray-900">CRS Score vs. 67 Points</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Don't confuse the two! First, you must score <strong>67/100</strong> to be *eligible* to enter the pool. Once in the pool, you are ranked by your <strong>CRS Score</strong> (out of 1200).
                    </p>
                </section>

            </div>
        </ServiceLayout>
    );
}

const PointCard = ({ title, desc, max }: any) => (
    <div className="p-5 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-abic-blue transition-colors group">
        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-abic-blue transition-colors">{title}</h3>
        <p className="text-xs text-gray-500 mb-3">{desc}</p>
        <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{max}</span>
    </div>
);
