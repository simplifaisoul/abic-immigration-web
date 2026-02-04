export default function PlaceholderPage({ title }: { title: string }) {
    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-montserrat font-bold text-abic-blue mb-4">{title}</h1>
            <p className="text-gray-600">This section is currently under development as part of the Phase 4 Redesign.</p>
        </div>
    )
}
