import ServiceLayout from "../components/ServiceLayout";

export default function SubPagePlaceholder({ title }: { title: string }) {
    return (
        <ServiceLayout
            title={title}
            subtitle="This section is currently being updated with specialized content."
            heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Under Construction</h2>
                <p className="text-gray-600">We are currently migrating this content to its own dedicated page.</p>
            </div>
        </ServiceLayout>
    );
}
