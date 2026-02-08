import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000";

export const EmployersLMIA = () => (
    <ServiceLayout title="Employer Services (LMIA)" subtitle="Hire international talent when Canadians are unavailable." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Labour Market Impact Assessment (LMIA)</h3>
    </ServiceLayout>
);

export const LMIA = () => (
    <ServiceLayout title="LMIA Application Process" subtitle="From advertising to final approval." heroImage={HERO_IMAGE}>
        <p>Demonstrating a genuine need for a TFW is key.</p>
    </ServiceLayout>
);

export const Recruitment = () => (
    <ServiceLayout title="Recruitment Requirements" subtitle="Proof of diligent recruitment efforts." heroImage={HERO_IMAGE}>
        <p>You must show reasonable efforts to hire Canadian citizens or Permanent Residents first.</p>
    </ServiceLayout>
);

export const EmployerCompliance = () => (
    <ServiceLayout title="Employer Compliance" subtitle="Avoid penalties and bans." heroImage={HERO_IMAGE}>
        <p>Inspections and audits are common. We ensure you meet all wage and working condition commitments.</p>
    </ServiceLayout>
);
