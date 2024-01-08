export type ButtonType = 'submit' | 'button';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';

export interface ButtonInterface {
    type?: ButtonType;
    label?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    variant?: ButtonVariant;
    disabled?: boolean;
}
