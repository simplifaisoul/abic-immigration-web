import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000";

export const WaterlooOverview = () => (
    <ServiceLayout title="Students in Waterloo Region" subtitle="Local support for UW, Laurier, and Conestoga students." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Your Local Immigration Partners</h3>
        <p>Book a consultation at our Waterloo office.</p>
    </ServiceLayout>
);

export const WaterlooStudyPermit = () => (
    <ServiceLayout title="Study Permit Services (Waterloo)" subtitle="Focused on local institution requirements." heroImage={HERO_IMAGE}>
        <p>We know exactly what Waterloo-based DLI institutions need.</p>
    </ServiceLayout>
);

export const WaterlooExtension = () => (
    <ServiceLayout title="Extend Your Stay (Waterloo)" subtitle="Keep your status valid while you study." heroImage={HERO_IMAGE}>
        <p>Don't let your permit expire before you finish your program.</p>
    </ServiceLayout>
);

export const WaterlooPGWP = () => (
    <ServiceLayout title="PGWP Application (Waterloo)" subtitle="Plan your transition to worker status." heroImage={HERO_IMAGE}>
        <p>Ensure you have maintained full-time status throughout your studies.</p>
    </ServiceLayout>
);

export const WaterlooWorkWhileStudying = () => (
    <ServiceLayout title="Work While Studying (Waterloo)" subtitle="Understand your work authorization." heroImage={HERO_IMAGE}>
        <p>Know the 20-hour vs off-campus work rules to avoid non-compliance.</p>
    </ServiceLayout>
);

export const WaterlooRefusals = () => (
    <ServiceLayout title="Refusal Management (Waterloo)" subtitle="Did your application get rejected?" heroImage={HERO_IMAGE}>
        <p>We specialize in overturning student refusals in this region.</p>
    </ServiceLayout>
);

export const WaterlooLocalSupport = () => (
    <ServiceLayout title="Local Settlement Support" subtitle="More than just immigration." heroImage={HERO_IMAGE}>
        <p>We can connect you with local housing and community resources.</p>
    </ServiceLayout>
);
