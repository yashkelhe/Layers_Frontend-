import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            {...otherProps}
            className={twMerge(
                "inline-flex border border-lime-400 gap-2 text-lime-400 py-1 px-3 rounded-full uppercase items-center",
                className
            )}
        >
            <span className="">&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}
