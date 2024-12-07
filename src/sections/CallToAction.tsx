"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const [scope, animate] = useAnimate();
    const animation = useRef<AnimationPlaybackControls>();

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);
    return (
        <section className="py-24 ">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    // animate={{
                    //     x: "-50%",
                    // }}
                    // transition={{
                    //     duration: 30,

                    //     ease: "linear",
                    //     repeat: Infinity,
                    // }}
                    className="flex-none flex gap-16  pr-16 text-7xl font-medium  md:text-8xl group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* loop on 10 spans and taking the index only from it  */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div className="flex items-center gap-16 " key={i}>
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
