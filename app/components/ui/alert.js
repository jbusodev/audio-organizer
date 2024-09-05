const Alert = ({ children, className, ...props }) => (
    <div className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 ${className}`} {...props}>
        {children}
    </div>
);

const AlertTitle = ({ children, className, ...props }) => (
    <h3 className={`font-bold ${className}`} {...props}>
        {children}
    </h3>
);

const AlertDescription = ({ children, className, ...props }) => (
    <div className={className} {...props}>
        {children}
    </div>
);

export {
    Alert,
    AlertTitle,
    AlertDescription
};
