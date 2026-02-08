import ServiceLayout from "../../components/ServiceLayout";

import { motion } from "framer-motion";

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
                className="max-w-4xl mx-auto text-left space-y-12"
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
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 font-montserrat">About Us</h2>
                        <div className="prose prose-lg text-gray-600 leading-relaxed font-light">
                            <p className="mb-4">
                                <strong>Anthony Cheah, RCIC (R511743)</strong><br />
                                Principal Consultant & Director<br />
                                Above & Beyond Immigration Consultant (ABIC)
                            </p>
                            <p className="mb-4">
                                Anthony Cheah is a Regulated Canadian Immigration Consultant (RCIC) with <strong>over 13 years</strong> of professional experience advising individuals, families, international students, and employers on Canadian immigration matters. He is the Director and Principal Consultant of <strong>Above & Beyond Immigration Consultant (ABIC)</strong>, a practice known for its ethical standards, technical accuracy, and compliance-driven approach.
                            </p>
                            <p>
                                Anthony is widely respected for his ability to manage <strong>complex, high-risk, and sensitive immigration cases</strong>, including refusals, discretionary applications, and employer-compliance matters. His practice emphasizes realistic advice, strong documentation, and strict adherence to Canadian immigration law and policy.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 2. PRACTICE FOCUS */}
                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Practice Focus</h3>
                    <p className="text-gray-600 mb-6">Anthony advises clients across a broad range of Canadian immigration pathways, including:</p>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Study Permits, Work Permits, and PGWP</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Temporary Resident Visas (TRV)</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Express Entry and Provincial Nominee Programs</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Family Sponsorship</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Business, Investment, and Employer-Driven Applications</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> LMIA-based employer work permits</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Humanitarian & Compassionate (H&C) applications</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Temporary Resident Permits (TRPs)</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Same-sex marriage and non-traditional family cases</li>
                        <li className="flex gap-3 items-start text-gray-700 bg-gray-50 p-3 rounded-lg"><span className="text-abic-gold font-bold">✓</span> Refusals and re-applications</li>
                    </ul>
                    <div className="mt-6 bg-blue-50 border-l-4 border-abic-blue p-6 rounded-r-xl">
                        <p className="text-gray-800 italic text-sm">
                            "He is particularly experienced in files requiring strong legal analysis, credibility assessment, and discretionary decision-making, where attention to detail and regulatory compliance are critical."
                        </p>
                    </div>
                </section>

                {/* 3. EDUCATION & CREDENTIALS */}
                <section className="bg-white border border-gray-100 shadow-lg p-8 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-abic-blue/5 rounded-bl-full -mr-8 -mt-8"></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat relative z-10">Education & Professional Credentials</h3>
                    <p className="text-gray-700 mb-6 relative z-10">Anthony brings a multidisciplinary academic and professional background to his immigration practice:</p>
                    <ul className="space-y-4 relative z-10">
                        <CredentialItem title="Regulated Canadian Immigration Consultant (RCIC)" subtitle="Licensed by the College of Immigration and Citizenship Consultants (CICC) — License No.: R511743" icon="⚖️" />
                        <CredentialItem title="Master of Science (MSc) in Accounting" subtitle="United States" icon="🎓" />
                        <CredentialItem title="Bachelor of Science (BSc) in Computer Science" subtitle="United States" icon="💻" />
                        <CredentialItem title="Diploma in Business Management" subtitle="United Kingdom" icon="📜" />
                    </ul>
                    <p className="text-gray-500 mt-6 text-sm relative z-10 border-t border-gray-100 pt-4">
                        This background supports his structured, analytical approach—particularly in business immigration, employer compliance, financial documentation, and complex case strategy.
                    </p>
                </section>

                {/* 4. LEADERSHIP */}
                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Professional Leadership & Teaching</h3>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <p className="mb-4 text-gray-600">In addition to private practice, Anthony has contributed extensively to the profession:</p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center text-gray-800"><span className="w-2 h-2 bg-abic-gold rounded-full"></span> Former Chairperson, Audit & Finance Committee — CAPIC</li>
                            <li className="flex gap-3 items-center text-gray-800"><span className="w-2 h-2 bg-abic-gold rounded-full"></span> Former In-House Immigration Consultant, McMaster University</li>
                            <li className="flex gap-3 items-center text-gray-800"><span className="w-2 h-2 bg-abic-gold rounded-full"></span> CICC Mentor for new and aspiring RCICs</li>
                            <li className="flex gap-3 items-center text-gray-800"><span className="w-2 h-2 bg-abic-gold rounded-full"></span> Teaching Instructor, Ashton College (LMIA, Work Permits, TRV)</li>
                            <li className="flex gap-3 items-center text-gray-800"><span className="w-2 h-2 bg-abic-gold rounded-full"></span> University-level instructor internationally, including Canada, the U.S., the U.K., Malaysia, and Australia</li>
                        </ul>
                        <p className="mt-4 text-sm font-bold text-abic-blue uppercase tracking-wide">
                            These roles reflect his standing as both a practitioner and educator within the immigration field.
                        </p>
                    </div>
                </section>

                {/* 5. REPUTATION */}
                <section className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-abic-gold/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-6 text-white font-montserrat">Professional Reputation</h3>
                        <p className="text-white/80 mb-8 max-w-2xl text-lg font-light">
                            Clients and peers consistently describe Anthony as knowledgeable, professional, ethical, and transparent. He is frequently praised for:
                        </p>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                            <li className="flex gap-3 items-center text-white/90"><span className="text-abic-gold">★</span> Clear and practical explanations</li>
                            <li className="flex gap-3 items-center text-white/90"><span className="text-abic-gold">★</span> Patient, one-on-one guidance</li>
                            <li className="flex gap-3 items-center text-white/90"><span className="text-abic-gold">★</span> Strong attention to detail</li>
                            <li className="flex gap-3 items-center text-white/90"><span className="text-abic-gold">★</span> Honest advice with realistic expectations</li>
                            <li className="flex gap-3 items-center text-white/90"><span className="text-abic-gold">★</span> Avoidance of false promises</li>
                        </div>
                        <p className="mt-6 text-sm text-white/60">
                            His reputation is built on long-term trust, compliance, and consistency, rather than volume-based or sales-driven outcomes.
                        </p>
                    </div>
                </section>

                {/* 5.5. CREDENTIAL BADGES - ENHANCED */}
                <section className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Accreditations</h3>
                    <p className="text-gray-500 text-sm mb-12 max-w-2xl mx-auto">Regulated, certified, and recognized by leading immigration and education bodies</p>

                    {/* Regulatory Bodies - LARGER & MORE PROMINENT */}
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-12">
                        <div className="group">
                            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-abic-blue">
                                <img src="/assets/logos/CICC logo.png" alt="CICC Regulated" className="h-28 md:h-32 object-contain group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-xs text-gray-500 mt-3 font-semibold">CICC Regulated</p>
                        </div>
                        <div className="group">
                            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-abic-blue">
                                <img src="/assets/logos/capic.jpg" alt="CAPIC Member" className="h-24 md:h-28 object-contain group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-xs text-gray-500 mt-3 font-semibold">CAPIC Member</p>
                        </div>
                        <div className="group">
                            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-abic-blue">
                                <img src="/assets/logos/ICEF.jpeg" alt="ICEF Agent" className="h-24 md:h-28 object-contain group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-xs text-gray-500 mt-3 font-semibold">ICEF Certified</p>
                        </div>
                    </div>

                    {/* Verify Button */}
                    <div className="mb-12">
                        <a
                            href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-abic-blue text-white font-bold px-8 py-4 rounded-full hover:bg-abic-gold hover:text-abic-blue transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <span className="bg-white/20 p-1 rounded-full"><img src="/assets/logos/CICC logo.png" className="h-6 w-6 brightness-0 invert" /></span>
                            Verify RCIC Status: R511743
                        </a>
                    </div>

                    {/* Universities */}
                    <div className="border-t border-gray-200 pt-8 max-w-2xl mx-auto">
                        <p className="text-gray-400 text-xs font-bold uppercase mb-6">Academic Background</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* As requested: University Badges */}
                            <img src="/assets/logos/Ashton-Logo.png" alt="Ashton College" className="h-10 object-contain" />
                            {/* Using text fallback for others if logos missing, or generic icons */}
                            <div className="flex items-center gap-2 font-bold text-gray-500"><span className="text-2xl">🎓</span> McMaster University</div>
                            <div className="flex items-center gap-2 font-bold text-gray-500"><span className="text-2xl">🏛️</span> University of Guelph</div>
                        </div>
                    </div>
                </section>

                {/* 6. WHY CHOOSE ABIC */}
                <section className="text-center py-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 font-montserrat">Why Clients Choose ABIC</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full font-bold text-gray-700">Regulated and experienced RCIC leadership</span>
                        <span className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full font-bold text-gray-700">Compliance-first, risk-aware strategy</span>
                        <span className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full font-bold text-gray-700">Transparent advice and realistic assessments</span>
                        <span className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full font-bold text-gray-700">Strong documentation and preparation</span>
                        <span className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full font-bold text-gray-700">Genuine client care from consultation to decision</span>
                    </div>
                </section>

            </motion.div>
        </ServiceLayout>
    );
}

const CredentialItem = ({ title, subtitle, icon }: any) => (
    <li className="bg-white p-4 rounded-xl border border-blue-100 flex items-start sm:items-center gap-4">
        <div className="bg-abic-blue/10 p-2 rounded-lg text-abic-blue shrink-0 text-xl font-bold">
            {icon || "📜"}
        </div>
        <div>
            <span className="font-bold text-gray-900 block">{title}</span>
            <span className="text-sm text-gray-500">{subtitle}</span>
        </div>
    </li>
);
