import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1521791136064-7985c2717883?auto=format&fit=crop&q=80&w=2000";

export const WorkPermitOverview = () => (
    <ServiceLayout title="Work Permit Overview" subtitle="Canadian work experience paves the way to PR." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Types of Work Permits</h3>
        <p>From LMIA-based to Open Work Permits, we determine your best pathway.</p>
    </ServiceLayout>
);

export const WorkPermitExtension = () => (
    <ServiceLayout title="Work Permit Extension" subtitle="Extend your legal worker status." heroImage={HERO_IMAGE}>
        <p>Ensure you apply before your current permit expires to benefit from Maintained Status.</p>
    </ServiceLayout>
);

export const PGWP = () => (
    <ServiceLayout title="Post Graduation Work Permit (PGWP)" subtitle="For international graduates of Canadian institutions." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Launch Your Career</h3>
        <p>A crucial step towards Permanent Residence. Requirements are time-sensitive after graduation.</p>
    </ServiceLayout>
);

export const WorkPermit = WorkPermitOverview; // Default export if needed
