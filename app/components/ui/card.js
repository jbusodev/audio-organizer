const Card = ({ children, className, ...props }) => (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`} {...props}>
        {children}
    </div>
);

const CardHeader = ({ children, className, ...props }) => (
    <div className={`mb-4 ${className}`} {...props}>
        {children}
    </div>
);

const CardTitle = ({ children, className, ...props }) => (
    <h2 className={`text-xl font-bold ${className}`} {...props}>
        {children}
    </h2>
);

const CardContent = ({ children, className, ...props }) => (
    <div className={className} {...props}>
        {children}
    </div>
);

export { Card, CardHeader, CardTitle, CardContent };