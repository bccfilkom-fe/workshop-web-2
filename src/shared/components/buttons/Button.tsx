interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button = ({
    children,
    className,
    ...props
}: IButton) => {
    return (
        <button
            className={`bg-primary-500 text-sm text-white font-medium rounded-[10px] py-2 px-4 ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button