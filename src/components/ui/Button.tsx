import type { ReactElement } from "react";

interface ButtonProps {
    color: string;
    text: string;
    icon?: ReactElement
}

export default function Button({color, text, icon} : ButtonProps) {
    return <button className={`px-4 py-2 rounded-md bg-[${color}] cursor-pointer hover:opacity-85 transition-all duration-200`}>
        {text}
        {icon}
    </button>
}

// #18181A
// #27272B