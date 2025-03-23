import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'login' | 'logout' | 'redirect' | 'normal';

// formAction is a function that accepts FormData and returns a Promise
export type FormActionType = (formData: FormData) => Promise<void>;

interface ButtonProps {
    variant?: ButtonVariant;
    onClick?: () => void;
    href?: string; // required for redirect variant
    formAction?: FormActionType; // Used for server actions (e.g., signInWithGoogle)
    children: React.ReactNode;
    className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
    login: 'border-blue-500 text-blue-500 hover:bg-blue-500/30 hover:text-white',
    logout: 'border-red-500 text-red-500 hover:bg-red-500/30 hover:text-white',
    redirect: 'border-teal-500 text-teal-500 hover:bg-teal-500/30 hover:text-white',
    normal: 'border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white',
};

const Button: React.FC<ButtonProps> = ({
    variant = 'normal',
    onClick,
    href,
    formAction,
    children,
    className = '',
}) => {
  // Base styling with responsiveness in mind.
    const baseStyle =
        'cursor-pointer px-4 py-2 rounded-md border transition-all duration-200 focus:outline-none w-full sm:w-auto';
    const style = `${baseStyle} ${variantStyles[variant]} ${className}`;

    // If variant is 'redirect' and href is provided, use Next.js Link
    if (variant === 'redirect' && href) {
        return (
        <Link href={href} className={style}>
            {children}
        </Link>
        );
    }

  // For login, logout, normal actions, or form submissions:
  // - When formAction is provided, we set type to "submit" so that Next.js can
  //   capture and pass formData to your server action.
    return (
        <button
            type={formAction ? 'submit' : 'button'}
            onClick={onClick}
            formAction={formAction}
            className={style}
        >
            {children}
        </button>
    );
};

export default Button;
