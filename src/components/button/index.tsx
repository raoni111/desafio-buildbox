import { ButtonComponent } from "./styles"

interface ButtonProps {
    children: string
    className?: string
    type: 'cancel' | 'submit'
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({children, className, onClick, type}: ButtonProps) {
    return (
        <ButtonComponent className={className}>
            <button type={type === 'submit' ? type : 'button'} className={`button-element button-type-${type}`} onClickCapture={onClick}>{children}</button>
        </ButtonComponent>
    );
}