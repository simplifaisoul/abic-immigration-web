interface CICCBadgeProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showLabel?: boolean;
    className?: string;
    variant?: 'default' | 'grayscale' | 'subtle';
}

const sizeClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
    xl: 'h-32'
};

export default function CICCBadge({
    size = 'md',
    showLabel = false,
    className = '',
    variant = 'default'
}: CICCBadgeProps) {
    const variantClasses = {
        default: 'opacity-90 hover:opacity-100',
        grayscale: 'grayscale hover:grayscale-0 opacity-70 hover:opacity-100',
        subtle: 'opacity-60 hover:opacity-90'
    };

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img
                src={`${import.meta.env.BASE_URL}assets/cicc-logo-new.png`}
                alt="CICC Regulated Immigration Consultant"
                className={`${sizeClasses[size]} object-contain transition-all duration-300 ${variantClasses[variant]}`}
            />
            {showLabel && (
                <div className="text-sm">
                    <div className="font-bold text-gray-800">CICC Regulated</div>
                    <div className="text-xs text-gray-500">R511743</div>
                </div>
            )}
        </div>
    );
}
