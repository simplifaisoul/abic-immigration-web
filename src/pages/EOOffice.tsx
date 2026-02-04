import ServiceLayout from "../components/ServiceLayout";
import { Lock, FileText, CheckSquare, UploadCloud, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function EOOffice() {
    return (
        <ServiceLayout
            title="eOffice Portal"
            subtitle="Secure. Efficient. Transparent. Manage your immigration application from anywhere in the world."
            heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. INTRO - SECURE PORTAL */}
                <section className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                        <Lock size={14} /> 256-Bit SSL Encrypted
                    </div>
                    <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-6">Your Case, At Your Fingertips</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The ABIC eOffice is our proprietary client portal designed to streamline the complex immigration process. No more lost emails or scattered documents. Everything you need is in one secure place.
                    </p>
                </section>

                {/* 2. FEATURES GRID */}
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<CheckSquare className="text-white" size={24} />}
                        title="Smart Checklists"
                        desc="Personalized document checklists tailored to your specific case type. Know exactly what you need to provide."
                        color="bg-abic-blue"
                    />
                    <FeatureCard
                        icon={<UploadCloud className="text-white" size={24} />}
                        title="Secure Upload"
                        desc="Drag and drop your documents directly into the portal. We review them instantly for clarity and completeness."
                        color="bg-abic-red"
                    />
                    <FeatureCard
                        icon={<FileText className="text-white" size={24} />}
                        title="Forms Library"
                        desc="Access the latest IRCC forms and helpful templates for employment letters and affidavits."
                        color="bg-abic-gold"
                    />
                    <FeatureCard
                        icon={<MessageSquare className="text-white" size={24} />}
                        title="Direct Messaging"
                        desc="Communicate securely with your RCIC. Keep all case-related correspondence in one searchable thread."
                        color="bg-gray-800"
                    />
                </section>

                <hr className="border-gray-100" />

                {/* 3. MIGRATED RESOURCES */}
                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Client Resources</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-abic-blue transition-colors group">
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Government Links</h4>
                            <p className="text-sm text-gray-600 mb-4">Quick access to official IRCC processing times, fee payment portals, and status checks.</p>
                            <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-abic-blue">Open IRCC &rarr;</a>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-abic-blue transition-colors group">
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Preparation Guides</h4>
                            <p className="text-sm text-gray-600 mb-4">Download PDF guides for IELTS preparation, medical exams, and police certificates.</p>
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-abic-blue">Client Access Only &rarr;</span>
                        </div>
                    </div>
                </section>

                {/* LOGIN CTA */}
                <div className="bg-gray-900 text-white p-12 rounded-3xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Existing Client?</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Log in to view your application status and pending tasks.
                    </p>
                    <button className="bg-abic-blue hover:bg-white hover:text-abic-blue border border-transparent hover:border-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg">
                        Login to eOffice
                    </button>
                    <p className="mt-6 text-xs text-gray-500">
                        Not a client yet? <Link to="/book-consultation" className="text-abic-gold hover:underline">Book a consultation</Link> to get access.
                    </p>
                </div>

            </div>
        </ServiceLayout>
    );
}

const FeatureCard = ({ icon, title, desc, color }: any) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center shadow-lg mb-6`}>
            {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
);
