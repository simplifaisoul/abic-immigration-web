import ServiceLayout from "../components/ServiceLayout";
import {
    MapPin, School, Briefcase, GraduationCap,
    CheckCircle2, AlertTriangle, HelpCircle, BookOpen,
    Users, Star, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";

export default function StudentsWaterloo() {
    return (
        <ServiceLayout
            title="International Students in Waterloo"
            subtitle="Regulated Canadian Immigration Support by ABIC"
            heroImage="https://images.unsplash.com/photo-1550050218-c2a44ae954da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. INTRO & VALUE PROP */}
                <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Waterloo is one of Canada’s most respected education hubs and a top destination for international students. At <strong>Above and Beyond Immigration Consultant (ABIC)</strong>, we provide regulated, compliance-first immigration advice to help international students in Waterloo study, work, and plan their future in Canada with clarity and confidence.
                    </p>
                    <p className="text-gray-600 font-medium border-l-4 border-abic-gold pl-4 py-1">
                        All guidance is provided by a Regulated Canadian Immigration Consultant (RCIC) and is tailored to each student’s individual academic and immigration circumstances.
                    </p>
                </section>

                {/* 2. WHY STUDY IN WATERLOO */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <MapPin className="text-abic-blue" /> Why Study in Waterloo, Ontario?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        Waterloo offers a unique combination of academic excellence, career opportunities, and long-term immigration potential, making it one of the strongest study destinations in Canada.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <GraduationCap className="text-abic-blue mb-4" size={32} />
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Academic Excellence</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="font-semibold text-abic-blue">University of Waterloo</li>
                                <li>Internationally recognized for engineering, technology, & co-op.</li>
                                <li className="font-semibold text-abic-blue mt-2">Wilfrid Laurier University</li>
                                <li>Well known for business, economics, & management.</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <Briefcase className="text-abic-blue mb-4" size={32} />
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Career & Co-op</h3>
                            <p className="text-sm text-gray-600 mb-3">Part of Canada's Technology Triangle with strong connections to tech firms and start-ups.</p>
                            <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>Structured co-op programs</li>
                                <li>Canadian work experience</li>
                                <li>Pathways to PGWP & Express Entry</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <School className="text-abic-blue mb-4" size={32} />
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Student-Friendly Living</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Safer environment</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> More affordable than Toronto</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Strong transit & support</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. IMMIGRATION ADVANTAGES */}
                <section className="bg-blue-900 text-white p-10 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Star className="text-abic-gold" /> Immigration Advantages for Waterloo Students
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-blue-100 mb-4">Studying in Waterloo may support long-term immigration planning through:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 font-medium">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-abic-gold">1</div>
                                        Post-Graduation Work Permit (PGWP)
                                    </li>
                                    <li className="flex items-center gap-3 font-medium">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-abic-gold">2</div>
                                        Canadian Experience Class (CEC)
                                    </li>
                                    <li className="flex items-center gap-3 font-medium">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-abic-gold">3</div>
                                        Express Entry
                                    </li>
                                    <li className="flex items-center gap-3 font-medium">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-abic-gold">4</div>
                                        Ontario Immigrant Nominee Program (OINP)
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                                <AlertTriangle className="text-abic-gold mb-3" size={28} />
                                <h4 className="font-bold text-lg mb-2">Important Note</h4>
                                <p className="text-sm text-blue-100 leading-relaxed">
                                    Studying in Canada does not guarantee permanent residence, but early, informed planning can significantly reduce future risks and missed opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. HOW ABIC SUPPORTS */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">How ABIC Supports Waterloo Students Locally</h2>
                    <p className="text-gray-600 mb-8">
                        ABIC understands the academic, compliance, and timing challenges faced by students studying in Waterloo. Our services go beyond application filing — we focus on strategy, compliance, and long-term outcomes.
                    </p>

                    <div className="space-y-8">
                        {/* Service Item 1 */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="shrink-0 w-12 h-12 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">Local Student-Focused Experience</h3>
                                <p className="text-gray-600 text-sm mb-2">We regularly assist students from <strong>UWaterloo, Wilfrid Laurier, and local colleges</strong>.</p>
                                <p className="text-gray-600 text-sm">We are familiar with academic calendars, graduation timelines, co-op issues, and PGWP timing risks unique to Waterloo programs.</p>
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="shrink-0 w-12 h-12 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">Study Permits & Extensions</h3>
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600 mb-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-blue rounded-full" /> New study permit applications</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-blue rounded-full" /> Study permit extensions</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-blue rounded-full" /> Change of DLI or program</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-abic-blue rounded-full" /> Study permit refusals</li>
                                </ul>
                                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html" target="_blank" rel="noreferrer" className="text-xs text-abic-blue hover:underline flex items-center gap-1">
                                    Official IRCC Reference <ArrowRight size={10} />
                                </a>
                            </div>
                        </div>

                        {/* Service Item 3 */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="shrink-0 w-12 h-12 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">Post-Graduation Work Permit (PGWP)</h3>
                                <p className="text-gray-600 text-sm mb-2">Refusal prevention and strategy. We guide you on eligibility, timing, required documents, and common risks.</p>
                                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html" target="_blank" rel="noreferrer" className="text-xs text-abic-blue hover:underline flex items-center gap-1">
                                    Official PGWP Information <ArrowRight size={10} />
                                </a>
                            </div>
                        </div>

                        {/* Service Item 4 */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="shrink-0 w-12 h-12 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">Work Permits for Students & Graduates</h3>
                                <p className="text-gray-600 text-sm mb-2">Guidance on on-campus/off-campus work rules, Spousal Open Work Permits, and Co-op Work Permits.</p>
                                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html" target="_blank" rel="noreferrer" className="text-xs text-abic-blue hover:underline flex items-center gap-1">
                                    Official IRCC Reference <ArrowRight size={10} />
                                </a>
                            </div>
                        </div>

                        {/* Service Item 5 */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                                <AlertTriangle size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">Refusals & Compliance Support</h3>
                                <p className="text-gray-600 text-sm mb-2">For students facing refusals or compliance concerns, we provide refusal letter analysis and re-application strategies.</p>
                                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/refused.html" target="_blank" rel="noreferrer" className="text-xs text-abic-blue hover:underline flex items-center gap-1">
                                    Refusal Information <ArrowRight size={10} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200" />

                {/* 5. LEADERSHIP PROFILE */}
                <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/anthony-professional.jpg`}
                                alt="Anthony Cheah RCIC"
                                className="w-full rounded-2xl shadow-lg mb-4"
                            />
                            <div className="text-center">
                                <h4 className="font-bold text-abic-blue">Anthony Cheah, RCIC</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Mentor, Educator & University Specialist</p>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900">Leadership Behind ABIC</h2>
                            <p className="text-gray-600 text-sm">
                                ABIC is led by Anthony Cheah, a Regulated Canadian Immigration Consultant (RCIC) with a rare combination of in-house university immigration experience, academic instruction, and RCIC mentorship.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                                        <School size={16} className="text-abic-gold" /> In-House University Experience
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        Former in-house consultant for McMaster & York University. Available to advise students on how universities internally assess enrolment, compliance, and document issuance.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                                        <Users size={16} className="text-abic-gold" /> Academic Instructor
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        Teaches and mentors immigration students and professionals. Provides clear, structured, and education-driven guidance aligned with IRPA/IRPR.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border-l-4 border-abic-blue shadow-sm">
                                <h4 className="font-bold text-gray-900 text-sm mb-1">Why This Matters for Waterloo Students</h4>
                                <p className="text-xs text-gray-600 italic">
                                    "This means guidance from an RCIC who understands both IRCC rules and university systems—aligning academic decisions with immigration strategy."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ */}
                <section>
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Waterloo Students – Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <FAQItem
                            q="Do I need a study permit to study in Waterloo?"
                            a="Yes. Most international students require a valid study permit."
                            link="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html"
                        />
                        <FAQItem
                            q="When should I apply to extend my study permit?"
                            a="At least 30–90 days before expiry to avoid loss of status."
                            link="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/extend-study-permit.html"
                        />
                        <FAQItem
                            q="Can I work while studying in Waterloo?"
                            a="In many cases, yes — if your study permit allows it."
                            link="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html"
                        />
                        <FAQItem
                            q="What is the PGWP and why is it important?"
                            a="It allows eligible graduates to gain Canadian work experience that may support PR pathways."
                            link="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html"
                        />
                        <FAQItem
                            q="Does studying in Waterloo guarantee permanent residence?"
                            a="No. Studying alone does not guarantee PR, but it can support eligibility under certain programs."
                        />
                        <FAQItem
                            q="Can ABIC help if I receive a refusal?"
                            a="Yes. ABIC assists with refusal analysis and re-application strategies where appropriate."
                        />
                    </div>
                </section>

                {/* 7. CLIENT TESTIMONIALS */}
                <div className="-mx-4 md:-mx-8 lg:-mx-16">
                    <Testimonials />
                </div>

                {/* 8. BOOK CONSULTATION CTA */}
                <section className="bg-abic-blue text-white rounded-3xl p-10 text-center shadow-xl">
                    <h2 className="text-3xl font-bold mb-4">Book a Consultation – Waterloo Students</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        If you are studying in Waterloo and want guidance from an RCIC who understands both immigration law and how universities operate internally, ABIC is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book-consultation" className="bg-abic-gold text-abic-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white transition-colors">
                            Book a Consultation
                        </Link>
                    </div>
                    <p className="mt-6 text-sm opacity-75">
                        Student-friendly online consultations available, starting at <span className="text-white font-bold">$45/session</span>
                    </p>
                </section>

                {/* 9. DISCLAIMER */}
                <section className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                    <div className="flex gap-3 items-start">
                        <AlertTriangle className="text-yellow-600 shrink-0 mt-1" size={20} />
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Important Disclaimer</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                This page is provided for general educational purposes only and does not constitute legal advice. Immigration laws and policies may change. Outcomes depend on individual circumstances and IRCC discretion. A consultation with a Regulated Canadian Immigration Consultant (RCIC) is required for personalized advice.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const FAQItem = ({ q, a, link }: { q: string, a: string, link?: string }) => (
    <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow">
        <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
            <HelpCircle size={18} className="text-abic-blue shrink-0 mt-1" /> {q}
        </h4>
        <p className="text-gray-600 text-sm mb-2">{a}</p>
        {link && (
            <a href={link} target="_blank" rel="noreferrer" className="text-xs text-abic-blue hover:underline break-all">
                {link}
            </a>
        )}
    </div>
);
