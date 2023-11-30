import { PropsWithChildren } from "react";



interface Props extends PropsWithChildren {
    title?: string;
    color?: string;
    variants: string;
    type: "button" | "submit" | "reset" | undefined;
}

const Button = ({ title, color, type, children, variants }: Props) => {
    return (
        <button type={type} className={`${color} ${variants == 'secondary' ? 'bg-red-500' : ''}`}>
            {
                title ? <h1>{title}</h1> : <>{children}</>
            }
        </button>
    )
}

const SecondaryButton = ({ title, color, type, children }: Props) => {
    return (
        <button type={type} className={`${color}`}>
            {
                title ? <h1>{title}</h1> : <>{children}</>
            }
        </button>
    )
}

export { Button, SecondaryButton }