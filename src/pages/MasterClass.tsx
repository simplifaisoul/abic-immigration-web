import ServiceLayout from "../components/ServiceLayout";
import { GraduationCap } from "lucide-react";

export default function MasterClass() {
    return (
        <ServiceLayout
            title="ABIC Master Class"
            subtitle="Education & Training Platform for Immigration Professionals."
            heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-blue-50 p-6 rounded-full text-abic-blue mb-8 animate-pulse">
                    <GraduationCap size={64} />
                </div>
                <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">Coming Soon</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                    We are building a comprehensive platform for RCIC EPE preparation, CPD courses, and practical training.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                    <Feature title="RCIC EPE Prep" desc="Exam preparation strategies and mock questions." />
                    <Feature title="CPD Courses" desc="Continuing Professional Development for licensed consultants." />
                    <Feature title="AI in Practice" desc="Ethical use of technology in immigration consulting." />
                    <Feature title="LMIA Certification" desc="Specialized training for employer-based applications." />
                </div>
            </div>
        </ServiceLayout>
    );
}

const Feature = ({ title, desc }: any) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500">{desc}</p>
    </div>
);
