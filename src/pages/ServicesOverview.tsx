import ServiceLayout from "../components/ServiceLayout";
import { Plane, GraduationCap, Briefcase, Globe, Heart, Building2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesOverview() {
    return (
        <ServiceLayout
            title="Our Services"
            subtitle="Comprehensive immigration solutions tailored to your unique journey."
            heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-12">

                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<Plane size={32} />}
                        title="Temporary Status"
                        desc="Visit, study, or work temporarily in Canada."
                        links={[
                            { label: "Visitor Visa", to: "/visitor-visa" },
                            { label: "Study in Canada", to: "/study-in-canada" },
                            { label: "Work Permits", to: "/work-permit" }
                        ]}
                        color="text-blue-500 bg-blue-50"
                    />
                    <ServiceCard
                        icon={<Globe size={32} />}
                        title="Express Entry"
                        desc="Fast-track pathways for skilled workers to become Permanent Residents."
                        links={[
                            { label: "Federal Skilled Worker", to: "/express-entry/fsw" },
                            { label: "Canadian Experience Class", to: "/express-entry/cec" },
                            { label: "Skilled Trades", to: "/express-entry/fst" }
                        ]}
                        color="text-purple-500 bg-purple-50"
                    />
                    <ServiceCard
                        icon={<Heart size={32} />}
                        title="Family Sponsorship"
                        desc="Reunite with your loved ones in Canada."
                        links={[
                            { label: "Spousal Sponsorship", to: "/family-sponsorship/spousal" },
                            { label: "Common-Law", to: "/family-sponsorship/common-law" },
                            { label: "Parents & Grandparents", to: "/family-sponsorship" }
                        ]}
                        color="text-pink-500 bg-pink-50"
                    />
                    <ServiceCard
                        icon={<GraduationCap size={32} />}
                        title="Student Services"
                        desc="Specialized support for students in Waterloo & Guelph regions."
                        links={[
                            { label: "Waterloo Students", to: "/students/waterloo" },
                            { label: "Guelph Students", to: "/students/guelph" },
                            { label: "PGWP", to: "/students/waterloo/pgwp" }
                        ]}
                        color="text-green-500 bg-green-50"
                    />
                    <ServiceCard
                        icon={<Building2 size={32} />}
                        title="For Employers"
                        desc="Hire global talent and manage compliance."
                        links={[
                            { label: "LMIA Process", to: "/employers-lmia/process" },
                            { label: "Recruitment", to: "/employers-lmia/recruitment" },
                            { label: "Compliance", to: "/employers-lmia/compliance" }
                        ]}
                        color="text-orange-500 bg-orange-50"
                    />
                    <ServiceCard
                        icon={<Briefcase size={32} />}
                        title="Permanent Residence"
                        desc="Pathways to long-term settlement and citizenship."
                        links={[
                            { label: "PR Pathways", to: "/pr-citizenship/pr" },
                            { label: "Citizenship", to: "/pr-citizenship/citizenship" },
                            { label: "Provincial Nominees", to: "/pr-citizenship" }
                        ]}
                        color="text-red-500 bg-red-50"
                    />
                </section>

                <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4 font-montserrat">Not sure where to start?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Immigration can be complex. Let us assess your profile and recommend the best pathway for you and your family.
                    </p>
                    <Link to="/book-consultation" className="inline-block bg-abic-gold hover:bg-yellow-500 text-abic-blue font-bold px-8 py-4 rounded-xl transition-colors shadow-lg">
                        Book an Assessment
                    </Link>
                </div>

            </div>
        </ServiceLayout>
    );
}

const ServiceCard = ({ icon, title, desc, links, color }: any) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${color}`}>
            {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{desc}</p>
        <ul className="space-y-2">
            {links.map((link: any) => (
                <li key={link.label}>
                    <Link to={link.to} className="flex items-center text-sm font-medium text-gray-600 hover:text-abic-blue group/link">
                        <ChevronRight size={16} className="text-gray-400 group-hover/link:text-abic-gold transition-colors" />
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
