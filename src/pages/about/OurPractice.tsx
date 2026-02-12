import ServiceLayout from "../../components/ServiceLayout";
import { motion } from "framer-motion";
import {
    CheckCircle2, Shield, FileText, Heart, Award, Users,
    GraduationCap, Globe, Briefcase, Home, Map, BookOpen, Lightbulb
} from "lucide-react";
import Testimonials from "../../components/Testimonials";

const StrengthCard = ({ icon, title, description, quote, author }: { icon: React.ReactNode, title: string, description: string, quote: string, author: string }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all h-full">
        <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
            </div>
        </div>
        <div className="mt-6 pl-4 border-l-4 border-abic-gold bg-gray-50 p-4 rounded-r-lg">
            <p className="text-sm italic text-gray-700 mb-2">"{quote}"</p>
            <p className="text-xs text-gray-500 font-semibold">— {author}</p>
        </div>
    </div>
);

const ExperienceItem = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex gap-4 items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
        <div className="mt-1 text-abic-blue shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">{title}</h4>
            <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                {children}
            </div>
        </div>
    </div>
);

export default function OurPractice() {
    return (
        <ServiceLayout
            title="Principal Consultant"
            subtitle="Regulated, Experienced, and Ethical Representation."
            heroImage={`${import.meta.env.BASE_URL}assets/misc/woman-sitting-on-gray-chair-1543895.jpg`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto text-left space-y-20"
            >

                {/* 1. INTRO & MIGRATION EXPERIENCE */}
                <section className="space-y-12">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
                        {/* Photo & Badge */}
                        <div className="w-full md:w-1/3 shrink-0 space-y-6">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/anthony-professional.jpg`}
                                alt="Anthony Wai Kean Cheah, RCIC"
                                className="w-full max-w-sm md:max-w-none mx-auto rounded-2xl shadow-xl border-4 border-white"
                            />
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm">
                                <p className="font-bold text-lg md:text-xl text-abic-blue font-montserrat">Anthony Wai Kean Cheah</p>
                                <p className="text-gray-500 font-medium text-sm md:text-base">RCIC (R511743)</p>
                                <p className="text-xs text-gray-400 mt-2 uppercase tracking-wide font-bold">Principal Consultant & Director</p>
                            </div>
                            <div className="flex justify-center">
                                <img src={`${import.meta.env.BASE_URL}assets/cicc-logo-new.png`} alt="CICC Regulated" className="h-24 md:h-32 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        {/* Immigration Practice Experience */}
                        <div className="flex-1 space-y-6 md:space-y-8 w-full">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat mb-3 md:mb-4">Immigration & Academic Experience</h2>
                                <h3 className="text-lg md:text-xl text-abic-blue font-semibold mb-3 md:mb-4">Immigration Practice Experience</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                                    Anthony Cheah brings a deep, practice-driven understanding of Canadian immigration law and procedures, developed through years of advising clients across a wide range of temporary and permanent residence pathways. His work is grounded in regulatory compliance, risk assessment, and strategic planning, rather than transactional or volume-based processing.
                                </p>
                                <div className="space-y-2">
                                    <ExperienceItem icon={<GraduationCap size={24} />} title="International Student Matters">
                                        <p>Including study permit applications, extensions, restorations of status, refusals, and post-graduation planning. Anthony has extensive experience assisting students transitioning from study permits to Post-Graduation Work Permits (PGWP) and onward to permanent residence pathways. He is particularly familiar with issues affecting students in Waterloo and Guelph, where academic program structure, compliance history, and timing play a critical role.</p>
                                    </ExperienceItem>

                                    <ExperienceItem icon={<Globe size={24} />} title="Express Entry & Skilled Immigration">
                                        <p>Providing eligibility assessments, CRS analysis, pathway comparisons, and long-term planning under Express Entry and Provincial Nominee Programs (PNPs). His approach emphasizes understanding eligibility thresholds, documentation risks, and realistic timelines, rather than short-term optimization.</p>
                                    </ExperienceItem>

                                    <ExperienceItem icon={<Briefcase size={24} />} title="Employer & Work Permit Matters">
                                        <p>Advising employers and foreign workers on work permit options, employer compliance obligations, and LMIA strategy. His work focuses on ensuring that both employers and applicants understand regulatory responsibilities, documentary requirements, and risk exposure before proceeding.</p>
                                    </ExperienceItem>

                                    <ExperienceItem icon={<Home size={24} />} title="Family Sponsorship & Refusal Strategy">
                                        <p>Assisting families with sponsorship planning, eligibility review, and refusal analysis. Anthony regularly works on cases involving prior refusals, complex family circumstances, and the need for careful explanation and supporting documentation.</p>
                                    </ExperienceItem>

                                    <ExperienceItem icon={<Map size={24} />} title="Visitor Visas & Temporary Status Issues">
                                        <p>Including visitor visas, extensions, refusals, and compliance matters. These cases often require careful assessment of travel history, purpose of visit, financial documentation, and ties to the home country.</p>
                                    </ExperienceItem>
                                </div>
                                <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-700 font-medium italic border-l-4 border-abic-blue pl-4 py-2 bg-blue-50 rounded-r-lg">
                                    "Across all categories, Anthony's role is not limited to form preparation. His work centers on explaining the law, assessing risk, identifying gaps, and guiding clients through compliant decision-making."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200" />

                {/* 2. LEADERSHIP & ACADEMIC BACKGROUD */}
                <section>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Leadership */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-50 text-abic-blue rounded-xl">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Leadership, Teaching & Professional Contribution</h3>
                            </div>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex gap-3">
                                    <CheckCircle2 size={20} className="text-abic-gold shrink-0 mt-0.5" />
                                    <span>Former Chairperson, Audit & Finance Committee — CAPIC</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={20} className="text-abic-gold shrink-0 mt-0.5" />
                                    <span>Former In-House Immigration Consultant, McMaster University</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={20} className="text-abic-gold shrink-0 mt-0.5" />
                                    <span>CICC Mentor to new and aspiring RCICs</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={20} className="text-abic-gold shrink-0 mt-0.5" />
                                    <span>Teaching Instructor, Ashton College (LMIA, Work Permits, TRV)</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={20} className="text-abic-gold shrink-0 mt-0.5" />
                                    <span>University-level Instructor (International) — Canada, USA, UK, Malaysia, Australia</span>
                                </li>
                            </ul>
                        </div>

                        {/* Academic */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-50 text-abic-blue rounded-xl">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Academic & Professional Background</h3>
                            </div>
                            <p className="text-gray-600 mb-6 text-sm">
                                Anthony’s academic background complements his immigration practice by providing a strong analytical, technical, and business foundation.
                            </p>
                            <div className="mb-6">
                                <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Education</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex gap-2">
                                        <GraduationCap size={16} className="text-gray-400 mt-0.5" />
                                        <span>Master of Science in Accounting (USA)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <GraduationCap size={16} className="text-gray-400 mt-0.5" />
                                        <span>Bachelor of Science in Computer Science (USA)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <GraduationCap size={16} className="text-gray-400 mt-0.5" />
                                        <span>Diploma in Business Management (UK)</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Core Competencies</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex gap-2">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5" />
                                        <span>Analytical rigor to assess complex fact patterns</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5" />
                                        <span>Systems thinking for multi-stage processes</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5" />
                                        <span>Attention to detail for regulatory work</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5" />
                                        <span>Business and financial literacy</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PROFESSIONAL APPROACH */}
                <section className="bg-gradient-to-r from-abic-blue to-blue-800 rounded-3xl p-10 text-white shadow-xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Professional Approach</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-left">
                            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <Lightbulb className="text-abic-gold mb-3" size={28} />
                                <h3 className="font-bold text-lg mb-2">Clarity over Complexity</h3>
                                <p className="text-sm text-blue-100">Explaining immigration rules in a way clients can understand.</p>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <Shield className="text-abic-gold mb-3" size={28} />
                                <h3 className="font-bold text-lg mb-2">Risk Awareness</h3>
                                <p className="text-sm text-blue-100">Identifying potential issues before they become refusals.</p>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <Map className="text-abic-gold mb-3" size={28} />
                                <h3 className="font-bold text-lg mb-2">Strategy before Action</h3>
                                <p className="text-sm text-blue-100">Ensuring the right pathway is chosen before applications are submitted.</p>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <CheckCircle2 className="text-abic-gold mb-3" size={28} />
                                <h3 className="font-bold text-lg mb-2">Professional Accountability</h3>
                                <p className="text-sm text-blue-100">Maintaining responsibility for every file handled.</p>
                            </div>
                        </div>
                        <p className="text-lg font-medium text-blue-50 italic">
                            "Clients who work with Anthony benefit from an advisor who approaches immigration matters with the same discipline, structure, and ethical standards expected in regulated professional services."
                        </p>
                    </div>
                </section>

                <hr className="border-gray-200" />

                {/* 4. KEY STRENGTHS (Original Content) */}
                <section className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Strengths</h2>
                        <p className="text-gray-600">Grounded in independent client and peer reviews over multiple years.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <StrengthCard
                            icon={<CheckCircle2 size={24} />}
                            title="1. Clear, Practical Communication"
                            description="Clients repeatedly highlight Anthony's ability to break down complex immigration law and policy into clear, understandable guidance, allowing them to make informed decisions with confidence."
                            quote="Anthony clarified how it all works and explained all the options clearly. He takes time to sit down and explain everything."
                            author="Ron T"
                        />

                        <StrengthCard
                            icon={<Shield size={24} />}
                            title="2. Ethical, Transparent Advice"
                            description="A defining strength of Anthony's practice is his commitment to honesty and realistic assessments, even when the advice is not what a client initially hopes to hear. No false promises."
                            quote="Ethical, honest, and transparent. No false promises. They tell you the truth upfront about what to expect before even starting the paperwork."
                            author="Alan De Zilva"
                        />

                        <StrengthCard
                            icon={<FileText size={24} />}
                            title="3. Attention to Detail & Strong Case Preparation"
                            description="Anthony is frequently described as thorough, precise, and detail-oriented, particularly in documentation-heavy applications."
                            quote="Strong attention to detail and excellent follow-up. Very thorough in preparing cases. Always submits on time. All our visas were approved."
                            author="Gary Rohilla & Kristel Estefani"
                        />

                        <StrengthCard
                            icon={<Heart size={24} />}
                            title="4. Patience, Accessibility & Client Care"
                            description="Many clients emphasize Anthony's patience and willingness to spend time addressing concerns, rather than rushing consultations or delegating communication."
                            quote="Very patient and knowledgeable. Easy to talk to and always willing to help. He gives the client all the time needed."
                            author="Client Reviews"
                        />

                        <StrengthCard
                            icon={<Award size={24} />}
                            title="5. Technical Expertise & Regulatory Precision"
                            description="Anthony is consistently recognized as highly knowledgeable with a deep understanding of immigration law, policy, and procedure."
                            quote="Very knowledgeable and professional. Experienced consultant with deep understanding of immigration policies and regulations. One of the most knowledgeable consultants I've interacted with."
                            author="Thompson Feng"
                        />

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

                {/* 5. TESTIMONIALS SUMMARY */}
                {/* 5. CLIENT TESTIMONIALS */}
                <div className="-mx-4 md:-mx-8 lg:-mx-16">
                    <Testimonials />
                </div>

            </motion.div>
        </ServiceLayout>
    );
}
