import { FC } from "react";

type ButtonProps = {
    onClick?: () => void
    text?: string
    type?: HTMLButtonElement["type"]
}

const Button: FC<ButtonProps> = ({ onClick, text = "Submit", type="button" }) => {
    return <div className="relative w-fit border">
        <button
            type={type}
            onClick={onClick}
            className="rounded w-full text-white bg-slate-700 px-2 py-1 text-md font-medium shadow-sm"
        >
            {text}
        </button>
    </div>
};

export default Button