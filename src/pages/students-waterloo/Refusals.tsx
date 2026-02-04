import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { FileSearch } from "lucide-react";

export default function WaterlooRefusals() {
    return (
        <ServiceLayout
            title="Common Student Refusals"
            subtitle="Overcoming study permit rejections in the Waterloo/Kitchener region."
            heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section>
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-8">
                        <h2 className="text-2xl font-bold text-red-900 mb-4">Why was I refused?</h2>
                        <p className="text-red-800 leading-relaxed">
                            Common reasons for refusals for Waterloo applicants include "Purpose of Visit" (officer doubts the study plan matches career goals) and "Financial Assets" (tuition + living costs in Ontario are high).
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-4">Our Strategy</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-abic-blue text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <p>Order GCMS Notes (Officer's detailed commentary).</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-abic-blue text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <p>Re-draft Statement of Purpose (SOP) to directly address concerns.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-abic-blue text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <p>Strengthen financial proof with liquid assets and sponsorship letters.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <FileSearch className="text-gray-400 mb-4" size={40} />
                            <h3 className="font-bold text-gray-900 mb-2">Don't guess. Know.</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Re-applying without seeing the notes is risky.
                            </p>
                            <Link to="/book-consultation" className="text-abic-blue font-bold hover:underline">Book Refusal Strategy Call &rarr;</Link>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}
