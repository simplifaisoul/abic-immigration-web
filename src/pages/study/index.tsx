import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000";

export const StudyApplication = () => (
    <ServiceLayout title="Study Permit Application" subtitle="Start your Canadian education journey." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Initial Study Permit</h3>
        <p>We guide you from LOA (Letter of Acceptance) to submission, ensuring you meet all financial and admissibility requirements.</p>
    </ServiceLayout>
);

export const StudyExtension = () => (
    <ServiceLayout title="Study Permit Extension" subtitle="Continue your studies without interruption." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Need more time?</h3>
        <p>Apply for an extension at least 30 days before your current permit expires to maintain implied status.</p>
    </ServiceLayout>
);

export const StudyRefusals = () => (
    <ServiceLayout title="Study Permit Refusal" subtitle="Denied? Let's fix it." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Refusal Analysis</h3>
        <p>Common reasons include insufficient funds or family ties. We address these head-on.</p>
    </ServiceLayout>
);
