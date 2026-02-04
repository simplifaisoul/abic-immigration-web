import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { CheckCircle2, GraduationCap } from "lucide-react";

export default function WaterlooStudyPermit() {
    return (
        <ServiceLayout
            title="Study Permit: Waterloo Region"
            subtitle="Guidance for international students accepted to UWaterloo, Laurier, or Conestoga."
            heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Studying in the Tech Triangle</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Applying for a study permit for institutions in the Waterloo Region requires careful attention to detail. Officers often scrutinize financial capability given the cost of living in the GTA/Waterloo area.
                    </p>
                    <div className="flex gap-4 items-center bg-blue-50 p-4 rounded-xl text-blue-900 font-medium">
                        <GraduationCap size={24} />
                        <span>Designated Learning Numbers (DLI) are required.</span>
                    </div>
                </section>

                <section>
                    <h3 className="font-bold text-xl mb-4">Key Institutions We Serve</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {['University of Waterloo', 'Wilfrid Laurier University', 'Conestoga College'].map(school => (
                            <div key={school} className="flex items-center gap-2 p-4 border rounded-lg hover:border-abic-blue transition-colors">
                                <CheckCircle2 className="text-green-500" size={18} />
                                <span className="font-bold text-gray-800">{school}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-gray-900 text-white p-8 rounded-2xl flex justify-between items-center flex-wrap gap-4">
                    <div>
                        <h3 className="text-xl font-bold">First Time Applicant?</h3>
                        <p className="text-gray-400 text-sm">Ensure your Letter of Acceptance is unconditional.</p>
                    </div>
                    <Link to="/book-consultation" className="bg-abic-blue text-white border border-white/20 hover:bg-white hover:text-abic-blue px-6 py-2 rounded-full font-bold transition-all">
                        Start Application
                    </Link>
                </div>

            </div>
        </ServiceLayout>
    );
}
