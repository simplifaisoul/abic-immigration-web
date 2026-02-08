export { default as FamilySponsorship } from "./FamilySponsorshipLanding";
export { default as SpousalSponsorship } from "./Spousal";
export { default as CommonLaw } from "./CommonLaw";
export { default as SameSex } from "./SameSex";

import ServiceLayout from "../../components/ServiceLayout";
const HERO_IMAGE = "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2000";

export const FamilySponsorshipPlaceholder = () => (
    <ServiceLayout title="Family Sponsorship" subtitle="Reuniting families in Canada." heroImage={HERO_IMAGE}>
        <div className="space-y-8">
            <p className="text-lg">Canada prioritizes family reunification. We help you sponsor your spouse, partner, parents, or grandparents.</p>
            <div className="grid md:grid-cols-3 gap-6">
                <a href="/family-sponsorship/spousal" className="block p-6 bg-white border rounded-xl hover:shadow-lg transition-all font-bold text-abic-blue">Spousal Sponsorship &rarr;</a>
                <a href="/family-sponsorship/common-law" className="block p-6 bg-white border rounded-xl hover:shadow-lg transition-all font-bold text-abic-blue">Common-Law Partners &rarr;</a>
                <a href="/family-sponsorship/same-sex" className="block p-6 bg-white border rounded-xl hover:shadow-lg transition-all font-bold text-abic-blue">Same-Sex Sponsorship &rarr;</a>
            </div>
        </div>
    </ServiceLayout>
);
