import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&q=80&w=2000";

export const VisitorVisaApplication = () => (
    <ServiceLayout title="Visitor Visa Application" subtitle="Detailed guidance for your Temporary Resident Visa (TRV)." heroImage={HERO_IMAGE}>
        <div className="space-y-6">
            <h3 className="text-xl font-bold">New Applications</h3>
            <p>Whether you are visiting family, coming for business, or exploring Canada as a tourist, we ensure your application package is complete and persuasive.</p>
        </div>
    </ServiceLayout>
);

export const VisitorVisaExtension = () => (
    <ServiceLayout title="Visitor Record (Extension)" subtitle="Extend your stay in Canada legally." heroImage={HERO_IMAGE}>
        <div className="space-y-6">
            <h3 className="text-xl font-bold">Staying Longer?</h3>
            <p>If you wish to stay in Canada longer than your initial authorized period (usually 6 months), you must apply for a Visitor Record before your current status expires.</p>
        </div>
    </ServiceLayout>
);

export const VisitorVisaRefusals = () => (
    <ServiceLayout title="Refusal Management" subtitle="Overcoming a Visitor Visa refusal." heroImage={HERO_IMAGE}>
        <div className="space-y-6">
            <h3 className="text-xl font-bold">Was your visa refused?</h3>
            <p>We analyze the officer's notes (GCMS) to understand the rejection reasons and prepare a stronger re-application addressing those specific concerns.</p>
        </div>
    </ServiceLayout>
);
