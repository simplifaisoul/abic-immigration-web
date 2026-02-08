import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2000";

export const FamilySponsorship = () => (
    <ServiceLayout title="Family Sponsorship" subtitle="Reuniting families is a priority for Canada." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Bring Your Loved Ones Home</h3>
    </ServiceLayout>
);

export const SpousalSponsorship = () => (
    <ServiceLayout title="Spouse or Partner Sponsorship" subtitle="Sponsor your spouse, common-law or conjugal partner." heroImage={HERO_IMAGE}>
        <p>Proof of a genuine relationship is the cornerstone of this application.</p>
    </ServiceLayout>
);

export const CommonLaw = () => (
    <ServiceLayout title="Common-Law Sponsorship" subtitle="For couples living together for at least 12 months." heroImage={HERO_IMAGE}>
        <p>Evidence of cohabitation and shared life is critical.</p>
    </ServiceLayout>
);

export const SameSex = () => (
    <ServiceLayout title="Same-Sex Sponsorship" subtitle="Canada recognizes and welcomes same-sex relationships." heroImage={HERO_IMAGE}>
        <p>Your rights are protected, and the process is identical to opposite-sex sponsorship.</p>
    </ServiceLayout>
);
