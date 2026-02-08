import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&q=80&w=2000";

export { default as GuelphLanding } from "./GuelphLanding";
// Replace the main "Overview" export with the Landing page if that's what's used for routing
export { default as GuelphOverview } from "./GuelphLanding";

export const GuelphStudyPermit = () => (
    <ServiceLayout title="Study Permit Services (Guelph)" subtitle="Focused on local institution requirements." heroImage={HERO_IMAGE}>
        <p>We know exactly what Guelph-based DLI institutions need.</p>
    </ServiceLayout>
);

export const GuelphExtension = () => (
    <ServiceLayout title="Extend Your Stay (Guelph)" subtitle="Keep your status valid while you study." heroImage={HERO_IMAGE}>
        <p>Don't let your permit expire before you finish your program.</p>
    </ServiceLayout>
);

export const GuelphPGWP = () => (
    <ServiceLayout title="PGWP Application (Guelph)" subtitle="Plan your transition to worker status." heroImage={HERO_IMAGE}>
        <p>Ensure you have maintained full-time status throughout your studies.</p>
    </ServiceLayout>
);

export const GuelphWorkWhileStudying = () => (
    <ServiceLayout title="Work While Studying (Guelph)" subtitle="Understand your work authorization." heroImage={HERO_IMAGE}>
        <p>Know the 20-hour vs off-campus work rules to avoid non-compliance.</p>
    </ServiceLayout>
);

export const GuelphRefusals = () => (
    <ServiceLayout title="Refusal Management (Guelph)" subtitle="Did your application get rejected?" heroImage={HERO_IMAGE}>
        <p>We specialize in overturning student refusals in this region.</p>
    </ServiceLayout>
);

export const GuelphLocalSupport = () => (
    <ServiceLayout title="Local Settlement Support" subtitle="More than just immigration." heroImage={HERO_IMAGE}>
        <p>We can connect you with local housing and community resources.</p>
    </ServiceLayout>
);
