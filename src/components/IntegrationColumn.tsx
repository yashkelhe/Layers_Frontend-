"use client";

import { type integrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export default function IntegrationColumn(props: {
    integration: integrationsType;
    className?: string;
    reverse?: boolean;
}) {
    const { integration, className, reverse } = props;
    return (
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 15,

                repeat: Infinity,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-4 pb-4  ", className)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <>
                    {integration.map((inte) => (
                        <div
                            key={inte.name}
                            className="bg-neutral-900 border-white/10 rounded-3xl p-6"
                        >
                            <div className="flex  justify-center ">
                                <Image
                                    src={inte.icon}
                                    alt={`${inte.name} icon`}
                                    className="size-24"
                                />
                            </div>
                            <h3 className="text-3xl text-center mt-6 ">
                                {inte.name}
                            </h3>
                            <p className="text-center text-white/50 mt-2">
                                {inte.description}
                            </p>
                        </div>
                    ))}
                </>
            ))}
        </motion.div>
    );
}
