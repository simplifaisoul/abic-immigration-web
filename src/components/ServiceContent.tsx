import { AlertTriangle, CheckCircle2, HelpCircle, ShieldAlert } from "lucide-react";

interface ServiceContentProps {
    what: string;
    who: string[];
    risks: string[];
}

export default function ServiceContent({ what, who, risks }: ServiceContentProps) {
    return (
        <div className="space-y-12 mb-12">

            {/* What is it? */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-abic-blue">
                    <HelpCircle size={28} />
                    <h2 className="text-2xl font-bold text-gray-900">What is it?</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {what}
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Who is it for? */}
                <section className="bg-green-50/50 p-8 rounded-2xl border border-green-100">
                    <div className="flex items-center gap-3 mb-6 text-green-700">
                        <CheckCircle2 size={24} />
                        <h2 className="text-xl font-bold">Who is it for?</h2>
                    </div>
                    <ul className="space-y-4">
                        {who.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Risks */}
                <section className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-3 mb-6 text-red-700">
                        <AlertTriangle size={24} />
                        <h2 className="text-xl font-bold">Key Risks & Pitfalls</h2>
                    </div>
                    <ul className="space-y-4">
                        {risks.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                                <ShieldAlert size={16} className="text-red-400 shrink-0 mt-0.5" />
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

        </div>
    );
}
