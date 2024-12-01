export default function CallToAction() {
    return (
        <section className="py-24 ">
            <div className="overflow-x-clip p-4 flex">
                <div className="flex-none flex gap-16 text-7xl font-medium  md:text-8xl">
                    {/* loop on 10 spans and taking the index only from it  */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div className="flex items-center gap-16 " key={i}>
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span>Try it fro free</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
