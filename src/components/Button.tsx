import { ButtonHTMLAttributes } from "react";
// children and classname
import { cva } from "class-variance-authority";

const classes = cva("border  h-12 rounded-full  px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950  border-lime-400",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-10",
        },
    },
});
export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    // destructure
    const { variant, className, size, ...otherProps } = props;
    return (
        <button
            className={classes({
                variant,
                size,
                className,
            })}
            // it will take other props if have
            {...otherProps}
        />
    );
}
