import ServiceLayout from "../../components/ServiceLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, FileText, Heart, Award, Users } from "lucide-react";

const StrengthCard = ({ icon, title, description, quote, author }: { icon: React.ReactNode, title: string, description: string, quote: string, author: string }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
        <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
        <div className="mt-6 pl-4 border-l-4 border-abic-gold bg-gray-50 p-4 rounded-r-lg">
            <p className="text-sm italic text-gray-700 mb-2">"{quote}"</p>
            <p className="text-xs text-gray-500 font-semibold">— {author}</p>
        </div>
    </div>
);

export default function OurPractice() {
    return (
        <ServiceLayout
            title="Principal Consultant"
            subtitle="Regulated, Experienced, and Ethical Representation."
            heroImage="/assets/misc/woman-sitting-on-gray-chair-1543895.jpg"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto text-left space-y-16"
            >

                {/* 1. ANTHONY CHEAH BIO */}
                <section className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Photo */}
                    <div className="w-full md:w-1/3 shrink-0">
                        <img
                            src="/assets/anthony-professional.jpg"
                            alt="Anthony Wai Kean Cheah, RCIC"
                            className="w-full rounded-2xl shadow-xl border-4 border-white"
                        />
                        <div className="mt-6 bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                            <p className="font-bold text-abic-blue">Anthony Wai Kean Cheah</p>
                            <p className="text-sm text-gray-500">RCIC (R511743)</p>
                            <p className="text-xs text-gray-400 mt-2 uppercase tracking-wide">Principal Consultant & Director</p>
                        </div>

                        {/* CICC Badge */}
                        <div className="mt-6 flex justify-center">
                            <img src="/assets/cicc-logo-new.png" alt="CICC Regulated" className="h-32 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 font-montserrat">Anthony Wai Kean Cheah</h2>
                        <p className="text-xl text-abic-blue font-semibold">Key Strengths (Grounded in Client Reviews)</p>
                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p>
                                Anthony's professional strengths are not marketing claims; they are consistently reflected in independent client and peer reviews over multiple years. The following areas are most frequently cited:
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200" />

                {/* 2. KEY STRENGTHS */}
                <section className="space-y-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Strengths</h2>
                        <p className="text-gray-600">Consistently recognized by clients for integrity, expertise, and genuine care.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Strength 1 */}
                        <StrengthCard
                            icon={<CheckCircle2 size={24} />}
                            title="1. Clear, Practical Communication"
                            description="Clients repeatedly highlight Anthony's ability to break down complex immigration law and policy into clear, understandable guidance, allowing them to make informed decisions with confidence."
                            quote="Anthony clarified how it all works and explained all the options clearly. He takes time to sit down and explain everything."
                            author="Ron T"
                        />

                        {/* Strength 2 */}
                        <StrengthCard
                            icon={<Shield size={24} />}
                            title="2. Ethical, Transparent Advice"
                            description="A defining strength of Anthony's practice is his commitment to honesty and realistic assessments, even when the advice is not what a client initially hopes to hear. No false promises."
                            quote="Ethical, honest, and transparent. No false promises. They tell you the truth upfront about what to expect before even starting the paperwork."
                            author="Alan De Zilva"
                        />

                        {/* Strength 3 */}
                        <StrengthCard
                            icon={<FileText size={24} />}
                            title="3. Attention to Detail & Strong Case Preparation"
                            description="Anthony is frequently described as thorough, precise, and detail-oriented, particularly in documentation-heavy applications."
                            quote="Strong attention to detail and excellent follow-up. Very thorough in preparing cases. Always submits on time. All our visas were approved."
                            author="Gary Rohilla & Kristel Estefani"
                        />

                        {/* Strength 4 */}
                        <StrengthCard
                            icon={<Heart size={24} />}
                            title="4. Patience, Accessibility & Client Care"
                            description="Many clients emphasize Anthony's patience and willingness to spend time addressing concerns, rather than rushing consultations or delegating communication."
                            quote="Very patient and knowledgeable. Easy to talk to and always willing to help. He gives the client all the time needed."
                            author="Client Reviews"
                        />

                        {/* Strength 5 */}
                        <StrengthCard
                            icon={<Award size={24} />}
                            title="5. Technical Expertise & Regulatory Precision"
                            description="Anthony is consistently recognized as highly knowledgeable with a deep understanding of immigration law, policy, and procedure."
                            quote="Very knowledgeable and professional. Experienced consultant with deep understanding of immigration policies and regulations. One of the most knowledgeable consultants I've interacted with."
                            author="Thompson Feng"
                        />

                        {/* Strength 6 */}
                        <StrengthCard
                            icon={<Users size={24} />}
                            title="6. Reliability, Trust & Professional Integrity"
                            description="Trust is a recurring theme in long-term client feedback. Clients frequently describe Anthony as reliable, dependable, and genuinely invested in their outcomes."
                            quote="Trustworthy, reliable, and extremely knowledgeable. Worth every penny spent. Professional and honest service."
                            author="Long-term Clients"
                        />
                    </div>
                </section>

                <hr className="border-gray-200" />

                {/* 3. SUMMARY */}
                <section className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border border-blue-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Summary of Strengths</h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                        Taken together, client reviews consistently reflect Anthony as:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                            <span className="text-gray-700 font-medium">Clear and practical in communication</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                            <span className="text-gray-700 font-medium">Ethical, honest, and transparent</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                            <span className="text-gray-700 font-medium">Highly detail-oriented and thorough</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                            <span className="text-gray-700 font-medium">Patient and client-focused</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                            <span className="text-gray-700 font-medium">Technically strong and compliance-driven</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                            <span className="text-gray-700 font-medium">Trustworthy and reliable over the long term</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-center mt-8 italic">
                        These strengths underpin a professional reputation built on integrity, expertise, and genuine client care, rather than volume-based processing or promotional claims.
                    </p>
                </section>

            </motion.div>
        </ServiceLayout>
    );
}
