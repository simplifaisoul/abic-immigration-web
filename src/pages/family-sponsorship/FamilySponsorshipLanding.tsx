import ServiceLayout from "../../components/ServiceLayout";
import { Link } from "react-router-dom";
import { Heart, Users } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2000";

export default function FamilySponsorshipLanding() {
    return (
        <ServiceLayout
            title="Family Sponsorship"
            subtitle="Reuniting families in Canada is a top priority."
            heroImage={HERO_IMAGE}
        >
            <div className="space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Bring Your Loved Ones Home</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Canadian citizens and permanent residents can sponsor their loved ones to live, work, and study in Canada.
                        We assist with Spousal, Common-Law, Conjugal, Parent/Grandparent, and Dependent Child sponsorships.
                    </p>
                </section>

                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/family-sponsorship/spousal" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center">
                        <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Heart className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Spousal Sponsorship</h3>
                        <p className="text-gray-500 text-sm">Sponsor your legally married spouse from inside or outside Canada.</p>
                    </Link>

                    <Link to="/family-sponsorship/common-law" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center">
                        <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Users className="w-8 h-8 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Common-Law Partner</h3>
                        <p className="text-gray-500 text-sm">For couples who have lived together for at least 12 consecutive months.</p>
                    </Link>

                    <Link to="/family-sponsorship/same-sex" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Users className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-abic-blue">Same-Sex Couples</h3>
                        <p className="text-gray-500 text-sm">Equal rights for same-sex partners under all class of sponsorship.</p>
                    </Link>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl text-center">
                    <h3 className="font-bold text-xl mb-4">Other Family Class Options</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-white px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium">Parents & Grandparents (PGP)</span>
                        <span className="bg-white px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium">Dependent Children</span>
                        <span className="bg-white px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium">Lonely Canadian (Last Living Relative)</span>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
}
