"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const word = text.split(" ");
export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    // scrollYProgress; - 0,1
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    // this will apply the transform on the each word
    const wordIndex = useTransform(
        scrollYProgress,
        [0, 0.5],
        [0, word.length - 1]
    );

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(Math.floor(latest));
        });
    }, [wordIndex]);

    return (
        <section className="py-28 lg:py-2">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center ">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span className="">
                            Your creative process deserves better.
                        </span>
                        <span className="text-white/15 ">
                            {word.map((w, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex <= currentWord && "text-white"
                                    )}
                                >{`${w} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400">
                            That&apos;s why we built Layers.
                        </span>
                    </div>
                </div>
                {/* for the scroll down  */}
                <div className="h-[250vh]"> </div>
            </div>
        </section>
    );
}
