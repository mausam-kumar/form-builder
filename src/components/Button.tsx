import { FC } from "react";

type ButtonProps = {
    onClick?: () => void
    text?: string
    type?: HTMLButtonElement["type"]
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, text = "Submit", type="button", disabled = false }) => {
    return <div className="border">
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="rounded w-full disabled:bg-opacity-50 text-white bg-slate-700 px-2 py-1 text-md font-medium shadow-sm"
        >
            {text}
        </button>
    </div>
};

export default Button